import React from "react";
import Logo from "./images/money.png";
import "tailwindcss/tailwind.css";
import { Currency } from "./components/Currency";
import Currencies from "./data/currencies.json";
import { Swap } from "./components/Swap";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={Logo} alt="Logo" className="h-0.8/6 w-0.8/6" />
        <h1 className="my-2 text-emerald-500 text-4xl font-bold">匯率計算器</h1>
        <p className="my-2">選擇貨幣單位獲取匯率</p>
        <Currency id="1" data={Currencies} />
        <Swap />
        <Currency id="2" data={Currencies} />
      </div>
    </div>
  );
}

export default App;
