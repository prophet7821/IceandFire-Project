import React, { useState } from "react";
import {
  Card,
  CardContent,
  Backdrop,
  Fade,
  CardActionArea,
  CardMedia,
  Modal,
  Box,
  Grid,
} from "@mui/material";
import { Text, Heading } from "@chakra-ui/react";

const CharacterCard = (character) => {
  //states
  const [isOpen, setIsOpen] = useState(false);

  //styles
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "black",
    color: "white",
    border: "2px solid #000",
    "border-radius":"10px",
    boxShadow: 24,
    p:4
  };

  return (
    <>
      <CardActionArea
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Card raised>
          <CardMedia
            component="img"
            alt={character.name}
            image={character.image}
            sx={{ width: 200, height: 250, top: 0, left: 0 }}
          />
        </Card>
      </CardActionArea>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
        <Grid container sx={styles} lg={8} md={8} sm={8} xs={8}justifyContent="center">
        <Grid item mr={2} lg={4} md={8} sm={12} xs={12}>
        <CardMedia
            component="img"
            alt={character.name}
            image={character.image}
          />
        </Grid>
          <Grid item mr={2} lg={4} md={5} sm={6} xs={6}>
             < Heading>{character.name}</Heading>
             <Text>Actor:{character.actor}</Text>
             <Text>House:{character.house}</Text>
             <Text>Father:{character.father}</Text>
              <Text>Titles:{character.titles.map((title)=>{
                if(title.includes("Baratheon") || title.includes("Stark") || title.includes("Targaryen"))
                return;
                else
                return <span>{title}<br/></span>;
              })}</Text>
          </Grid>
          <Grid item mr={2} lg={3} md={5} sm={6} xs={6}>
          <Text>Origin:{character.origin.map((ori)=>{
                return <span>{ori}<br/></span>;
              })}</Text>
              <Text>Culture:{character.culture.map((cul)=>{
                return <span>{cul}<br/></span>;
              })}</Text>
              <Text>Religion:{character.religion.map((rel)=>{
                return <span>{rel}<br/></span>;
              })}</Text>
          <Text>Spouse:{character.spouse.map((spous)=>{
                return <span>{spous}<br/></span>;
              })}</Text>
              <Text>Lovers:{character.lovers.map((lover)=>{
                return <span>{lover}<br/></span>;
              })}</Text>
              <Text>Siblings:{character.siblings.map((lover)=>{
                return <span>{lover}<br/></span>;
              })}</Text>
          </Grid>
        </Grid>
        </Fade>
      </Modal>
    </>
  );
};

export default CharacterCard;
