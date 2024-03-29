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
        />
      ))}
      <div style={{clear:'both'}}>
        <PlayButton message={"play-msg"}>Play</PlayButton>
        <PlayButton message={"pause-msg"}>Pause</PlayButton>
      </div>
    </div>
  );
}

export default App;
