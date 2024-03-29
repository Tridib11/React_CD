import Video from "./components/Video";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>Videos</div>
      <Video
        url={"https://placebear.com/640/360"}
        views={"10K"}
        time={"1 year ago"}
        title={"React js Tutorial"}
        channel={"Tridib"}
      />
      <Video
        url={"https://placebear.com/640/360"}
        views={"100K"}
        time={"1 month ago"}
        title={"Node js Tutorial"}
        channel={"Tridib"}
      />
    </div>
  );
}

export default App;
