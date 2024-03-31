import "./App.css";
import videoDB from "./data/data";
import React, { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);


  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))    
  }

  function editVideo(id){
    console.log(id)   
  }
  return (
    <div className="App">
      <div className="Heading">
        <AddVideo addVideos={addVideos} editableVideo={editableVideo}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
    </div>
  );
}

export default App;
