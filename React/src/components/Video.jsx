import "./Video.css"
function Video({id, title, channel="default-name", views, time,verified=false,children }) {

  
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified ? '✅' : ''}</div>

        <div className="views">
          {views } views <span>.</span> {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
export default Video
