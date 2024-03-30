import { useState } from "react";
import "./PlayButton.css";
export default function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(event) {
    // console.log(event)
    event.stopPropagation();
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }
  return (
    <button onClick={handleClick}>
      {children}:{playing ?  "⏸️":"▶️" }
    </button>
  );
}
