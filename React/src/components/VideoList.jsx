import Video from "./Video";
import PlayButton from "./PlayButton";
function VideoList({ videos,deleteVideo,editVideo }) {
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          views={video.views}
          time={video.time}
          title={video.title}
          channel={video.channel}
          verified={video.verified}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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
    </>
  );
}
export default VideoList;
