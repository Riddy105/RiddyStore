import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import { getProducts } from "../../api/api";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";
const Root = () => {
  const dispatch = useDispatch();
  const pathname = useLocation();
  const [clear, setClear] = useState<boolean>();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        dispatch(cartActions.writeProducts(allProducts));
      } catch (err) {}
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
