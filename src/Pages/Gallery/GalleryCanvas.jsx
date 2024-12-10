import React, { useContext } from "react";
import { ShopContext } from "../../App";
import { Masonry } from "@mui/lab";

function GalleryCanvas() {
  const { shopItems, setShopItems } = useContext(ShopContext);
  const heights = [90, 50, 100, 160, 90, 100, 150, 60, 50, 80, 200, 40];

  return (
    <div className="flex justify-center flex-wrap gap-10 w-full max-w-[1080px] mx-auto mb-10">
      <div className="relative flex flex-wrap gap-6 items-center  ">
        
          {shopItems.map((item, index) => (
            <img
              src={item.image[0]}
              key={item.id}
              alt=""
              className="object-cover cursor-pointer w-[150px] h-[150px]"
            />
          ))}
        
      </div>
    </div>
  );
}

export default GalleryCanvas;
