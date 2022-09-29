import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../component/Menu";

export default function Product() {
  const navigate = useNavigate();

  const toDetailProduct = (event) => {
    const value = event.target.value;
    if (event.code === "Enter") {
      navigate(`/products/${value}`);
    }
  };

  return (
    <div>
      <h1>Ini Halaman Produk</h1>
      <Menu />
      <br />
      <br />
      <span> Mau Ke Produk Apa ? </span>
      <input onKeyDown={toDetailProduct} />
    </div>
  );
}
