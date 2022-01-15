import React from "react";
import { IconButton, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SelectCategoy from "./SelectCategoy";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const menu = [
  { id: 1, name: "Ofertas" },
  { id: 2, name: "Historial" },
  { id: 3, name: "Supermercado" },
  { id: 4, name: "Moda" },
  { id: 5, name: "Vender" },
  { id: 6, name: "Ayuda" },
];

const Menu = () => {
  return (
    <Grid container>
      <Grid container item xs={2}>
        <Grid item xs={2} style={{ marginTop: "10px" }}>
          <LocationOnOutlinedIcon />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="caption">Enviar a Sebastian </Typography>
          <Typography variant="subtitle2">La Fuente 123 </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={2}>
          <SelectCategoy />
        </Grid>
        <Grid item xs={7}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {menu.map((item) => (
              <li
                style={{
                  listStyle: "none",
                  fontSize: "14px",
                }}
                key={item.id}
              >
                <Link
                  size="small"
                  style={{
                    fontSize: "14px",
                    color: "rgba(51,51,51,.6)",
                    padding: "2px",
                    textDecoration: "none",
                    marginRight: "2%",
                  }}
                  to={`products/${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Grid container item xs={4}>
          <Grid item xs={3}>
            <AccountCircleOutlinedIcon
              fontSize="small"
              style={{ marginTop: "20px" }}
            />
          </Grid>
          <Grid item xs={6} style={{ marginTop: "15px" }}>
            <Typography variant="caption">Sebastian</Typography>
          </Grid>
          <Grid item xs={3}>
            <KeyboardArrowDown fontSize="small" style={{ marginTop: "17px" }} />
          </Grid>
        </Grid>
        <Grid item xs={3} style={{ marginTop: "15px" }}>
          <Typography variant="caption">Mis compras</Typography>
        </Grid>
        <Grid container item xs={3}>
          <Grid item xs={7} style={{ marginTop: "15px" }}>
            <Typography variant="caption">Favoritos</Typography>
          </Grid>
          <Grid item xs={2}>
            <KeyboardArrowDown fontSize="small" style={{ marginTop: "17px" }} />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => alert("notificaciones")}>
            <NotificationsOutlinedIcon
              fontSize="small"
              style={{ color: "black", marginTop: "10px" }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => alert("carrito")}>
            <ShoppingCartOutlinedIcon
              fontSize="small"
              style={{ color: "black", marginTop: "10px" }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
