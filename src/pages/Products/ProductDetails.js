import React from "react";
import { useParams } from "react-router";
import Product from "./Product";

export default function ProductDetails() {
  const param = useParams();

  return (
    <div>
      <Product />
      <h1>Ini Halaman Dari Produk {param.idProducts} </h1>
    </div>
  );
}
