import Video from "./components/Video";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>Videos</div>
      <Video url={"https://placebear.com/640/360"} title={"React js Tutorial"} />
      <Video url={"https://placebear.com/640/360"} title={"Node js Tutorial"} />
    </div>
  );
}

export default App;
