import Video from "./components/Video";

function App() {
  return <div>
    <div>Hello</div>
    <Video url={"https://placebear.com/640/360"} topic={"bear"}/>
    <Video url={"https://picsum.photos/640/360"} topic={"Some random pic"}/>
  </div>
}

export default App;
