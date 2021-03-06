import React, { useState } from "react";
import {
  Card,
  CardContent,
  Backdrop,
  Fade,
  CardActionArea,
  CardMedia,
  Modal,
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
    "border-radius": "10px",
    boxShadow: 24,
    p: 1,
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.2rem",
      xl: "1.5rem",
    },
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
          <Grid
            container
            item
            sx={styles}
            lg={8}
            md={9}
            sm={10}
            xs={11}
            justifyContent="center"
          >
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <CardMedia
                component="img"
                alt={character.name}
                image={character.image}
              />
            </Grid>
            <Grid item mr={1} lg={4} md={4} sm={4} xs={4}>
              <CardContent>
                <Heading>{character.name}</Heading>
                <Text>Actor:{character.actor}</Text>
                <Text>House:{character.house}</Text>
                <Text>Father:{character.father}</Text>
                <Text>
                  Titles:
                  {character.titles.map((title, index) =>(
                    [
                      "Baratheon",
                      "Stark",
                      "Targaryen",
                      "Greyjoy",
                      "Lannister",
                    ].every(w=>!title.includes(w)) && <span key={index}>{title}<br/></span>
                  ))}
                </Text>
              </CardContent>
            </Grid>
            <Grid item mr={1} lg={3} md={3} sm={3} xs={3}>
              <CardContent>
                <Text>
                  Origin:
                  {character.origin.map((ori, index) => (
                    <span key={index}>
                      {ori}
                      <br />
                    </span>
                  ))}
                </Text>
                <Text>
                  Culture:
                  {character.culture.map((cul, index) => (
                    <span key={index}>
                      {cul}
                      <br />
                    </span>
                  ))}
                </Text>
                <Text>
                  Religion:
                  {character.religion.map((rel, index) => (
                    <span key={index}>
                      {rel}
                      <br />
                    </span>
                  ))}
                </Text>
                <Text>
                  Spouse:
                  {character.spouse.map((spous, index) => (
                    <span key={index}>
                      {spous}
                      <br />
                    </span>
                  ))}
                </Text>
                <Text>
                  Lovers:
                  {character.lovers.map((lover, index) => (
                    <span key={index}>
                      {lover}
                      <br />
                    </span>
                  ))}
                </Text>
                <Text>
                  Siblings:
                  {character.siblings.map((sibling, index) => (
                    <span key={index}>
                      {sibling}
                      <br />
                    </span>
                  ))}
                </Text>
              </CardContent>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
};

export default CharacterCard;
