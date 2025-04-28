import React from "react";
import { Link } from "react-router-dom";
import { gemCertificate } from "../../assets";
import { Carousel } from "flowbite-react";

function ProductSimiller(props) {
  const { shopItems, product } = props;

  if (!shopItems || !product) {
    console.error("Props 'shopItems' or 'product' are missing or undefined.");
    return <p>Loading products...</p>;
  }

  const simillerItems = shopItems.filter(
    (item) => item.id !== product.id && item.type === product.type
  );

  const displayItems =
    simillerItems.length > 0
      ? simillerItems.slice(0, 3)
      : shopItems
          .filter((item) => item.id !== product.id) 
          .sort(() => Math.random() - 0.5) 
          .slice(0, 3); 

  return (
    <div className="my-10">
      <div className="my-3">
        <h1>Not sure about this one?</h1>
        <h1>Check out our other similar products:</h1>
      </div>
      <div className="flex md:justify-between justify-center gap-4 overflow-x-auto">
        {displayItems.map((item) => (
          <div
            key={item.id}
            onClick={() => console.log(`Selected: ${item.image}`)}
            className="shadow-2xl bg-gradient-to-bl bg-card from-20% hover:from-40% w-[280px] h-[420px] rounded-md flex-shrink-0 " // Add group class here
          >
            <div className="relative w-[100%] h-[160px] transition duration-300 ease-in-out group-hover:scale-[1.01]">
              <div className="relative transition duration-300 ease-in-out group-hover:scale-[1.01]">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="object-cover w-[98%] h-[160px] mx-auto p-[6px] rounded-xl transition duration-300 ease-in-out group-hover:scale-[1.02]"
                />
                <p className="absolute bottom-3 left-3 text-white bg-black text-[10px] py-[2px] px-1 rounded-md font-semibold pointer-events-none">
                  {item.type}
                </p>
                {item.isCertified && (
                  <img
                    src={gemCertificate}
                    alt="Certified"
                    className="w-5 h-5 absolute top-3 right-3 pointer-events-none"
                  />
                )}
              </div>
            </div>

            <div className="text-sm m-1 flex flex-col  h-[250px]">
              <div className="flex h-full ">
                <div className="flex flex-col justify-between h-[95%] p-2 border-r-2">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-[12px] text-justify">
                    {item.description.split(" ").slice(0, 20).join(" ")} ...
                  </p>
                  <p>{item.price}.00 LKR</p>
                  <p
                    className={`${
                      item.stock > 3
                        ? "text-green-500"
                        : item.stock <= 3 && item.stock !== 0
                        ? "text-yellow-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.stock > 3
                      ? "Available "
                      : item.stock <= 3 && item.stock !== 0
                      ? `Only ${item.stock} left`
                      : `Out of stock`}
                  </p>
                </div>
                <div className="p-1 flex flex-col justify-evenly">
                  <img src={item.image[1]} alt="" className="rounded-full w-[180px]" />
                  <img src={item.image[2]} alt="" className="rounded-full w-[180px]" />
                </div>
              </div>

              <Link
                to={`/gemstones/${item.id}`}
                className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out text-center font-semibold cursor-pointer tracking-wide"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSimiller; 