import React, { useState, useEffect, useContext, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
    const location = useLocation();
    const { getNews, getCountryNews } = useContext(AppContext);
    const [term, setTerm] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState("in");
    const [showMenu, setshowMenu] = useState(false);
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const scrollPosRef = useRef(0);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("my-theme", "dark");
        localStorage.setItem("selected-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("my-theme", "light");
        localStorage.setItem("selected-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    const selectedTheme = localStorage.getItem("selected-theme");
    if (selectedTheme === "dark") {
        setDarkMode();
    }

    function changeHandler(event) {
        setTerm(event.target.value);
    }

    function clickHandler() {
        if (term) {
            getNews(term);
        }
    }

    function handleCountryChange(event) {
        const selectedCountryValue = event.target.value;
        setSelectedCountry(selectedCountryValue);
        getCountryNews(selectedCountryValue);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            clickHandler();
        }
    }

    useEffect(() => {
        // console.log(selectedCountry);
        setshowMenu(false);
        if (location.pathname === "/news-nest/regional") {
            (async () => {
                await getCountryNews(selectedCountry);
                console.log(selectedCountry);
            })();
        }
    }, [selectedCountry, location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                scrollPosRef.current > currentScrollPos || currentScrollPos < 10
            );
            scrollPosRef.current = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <div
                className="navbar nav"
                style={{
                    top: visible ? "1vh" : "-80px",
                    transition: "all 0.5s",
                }}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <ul className={showMenu ? "active-nav" : ""}>
                    <li>
                        <NavLink to="/news-nest/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news-nest/regional">
                            Regional News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news-nest/about">About Us</NavLink>
                    </li>
                </ul>
                <div
                    className="menu"
                    onClick={() => {
                        setshowMenu(!showMenu);
                    }}>
                    <GiHamburgerMenu className="menuIcon" />
                </div>
                <div className="nav-tools">
                    {location.pathname !== "/news-nest/regional" && (
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search News..."
                                onChange={changeHandler}
                                onKeyPress={handleKeyPress}
                            />
                            <button>
                                <AiOutlineSearch
                                    className="search-icon"
                                    onClick={clickHandler}
                                />
                            </button>
                        </div>
                    )}

                    {location.pathname === "/news-nest/regional" && (
                        <div className="country-dropdown">
                            <select
                                value={selectedCountry}
                                onChange={handleCountryChange}>
                                <option value="in">India</option>
                                <option value="fr">France</option>
                                <option value="jp">Japan</option>
                                <option value="gb">United Kingdom</option>
                                <option value="us">United States </option>
                            </select>
                        </div>
                    )}

                    {/* theme switch */}
                    <div className="dark-mode">
                        <input
                            type="checkbox"
                            className="dark-mode-input"
                            id="darkmode-toggle"
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === "dark"}
                        />
                        <label
                            htmlFor="darkmode-toggle"
                            className="dark-mode-label">
                            <BsFillSunFill className="theme-icon sun" />
                            <BsFillMoonFill className="theme-icon moon" />
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
