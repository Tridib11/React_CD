import { useState } from "react";
import "./AddVideo.css";

const initialState={
  time: "1 year ago",
  channel: "Tridib",
  verified: true,
  title:"",
  views:""
}
function AddVideo({ addVideos }) {
  const [video, setVideos] = useState(initialState);
  function handleSubmit(event) {
    event.preventDefault();
    addVideos(video);
    setVideos(initialState)
  }
  function handleChange(e) {
    setVideos({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  );
}
export default AddVideo;
