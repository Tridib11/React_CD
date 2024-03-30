import "./App.css";
import videos from "./data/data";
import Video from "./components/Video";
import React from "react";
import PlayButton from "./components/PlayButton";


function App() {
  return (
    <div className="App">
      <div className="Heading">Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          views={video.views}
          time={video.time}
          title={video.title}
          channel={video.channel}
          verified={video.verified}
        >
        <PlayButton message={"play-msg"} onPlay={()=>{console.log("Play")}} onPause={()=>{console.log("Pause")}}>Play</PlayButton>
        </Video>
        
      ))}
      {/* <div style={{clear:'both'}}>
        <PlayButton message={"play-msg"} onPlay={()=>{console.log("Play")}} onPause={()=>{console.log("Pause")}}>Play</PlayButton>
      </div> */}
    </div>
  );
}

export default App;
