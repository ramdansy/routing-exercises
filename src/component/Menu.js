import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <br />
      <Link to="/categories"> Category </Link>
      <br />
      <Link to="/products"> Product </Link>
      <br />
      <Link to="/carts"> Cart </Link>
    </div>
  );
}
