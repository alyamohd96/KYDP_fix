import * as React from 'react';
import Card from '@mui/material/Card';
import { CardHeader, CardMedia, Avatar, CardContent, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { red } from '@mui/material/colors'

function NewsItem({news, updateFavourites}) {

    const addToFavourites = () => {
        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        favourites.push(news);
        // localStorage.setItem('favourites', JSON.stringify(favourites));
        updateFavourites(favourites);
    }

    const formatDate = () => {
        //   Valid from : {`${new Date(contract.rentalObject.rentalPeriodStart).getDate()}/${new Date(contract.rentalObject.rentalPeriodStart).getMonth() +1}/${new Date(contract.rentalObject.rentalPeriodStart).getFullYear()}`}
        let day = new Date(news.publishedAt).getDate();
        let month = new Date(news.publishedAt).getMonth();
        let year = new Date(news.publishedAt).getFullYear();
        let formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
    }

    const getFirstLetter = () => {
        let letter = news?.source?.name?.toString()?.charAt(0);
        return letter;
    }

    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx= {{ bgcolor: red[500]}} aria-label="source">
                        {getFirstLetter()}
                    </Avatar>
                }
                title={news.source.name}
                subheader={formatDate()}
            />
            <CardMedia 
                component='img'
                height='194'
                image={news.urlToImage}
            />
            <CardContent>
                <a href={news.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {news.title}
                </a>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favourites" onClick={addToFavourites}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
            
        </Card>
    );
};

export default NewsItem;