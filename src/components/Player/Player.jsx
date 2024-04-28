import { useRef } from "react";
import css from "./Player.module.css";

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div className={css.player}>
      <video ref={playerRef} src={source} width={500}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div className={css.video}>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export default Player;
