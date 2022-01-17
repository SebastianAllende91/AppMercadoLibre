import React from "react";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const mediosDePago = [
  {
    id: 1,
    name: "Tarjeta de crédito",
    opcion: "Ver promociones bancarias",
    icono: <CreditCardOutlinedIcon />,
  },
  {
    id: 2,
    name: "Tarjeta de débito",
    opcion: "ver más",
    icono: <AddCardOutlinedIcon />,
  },
  {
    id: 3,
    name: "Cuotas sin tarjeta",
    opcion: "conoce Mercado Crédito",
    icono: <TaskAltOutlinedIcon />,
  },
  {
    id: 4,
    name: "Efectivo",
    opcion: "ver más",
    icono: <MonetizationOnOutlinedIcon />,
  },
];

const MediosDePagos = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "white",
      }}
    >
      <Grid item xs={11}>
        <Grid
          container
          justifyContent={"space-evenly"}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: "90px",
          }}
        >
          {mediosDePago.map((item) => (
            <Grid
              container
              sx={12}
              sm={3}
              md={2}
              key={item.id}
              justifyContent={"space-evenly"}
              style={{
                margin: "0 1%",
                paddingTop: "1%",
              }}
            >
              <Grid container>
                <Grid
                  xs={4}
                  height={100}
                  style={{
                    paddingTop: "5%",
                  }}
                >
                  <Button
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    {item.icono}
                  </Button>
                </Grid>
                <Grid xs={8}>
                  <Typography
                    variant="caption"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "start",
                      fontSize: "15px",
                      margin: "0px",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="caption">
                    <Link
                      to={"/"}
                      style={{
                        textDecoration: "none",
                        color: "#03a9f4",
                      }}
                    >
                      {item.opcion}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Button
          style={{
            justifyContent: "center",
            height: "90px",
            width: "100%",
            borderLeft: "1px solid grey",
          }}
        >
          <AddCircleIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default MediosDePagos;
