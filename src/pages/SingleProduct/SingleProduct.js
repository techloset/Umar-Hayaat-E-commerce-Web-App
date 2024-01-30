import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchDataContext } from "../../store/FetchDataContext";
import secondImage from "../../assets/images/imgForSingleProduct.png";

export default function SingleProduct() {
  const [productDetail, setProductDetail] = useState({});

  const { id } = useParams();
  console.log("id", id);
  let productId = Number(id);

  const { fetchedProducts } = useContext(FetchDataContext);
  console.log("fetchedProducts", fetchedProducts);

  useEffect(() => {
    if (productId) {
      const requiredProduct = fetchedProducts.find((product) => {
        return product.id === productId;
      });
      console.log("requiredProduct", requiredProduct);
      setProductDetail(requiredProduct);
    } else {
      console.error("Product not found");
    }
  }, [productId, fetchedProducts]);

  return (
    <>
      {productDetail && (
        <>
          <div>
            {/* Product Details */}
            <div></div>
        
            {/* Buttons */}
            <div></div>
        
            {/* Customer Reviews */}
            <div></div>
        
            {/* Related Products */}
            <div></div>
          </div>
        </>
      )}
    </>
  );
}
