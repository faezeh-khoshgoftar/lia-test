import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoriesService } from "../../_services/categories.service";
import CategoryCard from "../../components/category-card/category-card";

function Categories() {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    categoriesService
      .getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section>
      <h1 className="mb-14">دسته بندی ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-y-2">
        {categories ? (
          categories.map(({ image, name, id }) => (
            <Link to={`/categories/${id}`}>
              <CategoryCard image={image} name={name} key={id} />
            </Link>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </section>
  );
}

export default Categories;
