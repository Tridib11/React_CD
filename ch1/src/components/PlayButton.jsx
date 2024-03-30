import "./PlayButton.css";
export default function PlayButton({ message, children, onPlay, onPause }) {
  // don't use this approach
  let playing = false;
  function handleClick() {
    if (playing) onPause();
    else onPlay();

    playing = !playing;
  }
  return <button onClick={handleClick}>{children}:{playing?'>':'||'}</button>;
}
