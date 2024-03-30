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
    console.log(video);
  }
  function handleChange(e) {
    console.log(e.target.value);
    setVideos({ ...video, [e.target.name]: e.target.value });
    console.log(video);
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
