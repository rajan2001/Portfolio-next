"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const Animation = () => {
  return (
    <Player
      autoplay
      speed={1.5}
      loop
      src="./animation.json"
      style={{
        height: "auto",
        width: "100%",
      }}
    />
  );
};

export default Animation;
