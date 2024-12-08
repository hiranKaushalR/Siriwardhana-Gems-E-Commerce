import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../App";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductSimiller from "./ProductSimiller";
import { Link } from "react-router-dom";
import { backArrow } from "../../assets";

function ProductCanvas() {
  const { shopItems } = useContext(ShopContext); // Removed setShopItems if not needed
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [handleSelectedImage, setHandleSelectedImage] = useState(0);

  useEffect(() => {
    // Ensure both `id` and `item.id` are compared as strings
    const foundProduct = shopItems.find(
      (item) => String(item.id) === String(id)
    );
    setProduct(foundProduct);
  }, [id, shopItems]); // Add `shopItems` to the dependency array


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="xl:p-4 font-primary w-full max-w-[1080px] mx-auto px-3">
      <Link to=".." className="flex items-center my-3">
        <img src={backArrow} alt="" className="w-8 h-8" />{" "}
        <p className="hover:underline">Go Back</p>
      </Link>
      <ProductDetails
        product={product}
        handleSelectedImage={handleSelectedImage}
        setHandleSelectedImage={setHandleSelectedImage}
      />
      <ProductSimiller
        shopItems={shopItems}
        product={product}
      />
    </div>
  );
}

export default ProductCanvas;
