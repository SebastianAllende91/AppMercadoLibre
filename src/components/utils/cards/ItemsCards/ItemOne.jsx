import React, { useState } from "react";
import styles from "./ItemOne.module.css";
import {
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import Progress from "../../progress/Progress";

const ItemOne = () => {
  const { productSelect } = useSelector((state) => state.ProductReducer);

  const { pictures, thumbnail, title } = productSelect;

  const [img, setImg] = useState(thumbnail);

  const handleClick = (imagen) => {
    setImg(imagen);
  };

  return (
    <Grid xs={12} md={5} className={styles.container}>
      <ImageList
        sx={{ width: 250, height: 250 }}
        md={{ width: 350, height: 350 }}
        cols={8}
        className={styles.boxImages}
      >
        {!pictures ? (
          <Progress />
        ) : (
          pictures.slice(0, 7).map((item) => (
            <ImageListItem key={item.id}>
              <Button onClick={() => handleClick(item.url)}>
                <img
                  src={item.url}
                  srcSet={item.url}
                  alt={item.title}
                  loading="lazy"
                  className={styles.listImages}
                />
              </Button>
            </ImageListItem>
          ))
        )}
      </ImageList>
      <CardMedia
        component="img"
        image={img}
        alt={title}
        className={styles.imageProduct}
      />
    </Grid>
  );
};

export default ItemOne;
