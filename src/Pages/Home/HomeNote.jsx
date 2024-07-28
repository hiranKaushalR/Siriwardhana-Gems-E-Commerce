import React from "react";

function HomeNote() {
  return (
    <div className="flex flex-col justify-center text-primaryText 
     sm:justify-between items-start flex-wrap w-full max-w-[1080px] mx-auto my-8 gap-3 font-secondary bg-secondary p-6 pl-4 border-l-[7px] border-[#D9D9D9]">
      <p className="text-sm sm:text-[16px] font-bold">Notice !</p>
      <p className="text-[12px] text-justify sm:text-left sm:text-sm">
        A Gems does NOT have a defined value.Price of a Gem varies from
        buyer to buyer. This depends on many factors such as Type, Quality, Cut,
        Color, Inclusions, Treatment and many more.Please make sure you
        understand this before buying. Thanks.{" "}
      </p>
    </div>
  );
}

export default HomeNote;
