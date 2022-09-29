import React from "react";
import { useNavigate } from "react-router";
import Menu from "../../component/Menu";

export default function Category() {
  const navigate = useNavigate();

  const toCategory = (event) => {
    const value = event.target.value;
    if (event.code === "Enter") {
      navigate(`/categories/${value}`);
    }
  };

  return (
    <div>
      <h1>Ini Halaman Kategori</h1>
      <Menu />
      <br /> <br />
      <span> Mau Ke Kategori Apa ? </span>
      <input onKeyDown={toCategory} />
    </div>
  );
}
