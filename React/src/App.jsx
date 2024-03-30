import "./App.css";
import videoDB from "./data/data";
import Video from "./components/Video";
import React, { useState } from "react";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {

  const [videos,setVideos]=useState(videoDB)
  return (
    <div className="App" onClick={()=>{console.log("App")}}>
      <div className="Heading">
        <button onClick={()=>{
          setVideos([...videos,{
            id: videos.length+ 1,
            url: "https://picsum.photos/id/1/160/90",
            views: "10K",
            time: "1 year ago",
            title: "Some random Tutorial",
            channel: "Tridib",
            verified: true,
          }])
        }}>Add Video</button>
      </div>
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
