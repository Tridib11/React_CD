function Video({url,topic}) {
  let bg='dark'
  return (
    <div>
      <img src={url} alt="Katherine Johnson" />
      <div className={bg} style={{backgroundColor:'red', width:'20vw', margin:'10px'}}>{topic}</div>
    </div>
  );
}

export default Video;
