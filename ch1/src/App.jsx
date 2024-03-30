import "./App.css";
import videos from "./data/data";
import Video from "./components/Video";
import React from "react";
import PlayButton from "./components/PlayButton";


function App() {
  return (
    <div className="App" onClick={()=>{console.log("App")}}>
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
        <PlayButton  
        onPlay={()=>{console.log("Playing",video.title)}} 
        onPause={()=>{console.log("Paused",video.title)}}>
          {video.title}
        </PlayButton>
        </Video>
        
      ))}
    </div>
  );
}

export default App;
