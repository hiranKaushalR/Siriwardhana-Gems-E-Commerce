import React, { createContext, useState, useEffect } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeCanvas from "./Pages/Home/HomeCanvas";
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
        </Route>
      </Routes>
    </BrowserRouter>
   </ShopContext.Provider>
  );
}

export default App;
