(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),l=a.n(i),s=(a(76),a(61)),c=a(62),r=a(70),u=a(63),d=a(69),m=a(14),f=(a(77),a(3)),h=a.n(f),p=a(5),v=a(6),g=a(68),E=a.n(g);function b(e,t,a){console.log("new bufer"),this.context=e,this.urlList=t,this.onload=a,this.bufferList=new Array,this.loadCount=0}b.prototype.loadBuffer=function(e,t){console.log("load bufer");var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer";var n=this;a.onload=function(){n.context.decodeAudioData(a.response,function(a){a?(n.bufferList[t]=a,++n.loadCount==n.urlList.length&&n.onload(n.bufferList)):alert("error decoding file data: "+e)},function(e){console.error("decodeAudioData error",e)})},a.onerror=function(){alert("BufferLoader: XHR error")},a.send()},b.prototype.load=function(){console.log(this.urlList);for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var w=b,N=a(64),y=a.n(N),D=[{instrument:"bass",id:1,title:"Gady Bass",effects:[],audioFiles:[{id:1,location:0,audioUrl:"https://res.cloudinary.com/voiera/video/upload/v1557509436/bass_z1qrde.mp3"}]},{instrument:"guitar",id:2,title:"Elinor Guitar",effects:[],audioFiles:[{id:2,location:0,audioUrl:"https://res.cloudinary.com/voiera/video/upload/v1557508452/guitar_bu0mfp.mp3"}]},{instrument:"vocal",id:3,title:"Elior Vocal",effects:[],audioFiles:[{id:3,location:0,audioUrl:"https://res.cloudinary.com/voiera/video/upload/v1557509428/vocal_qno7k9.mp3"}]},{instrument:"drums",id:4,title:"Gady Drums",effects:[],audioFiles:[{id:4,location:119,audioUrl:"https://res.cloudinary.com/voiera/video/upload/v1557509429/drums_udzggo.mp3"}]}],S=a(65),x=a.n(S),k=a(38),F=a(66),B=a.n(F),C=a(30),T=a.n(C),A=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).changeVolume=function(e,t){a.setState({volume:t})},a.playAll=function(){var e=a.state.channelData;a.state.context.resume(),a.state.channelData.forEach(function(t,n){t.audioFiles.forEach(function(t,o){var i=a.state.context.createBufferSource();i.buffer=t.buffer,i.connect(a.state.context.destination),i.start(a.state.context.currentTime+t.location/a.state.spacing),e[n].audioFiles[o].bufferSource=i})}),a.setState(function(e){if(e.status)clearInterval(a.timer);else{var t=Date.now()-a.state.runningTime;a.timer=setInterval(function(){a.setState({runningTime:Date.now()-t})})}return{status:!e.status}})},a.pauseAll=function(){clearInterval(a.timer),a.state.context.suspend(),a.setState({status:!1,suspended:!0})},a.stopAll=function(){clearInterval(a.timer),a.state.channelData.forEach(function(e){e.audioFiles.forEach(function(e){e.bufferSource.stop(a.state.context.currentTime)})}),a.state.context.suspend(),a.setState({runningTime:0,status:!1,suspended:!0})},a.handleDrag=function(e,t){var n=a.state.channelData,o=t.node.id.split("-");n[o[1]].audioFiles[o[2]].location=t.x,a.setState(n)},a.addChannel=function(){console.log("add channel");var e=a.state.channelData;e.push({instrument:"audio",title:"New Channel",effects:[],audioFiles:[],new:!0}),a.setState({channelData:e})},a.deleteAudio=function(e,t){var n=a.state.channelData;n[e].audioFiles[t].bufferSource&&n[e].audioFiles[t].bufferSource.disconnect(),n[e].audioFiles.splice(t,1),a.setState({channelData:n})},a.onUpload=function(e){a.setState({loading:!0});var t=new FileReader,n=e.target.id.split("-")[2],o=a.state.channelData,i=Object(m.a)(Object(m.a)(a)),l=e.target.files[0];t.onload=function(e){i.state.context.decodeAudioData(e.target.result).then(function(e){var t=new FormData;t.append("file",l),t.append("upload_preset","biwlw0dl"),t.append("api_key","228417225742266"),t.append("timestamp",Date.now()/1e3|0),T.a.post("https://api.cloudinary.com/v1_1/voiera/video/upload",t,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(t){var a=t.data;o[n].audioFiles.push({location:0,audioUrl:a.secure_url,buffer:e}),i.setState({channelData:o,loading:!1})})})},t.readAsArrayBuffer(l)},a.saveSong=function(){T.a.post("http://localhost:1234/studio/saveDataInStudio",{channels:a.state.channelData,songId:a.state.songId,title:a.state.title,bpm:a.state.bpm})},a.editTitle=function(e){a.setState({title:e})};var n=Object(m.a)(Object(m.a)(a)),o=new URL(document.location).searchParams.get("id");return a.state={volume:100,spacing:8,runningTime:0,playing:!0,playbackTime:0,channelData:D,loading:!0,songId:o,title:"New Song",bpm:120},T.a.post("http://localhost:1234/studio/getDataForStudio",{id:o}).then(function(e){e=e.data,n.setState({channelData:e.channels,title:e.title,bpm:e.bpm}),console.log(a.state);var t=[];e.channels.forEach(function(e){e.audioFiles.forEach(function(e){t.push(e.audioUrl)})}),window.AudioContext=window.AudioContext||window.webkitAudioContext;var o=new AudioContext;o.suspend(),a.state.context=o,new w(o,t,function(e){var t=0,a=n.state.channelData;a.forEach(function(n,o){n.audioFiles.forEach(function(n,i){a[o].audioFiles[i].buffer=e[t],t++})}),n.setState({context:o,loading:!1,channelData:a})}).load()}),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"msToTime",value:function(e){function t(e,t){return("00"+e).slice(-(t=t||2))}var a=e%1e3,n=(e=(e-a)/1e3)%60;return t((e=(e-n)/60)%60)+":"+t(n)+"."+t(a,3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.loading?o.a.createElement("div",{className:"loading"},"Loading..."):"",o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"songDetails"},o.a.createElement(B.a,{text:this.state.title,labelClassName:"songTitle",inputClassName:"songTitle",inputWidth:"300px",onFocusOut:this.editTitle.bind(this)})),o.a.createElement("div",{className:"controls"},o.a.createElement(h.a,{className:"controlButton"},o.a.createElement(p.a,{icon:v.h})),o.a.createElement(h.a,{className:"controlButton"},o.a.createElement(p.a,{icon:v.i})),o.a.createElement(h.a,{className:"controlButton",onClick:this.stopAll},o.a.createElement(p.a,{icon:v.j})),o.a.createElement(h.a,{className:"controlButton",onClick:this.pauseAll},o.a.createElement(p.a,{icon:v.d})),o.a.createElement(h.a,{className:"controlButton",onClick:this.playAll},o.a.createElement(p.a,{icon:v.e})),o.a.createElement(h.a,{className:"controlButton"},o.a.createElement(p.a,{icon:v.b})),o.a.createElement(h.a,{className:"controlButton"},this.msToTime(this.state.runningTime)),o.a.createElement(h.a,{className:"controlButton"},o.a.createElement(p.a,{icon:v.c})),o.a.createElement(h.a,{className:"controlButton"},this.state.bpm," BPM"),o.a.createElement(h.a,{className:"controlButton"},"Cmaj"),o.a.createElement(h.a,{className:"controlButton"},"4/4"),o.a.createElement(h.a,{className:"controlButton"},o.a.createElement(p.a,{icon:v.g,onClick:this.saveSong.bind(this)})))),o.a.createElement("div",{className:"channels"},this.state.channelData.map(function(t,a){return o.a.createElement("div",{key:t._id,className:"channel"},o.a.createElement("img",{src:k.InstrumentImgs[t.instrument]||k.InstrumentImgs.audio}),o.a.createElement("div",{className:"channel-details"},o.a.createElement("p",null,t.title,o.a.createElement("input",{className:"fileUpload",type:"file",id:"upload-ch-"+a,onChange:e.onUpload})),o.a.createElement(p.a,{icon:v.k}),o.a.createElement(p.a,{icon:v.a}),o.a.createElement(E.a,{classes:{root:"volume-slider",track:"volume-track"},value:e.state.volume,"aria-labelledby":"label",onChange:e.changeVolume}),o.a.createElement("span",null,"FX")))}),o.a.createElement("div",null,o.a.createElement(h.a,{className:"controlButton",onClick:this.addChannel.bind(this)},o.a.createElement(p.a,{icon:v.f})))),o.a.createElement("div",{className:"timeline-container"},o.a.createElement("div",{className:"playLine",style:{left:this.state.runningTime/1e3*this.state.spacing}}),o.a.createElement("div",{className:"timeline"},o.a.createElement("div",{className:"timebar"}),this.state.channelData.map(function(t,a){return o.a.createElement("div",{key:t._id,className:"timebar-channel",id:"channel-"+a},t.audioFiles.map(function(t,n){return o.a.createElement(y.a,{key:t._id,bounds:"#channel-"+a,axis:"x",defaultPosition:{x:t.location,y:0},onDrag:e.handleDrag},o.a.createElement("div",{id:"audio-"+a+"-"+n,className:"audioSnippet"},o.a.createElement("div",{className:"title"},"Audio File ",t.id," : ",e.msToTime(t.location/e.state.spacing*1e3)),o.a.createElement(x.a,{buffer:t.buffer,width:(t.buffer&&(t.buffer.duration||0))*e.state.spacing,height:60,waveStyle:{animate:!0,color:"#95adc9",pointWidth:1}}),o.a.createElement(h.a,{className:"deleteAudio",onClick:e.deleteAudio.bind(e,a,n)},o.a.createElement(p.a,{icon:v.l}))))}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,t){e.exports.InstrumentImgs={guitar:"../images/guitar.png",vocal:"../images/vocal.png",bass:"../images/guitar.png",drums:"../images/drums.png",audio:"../images/audio.png"}},71:function(e,t,a){e.exports=a(189)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.72c53b1f.chunk.js.map