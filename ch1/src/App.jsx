import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";


function App() {
  return (
    <div className="App">
      <div className="Heading">Videos</div>
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
      <div style={{clear:'both'}}>
        <PlayButton></PlayButton>
      </div>
    </div>
  );
}

export default App;
