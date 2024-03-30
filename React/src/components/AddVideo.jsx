import "./AddVideo.css"
function AddVideo() {
  return (
    <>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="views"/>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                url: "https://picsum.photos/id/1/160/90",
                views: "10K",
                time: "1 year ago",
                title: "Some random Tutorial",
                channel: "Tridib",
                verified: true,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </form>
    </>
  );
}
export default AddVideo;
