import { ApiHelper } from "../helper/api-request";
import instance from "../helper/interceptor";

const getAllCategories = () => {
  return instance
    .get(ApiHelper.get("categories"))
    .then((response) => response.data);
};

const getCategoryByID = (id) => {
  return instance
    .get(ApiHelper.get("categories").concat(`?id=${id}`))
    .then((response) => response.data);
};

export const categoriesService = {
  getAllCategories,
  getCategoryByID,
};
