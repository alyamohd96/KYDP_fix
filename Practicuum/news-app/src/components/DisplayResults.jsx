import { Grid, Chip } from "@mui/material";
import NewsItem from "./NewsItem";
import { useState, useEffect } from 'react';

function DisplayResults({news, updateFavourites, handleLoadMore}) {

    return(
        <>
            <Grid 
                container 
                direction='row' 
                spacing={2} 
                justifyContent={"flex-start"}
                alignItems="flex-start"
                style={{backgroundColor: "#BACD92" }}>
                {news.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsItem news={item} updateFavourites={updateFavourites} />
                    </Grid>
                ))}
            </Grid>
            
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{display: "flex",backgroundColor: "#3FCF8F3", marginTop: "10px" }}>
                <Chip label="Load more" onClick={handleLoadMore}/>
            </Grid>
        </>
    );
};

export default DisplayResults;