import React from "react";
import { Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import Menu from "./Menu";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <Container maxWidth="lg" style={{ height: "120px" }}>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "transparent",
          backgroundColor: "#fff159",
        }}
      >
        <Typography
          variant="button"
          color="inherit"
          align="left"
          sx={{ flex: 1 }}
        >
          <Link to={`/`} replace>
            <img
              src={logo}
              alt="logo"
              height="34px"
              top="11px"
              width="134px"
              style={{ marginRight: "30px" }}
            />
          </Link>
        </Typography>
        <SearchForm />
      </Toolbar>

      <Menu />
    </Container>
  );
};

export default Navbar;
