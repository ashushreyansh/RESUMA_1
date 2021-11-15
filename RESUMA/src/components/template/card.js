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
    background: 'rgba(0, 0, 0, 0.5)',
    margin: '20px',
  },
  media: {
    height: 400,
  },
  title:{
    fontWeight:'bold',
    fontSize:'2rem',
    color:'#fff',
  },
  descriptions:{
    fontSize:'1.1rem',
    color:'#ddd',
  },
});

export default function ImageCard({place, checked}) {
  const classes = useStyles();
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     setChecked(true);
//   }, []);

  return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={place.imageUrl}//process.env.PUBLIC_URL + "./images/bg4.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    {place.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    {place.description}
                </Typography>
            </CardContent>
        </Card> 
    // <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
        
    // </Collapse>
  );
}
