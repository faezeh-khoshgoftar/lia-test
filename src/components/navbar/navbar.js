import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import { categoriesService } from "../../_services/categories.service";
import { logo, shoppingCartNavbar } from "../../assets/images/images";
import ShoppingCard from "../shopping-card/shopping-card";

const selectShoppingCartProducts = (state) => state;

function Navbar() {
  const shoppingCartProducts = useSelector(selectShoppingCartProducts);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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
    <nav className="px-5 py-3">
      <img src={logo} alt="lia-logo" />
      <div className="flex justify-between mt-2">
        <ul className="flex gap-x-3 text-gray-600">
          {categories?.map(({ name, id }) => (
            <li>
              <NavLink to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Popover
          isOpen={isPopoverOpen}
          positions={["top", "bottom", "left", "right"]}
          content={
            <div className="bg-white rounded-lg p-2 shadow-md w-[400px]">
              {shoppingCartProducts?.map((product) => (
                <ShoppingCard product={product} />
              ))}
            </div>
          }
        >
          <div
            className="cursor-pointer relative"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <div className="bg-red-400 absolute -right-4 -top-4 text-white w-6 h-6 text-center rounded-full">
              {shoppingCartProducts?.reduce(function (acc, obj) {
                return acc + obj.quantity;
              }, 0)}
            </div>
            <img src={shoppingCartNavbar} alt="lia-logo" />
          </div>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
