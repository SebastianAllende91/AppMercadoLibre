import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import CardItem from "../components/utils/cards/CardItem";
import ProductSearch from "../components/layouts/home/conteinerPresent/ProductSearch";
import Main from "../components/layouts/home/Main";

const MainRoute = () => {
  return (
    //ver lo de use Location, useSearchParams video de youtube
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index path="/" element={<Home />} />
        <Route path="products/:searchProduct" element={<ProductSearch />} />
        <Route
          path="products/:searchProduct/:productId"
          element={<CardItem />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
