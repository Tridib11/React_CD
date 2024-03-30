import "./AddVideo.css"
function AddVideo() {
  function handleSubmit(){

  }
  function handleChange(){

  }
  return (
    <>
      <form>
        <input type="text" onChange={handleChange} placeholder="title" />
        <input type="text" onChange={handleChange} placeholder="views"/>
        <button
        onClick={handleSubmit}
          // onClick={() => {
          //   setVideos([
          //     ...videos,
          //     {
          //       id: videos.length + 1,
          //       url: "https://picsum.photos/id/1/160/90",
          //       views: "10K",
          //       time: "1 year ago",
          //       title: "Some random Tutorial",
          //       channel: "Tridib",
          //       verified: true,
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
