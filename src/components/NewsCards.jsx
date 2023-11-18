import React,{useContext} from 'react'
import SingleCard from './SingleCard'
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import "./card.css";
import Footer from './Footer';
// import Typography from "@mui/material/Typography";

function NewsCards({ articles, activeArticle }) {
    return (
        <>
            <Grow in className="card-container">
                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    // padd="5px 5px 5px 50px"
                    className="container">
                    {articles.map((article, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            style={{ display: "flex" }}
                            key={index}>
                            <SingleCard
                                article={article}
                                i={index}
                                activeArticle={activeArticle}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </>
    );
}

export default NewsCards