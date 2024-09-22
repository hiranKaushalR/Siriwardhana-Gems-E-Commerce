import React, { useContext } from "react";
import { ShopContext } from "../../App";
import { Masonry } from "@mui/lab";

function GalleryCanvas() {
  const { shopItems, setShopItems } = useContext(ShopContext);
  const heights = [90, 50, 100, 160, 90, 100, 150, 60, 50, 80, 200, 40];

  return (
    <div className="flex justify-center flex-wrap gap-10 w-full max-w-[1080px] mx-auto mb-10">
      <div>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 5 }} spacing={1}>
          {shopItems.map((item, index) => (
            <img
              src={item.image[0]}
              key={item.id}
              alt=""
              className="object-cover"
              style={{ height: heights[index % heights.length] }}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default GalleryCanvas;
