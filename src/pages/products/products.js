import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesService } from "../../_services/categories.service";
import { productsService } from "../../_services/products.service";
import ProductCard from "../../components/product-card/product-card";

function Products() {
  let { categoryId } = useParams();
  const [title, setTitle] = useState("");
  const [products, setProducts] = useState(null);

  //get products
  useEffect(() => {
    productsService
      .getAllProducts(categoryId)
      .then((res) => {
        setProducts(res.list);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

  //get title
  useEffect(() => {
    categoriesService
      .getCategoryByID(categoryId)
      .then((res) => {
        setTitle(res.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

  return (
    <section>
      <h1 className="mb-14">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 md:gap-x-3 gap-y-2">
        {products ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </section>
  );
}

export default Products;
