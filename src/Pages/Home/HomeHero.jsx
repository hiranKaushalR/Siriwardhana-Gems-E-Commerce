import React, { useState, useEffect, useContext } from "react";
import { Sale } from "../../assets";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";

function HomeHero() {
  const { shopItems, setShopItems } = useContext(ShopContext);
  const [topTwoItemInHero, setTopTwoItemInHero] = useState([]);

  useEffect(() => {
    if (shopItems.length > 0) {
      // Sort items by points in descending order
      const sortedItems = [...shopItems].sort((a, b) => b.points - a.points);

      // Find the top items based on 2, handling ties randomly
      const topItems = [];
      let i = 0;
      while (topItems.length < 2 && i < sortedItems.length) {
        const currentPoints = sortedItems[i].points;
        const samePointsItems = sortedItems.filter(
          (item) => item.points === currentPoints
        );

        if (topItems.length + samePointsItems.length <= 2) {
          topItems.push(...samePointsItems);
        } else {
          // Randomly select remaining items to make total 2
          const remainingCount = 2 - topItems.length;
          const randomItems = samePointsItems
            .sort(() => Math.random() - Math.random())
            .slice(0, remainingCount);
          topItems.push(...randomItems);
        }

        i += samePointsItems.length;
      }

      setTopTwoItemInHero(topItems);
    }
  }, [shopItems, 2]);

  return (
    <div className="flex justify-center  sm:text-left sm:justify-between items-start flex-wrap gap-10 w-full max-w-[1080px] mx-auto mb-10">
      <div className="flex justify-center mx-auto gap-2">
        <div className="bg-primary w-[300px] lg:w-[400px] h-[250px] rounded-xl hidden sm:block">
          <div className="cursor-pointer p-5 rounded-lg flex relative w-[300px] lg:w-[400px] h-[250px] transition-transform duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="flex flex-col justify-center gap-5 items-start">
              <div>
                <p className="text-primaryText font-bold text-xl lg:text-2xl z-50">
                  Check Out Our Offers
                </p>
                <p className="text-sm lg:text-[16px]">
                  on the best Ceylon gems
                </p>
              </div>
              <p className="text-black border-b-2 border-secondaryText text-sm lg:text-[16px]">
                Shop Now
              </p>
            </div>
            <img
              src={Sale}
              alt=""
              className="absolute top-10 lg:top-8 right-2 w-[180px] lg:w-[200px] opacity-50 z-10"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 sm:gap-0">
          <div className="bg-primary w-[300px] h-[120px] rounded-xl block sm:hidden ">
            <div className="cursor-pointer p-5 rounded-lg flex relative w-[300px] lg:w-[400px] h-[120px] transition-transform duration-300 ease-in-out transform hover:scale-[1.02]">
              <div className="flex flex-col justify-center">
                <div>
                  <p className="text-primaryText font-semibold text-lg z-50">
                    Check Out Our Offers
                  </p>
                  <p className="text-[12px]">
                    on the best Ceylon gems
                  </p>
                </div>
              </div>
              <img
                src={Sale}
                alt=""
                className="absolute top-4 right-2 w-[100px] lg:w-[200px] opacity-50 z-10"
              />
            </div>
          </div>
          {topTwoItemInHero.map((item) => (
            <Link to={`/gemstones/${item.id}`}>
            <div
              key={item.id}
              className="flex flex-col justify-center gap-5 items-start lg:w-[400px] h-[120px] bg-secondary rounded-xl cursor-pointer"
            >
              <div className="p-2 text-primaryText flex w-full justify-between gap-3 transition-transform duration-300 ease-in-out transform hover:scale-[1.01]">
                <div className="flex flex-col justify-center ">
                  <p className="font-semibold text-sm lg:text-[16px]">
                    {item.name}
                  </p>
                  <p className="text-[12px]">
                    <span>{item.type}</span> | <span>{item.weight} g</span>
                  </p>
                </div>
                <img
                  src={item.image[0]}
                  alt=""
                  className="h-[100px] w-[100px] object-cover rounded-xl"
                />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
