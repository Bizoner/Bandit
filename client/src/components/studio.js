import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic,faStepBackward,faCloudDownloadAlt,faFileExport, faPlay,faStop,faMusic,faVolumeMute, faHeadphones,faPause,faPlus,faWindowClose,faSave } from '@fortawesome/free-solid-svg-icons'
import Slider from '@material-ui/lab/Slider';
import BufferLoader from '../scripts/BufferLoader'
import Draggable from 'react-draggable';
import Waveform from 'waveform-react';
import {InstrumentImgs} from '../assets/instrumentsImgs';
import EditableLabel from 'react-inline-editing';
import axios from 'axios';
import Recorder from 'recorderjs';
import CircularProgress from '@material-ui/core/CircularProgress';

class Studio extends Component {
    constructor(props){
        super(props);
        const that = this;
        let urlparams = (new URL(document.location)).searchParams;
        let id = urlparams.get("id");
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.state = {
            volume: 100,
            spacing: 8,
            runningTime: 0,
            playing: true,
            playbackTime: 0,
            channelData: [],
            loading:true,
            songId: id,
            title: 'New Song',
            bpm: 120,
            newAudioFiles: [],
            context: new AudioContext(),
            key: 'Cmaj',
            timeSignature: '4/4',
            deletedChannels: []
        };
        this.state.context.suspend();
        this.getImpulse();
        axios.post('https://shenkar-band-it.herokuapp.com/studio/getDataForStudio',{id})
            .then((res)=>{
            res = res.data;
            that.setState({channelData: res.channels, title: res.title, bpm: res.bpm, key: res.key, timeSignature: res.timeSignature, lastExportedUrl: res.lastExportedUrl});
            console.log(this.state);
            let loadingCounter = 0;
            if (res.channels.length > 0) {
                res.channels.forEach((channel, index) => {
                    const gainNode = that.state.context.createGain();
                    res.channels[index].gainNode = gainNode;
                    if (channel.audioFiles.length > 0) {
                        const mappedAudioUrls = [];
                        channel.audioFiles.forEach((audioClip) => {
                            mappedAudioUrls.push(audioClip.audioUrl);
                        });
                        const bufferLoader = new BufferLoader(
                            that.state.context,
                            mappedAudioUrls,
                            finishedLoading
                        );
                        bufferLoader.load();
                    } else {
                        finishedLoading([]);
                    }

                    function finishedLoading(bufferList) {
                        loadingCounter++;
                        console.log(loadingCounter);
                        bufferList.forEach((buffer, bufferIndex) => {
                            res.channels[index].audioFiles[bufferIndex].buffer = buffer;
                        });
                        if (loadingCounter === res.channels.length) {
                            that.setState({loading: false});
                            that.setState({channelData: res.channels});
                        }
                    }
                })
            } else {
                that.setState({loading: false});
            }
        });

    }

    msToTime(s) {

        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;

        return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    }


    changeVolume = (event, volume,channelIndex) => {
        console.log(event,volume,channelIndex);
        let channelData = this.state.channelData;
        channelData[channelIndex].edited = true;
        channelData[channelIndex].audioEffects.volume = volume / 100;
        channelData[channelIndex].gainNode.gain.value = volume / 100;
        this.setState({ channelData });
    };

    editEffect = (effect,value,channelIndex) => {
        let channelData = this.state.channelData;
        channelData[channelIndex].edited = true;
        channelData[channelIndex].audioEffects[effect] = value;
        this.setState({channelData});
    };


    updateSongLength() {
        let length = 0;
        this.state.channelData.forEach((channel) => {
            channel.audioFiles.forEach((audioFile) => {
                console.log('duration',audioFile.buffer.duration);
               const audioDuration = (audioFile.location / this.state.spacing) + audioFile.buffer.duration;
               if (audioDuration > length) {
                   length = audioDuration;
               }
            })
        });
        this.setState({length});
        return length;
    }

