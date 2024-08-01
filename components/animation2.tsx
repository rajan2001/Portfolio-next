"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const Animation2 = () => {
    return (
        <Player
            autoplay
            speed={1.5}
            loop
            src="./animation-2.json"
            style={{
                height: "auto",
                width: "100%",
            }}
        />
    );
};

export default Animation2;
