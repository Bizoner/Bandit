(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),l=a.n(o),s=(a(81),a(23)),c=a.n(s),r=a(41),u=a(66),d=a(67),m=a(74),h=a(68),f=a(75),p=a(10),g=(a(84),a(6)),v=a.n(g),E=a(4),b=a(5),y=a(28),k=a.n(y);function w(e,t,a){console.log("new bufer"),this.context=e,this.urlList=t,this.onload=a,this.bufferList=new Array,this.loadCount=0}w.prototype.loadBuffer=function(e,t){console.log("load bufer");var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer";var n=this;a.onload=function(){n.context.decodeAudioData(a.response,function(a){a?(n.bufferList[t]=a,++n.loadCount==n.urlList.length&&n.onload(n.bufferList)):alert("error decoding file data: "+e)},function(e){console.error("decodeAudioData error",e)})},a.onerror=function(){alert("BufferLoader: XHR error")},a.send()},w.prototype.load=function(){console.log(this.urlList);for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var S=w,x=a(69),N=a.n(x),D=a(70),C=a.n(D),T=a(27),F=a(24),A=a.n(F),I=a(34),B=a.n(I),L=a(71),O=a.n(L),j=a(72),G=a.n(j),M=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).changeVolume=function(e,t,n){console.log(e,t,n);var i=a.state.channelData;i[n].edited=!0,i[n].audioEffects.volume=t/100,i[n].gainNode.gain.value=t/100,a.setState({channelData:i})},a.editEffect=function(e,t,n){var i=a.state.channelData;i[n].edited=!0,i[n].audioEffects[e]=t,a.setState({channelData:i})},a.playAll=function(e){var t=a.state.channelData,n=Object(p.a)(Object(p.a)(a));a.state.context.resume();var i=n.state.context.createGain();a.setState({mainGain:i}),a.state.channelData.forEach(function(o,l){a.state.suspended?a.setState({suspended:!1}):o.audioFiles.forEach(function(s,c){var r=n.state.context.createBufferSource(),u=n.state.context.createGain();r.buffer=s.buffer,r.connect(u);var d=a.addDelayEffect(u,o.audioEffects.delay),m=a.addDistortionEffect(d,o.audioEffects.distortion);return a.addReverbEffect(m,o.audioEffects.reverb).connect(o.gainNode),o.gainNode.connect(i),r.start(n.state.context.currentTime+s.location/a.state.spacing),t[l].audioFiles[c].bufferSource=r,console.log("recording",e),o.gainNode.gain.value=o.audioEffects.volume,e?o.gainNode.disconnect():o.gainNode.connect(n.state.context.destination),a.setState({channelData:t}),i})}),a.setState(function(e){if(e.status)clearInterval(a.timer);else{var t=Date.now()-a.state.runningTime;a.timer=setInterval(function(){a.setState({runningTime:Date.now()-t})})}return{status:!e.status}})},a.pauseAll=function(){clearInterval(a.timer),a.state.context.suspend(),a.setState({status:!1,suspended:!0})},a.stopAll=function(){clearInterval(a.timer);var e=Object(p.a)(Object(p.a)(a));a.state.context.suspend(),a.state.channelData.forEach(function(t){t.audioFiles.forEach(function(t){t.bufferSource.stop(e.state.context.currentTime)})}),a.setState({runningTime:0,status:!1,suspended:!1})},a.handleDrag=function(e,t){var n=a.state.channelData,i=t.node.id.split("-");n[i[1]].audioFiles[i[2]].location=t.x,n[i[1]].new||(n[i[1]].edited=!0),a.setState(n)},a.addChannel=function(){console.log("add channel");var e=a.state.channelData;e.push({instrument:"audio",title:"New Channel",audioEffects:{volume:1,distortion:0,delay:0,reverb:0},audioFiles:[],new:!0}),a.setState({channelData:e})},a.deleteAudio=function(e,t){var n=a.state.channelData;n[e].audioFiles[t].bufferSource&&n[e].audioFiles[t].bufferSource.disconnect(),n[e].audioFiles.splice(t,1),n[e].new||(n[e].edited=!0),a.setState({channelData:n})},a.onUpload=function(e){a.setState({loading:!0});var t=new FileReader,n=e.target.id.split("-")[2],i=a.state.channelData,o=Object(p.a)(Object(p.a)(a)),l=e.target.files[0];t.onload=function(e){o.state.context.decodeAudioData(e.target.result).then(function(e){console.log(l);var t=o.state.newAudioFiles;t.push(l),o.setState({newAudioFiles:t}),i[n].new||(i[n].edited=!0),i[n].audioFiles.push({location:0,name:l.name,size:l.size}),o.setState({channelData:i}),i[n].audioFiles[i[n].audioFiles.length-1].buffer=e,o.setState({channelData:i,loading:!1})})},t.readAsArrayBuffer(l)},a.saveSong=function(){a.setState({loading:!0});var e=new FormData;a.state.newAudioFiles.forEach(function(t){e.append("newAudioFiles",t)});a.updateSongLength();e.append("channels",JSON.stringify(a.state.channelData)),e.append("deletedChannels",JSON.stringify(a.state.deletedChannels)),e.append("songId",a.state.songId),e.append("title",a.state.title),e.append("bpm",a.state.bpm),e.append("timeSignature",a.state.timeSignature),e.append("key",a.state.key),e.append("length",a.state.length),B.a.post("https://shenkar-band-it.herokuapp.com/studio/saveDataInStudio",e).then(function(e){window.alert(e),a.setState({loading:!1})})},a.downloadLink=Object(r.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({saving:!0}),t=a.updateSongLength(),e.next=4,a.playAll(!0);case 4:(n=new O.a(a.state.mainGain)).record(),setTimeout(Object(r.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.stop(),e.next=3,a.stopAll();case 3:n.exportWAV(function(e){var t=new File([e],"export.wav");a.uploadNewExport(t)});case 4:case"end":return e.stop()}},e)})),1e3*t);case 7:case"end":return e.stop()}},e)})),a.editTitle=function(e){a.setState({title:e})},a.editChannelLabel=function(e,t){var n=a.state.channelData;n[t].edited=!0,n[t].title=e,a.setState({channelData:n})};var n=Object(p.a)(Object(p.a)(a)),i=new URL(document.location).searchParams.get("id");return window.AudioContext=window.AudioContext||window.webkitAudioContext,a.state={volume:100,spacing:8,runningTime:0,playing:!0,playbackTime:0,channelData:[],loading:!0,songId:i,title:"New Song",bpm:120,newAudioFiles:[],context:new AudioContext,key:"Cmaj",timeSignature:"4/4",deletedChannels:[]},a.state.context.suspend(),a.getImpulse(),B.a.post("https://shenkar-band-it.herokuapp.com/studio/getDataForStudio",{id:i}).then(function(e){e=e.data,n.setState({channelData:e.channels,title:e.title,bpm:e.bpm,key:e.key,timeSignature:e.timeSignature,lastExportedUrl:e.lastExportedUrl}),console.log(a.state);var t=0;e.channels.length>0?e.channels.forEach(function(a,i){var o=n.state.context.createGain();if(e.channels[i].gainNode=o,a.audioFiles.length>0){var l=[];a.audioFiles.forEach(function(e){l.push(e.audioUrl)}),new S(n.state.context,l,s).load()}else s([]);function s(a){t++,console.log(t),a.forEach(function(t,a){e.channels[i].audioFiles[a].buffer=t}),t===e.channels.length&&(n.setState({loading:!1}),n.setState({channelData:e.channels}))}}):n.setState({loading:!1})}),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"msToTime",value:function(e){function t(e,t){return("00"+e).slice(-(t=t||2))}var a=e%1e3,n=(e=(e-a)/1e3)%60;return t((e=(e-n)/60)%60)+":"+t(n)+"."+t(a,3)}},{key:"updateSongLength",value:function(){var e=this,t=0;return this.state.channelData.forEach(function(a){a.audioFiles.forEach(function(a){console.log("duration",a.buffer.duration);var n=a.location/e.state.spacing+a.buffer.duration;n>t&&(t=n)})}),this.setState({length:t}),t}},{key:"uploadNewExport",value:function(e){var t=this,a=new FormData;a.append("export",e),a.append("songId",this.state.songId),B.a.post("https://shenkar-band-it.herokuapp.com/studio/exportSong",a).then(function(e){t.setState({saving:!1})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"addDistortionEffect",value:function(e,t){var a=this.state.context,n=t/50,i=a.createGain(),o=a.createGain(),l=a.createWaveShaper();l.curve=function(e){for(var t,a=e,n=new Float32Array(44100),i=(Math.PI,0);i<44100;++i)t=2*i/44100-1,n[i]=(3+a)*Math.atan(5*Math.sinh(.25*t))/(Math.PI+a*Math.abs(t));return n}(200),e.connect(l),l.connect(o),o.gain.value=n;var s=a.createGain();return e.connect(s),s.connect(i),s.gain.value=1,o.connect(i),i}},{key:"getImpulse",value:function(){var e=new XMLHttpRequest,t=this;e.open("GET","https://res.cloudinary.com/voiera/video/upload/v1560524168/BIG_HALL_E001_M2S_d0yywu.wav",!0),e.responseType="arraybuffer",e.onload=function(){var a=e.response;t.state.context.decodeAudioData(a).then(function(e){t.setState({convolverBuffer:e})})},e.send()}},{key:"addReverbEffect",value:function(e,t){var a=t/10,n=this.state.context,i=n.createGain(),o=n.createGain(),l=n.createGain(),s=n.createConvolver();return s.buffer=this.state.convolverBuffer,e.connect(s),s.connect(l),l.gain.value=a,l.connect(i),e.connect(o),o.gain.value=1,o.connect(i),i}},{key:"addDelayEffect",value:function(e,t){var a=t/100;console.log(a);var n=this.state.context,i=e,o=n.createDelay(100),l=n.createGain(),s=n.createGain(),c=n.createGain();return o.delayTime.value=1.04,l.gain.value=.5,s.gain.value=a,i.connect(o),o.connect(l),l.connect(o),o.connect(s),s.connect(c),i.connect(c),c}},{key:"changeTab",value:function(e,t){var a=this.state.channelData;a[e].tab=t,this.setState({channelData:a})}},{key:"editBPM",value:function(e){this.setState({bpm:e})}},{key:"editTimeSignature",value:function(e){this.setState({timeSignature:e})}},{key:"editKey",value:function(e){this.setState({key:e})}},{key:"deleteChannel",value:function(e){var t=this.state.channelData,a=this.state.deletedChannels,n=t.splice(e,1);a.push(n[0]),this.setState({channelData:t,deletedChannels:a})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.state.loading||this.state.saving?i.a.createElement("div",{className:"loading"},i.a.createElement(G.a,{size:80,thickness:5}),this.state.loading?i.a.createElement("p",null,"Loading..."):i.a.createElement("p",null,"Exporting to MP3, This may take a while")):"",i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"songDetails"},this.state.loading?"":i.a.createElement(A.a,{text:this.state.title,labelClassName:"songTitle",inputClassName:"songTitle",inputWidth:"300px",onFocusOut:this.editTitle.bind(this)})),i.a.createElement("div",{className:"controls"},i.a.createElement(v.a,{className:"controlButton",onClick:this.stopAll},i.a.createElement(E.a,{icon:b.k})),i.a.createElement(v.a,{className:"controlButton",onClick:this.pauseAll},i.a.createElement(E.a,{icon:b.f})),i.a.createElement(v.a,{className:"controlButton",onClick:function(){e.playAll()}},i.a.createElement(E.a,{icon:b.g})),i.a.createElement(v.a,{className:"controlButton"},this.msToTime(this.state.runningTime)),i.a.createElement(v.a,{className:"controlButton"},i.a.createElement(A.a,{text:this.state.bpm,labelClassName:"bpmTitle",inputClassName:"bpmTitle",inputWidth:"38px",onFocusOut:function(t){e.editBPM(t)}}),"BPM"),i.a.createElement(v.a,{className:"controlButton"},i.a.createElement(E.a,{style:{marginRight:"10px"},icon:b.e}),this.state.loading?"":i.a.createElement(A.a,{text:this.state.key,labelClassName:"bpmTitle",inputClassName:"bpmTitle",inputWidth:"38px",onFocusOut:function(t){e.editKey(t)}})),i.a.createElement(v.a,{className:"controlButton"},this.state.loading?"":i.a.createElement(A.a,{text:this.state.timeSignature,labelClassName:"bpmTitle",inputClassName:"bpmTitle",inputWidth:"38px",onFocusOut:function(t){e.editTimeSignature(t)}})),i.a.createElement(v.a,{className:"controlButton"},i.a.createElement(E.a,{style:{marginRight:"10px"},icon:b.i,onClick:this.saveSong.bind(this)})," Save"),i.a.createElement(v.a,{className:"controlButton"},i.a.createElement(E.a,{style:{marginRight:"10px"},icon:b.b,onClick:function(){e.downloadLink()}})," Export"),this.state.lastExportedUrl?i.a.createElement(v.a,{className:"controlButton"},i.a.createElement("a",{style:{color:"inherit",textDecoration:"none"},href:this.state.lastExportedUrl,download:!0},i.a.createElement(E.a,{style:{marginRight:"10px"},icon:b.a})," Download")):"")),i.a.createElement("div",{className:"channels"},this.state.channelData.map(function(t,a){return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("div",{class:"deleteChannel",onClick:function(){e.deleteChannel(a)}},i.a.createElement(E.a,{icon:b.m})),(!t.tab||0===t.tab)&&i.a.createElement("div",{key:t._id,className:"channel"},i.a.createElement("img",{src:T.InstrumentImgs[t.instrument]||T.InstrumentImgs.audio}),i.a.createElement("div",{className:"channel-details"},i.a.createElement("p",null,i.a.createElement(A.a,{text:t.title,labelClassName:"channelTitle",inputClassName:"channelTitle",inputWidth:"300px",onFocusOut:function(t){e.editChannelLabel(t,a)}}),i.a.createElement("input",{className:"fileUpload",type:"file",id:"upload-ch-"+a,onChange:e.onUpload})),i.a.createElement(E.a,{onClick:function(t){e.changeVolume(t,0,a)},icon:b.l}),i.a.createElement(E.a,{icon:b.c}),i.a.createElement(k.a,{classes:{root:"volume-slider",track:"volume-track"},value:100*t.audioEffects.volume,"aria-labelledby":"label",onChange:function(t,n){e.changeVolume(t,n,a)}}),i.a.createElement("span",{onClick:function(t,n){e.changeTab(a,1)}},i.a.createElement(E.a,{icon:b.d})))),1===t.tab&&i.a.createElement("div",{key:t._id,className:"channel"},i.a.createElement("img",{src:T.InstrumentImgs[t.instrument]||T.InstrumentImgs.audio}),i.a.createElement("div",{className:"channel-details"},i.a.createElement("div",{className:"effect"},i.a.createElement("p",null,"Delay"),i.a.createElement(k.a,{classes:{root:"volume-slider",track:"volume-track"},value:t.audioEffects.delay,onChange:function(t,n){e.editEffect("delay",n,a)}}),i.a.createElement("p",null,"Reverb"),i.a.createElement(k.a,{classes:{root:"volume-slider",track:"volume-track"},value:t.audioEffects.reverb,onChange:function(t,n){e.editEffect("reverb",n,a)}}),i.a.createElement("p",null,"Distortion"),i.a.createElement(k.a,{classes:{root:"volume-slider",track:"volume-track"},value:t.audioEffects.distortion,onChange:function(t,n){e.editEffect("distortion",n,a)}}),i.a.createElement("p",{onClick:function(t,n){e.changeTab(a,0)}},i.a.createElement(E.a,{icon:b.j}))))))}),i.a.createElement("div",null,i.a.createElement(v.a,{className:"controlButton",onClick:this.addChannel.bind(this)},i.a.createElement(E.a,{icon:b.h})))),i.a.createElement("div",{className:"timeline-container"},i.a.createElement("div",{className:"playLine",style:{left:this.state.runningTime/1e3*this.state.spacing}}),i.a.createElement("div",{className:"timeline"},i.a.createElement("div",{className:"timebar"}),this.state.channelData.map(function(t,a){return i.a.createElement("div",{key:t._id,className:"timebar-channel",id:"channel-"+a},t.audioFiles.map(function(t,n){return i.a.createElement(N.a,{key:t._id,bounds:"#channel-"+a,axis:"x",defaultPosition:{x:t.location,y:0},onDrag:e.handleDrag},i.a.createElement("div",{id:"audio-"+a+"-"+n,className:"audioSnippet"},i.a.createElement("div",{className:"title"},"Audio File ",t.id," : ",e.msToTime(t.location/e.state.spacing*1e3)),i.a.createElement(C.a,{buffer:t.buffer,width:(t.buffer&&(t.buffer.duration||0))*e.state.spacing,height:60,waveStyle:{animate:!0,color:"#95adc9",pointWidth:1}}),i.a.createElement(v.a,{className:"deleteAudio",onClick:e.deleteAudio.bind(e,a,n)},i.a.createElement(E.a,{icon:b.m}))))}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t){e.exports.InstrumentImgs={guitar:"../images/guitar.png",vocal:"../images/vocal.png",bass:"../images/guitar.png",drums:"../images/drums.png",audio:"../images/audio.png"}},76:function(e,t,a){e.exports=a(193)},81:function(e,t,a){},84:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.c653143a.chunk.js.map