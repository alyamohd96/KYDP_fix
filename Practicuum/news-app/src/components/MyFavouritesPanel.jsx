import { Grid, Button } from "@mui/material";
import { useState } from "react";

function MyFavouritesPanel({myFavourites, clearFavourites}) {

    return(
        <div style={{ backgroundColor: '#FCFFE0' }}>
            <Grid container direction='column' style={{display: "flex", backgroundColor: "#FCFFE0" }}>
                <h3>My Favourites:</h3>
                <Button variant="contained" onClick={clearFavourites}>
                    Clear
                </Button>
                {myFavourites.map((item, index) => (
                    <Grid item key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </Grid>
                ))}
            </Grid>
        </div>
        
    );
};

export default MyFavouritesPanel;