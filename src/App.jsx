import React, { createContext, useState, useEffect } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeCanvas from "./Pages/Home/HomeCanvas";
import GemstoneCanvas from "./Pages/Gemstones/GemstoneCanvas";
import GalleryCanvas from "./Pages/Gallery/GalleryCanvas";
import ContactCanvas from "./Pages/Contact/ContactCanvas";
import AboutCanvas from "./Pages/About/AboutCanvas";
import { shopItems as ShopItemsFromJSON } from "./constants/ShopItems";
import "./App.scss";

export const ShopContext = createContext();

function App() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    setShopItems(ShopItemsFromJSON);
  });

  console.log(shopItems);
  return (
   <ShopContext.Provider value={{ shopItems, setShopItems }}>
     <BrowserRouter>
      <ScrollToTop />
      <Routes className="font-primary">
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeCanvas />} />
          <Route path="/gemstones" element={<GemstoneCanvas />} />
          <Route path="/gallery" element={<GalleryCanvas />} />
          <Route path="/contact" element={<ContactCanvas />} />
          <Route path="/about" element={<AboutCanvas />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </ShopContext.Provider>
  );
}

export default App;
