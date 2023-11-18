import { createContext } from "react";
import { useState } from "react";
import Loader from "../components/Loader";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const API_KEY = "b9782f55220642029d829a060000e3cf";
    const [searchData, setSearchData] = useState(null);
    const [allArticles, setAllArticles] = useState([]);
    const [countryArticles, setCountryArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(0);
    const [loader, setLoader] = useState(false);


    let NEWS_API_URL = "https://newsapi.org/v2/everything?q=";
    async function getNews(data){
        const response = await fetch(`${NEWS_API_URL}${data}&apiKey=${API_KEY}`);
        const news = await response.json();
        setAllArticles(news.articles);
    }
    // console.log(country);
    async function getCountryNews(country){
        setLoader(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=${country}`);
        const news = await response.json();
        setCountryArticles(news.articles);
        // console.log(countryArticles);
        setLoader(false);
    }

    const value = {
        searchData,
        setSearchData,
        getNews,
        allArticles,
        setAllArticles,
        getCountryNews,
        countryArticles,
        activeArticle,
        setActiveArticle,
    }; 
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}