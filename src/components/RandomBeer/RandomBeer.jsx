import React, {useEffect, useState} from 'react';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const RandomBeer = () => {
    const classes = useStyles();
    const [beerName, setBeerName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const fetchBeer = async () => {
        const response = await fetch("https://api.punkapi.com/v2/beers/random");
        const data = await response.json();
        setBeerName(data[0].name);
        setImageUrl(data[0].image_url);
        setDescription(data[0].description);
    };

    useEffect( () => {
        fetchBeer();
    }, []);
    return (
        <>
            <img src={imageUrl} className={classes.beerLogo} alt="beer" />
            <Typography variant="h1" className={classes.typography}>{beerName}</Typography>
            <Typography variant="h5" className={classes.typography}>{description}</Typography>
            <Button color="primary" variant="outlined" className={classes.button} onClick={fetchBeer}>
                <img src="https://cdn-icons-png.flaticon.com/512/931/931949.png" alt="beer" className={classes.beerIcon} /> <Typography variant="h5" className={classes.typography}>Generate a random beer</Typography>
            </Button>
        </>
    )
}

export default RandomBeer
