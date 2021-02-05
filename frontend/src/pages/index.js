import React, {useEffect, useState} from "react";
import UrlShortener from "../components/url-shortener/url-shortener";
import {Container, Link, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./index.styles";
import Typist from "react-typist";

const IndexPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.main} maxWidth="md">
            <div className={classes.root}>
                <Link href="/"><Typography color="secondary">URL Shortener</Typography></Link>
            </div>
            <div className={classes.container}>
               <Typography variant="h2">URL Shortener</Typography>
                <Typography color="primary">Nice URL, shorten long URLs.</Typography>
                <UrlShortener />
            </div>
        </Container>
    )
}

export default IndexPage;
