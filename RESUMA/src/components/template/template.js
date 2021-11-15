import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './card';
import Places from '../../data/data';
import CardAnimations from '../../hook/cardAnimation';

const useStyles = makeStyles((theme) => ({
    root:{
        // minHeight:'100px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // [theme.breakpoints.down('md')]: {
        //     flexDirection: 'column',
        //   },
    },
}));

export default function Template(){
    const classes = useStyles();
    const checked = CardAnimations('header');
    return(
        <div className={classes.root} id="card">
            <ImageCard place={Places[1]} checked={checked} />
            <ImageCard place={Places[0]} checked={checked} />
            <ImageCard place={Places[1]} checked={checked} />
            <ImageCard place={Places[0]} checked={checked} />
        </div>
    );
}
