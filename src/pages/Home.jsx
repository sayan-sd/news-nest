import React, { useEffect, useState, useContext } from "react";
import HeroSection from "../components/HeroSection";
import NewsCards from "../components/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import { AppContext } from "../../src/context/AppContext";

function Home() {
    const [newsArticle, setNewsArticle] = useState([]);
    const { allArticles, setAllArticles, activeArticle, setActiveArticle } = useContext(AppContext);

    useEffect(() => {
        alanBtn({
            key: "301647b5cf5de4321fab3b46315483f82e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticle(articles);
                    setAllArticles(articles); // Update allArticles whenever new headlines are received
                    setActiveArticle(-1);
                } else if (command === "highlight") {
                    setActiveArticle(
                        (prevActiveArticle) => prevActiveArticle + 1
                    );
                } else if (command === "open") {
                    if (number > 50) {
                        alanBtn().playText("Please try another article.");
                    } 
                    else if (number>=1) {
                        alanBtn().playText(`Opening article number ${number}`);
                        window.open(articles[number].url, "_blank");
                    } else {
                        alanBtn().playText(
                            "I encountered an issue while fetching the link. Please try again later."
                        );
                    }
                }
            },
        });
    }, [allArticles]);


    const articlesToShow = allArticles.length > 0 ? allArticles : newsArticle;

    return (
        <div className="home">
            <HeroSection />
            <NewsCards
                articles={articlesToShow}
                activeArticle={activeArticle}
            />
        </div>
    );
}

export default Home;
