import React, { useEffect } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import { getProducts } from "../../api/api";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";
const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        dispatch(cartActions.writeProducts(allProducts));
      } catch (err) {}
    };
    fetchProducts();
  });
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
