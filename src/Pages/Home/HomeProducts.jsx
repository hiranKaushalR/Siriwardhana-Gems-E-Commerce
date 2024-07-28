import React, { useState, useContext, useEffect, useMemo } from "react";
import { ShopContext } from "../../App";

function HomeProducts() {
  const { shopItems, setShopItems } = useContext(ShopContext);
  const [trendyProductsFilter, setTrendyProductsFilter] = useState("all");
  const [topItems, setTopItems] = useState([]);
  const [topFilteredItems, setTopFilteredItems] = useState([]);
  const [numberOfShopItemCards, setNumberOfShopItemCards] = useState(
    window.innerWidth > 768 ? 8 : window.innerWidth > 640 ? 6 : 4
  );

  // Filter products by type
  const filteredProducts = useMemo(
    () => shopItems.filter((item) => item.type === trendyProductsFilter),
    [shopItems, trendyProductsFilter]
  );

  const displayedItems =
    trendyProductsFilter === "all" ? topItems : topFilteredItems;

  function handleNumberOfShopItemCards() {
    if (window.innerWidth > 768) {
      setNumberOfShopItemCards(8);
    } else if (window.innerWidth > 640) {
      setNumberOfShopItemCards(6);
    } else {
      setNumberOfShopItemCards(4);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleNumberOfShopItemCards);
    return () => {
      window.removeEventListener("resize", handleNumberOfShopItemCards);
    };
  }, []);

  useEffect(() => {
    if (shopItems.length > 0) {
      // Sort items by points in descending order
      const sortedItems = [...shopItems].sort((a, b) => b.points - a.points);

      // Find the top items based on numberOfShopItemCards, handling ties randomly
      const topItems = [];
      let i = 0;
      while (
        topItems.length < numberOfShopItemCards &&
        i < sortedItems.length
      ) {
        const currentPoints = sortedItems[i].points;
        const samePointsItems = sortedItems.filter(
          (item) => item.points === currentPoints
        );

        if (topItems.length + samePointsItems.length <= numberOfShopItemCards) {
          topItems.push(...samePointsItems);
        } else {
          // Randomly select remaining items to make total numberOfShopItemCards
          const remainingCount = numberOfShopItemCards - topItems.length;
          const randomItems = samePointsItems
            .sort(() => Math.random() - Math.random())
            .slice(0, remainingCount);
          topItems.push(...randomItems);
        }

        i += samePointsItems.length;
      }

      setTopItems(topItems);
    }
  }, [shopItems, numberOfShopItemCards]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      // Sort items by points in descending order
      const sortedItems = [...filteredProducts].sort(
        (a, b) => b.points - a.points
      );

      // Find the top items based on numberOfShopItemCards, handling ties randomly
      const topFilteredItems = [];
      let i = 0;
      while (
        topFilteredItems.length < numberOfShopItemCards &&
        i < sortedItems.length
      ) {
        const filteredCurrentPoints = sortedItems[i].points;
        const filteredSamePointItems = sortedItems.filter(
          (item) => item.points === filteredCurrentPoints
        );

        if (
          topFilteredItems.length + filteredSamePointItems.length <=
          numberOfShopItemCards
        ) {
          topFilteredItems.push(...filteredSamePointItems);
        } else {
          // Randomly select remaining items to make total numberOfShopItemCards
          const filteredRemainingCount =
            numberOfShopItemCards - topFilteredItems.length;
          const filteredRandomItems = filteredSamePointItems
            .sort(() => Math.random() - Math.random())
            .slice(0, filteredRemainingCount);
          topFilteredItems.push(...filteredRandomItems);
        }

        i += filteredSamePointItems.length;
      }

      setTopFilteredItems(topFilteredItems);
    } else {
      setTopFilteredItems([]); // Clear if no items match the filter
    }
  }, [filteredProducts, numberOfShopItemCards]);

  return (
    <div className="flex flex-col justify-center text-center sm:text-left sm:justify-between items-start flex-wrap w-full max-w-[1080px] mx-auto my-10 gap-3">
      <h1 className="font-[500] mx-auto">Trendy Products</h1>
      {/* Filter */}
      <div className="hidden sm:flex gap-6 text-sm mx-auto  text-gray-600 font-semibold">
        <p
          className={`cursor-pointer ${
            trendyProductsFilter === "all"
              ? "active-styles"
              : "non-active-styles"
          }`}
          onClick={() => setTrendyProductsFilter("all")}
        >
          All
        </p>
        <p
          className={`cursor-pointer ${
            trendyProductsFilter === "Sapphire"
              ? "active-styles"
              : "non-active-styles"
          }`}
          onClick={() => setTrendyProductsFilter("Sapphire")}
        >
          Sapphire
        </p>
        <p
          className={`cursor-pointer ${
            trendyProductsFilter === "Alexandrite"
              ? "active-styles"
              : "non-active-styles"
          }`}
          onClick={() => setTrendyProductsFilter("Alexandrite")}
        >
          Alexandrite
        </p>
        <p
          className={`cursor-pointer ${
            trendyProductsFilter === "Spinel"
              ? "active-styles"
              : "non-active-styles"
          }`}
          onClick={() => setTrendyProductsFilter("Spinel")}
        >
          Spinel
        </p>
      </div>
      <div className="sm:hidden flex justify-center mx-auto">
        <select
          name=""
          id=""
          onChange={(e) => setTrendyProductsFilter(e.target.value)}
          className="border-1 border-gray-300 p-1 rounded-md outline-none text-[12px] font-secondary"
        >
          <option value="all">All</option>
          <option value="Sapphire">Sapphire</option>
          <option value="Alexandrite">Alexandrite</option>
          <option value="Spinel">Spinel</option>
        </select>
      </div>
      <div className="shop-items-in-home-page grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mx-auto">
        {displayedItems.map((item, index) => (
          <div key={index}>
            <img
              src={item.image[0]}
              alt=""
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-[1.02] object-cover"
            />
            <p className="text-[12px]">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
