import React, { useState, useEffect } from "react";
import volumeOff from "../images/volume_off.svg";
import volumeOn from "../images/volume_on.svg";
import "./Play.css"

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Play = () => {
    const [playing, toggle] = useAudio("https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3");

    return (
        <div>
            <button
                className="volume"
                type="button"
                onClick={toggle}>{playing ? (
                    <img src={volumeOn} alt="Volume is on" />
                ) : (
                    <img src={volumeOff} alt="Volume is off" />
                )}
                </button>


                </div>
    );
};

export default Play;