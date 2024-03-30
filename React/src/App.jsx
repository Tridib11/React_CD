import "./App.css";
import videoDB from "./data/data";
import React, { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id!==id))
    
  }
  return (
    <div className="App">
      <div className="Heading">
        <AddVideo addVideos={addVideos}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
    </div>
  );
}

export default App;
