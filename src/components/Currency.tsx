import { FC } from "react";

type CurrencyProps = {
  id: string;
  data: {
    symbol: string;
    name: string;
  }[];
};

export const Currency: FC<CurrencyProps> = ({ id, data }) => {
  return (
    <div className="my-2 w-3/12">
      <select id={id} className="w-6/12">
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
      {id === "1" ? (
        <input className="text-right w-6/12" type="text" value={1} />
      ) : (
        <input className="text-right w-6/12" type="text" />
      )}
    </div>
  );
};
