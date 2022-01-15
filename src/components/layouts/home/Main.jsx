import React from "react";
// import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Footer from "./Footer";
import Navbar from "../../utils/navbar/Navbar";

function Main() {
  return (
    <>
      <Grid style={{ backgroundColor: "#fff159" }}>
        <Navbar />
      </Grid>
      <Grid
        style={{
          backgroundColor: "rgba(226, 219, 219, 0.883)",
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
}

export default Main;
