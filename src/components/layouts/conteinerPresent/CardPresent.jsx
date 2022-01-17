import React from "react";
import { Grid } from "@mui/material";
import styles from "./CardPresent.module.css";

const CardPresent = ({ data, text }) => {
  return (
    <>
      <Grid xs={12}>
        <h2 style={{ marginLeft: "25px" }}>{text}</h2>
      </Grid>
      {data.map((el) => (
        <Grid
          xs={2}
          spacing={2}
          style={{ backgroundColor: "white" }}
          key={el.id}
          className={styles.container}
        >
          <div className={styles.cardImg}>
            <img src={el.img} alt={el.name} />
          </div>
          <hr />
          <div className={styles.cardText}>
            <p className={styles.cardPrice}>${el.price}.00</p>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default CardPresent;
