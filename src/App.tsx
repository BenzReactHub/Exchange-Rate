import React, { useState, useEffect } from "react";
import Logo from "./images/money.png";
import "tailwindcss/tailwind.css";
import { Currency } from "./components/Currency";
import Currencies from "./data/currencies.json";
import { Swap } from "./components/Swap";

function App() {
  const [currency1Symbol, setCurrency1Symbol] = useState("TWD");
  const [currency2Symbol, setCurrency2Symbol] = useState("USD");
  const [currency1Amount, setCurrency1Amount] = useState(1);
  const [currency2Amount, setCurrency2Amount] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1Symbol}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const rate = data.rates[currency2Symbol];
        setCurrency2Amount(rate * currency1Amount);
      });
  }, [currency1Symbol, currency2Symbol, currency1Amount, currency2Amount]);

  const handleSwap = () => {
    setCurrency1Symbol(currency2Symbol);
    setCurrency2Symbol(currency1Symbol);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={Logo} alt="Logo" className="h-0.8/6 w-0.8/6" />
        <h1 className="my-2 text-emerald-500 text-4xl font-bold">匯率計算器</h1>
        <p className="my-2">選擇貨幣單位獲取匯率</p>
        <Currency
          id="1"
          symbol={currency1Symbol}
          data={Currencies}
          amount={currency1Amount}
          setAmount={setCurrency1Amount}
          setSymbol={setCurrency1Symbol}
        />
        <Swap
          handleSwap={handleSwap}
          currency1Symbol={currency1Symbol}
          currency1Amount={currency1Amount}
          currency2Symbol={currency2Symbol}
          currency2Amount={currency2Amount}
        />
        <Currency
          id="2"
          symbol={currency2Symbol}
          data={Currencies}
          amount={currency2Amount}
          setAmount={setCurrency2Amount}
          setSymbol={setCurrency2Symbol}
        />
      </div>
    </div>
  );
}

export default App;
