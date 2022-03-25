import React from "react";
import {Card ,CardActions,CardContent,CardMedia} from '@mui/material';


const CharacterCard=({fullName ,title ,family,imageUrl})=>{


    return (
        <Card>
            {fullName}
            {title}
            {family}
            {imageUrl}
        </Card>
    )

}

export default CharacterCard;