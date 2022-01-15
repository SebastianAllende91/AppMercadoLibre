import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onSubmitInput = () => {
    if (query !== "") navigate(`products/${query}`);
  };

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <>
      <Box
        sx={{
          width: 589,
          height: 40,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Buscar productos,marcas y más..."
          id="fullWidth"
          onChange={handleChange}
          size="small"
          style={{
            backgroundColor: "white",
            height: "40px",
            width: "589px",
          }}
        />
      </Box>
      <IconButton
        onClick={onSubmitInput}
        style={{
          borderLeft: "1px solid rgba(226, 219, 219, 0.883)",
          height: "40px",
          width: "40px",
          borderRadius: "3px",
          padding: "0px",
          backgroundColor: "white",
        }}
      >
        <SearchIcon
          style={{
            color: "black",
          }}
        />
      </IconButton>
      <Link to="/products/ofertas" style={{ textDecoration: "none" }}>
        <IconButton style={{ width: "340px", height: "44px" }}>
          <StorefrontOutlinedIcon />
          <Typography variant="body2" gutterBottom>
            Envios gratis en 24 hs a partir de $ 3500
          </Typography>
        </IconButton>
      </Link>
    </>
  );
};

export default SearchForm;
