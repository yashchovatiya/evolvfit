import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "lightgrey",
        margin: "10px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function DishComp({ index, name, imgUrl, protin, carbs, fats }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader

                title={name}
            />
            <CardMedia
                className={classes.media}
                image={imgUrl}
                title={name}
            />

            <CardContent>
                <h3>protin: {protin}</h3>
                <h3>carbs: {carbs}</h3>
                <h3>fats: {fats}</h3>
                <h2>Total calories: {((protin * 60) + (carbs * 50) + (fats * 40))}</h2>
            </CardContent>

        </Card>
    );
}



export default DishComp;