import React from "react";
import { gemCertificate } from "../../assets";

function ProductDetails(props) {
  const { product, handleSelectedImage, setHandleSelectedImage } = props;

  function getSelectedImage(index) {
    setHandleSelectedImage(index);
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 my-8 mx-1">
      <div className="images flex flex-col gap-3 ">
        <div className="w-[90%] xsm:w-[340px] flex flex-col m-auto">
          <div className="relative">
            {/* Product Image */}
            <img
              src={product.image[handleSelectedImage]}
              className="w-[90%] h-auto xsm:h-[300px] xsm:w-[340px] m-auto object-cover rounded-md"
              alt=""
            />
            {/* Is Certified PNG */}
            {product.isCertified && (
              <img
                src={gemCertificate}
                alt=""
                className="w-5 xsm:w-10 h-5 xsm:h-10 absolute top-3 xsm:top-2 left-6 xsm:left-2 pointer-events-none"
              />
            )}
          </div>

          {/* Selecting the product Image */}
          <div className="flex justify-between my-3">
            {product.image.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={`w-[50px] xsm:w-[70px] h-[50px] xsm:h-[70px] object-cover cursor-pointer rounded-sm  ${
                  index === handleSelectedImage
                    ? "border-4 border-secondaryText border-rounded-sm"
                    : ""
                }`}
                onClick={() => getSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:w-1/2 max-w-[500px] m-auto">
        <p className="text-sm text-[#7E7E7E] hover:text-[#575353] cursor-default font-semibold tracking-wider">
          {product.type}
        </p>
        <h1 className="text-3xl tracking-wide font-Bold  border-b-2">
          {product.name}
        </h1>

        <p className=" border-b-2 py-2">
          <span className="text-sm">only for</span>{" "}
          <span className="text-2xl"> {product.price}</span> <span>LKR</span>
        </p>
        <div className="border-b-2 text-[12px]">
          <p className="underline text-sm  font-bold">Details</p>
          <div className="flex flex-col gap-1">
            <p>
              <span>Clarity value of</span> <span>{product.clarity}</span>{" "}
              <span>%</span>
            </p>
            <div className="relative group inline-block">
              <p>
                <span>Dimension: </span>
                <span>{product.dimension.length}</span> <span>mm</span>{" "}
                <span>x</span> <span>{product.dimension.width}</span>{" "}
                <span>mm</span> <span>x</span>{" "}
                <span>{product.dimension.height}</span> <span>mm</span>
              </p>
              <div
                className="absolute bottom-full hidden
                   group-hover:block group-focus:block bg-gray-800 text-white text-[8px]
                   px-2 py-1 rounded shadow-lg transition-all"
              >
                <p>Length x Width x Height</p>
              </div>
            </div>
            <p>
              <span>Weight: </span>
              <span> {product.weight}</span> <span>g</span>
            </p>
            <p>
              <span>Color: </span>
              <span className="capitalize">{product.color}</span>
            </p>
            <p>
              <span>Certificate: </span>
              <span
                className={`capitalize ${
                  product.isCertified ? "text-green-500" : "text-red-500"
                }`}
              >
                {" "}
                {product.isCertified ? "Available" : "Not Available"}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold  underline">Description</p>
          <p className="text-[12px] text-justify"> {product.description}</p>
        </div>
        <div>
          <button className="bg-secondaryText text-white py-1 px-4 rounded-md font-bold tracking-wider">
            Go To Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
