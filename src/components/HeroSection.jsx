import React from "react";
import heroLight from "../assets/light-brain.png";
import CardSlider from "./CardSlider";
import Loader from "./Loader";

function HeroSection() {
    function clickHandler() {
        window.open("https://github.com/sayan-sd/news-nest","_blank");
    }
    return (
        <div className="hero-section">
            <div className="text">
                <h1>
                    <span>NewsNest.Ai</span> <br />
                    Your News, Your Voice
                </h1>
                <p>
                    Welcome to NewsNest.Ai – a game-changer in news consumption.
                    Say hello to an innovative, voice-powered experience that
                    lets you effortlessly search for news by category, country,
                    or source. With NewsNest.Ai, the headlines come to life at
                    your command. <br /><br />But that's not all. Our AI assistant can also
                    read the news for you, making staying informed a breeze.
                    Embrace the future of news with NewsNest.Ai. Explore,
                    discover, and stay informed, all through the power of your
                    voice.
                </p>
                <div className="explore-btn">
                    <button onClick={clickHandler}>Explore</button>
                </div>
            </div>

            <div className="heroImg">
                <img src={heroLight} alt="hero" />
                <div className="slider">
                    <CardSlider/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
