import { Description, Title } from '@material-ui/icons'
import React from 'react'
import Header from '../components/header'
import Titles from '../components/title'
import FacutImage from '../components/facutImage'
import Descriptions from '../components/descriptions'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Layout from '../components/layout'
import {Crypto} from '../Constant/constant'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((gatheme) => ({
    root: {
        display: 'block',
        marginBottom: '1%'
    }
}));

function FacutList() {
    const classes = useStyles();
    console.log(Crypto,"this is crypto")
    return (
        <Layout>
            {Crypto?.map(data => (
                < Box component='div' className={classes.root} >
                    < Titles title={data.title} />
                    <Descriptions descriptions={data.description} />
                    <FacutImage images={`/static${data.image}`} alt='img' />
                </Box>
            )
            )
            }

        </Layout >

    )
}
export default FacutList