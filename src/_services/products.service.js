import { ApiHelper } from "../helper/api-request";
import instance from "../helper/interceptor";

const getAllProducts = (id) => {
  return instance
    .get(ApiHelper.get("products").concat(`?categories=${id}`))
    .then((response) => response.data);
};

export const productsService = {
  getAllProducts,
};
