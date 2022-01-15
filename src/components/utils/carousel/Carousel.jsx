import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import img1 from "../../../images/img1.webp";
import img2 from "../../../images/img2.webp";
import img3 from "../../../images/img3.webp";
import img4 from "../../../images/img4.webp";
import img5 from "../../../images/img5.webp";
import { useNavigate } from "react-router-dom";

const CarouselComponent = (props) => {
  const items = [
    {
      img: img1,
      value: "aire acondicionado",
    },
    {
      img: img2,
      value: "jardineria",
    },
    {
      img: img3,
      value: "ofertas",
    },
    {
      img: img4,
      value: "disney",
    },
    {
      img: img5,
      value: "comioneta 4 x 4",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  const navigate = useNavigate();

  return (
    <Paper>
      <Button
        className="CheckButton"
        onClick={() => navigate(`products/${props.item.value}`)}
      >
        <img src={props.item.img} alt={props.item.name} width="100%" />
      </Button>
    </Paper>
  );
};

export default CarouselComponent;
