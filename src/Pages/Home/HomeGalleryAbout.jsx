import React, { useContext } from "react";
import { Masonry } from "@mui/lab";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";
import { IconCaretDownFilled } from "@tabler/icons-react";
function HomeGalleryAbout() {
  const { shopItems } = useContext(ShopContext);

  const heights = [90, 50, 100, 160, 90, 100, 150, 60, 50, 80, 60, 20];

  return (
    <div className="flex justify-center lg:justify-between sm:text-left  items-start flex-wrap md:gap-10 w-full max-w-[1080px] mx-auto my-20">
      <div className="relative flex flex-col gap-3">
        <p className="text-md lg:text-lg font-semibold text-center md:text-left">
          Gallery
        </p>
        <Masonry columns={3} spacing={0.5}>
          {shopItems.slice(0, 12).map((item, index) => (
            <img
              src={item.image[0]}
              key={item.id}
              alt=""
              className="object-cover"
              style={{ height: heights[index % heights.length] }}
            />
          ))}
        </Masonry>
        <div className="absolute bottom-3 left-0 w-full h-[70px] bg-white blur-xl" />
        <div className="absolute bottom-2 left-0 w-full h-[70px] bg-white blur-lg" />
        <div className="absolute bottom-1 left-0 w-full h-[70px] bg-white blur-sm" />
        <div className="absolute bottom-0 left-0 w-full h-[70px] bg-white" />
        <Link className="absolute bottom-1 w-full">
          <IconCaretDownFilled className="mx-auto p-0 cursor-pointer left-0 w-full text-blue-500 hover:text-blue-700" />
        </Link>
      </div>
      <div className="w-[400px] lg:w-[500px] flex flex-col gap-3">
        <p className="text-md lg:text-lg font-semibold text-center md:text-left">
          About
        </p>
        <div className="text-justify">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sunt? Esse cumque facilis dolores expedita laborum dolor fugit nisi
            vero ipsa sequi inventore quos, iure accusantium, at amet ab qui
            placeat harum impedit atque quas cum modi! Corrupti amet quo omnis
            consectetur molestiae sed laborum itaque at enim corporis facere
            tempora, tenetur libero qui earum unde.
          </p>
          <br />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quisquam possimus iusto repellendus distinctio quasi delectus, ab
            ipsum impedit ipsam, molestias voluptatibus. Quidem eos repellendus
            deserunt soluta molestiae aliquam expedita impedit aperiam eum
            debitis tempora incidunt iure exercitationem, corporis officiis hic,
            doloribus assumenda totam inventore aut fugit. Veritatis laboriosam
            aperiam, nesciunt...{" "}
            <Link className="text-blue-500 hover:text-blue-700">Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeGalleryAbout;
