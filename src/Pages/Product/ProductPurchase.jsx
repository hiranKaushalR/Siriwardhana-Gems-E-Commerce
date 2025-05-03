import React, { useState, useEffect } from "react";
import { SwipeableDrawer, Button } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function ProductPurchase(props) {
  const { setIspurchaseTabOpen, isPurchaseTabOpen, product } = props;

  // State to track the anchor position
  const [anchor, setAnchor] = useState(window.innerWidth < 640 ? "bottom" : "right");

  // Function to update the anchor based on window width
  const updateAnchor = () => {
    setAnchor(window.innerWidth < 640 ? "bottom" : "right");
  };

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener("resize", updateAnchor);
    return () => {
      window.removeEventListener("resize", updateAnchor);
    };
  }, []);

  // Function to close the drawer or modal
  const handleClose = () => {
    setIspurchaseTabOpen(false);
  };

  return (
    <div>
      {isPurchaseTabOpen && (
        <SwipeableDrawer
          open={isPurchaseTabOpen}
          onClose={handleClose}
          anchor={anchor} // Dynamically set anchor
        >
          <div>
            <h1 className="text-2xl font-bold">Purchase</h1>
          </div>
          <div>
            <div className="py-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                <span className="font-bold text-xl">
                  Still In The Developments
                </span>
                <br />
                <span>Hold your horses 🐎</span>
              </p>
              <DotLottieReact
                src="https://lottie.host/63e43fb7-61be-486f-aef2-622b144f7fc1/2m8UGcP8KR.json"
                loop
                autoplay
                className="w-[300px] h-[150px] mx-auto my-5"
              />
            </div>
          </div>
          <div>
            <Button className="w-full" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
}

export default ProductPurchase;
