import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import logo from "../../src/assets/icon.png";

const data = [
    {
        heading: "Latest News",
        topic: "",
        context: "",
        prompt: "Give me the latest news",
    },
    {
        heading: "News by Category",
        topic: "Category:",
        context:
            "Business, Entertainment, General, Health, Science, Sport, Technology...",
        prompt: "Give me the latest [Technology News]",
    },
    {
        heading: "News by Terms",
        topic: "Terms:",
        context: "Bitcoin, Smartphones, Donald Trump...",
        prompt: "What's up with [Bitcoin]",
    },
    {
        heading: "News by Source",
        topic: "Sources:",
        context: "CNN, BBC News, Wired, Time, IGN, Buzzfeed, ABC News...",
        prompt: "Give me the news from [CNN]",
    },
];

function CardSlider() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BiChevronRight />
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <BiChevronLeft />
            </div>
        );
    };
    const [dataIndex, setDataIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        // width: auto ,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setDataIndex(next),
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((data, index) => {
                    return (
                        <div
                            key={index}
                            id="hello"
                            className={
                                index === dataIndex
                                    ? "slide activeSlide"
                                    : "slide"
                            }>
                            <div className="box">
                                <h3>{data.heading}</h3>
                                <div className="container">
                                    <div className="tag">{data.topic}</div>
                                    <p>{data.context}</p>
                                </div>
                                <div className="container">
                                    <div className="tag">Try saying:</div>
                                    <p>{data.prompt}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default CardSlider;
