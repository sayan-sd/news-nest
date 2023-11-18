import React from "react";
import "./card.css";
import defaultThumbnail from "../assets/thumbnail.png";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import { useState, useEffect, createRef } from "react";

function SingleCard({
    article: { description, publishedAt, source, title, url, urlToImage },
    i,
    activeArticle,
}) {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 30);

    useEffect(() => {
        // window.scroll(0, 600);
        setElRefs((refs) =>
            Array(50)
                .fill()
                .map((_, j) => refs[j] || createRef())
        );
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={`card ${activeArticle === i ? "activeCard" : ""}`}>
            <CardActionArea href={url} target="_blank">
                <CardMedia
                    image={urlToImage || defaultThumbnail}
                    style={{ height: 0, paddingTop: "56%" }}
                />

                <div className="details">
                    <Typography variant="body2" component="h2">
                        {new Date(publishedAt).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="h2">
                        {source.name}
                    </Typography>
                </div>

                <Typography
                    gutterBottom
                    variant="h5"
                    className="title"
                    fontSize={20}>
                    {title}
                </Typography>

                <CardContent>
                    <Typography
                        className="card-description"
                        variant="body2"
                        color="text.secondary"
                        component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className="card-action">
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5">{i + 1}</Typography>
            </CardActions>
        </Card>
    );
}

export default SingleCard;
