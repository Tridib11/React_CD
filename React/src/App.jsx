import "./App.css";
import videoDB from "./data/data";
import Video from "./components/Video";
import React, { useState } from "react";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: video.length + 1 }]);
  }
  return (
    <div className="App">
      <div className="Heading">
        <AddVideo addVideos={addVideos}></AddVideo>
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
            onPlay={() => {
              console.log("Playing", video.title);
            }}
            onPause={() => {
              console.log("Paused", video.title);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
