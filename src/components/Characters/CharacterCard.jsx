import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Modal,
} from "@mui/material";
const CharacterCard = ({ name, image }) => {

  //states
  const[isOpen,setIsOpen] =useState(false);

  //styles
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <CardActionArea onClick={() =>{
        setIsOpen(true);
      }}>
        <Card raised>
          <CardMedia
            component="img"
            alt={name}
            image={image}
            sx={{ width: 200, height: 250, top: 0, left: 0 }}
          />
        </Card>
      </CardActionArea>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          Chutiya Hain Vroo?
        </Box>
      </Modal>
    </>
  );
};

export default CharacterCard;