    playAll = (recording) => {
        let channelData = this.state.channelData;
        const that = this;
        this.state.context.resume();
        const mainGain = that.state.context.createGain();
        this.setState({mainGain});
        this.state.channelData.forEach((channel,ci)=>{
            if (!this.state.suspended) {
                channel.audioFiles.forEach((audio, ai) => {
                    let bufferSource = that.state.context.createBufferSource();
                    let initNode = that.state.context.createGain();
                    bufferSource.buffer = audio.buffer;
                    bufferSource.connect(initNode);
                    let delayNode = this.addDelayEffect(initNode,channel.audioEffects.delay);
                    let distortionNode = this.addDistortionEffect(delayNode,channel.audioEffects.distortion);
                    let reverbNode = this.addReverbEffect(distortionNode,channel.audioEffects.reverb);
                    reverbNode.connect(channel.gainNode);
                    channel.gainNode.connect(mainGain);
                    bufferSource.start(that.state.context.currentTime + audio.location / this.state.spacing);
                    channelData[ci].audioFiles[ai].bufferSource = bufferSource;
                    console.log('recording',recording);
                    channel.gainNode.gain.value = channel.audioEffects.volume;
                    if (!recording) {
                        this.setState({connectedToDestination: true})
                        channel.gainNode.connect(that.state.context.destination);
                    } else {
                        if (this.state.connectedToDestination) {
                            channel.gainNode.disconnect(that.state.context.destination);
                        }
                    }
                    this.setState({channelData});
                    return mainGain;
                })
            } else {
                this.setState({suspended:false})
            }
        });
        this.setState(state => {
            if (state.status) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime });
                });
            }
            return { status: !state.status };
        });
    };
    pauseAll = () => {
        clearInterval(this.timer);
        this.state.context.suspend();
        this.setState({status: false, suspended: true });
    };
    stopAll = () => {
        clearInterval(this.timer); // new
        const that = this;
        this.state.context.suspend();
        this.state.channelData.forEach((channel)=>{
            channel.audioFiles.forEach((audio) => {
                audio.bufferSource.stop(that.state.context.currentTime);
            });
        });

        this.setState({runningTime: 0, status: false, suspended: false});
    };

    handleDrag = (e,data) => {
        const channelData = this.state.channelData;
        const loc = data.node.id.split('-');
        channelData[loc[1]].audioFiles[loc[2]].location = data.x;
        if (!channelData[loc[1]].new) {
            channelData[loc[1]].edited = true;
        }
        this.setState(channelData);
    };

    addChannel = () => {
        //TODO Create context and gain node
        console.log("add channel")
        let channelData = this.state.channelData;
        channelData.push({
            'instrument': 'audio',
            'title': 'New Channel',
            'audioEffects': {
                volume: 1,
                distortion:0,
                delay:0,
                reverb:0,
            },
            'audioFiles': [],
            'new': true
        });
        this.setState({channelData})
    };

    deleteAudio = (ci,ai) => {
        let channelData = this.state.channelData;
        if (channelData[ci].audioFiles[ai].bufferSource) {
            channelData[ci].audioFiles[ai].bufferSource.disconnect();
        }
        channelData[ci].audioFiles.splice(ai,1);
        if (!channelData[ci].new) {
            channelData[ci].edited = true;
        }
        this.setState({channelData});
    };

    onUpload = (e) => {
        this.setState({loading:true});
        const reader1 = new FileReader();
        const ci = e.target.id.split('-')[2];
        let channelData = this.state.channelData;
        const that = this;
        const file = e.target.files[0];
        reader1.onload = function(ev) {
            that.state.context.decodeAudioData(ev.target.result).then(function(buffer) {
                // Initial FormData
                // file.timeId = new Date().getTime();
                console.log(file);
                const newAudioFiles = that.state.newAudioFiles;
                newAudioFiles.push(file);
                that.setState({newAudioFiles})
                // formData.append("file", file);
                // formData.append("upload_preset", "biwlw0dl");
                // formData.append("api_key", "228417225742266");
                // formData.append("timestamp", (Date.now() / 1000) | 0);
                // axios.post("https://api.cloudinary.com/v1_1/voiera/video/upload", formData, {
                //     headers: { "X-Requested-With": "XMLHttpRequest" },
                // }).then(response => {
                // const data = response.data;
                if (!channelData[ci].new) {
                    channelData[ci].edited = true;
                }
                channelData[ci].audioFiles.push({
                    location:0,
                    name: file.name,
                    size: file.size,
                    // audioUrl: data.secure_url,
                });
                that.setState({channelData});
                // BUG FIX
                channelData[ci].audioFiles[channelData[ci].audioFiles.length - 1].buffer = buffer;
                that.setState({channelData,loading: false});
            });
        };
        reader1.readAsArrayBuffer(file);

    };

    saveSong = () => {
        this.setState({loading:true});
        const formData = new FormData();
        this.state.newAudioFiles.forEach((audio) =>{
            formData.append('newAudioFiles',audio);
        });
        const length = this.updateSongLength();
        formData.append('channels',JSON.stringify(this.state.channelData));
        formData.append('deletedChannels',JSON.stringify(this.state.deletedChannels));
        formData.append('songId',this.state.songId);
        formData.append('title',this.state.title);
        formData.append('bpm',this.state.bpm);
        formData.append('timeSignature',this.state.timeSignature);
        formData.append('key',this.state.key);
        formData.append('length',this.state.length);
        axios.post('https://shenkar-band-it.herokuapp.com/studio/saveDataInStudio',formData).then((res)=>{
            window.alert(res);
            this.setState({loading:false})
        })
    };

    downloadLink = async () => {
        this.setState({saving:true});
        const length = this.updateSongLength();
        await this.playAll(true);
        console.log('mainGain: ',this.state.mainGain);
        var rec = new Recorder(this.state.mainGain);
        rec.record();
        setTimeout(async ()=>{
            rec.stop();
            await this.stopAll();
            rec.exportWAV((blob) => {
                const file = new File([blob], "export.wav");
                this.uploadNewExport(file);
            })
        },length * 1000)
    };

    uploadNewExport(file) {
        const formData = new FormData();
        formData.append('export',file);
        formData.append('songId',this.state.songId);
        axios.post('https://shenkar-band-it.herokuapp.com/studio/exportSong',formData).then((res)=>{
            this.setState({saving:false});
        })
    }

    editTitle = (text) => {
        //TODO handle empty string
        this.setState({title:text})
    };

    editChannelLabel = (text,ci) => {
        let channelData = this.state.channelData;
        channelData[ci].edited = true;
        channelData[ci].title = text;
        this.setState({channelData})
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    addDistortionEffect(stream,effectValue) {
        let audioCtx = this.state.context;
        let value = effectValue/50;
        let masterNode = audioCtx.createGain();
        let distortionGainNode = audioCtx.createGain();
        let distortionNode = audioCtx.createWaveShaper();
        distortionNode.curve = makeDistortionCurve(200);
        stream.connect(distortionNode);
        distortionNode.connect(distortionGainNode);
        distortionGainNode.gain.value = value;
        let bypassNode = audioCtx.createGain();
        stream.connect(bypassNode);
        bypassNode.connect(masterNode);
        bypassNode.gain.value = 1;
        distortionGainNode.connect(masterNode);
        return masterNode;

        function makeDistortionCurve(amount) {
            var k = amount,
                n_samples = 44100,
                curve = new Float32Array(n_samples),
                deg = Math.PI / 180,
                i = 0,
                x;
            for ( ; i < n_samples; ++i ) {
                x = i * 2 / n_samples - 1;
                curve[i] = (3 + k)*Math.atan(Math.sinh(x*0.25)*5) / (Math.PI + k * Math.abs(x));
            }
            return curve;
        }
    }

    getImpulse() {
        let impulseUrl = 'https://res.cloudinary.com/voiera/video/upload/v1560524168/BIG_HALL_E001_M2S_d0yywu.wav';
        let ajaxRequest = new XMLHttpRequest();
        let that = this;
        ajaxRequest.open('GET', impulseUrl, true);
        ajaxRequest.responseType = 'arraybuffer';

        ajaxRequest.onload = function() {
            var impulseData = ajaxRequest.response;
            that.state.context.decodeAudioData(impulseData).then(function(buffer) {
                that.setState({convolverBuffer:buffer});
            });
        };
        ajaxRequest.send();
    }

    addReverbEffect(stream,effectValue) {
        let value = effectValue/10;
        let audioCtx = this.state.context;
        let masterNode = audioCtx.createGain();
        let bypassNode = audioCtx.createGain();
        let convolverGainNode = audioCtx.createGain();
        let convolver = audioCtx.createConvolver();
        convolver.buffer = this.state.convolverBuffer;
        stream.connect(convolver);
        convolver.connect(convolverGainNode);
        convolverGainNode.gain.value = value;
        convolverGainNode.connect(masterNode);
        stream.connect(bypassNode);
        bypassNode.gain.value = 1;
        bypassNode.connect(masterNode);
        return masterNode;
    }


    addDelayEffect(stream,effectValue) {
        let value = effectValue/100;
        console.log(value);
        let audioCtx = this.state.context;
        //create an audio node from the stream
        let streamNode = stream;
        let delayNode = audioCtx.createDelay(100)
        let feedbackNode = audioCtx.createGain();
        let bypassNode = audioCtx.createGain();
        let masterNode = audioCtx.createGain();

        //controls
        delayNode.delayTime.value = 1.04;
        feedbackNode.gain.value = 0.5;
        bypassNode.gain.value = value;

        //wire up nodes
        streamNode.connect(delayNode);
        delayNode.connect(feedbackNode);
        feedbackNode.connect(delayNode);

        delayNode.connect(bypassNode);
        bypassNode.connect(masterNode);
        streamNode.connect(masterNode);

        // masterNode.connect(audioCtx.destination);
        return masterNode;
    }

    changeTab(channelIndex, value) {
        let channelData = this.state.channelData;
        channelData[channelIndex].tab = value;
        this.setState({channelData})
    }

    editBPM(bpm) {
        this.setState({bpm})
    }
    editTimeSignature(timeSignature) {
        this.setState({timeSignature})
    }
    editKey(key) {
        this.setState({key})
    }

    deleteChannel(ci) {
        let channelData = this.state.channelData;
        let deletedChannels = this.state.deletedChannels;
        let currentDeletedChannel = channelData.splice(ci,1);
        deletedChannels.push(currentDeletedChannel[0]);
        this.setState({channelData,deletedChannels});
    }

    render() {
        return (
            <div>
                { this.state.loading || this.state.saving ? <div className="loading">
                    <CircularProgress size={80} thickness={5} />
                    {this.state.loading ? <p>Loading...</p> : <p>Exporting to MP3, This may take a while</p> }
                </div> : ''}
                <div className="header">
                    <div className="songDetails">
                        {!this.state.loading ?
                            <EditableLabel text={this.state.title}
                                           labelClassName='songTitle'
                                           inputClassName='songTitle'
                                           inputWidth='300px'
                                           onFocusOut={this.editTitle.bind(this)}
                            /> : ''
                        }
                    </div>
                    <div className="controls">
                        <Button className={"controlButton"} onClick={this.stopAll}>
                            <FontAwesomeIcon icon={faStop}/>
                        </Button>
                        <Button className={"controlButton"} onClick={this.pauseAll}>
                            <FontAwesomeIcon icon={faPause}/>
                        </Button>
                        <Button className={"controlButton"} onClick={()=>{this.playAll()}}>
                            <FontAwesomeIcon icon={faPlay}/>
                        </Button>
                        <Button className={"controlButton"}>
                            {this.msToTime(this.state.runningTime)}
                        </Button>
                        <Button className={"controlButton"}>
                            <EditableLabel text={this.state.bpm}
                                           labelClassName='bpmTitle'
                                           inputClassName='bpmTitle'
                                           inputWidth='38px'
                                           onFocusOut={(data)=>{this.editBPM(data)}}
                            />BPM
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon style={{'marginRight': '10px'}} icon={faMusic}/>
                            {!this.state.loading ?
                                <EditableLabel text={this.state.key}
                                               labelClassName='bpmTitle'
                                               inputClassName='bpmTitle'
                                               inputWidth='38px'
                                               onFocusOut={(data) => {
                                                   this.editKey(data)
                                               }}
                                /> : ''
                            }
                        </Button>
                        <Button className={"controlButton"}>
                            {!this.state.loading ?
                                <EditableLabel text={this.state.timeSignature}
                                               labelClassName='bpmTitle'
                                               inputClassName='bpmTitle'
                                               inputWidth='38px'
                                               onFocusOut={(data) => {
                                                   this.editTimeSignature(data)
                                               }}
                                /> : ''
                            }
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon style={{"marginRight": '10px'}} icon={faSave} onClick={this.saveSong.bind(this)}/> Save
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon style={{"marginRight": '10px'}} icon={faFileExport} onClick={() => {this.downloadLink()}}/> Export
                        </Button>
                        {this.state.lastExportedUrl ?
                        <Button className={"controlButton"}>
                            <a style={{color:'inherit', textDecoration:'none'}} href={this.state.lastExportedUrl} download>
                            <FontAwesomeIcon style={{"marginRight": '10px'}} icon={faCloudDownloadAlt}/> Download
                            </a>
                        </Button>
                        : ''}
                    </div>
                </div>
                    <div className="channels">
                        {this.state.channelData.map((channel,key) =>
                            <div style={{position:'relative'}}>
                                <div class="deleteChannel" onClick={() => {this.deleteChannel(key)}}>
                                    <FontAwesomeIcon icon={faWindowClose}/>
                                </div>
                                {(!channel.tab || channel.tab === 0) &&
                                    <div key={channel._id} className="channel">
                                        <img src={InstrumentImgs[channel.instrument] || InstrumentImgs.audio}/>
                                        <div className="channel-details">
                                            <p>
                                                <EditableLabel text={channel.title}
                                                               labelClassName='channelTitle'
                                                               inputClassName='channelTitle'
                                                               inputWidth='300px'
                                                               onFocusOut={(text)=>{this.editChannelLabel(text,key)}}
                                                />
                                                <input className="fileUpload" type='file' id={'upload-ch-'+key} onChange={this.onUpload} />
                                                </p>
                                            <FontAwesomeIcon onClick={(e)=>{this.changeVolume(e,0,key)}} icon={faVolumeMute}/>
                                            <FontAwesomeIcon icon={faHeadphones}/>
                                            <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                                    value={channel.audioEffects.volume * 100}
                                                    aria-labelledby="label"
                                                    onChange={(e,volume)=>{this.changeVolume(e,volume,key)}}/>
                                            <span onClick={(e,value) => {this.changeTab(key,1)}}>
                                                <FontAwesomeIcon icon={faMagic}/>
                                            </span>
                                        </div>
                                    </div>
                                }
                                {(channel.tab === 1) &&
                                <div key={channel._id} className="channel">
                                    <img src={InstrumentImgs[channel.instrument] || InstrumentImgs.audio}/>
                                    <div className="channel-details">
                                        <div className="effect">
                                            <p>Delay</p>
                                            <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                                    value={channel.audioEffects.delay}
                                                    onChange={(e,value)=>{this.editEffect('delay',value,key)}}/>
                                            <p>Reverb</p>
                                            <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                                    value={channel.audioEffects.reverb}
                                                    onChange={(e,value)=>{this.editEffect('reverb',value,key)}}/>
                                            <p>Distortion</p>
                                            <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                                    value={channel.audioEffects.distortion}
                                                    onChange={(e,value)=>{this.editEffect('distortion',value,key)}}/>
                                            <p onClick={(e,value) => {this.changeTab(key,0)}}>
                                                <FontAwesomeIcon icon={faStepBackward}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        )}
                        <div>
                            <Button className={"controlButton"} onClick={this.addChannel.bind(this)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="playLine" style={{'left': (this.state.runningTime/1000) * (this.state.spacing)}}/>
                        <div className="timeline">
                            <div className="timebar"></div>
                            {this.state.channelData.map((channel,ci) =>
                                <div key={channel._id} className="timebar-channel" id={"channel-"+ci}>
                                    {channel.audioFiles.map((audioclip,ai) =>
                                        <Draggable key={audioclip._id} bounds={"#channel-"+ci} axis="x" defaultPosition={{'x':audioclip.location,y:0}} onDrag={this.handleDrag}>
                                            <div id={'audio-'+ci+'-'+ai} className="audioSnippet">
                                                <div className="title">
                                                Audio File {audioclip.id} : {this.msToTime((audioclip.location / this.state.spacing) * 1000)}
                                                </div>
                                                <Waveform
                                                    buffer={audioclip.buffer}
                                                    width={(audioclip.buffer && (audioclip.buffer.duration || 0)) * this.state.spacing}
                                                    height={60}
                                                    waveStyle={{
                                                        // animate waveform on draw (default: true)
                                                        animate: true,
                                                        // waveform color
                                                        color: '#95adc9',
                                                        // width of each rendered point (min: 1, max: 10)
                                                        pointWidth: 1
                                                    }}
                                                />
                                                <Button className="deleteAudio" onClick={this.deleteAudio.bind(this,ci,ai)}>
                                                    <FontAwesomeIcon icon={faWindowClose}/>
                                                </Button>
                                            </div>
                                        </Draggable>
                                    )}
                                </div>
                            )}

                        </div>

                    </div>
            </div>
        );
    }
}

export default Studio;
