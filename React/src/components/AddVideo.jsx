import { useState } from "react";
import "./AddVideo.css";
function AddVideo() {
  const [video, setVideo] = useState({
    time: "1 year ago",
    channel: "Tridib",
    verified: true,
  });
  function handleSubmit(event) {
    event.preventDefault()
    console.log(video)
  }
  function handleChange(e) {
    console.log(e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video)
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
        <button
          onClick={handleSubmit}
          // onClick={() => {
          //   setVideos([
          //     ...videos,
          //     {
          //       id: videos.length + 1,
          //       url: "https://picsum.photos/id/1/160/90",
          // views: "10K",
          // time: "1 year ago",
          // title: "Some random Tutorial",
          // channel: "Tridib",
          // verified: true,
          //     },
          //   ]);
          // }}
        >
          Add Video
        </button>
      </form>
    </>
  );
}
export default AddVideo;
