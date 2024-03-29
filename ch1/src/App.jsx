import Video from "./components/Video";
import "./App.css";
function App() {
  let obj={
        url:"https://picsum.photos/id/1/160/90",
        views:"10K",
        time:"1 year ago",
        title:"React js Tutorial",
        channel:"Tridib",
        verified:true
  }
  return (
    <div className="App">
      <div className="Heading">Videos</div>
      {/* passing by object destructuring */}
      <Video {...obj}/>  
      <Video
        url={"https://picsum.photos/id/2/160/90"}
        views={"100K"}
        time={"1 month ago"}
        title={"Node js Tutorial"}
        channel={"Tridib"}
        verified={true}
      />
       <Video
        url={"https://picsum.photos/id/3/160/90"}
        views={"1K"}
        time={"1 week ago"}
        title={"Mongo DB Tutorial"}
        channel={"Tridib"}
        verified={false}
      />
    </div>
  );
}

export default App;
