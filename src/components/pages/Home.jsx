import React, { useEffect, useState } from "react";
import MainContent from "../layouts/MainContent";
import CarouselComponent from "../utils/carousel/Carousel";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <CssBaseline />
      {isVisible && (
        <Grid>
          <CarouselComponent />
        </Grid>
      )}
      <MainContent />
    </>
  );
};

export default Home;
