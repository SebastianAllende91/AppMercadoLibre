import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Cards = ({ card }) => {
  const { title, price, id, thumbnail } = card;
  // const newTitle = title.substring(0, 30);

  const navigate = useNavigate();

  const handleId = () => {
    navigate(`${id}`);
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Grid container xs={12} sm={12} md={12} lg={12}>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          style={{
            height: "200px",
          }}
        >
          <Button onClick={handleId} size="large" className={styles.btnCard}>
            <Card className={styles.cardContainer}>
              <CardMedia
                component="img"
                className={styles.imgCard}
                image={thumbnail}
                alt="random"
              />
            </Card>
          </Button>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          style={{
            height: "180px",
          }}
        >
          <Button onClick={handleId} size="large" className={styles.btnInfo}>
            <Typography gutterBottom variant="body1" className={styles.title}>
              {title}
            </Typography>
          </Button>
          <Typography>
            <p className={styles.price}>${price}</p>
            {price >= 3500 && (
              <p className={styles.subtitle}>
                <b>Llega gratis mañana </b>
              </p>
            )}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <FavoriteBorderIcon color="primary" className={styles.icon} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
