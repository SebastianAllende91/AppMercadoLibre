import React, { useState } from "react";
import styles from "./ItemThree.module.css";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useSelector } from "react-redux";

const ItemThree = () => {
  const { productSelect } = useSelector((state) => state.ProductReducer);
  console.log(productSelect);

  const { initial_quantity, warranty, price } = productSelect;

  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Grid items xs={12} md={3} className={styles.container}>
      <Grid className={styles.grid}>
        <Typography className={styles.deliveryData}>
          <LocalShippingOutlinedIcon /> Llega gratis <b>mañana</b>
        </Typography>
        <Typography className={styles.deliveryData}>
          <StorefrontOutlinedIcon /> Retira gratis <b>a partir del miercoles</b>{" "}
          en correos y otros puntos
        </Typography>
        {initial_quantity && (
          <Grid xs={12} md={12}>
            <Typography>Available stock:</Typography>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <Select
                value={quantity}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className={styles.select}
              >
                <MenuItem value={1}>
                  Cantidad: <b>1 u</b>({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={1}>
                  Cantidad: <b>1 u</b> ({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={2}>
                  Cantidad: <b>2 u</b> ({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={3}>
                  Cantidad: <b>3 u</b> ({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={4}>
                  Cantidad: <b>4 u</b> ({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={5}>
                  Cantidad: <b>5 u</b> ({initial_quantity} disponible )
                </MenuItem>
                <MenuItem value={6}>
                  Cantidad: <b>6 u</b> ({initial_quantity} disponible )
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        )}
        <Button
          variant="contained"
          size="large"
          // className={styles.btnPrimary}
          style={{
            width: " 90%",
            margin: "5px 5%",
            fontSize: "12px",
          }}
        >
          Comprar ahora
        </Button>
        <Button
          variant="contained"
          size="large"
          // className={styles.btnSecondary}
          style={{
            width: "90%",
            margin: "10px 5%",
            backgroundColor: "#e3f2fd",
            color: "#2196f3",
            fontSize: "12px",
          }}
        >
          Agregar al carrito
        </Button>
        <Typography
          variant="subtitle2"
          align="left"
          color="text.secondary"
          className={styles.text}
        >
          <KeyboardReturnOutlinedIcon className={styles.icon} />
          <Link to="/" className={styles.links}>
            Devolucion gratis.
          </Link>{" "}
          Tenés 30 días desde que lo recibís.
        </Typography>
        <Typography
          variant="subtitle2"
          align="left"
          color="text.secondary"
          className={styles.text}
        >
          <GppGoodOutlinedIcon className={styles.icon} />
          <Link to="/" className={styles.links}>
            Compra Protegida
          </Link>
          recibí el producto que esperabas o te devolvemos tu dinero.
        </Typography>
        <Typography
          variant="subtitle2"
          align="left"
          color="text.secondary"
          className={styles.text}
        >
          <EmojiEventsOutlinedIcon className={styles.icon} />
          <Link to="/" className={styles.links}>
            Mercado Puntos
          </Link>
          . Sumás {price * 0.01} puntos.
        </Typography>
        {warranty && (
          <Typography
            variant="subtitle2"
            align="left"
            color="text.secondary"
            className={styles.text}
          >
            <MilitaryTechOutlinedIcon className={styles.icon} />
            {warranty}
          </Typography>
        )}
      </Grid>
      <Grid className={styles.grid}>
        <Typography variant="h6" className={styles.title}>
          Información sobre el vendedor
        </Typography>

        <Typography variant="p" className={styles.text2}>
          <LocationOnOutlinedIcon color="action" className={styles.icon} />
          Ubicacion: <br />
          Bs As - Argentina
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemThree;
