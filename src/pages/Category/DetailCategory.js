import React from "react";
import { useParams } from "react-router";
import Category from "./Category";

export default function DetailCategory() {
  const param = useParams();

  return (
    <div>
      <Category />
      <h1>Kamu berada di Kategori {param.idCategories}</h1>
    </div>
  );
}
