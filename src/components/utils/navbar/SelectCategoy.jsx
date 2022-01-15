import React, { useState } from "react";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const sections = [
  { title: "Technology" },
  { title: "Sports" },
  { title: "Vehicles" },
  { title: "Estate" },
  { title: "Appliance" },
  { title: "Construction" },
  { title: "Science" },
  { title: "Beauty" },
  { title: "Style" },
  { title: "Health" },
];

const SelectCategoy = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: open ? "#333" : null,
        pb: open ? 2 : 0,
        color: open ? "white" : null,
        width: "115px",
        height: "50px",
      }}
    >
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 1,
          pt: 1,
          pb: open ? 0 : 2.5,
          //"&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
        }}
      >
        <ListItemText
          primary="categorias"
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: "medium",
            lineHeight: "20px",
            mb: "2px",
            mt: "7px",
            color: "rgba(51,51,51,.6)",
          }}
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: "16px",
            color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            // mr: -1,
            // opacity: 0,
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
            marginTop: "6.5px",
            color: "rgba(51,51,51,.6)",
          }}
        />
      </ListItemButton>
      {open &&
        sections.map((item, index) => (
          <ListItemButton
            key={item.index}
            sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
            onClick={() => setOpen(!open)}
          >
            <Link
              to={`products/${item.title.toLowerCase()}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: "medium",
                }}
              />
            </Link>
          </ListItemButton>
        ))}
    </Box>
  );
};

export default SelectCategoy;
