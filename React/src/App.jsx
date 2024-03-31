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
    setVideos(videos.find(video=>video.id===id))    
  }

  function editVideo(id){
    console.log(id)   
  }
  return (
    <div className="App">
      <div className="Heading">
        <AddVideo addVideos={addVideos}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
    </div>
  );
}

export default App;
