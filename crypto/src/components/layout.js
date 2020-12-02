import React from 'react'
import Menu from './menu'
import Footer from './footer'
import Head from './Head'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: '2%'
    }

}));

const Layout = (props) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Head/>
            <Menu />
            <Box className={classes.main}>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        {props.children}
                    </Grid>

                </Grid >
            </Box>

            <Footer />

        </>
    )
}
export default Layout