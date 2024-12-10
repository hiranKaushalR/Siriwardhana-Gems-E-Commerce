import React, { useState } from "react";
import { cross } from "../../assets";

function GemstoneFilter() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  // Array of gemstone categories
  const categories = [
    "sapphire",
    "spinel",
    "ruby",
    "alexandrite",
    "emerald",
    "garnet",
  ];

  const prices = ["low to high", "high to low"];

  const stocks = ["in stock", "out of stock"];

  return (
    <div className="flex flex-col rounded-md border-black border w-[180px] py-4">
      <div>
        <h1 className="text-center my-2">Category</h1>
        <div className="flex flex-wrap gap-2 text-[13px] px-[4px]">
          {categories.map((category) => (
            <p
              key={category}
              className={`${
                selectedCategory === category
                  ? "border-2 border-secondaryText rounded-lg font-semibold px-1 bg-secondaryText text-white"
                  : "border-2 border-secondaryText rounded-lg font-semibold px-1"
              } flex gap-1 items-center cursor-pointer`}
              onClick={() =>
                selectedCategory === category
                  ? setSelectedCategory(null)
                  : setSelectedCategory(category)
              }
            >
              {selectedCategory === category && (
                <img src={cross} alt="" className="w-4 h-4" />
              )}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-center my-2">Price</h1>
        <div className="flex flex-wrap gap-2 text-[13px] px-[4px]">
          {prices.map((price) => (
            <p
              key={price}
              className={`${
                selectedPrice === price
                  ? "border-2 border-secondaryText rounded-lg font-semibold px-1 bg-secondaryText text-white"
                  : "border-2 border-secondaryText rounded-lg font-semibold px-1"
              } flex gap-1 items-center cursor-pointer`}
              onClick={() =>
                selectedPrice === price
                  ? setSelectedPrice(null)
                  : setSelectedPrice(price)
              }
            >
              {selectedPrice === price && (
                <img src={cross} alt="" className="w-4 h-4" />
              )}
              {price.charAt(0).toUpperCase() + price.slice(1)}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-center my-2">Stocks</h1>
        <div className="flex flex-wrap gap-2 text-[13px] px-[4px]">
          {stocks.map((stock) => (
            <p
              key={stock}
              className={`${
                selectedStock === stock
                  ? "border-2 border-secondaryText rounded-lg font-semibold px-1 bg-secondaryText text-white"
                  : "border-2 border-secondaryText rounded-lg font-semibold px-1"
              } flex gap-1 items-center cursor-pointer`}
              onClick={() =>
                selectedStock === stock
                  ? setSelectedStock(null)
                  : setSelectedStock(stock)
              }
            >
              {selectedStock === stock && (
                <img src={cross} alt="" className="w-4 h-4" />
              )}
              {stock.charAt(0).toUpperCase() + stock.slice(1)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GemstoneFilter;