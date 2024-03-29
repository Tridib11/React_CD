import "./Video.css"
function Video({ url, title, channel="default-name", views, time,verified=false }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={url} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified ? '✅' : ''}</div>

        <div className="views">
          {views } views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
