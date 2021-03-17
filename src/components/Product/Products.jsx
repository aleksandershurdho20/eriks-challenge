import React, { useEffect, useState } from "react";
import * as API from "utils/api";
import ProductCards from "./ProductCards";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.getProductData().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const getHighlighted = (field) => {
    const isHighlighted = products.every(
      (product) => product[field] === products[0][field]
    );
    return isHighlighted;
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row w-100">
          {products.length > 0
            ? products.map((product, index) => (
                <ProductCards
                  product={product}
                  data={index}
                  key={index}
                  getHighlighted={getHighlighted}
                />
              ))
            : "No Products..."}
        </div>
      </div>
    </>
  );
}
