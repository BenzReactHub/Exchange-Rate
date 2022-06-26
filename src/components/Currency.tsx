import { FC } from "react";

type CurrencyProps = {
  id: string;
  symbol: string;
  amount: number;
  data: {
    symbol: string;
    name: string;
  }[];

  setAmount: (amount: number) => void;
  setSymbol: (symbol: string) => void;
};

export const Currency: FC<CurrencyProps> = ({
  id,
  symbol,
  amount,
  data,
  setAmount,
  setSymbol,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(e.target.value);
  };
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };
  return (
    <div className="my-2 phone:w-10/12 tablet:w-8/12 laptop:w-4/12 px-3">
      <select id={id} className="w-6/12" onChange={handleSelect} value={symbol}>
        {data
          ? data.map((currency) => {
              return (
                <option key={Math.random()} value={currency.symbol}>
                  {currency.name}
                </option>
              );
            })
          : null}
      </select>
      <input
        className="text-right w-6/12"
        type="text"
        value={amount}
        onChange={handleAmount}
      />
    </div>
  );
};
