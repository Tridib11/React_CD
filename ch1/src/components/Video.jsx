function Video({url}) {
  let topic="React JS"
  let bg='dark'
  return (
    <div>
      <img src={url} alt="Katherine Johnson" />
      <div className={bg} style={{backgroundColor:'red', width:'20vw', margin:'10px'}}>Tutorial Components</div>
    </div>
  );
}

export default Video;
