import { useState } from "react";
import "./AddVideo.css";
function AddVideo({ addVideos }) {
  const [video, setVideos] = useState({
    time: "1 year ago",
    channel: "Tridib",
    verified: true,
  });
  function handleSubmit(event) {
    event.preventDefault();
    addVideos(video);
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
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
        />
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  );
}
export default AddVideo;
