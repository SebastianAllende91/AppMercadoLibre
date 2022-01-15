import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./ItemTwo.module.css";

const ItemTwo = () => {
  const { productSelect } = useSelector((state) => state.ProductReducer);

  const { condition, sold_quantity, title, price, currency_id, attributes } =
    productSelect;

  return (
    <Grid items xs={12} md={4} className={styles.container}>
      <Typography variant="body2" className={styles.header}>
        {condition} {condition ? " | " : ""} {sold_quantity} Sold
      </Typography>
      <Typography variant="h6" gutterBottom className={styles.title}>
        <b> {title} </b>
        <br /> <strike> ${price + price * 0.1}</strike> <br />${price}{" "}
        {currency_id} <br /> en 12 x ${(price / 12).toFixed(2)} {currency_id}
      </Typography>
      <Typography variant="subtitle2" align="left" color="text.secondary">
        <ul>
          {attributes &&
            attributes.slice(0, 15).map((el, i) => (
              <li key={i}>
                {el.name} :{el.value_name}
              </li>
            ))}
        </ul>
      </Typography>
    </Grid>
  );
};

export default ItemTwo;
