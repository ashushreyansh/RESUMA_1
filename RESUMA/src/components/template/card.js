import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
//import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        //maxWidth: 645,
        background: '#fff',
        margin: '20px',
        // height: '650px',
        // width: '500px',
        height: '350px',
        width: '400px',
    },
    media: {
        height: '200px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#000',
        textDecoration: 'underline',
    },
    descriptions: {
        fontSize: '1.1rem',
        color: '#6f42c1',
    },
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();
    //   const [checked, setChecked] = useState(false);
    //   useEffect(() => {
    //     setChecked(true);
    //   }, []);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={place.imageUrl} //process.env.PUBLIC_URL + "./images/bg4.jpg"
                title='Contemplative Reptile'
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    className={classes.title}
                >
                    {place.title}
                </Typography>
                <Typography
                    variant='body2'
                    component='p'
                    style={{ color: '#6f42c1' }}
                    className={classes.description}
                >
                    {place.description}
                </Typography>
            </CardContent>
        </Card>
        // <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>

        // </Collapse>
    );
}
