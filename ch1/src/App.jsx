import Video from "./components/Video";
import "./App.css";
function App() {
  let videos = [
    {
      id: 1,
      url: "https://picsum.photos/id/1/160/90",
      views: "10K",
      time: "1 year ago",
      title: "React js Tutorial",
      channel: "Tridib",
      verified: true,
    },
    {
      id: 2,
      views: "10K",
      time: "1 year ago",
      title: "Node js Tutorial",
      channel: "Tridib",
      verified: false,
    },
    {
      id: 3,
      views: "10K",
      time: "1 year ago",
      title: "MongoDb Tutorial",
      channel: "Tridib",
      verified: true,
    },
  ];
  return (
    <div className="App">
      <div className="Heading">Videos</div>
      {/* passing by object destructuring */}
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          views={video.views}
          time={video.time}
          title={video.title}
          channel={video.channel}
          verified={video.verified}
        />
      ))}
    </div>
  );
}

export default App;
