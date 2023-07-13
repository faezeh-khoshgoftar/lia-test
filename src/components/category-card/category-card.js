import React from "react";

function CategoryCard({ image, name }) {
  return (
    <article className="rounded-[10px]">
      <img
        src={`https://shopapi.liateam.com${image}`}
        alt={name}
        width="100%"
        height="100%"
      />
      <div className="py-2 text-center bg-[#DDDDDD] text-lg">{name}</div>
    </article>
  );
}

export default CategoryCard;
