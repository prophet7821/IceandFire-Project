import React ,{useState} from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Modal
} from "@mui/material";
const CharacterCard = ({ fullName, title, family, imageUrl }) => {

  return (
    <CardActionArea>
      <Card raised>
        <CardMedia
          component="img"
          alt={fullName}
          image={imageUrl}
          sx={{ width: 200, height: 200 }}
        />
      </Card>
    </CardActionArea>
    
  );
};

export default CharacterCard;
