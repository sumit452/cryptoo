import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    media: {
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-react',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto',
    }
}));


function FacutImage({ images, alt }) {
    const classes = useStyles();
    return (
        <Box component="div" >
            <img src={images} className={classes.media} alt={alt} />

        </Box>
    )
}

export default FacutImage