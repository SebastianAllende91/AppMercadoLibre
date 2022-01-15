import http from "../helpers/AxiosInstance";

const section = "/sites/MLA/search";

// https://api.mercadolibre.com/MLA658219360

const getProducts = (query) => {
  return http.get(`${section}?q=${query}`);
};

const getById = (id) => {
  return http.get(`items/${id}`);
};

const ProductService = {
  getProducts,
  getById,
};

export default ProductService;
