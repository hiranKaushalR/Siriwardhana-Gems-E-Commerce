import React, { useState } from "react";
import { cross, filter } from "../../assets";
import { SwipeableDrawer } from "@mui/material";

function GemstoneFilter() {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const toggleFilterBarDrawer = (newOpen) => () => {
    setIsFilterBarOpen(newOpen);
  };

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
    <div>
      <div
        className="flex items-center gap-2 sm:hidden my-4"
        onClick={toggleFilterBarDrawer(true)}
      >
        <img src={filter} alt="" />
        <p>Filter</p>
      </div>{" "}
      <div className="hidden sm:flex flex-col rounded-md my-4 border-r-2 w-[180px] py-4">
        <div>
          <h1 className="text-center my-4">Category</h1>
          <div className="flex flex-wrap gap-4 text-[13px] px-[4px]">
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
          <h1 className="text-center my-4">Price</h1>
          <div className="flex flex-col items-center gap-4 text-[13px] px-[4px]">
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
          <h1 className="text-center my-4">Stocks</h1>
          <div className="flex flex-wrap flex-col items-center gap-4 text-[13px] px-[4px]">
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
      <SwipeableDrawer
        className="sm:hidden"
        open={isFilterBarOpen}
        onClose={toggleFilterBarDrawer(false)}
        anchor="bottom" // This sets the drawer to slide in from the bottom
      >
        <div>
          <h1 className="text-center my-2 text-lg font-bold">Category</h1>
          <div className="flex flex-wrap gap-4 px-[4px]">
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

        <div className="my-3">
          <h1 className="text-center my-2 text-lg font-bold">Price</h1>
          <div className="flex flex-wrap gap-4 px-[4px]">
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

        <div className="mb-6">
          <h1 className="text-center my-2 text-lg font-bold">Stocks</h1>
          <div className="flex flex-wrap gap-4 px-[4px]">
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
      </SwipeableDrawer>
    </div>
  );
}

export default GemstoneFilter;
