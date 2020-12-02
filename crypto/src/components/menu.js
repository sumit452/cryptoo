import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        top: -30,
        width: '60%',
        left: '20%',

    },
    appBar: {
        backgroundColor: 'white',
        borderRadius: '50px',
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: '2%',
        marginRight: '5%',
        color: 'black',
        fontSize: '25px'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    },
    button: {

        margin: theme.spacing(1),
    }


}));

const Menu = () => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={50} sm={40}>
                        <Link to='/facutList' className={classes.link}>
                            <Button className={classes.button} variant="contained" color="secondary">Facuet</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={-10} sm={-4} >
                        <Link to='/airdrops' className={classes.link}>
                            <Button className={classes.button} variant="contained" color="secondary">Airdrops</Button>
                        </Link>

                    </Grid>
                    <Grid item xs={-10} sm={-4}>
                        <Link to='/airdrops' className={classes.link}>
                            <Button className={classes.button} variant="contained" color="secondary">Airdrops</Button>
                        </Link>

                    </Grid>
                    <Grid item xs={-10} sm={-4}>
                        <Link to='/airdrops' className={classes.link}>
                            <Button className={classes.button} variant="contained" color="secondary">Airdrops</Button>
                        </Link>

                    </Grid>
                    <Grid item xs={-10} sm={-4}>
                        <Link to='/blog' className={classes.link}>
                            <Button className={classes.button} variant="contained" color="secondary">Blog</Button>
                        </Link>

                    </Grid>

                </Grid>



            </AppBar>
        </div>
    )
}
export default Menu