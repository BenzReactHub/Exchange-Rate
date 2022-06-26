type SwapProps = {
  handleSwap: () => void;
  currency1Symbol: string;
  currency1Amount: number;
  currency2Symbol: string;
  currency2Amount: number;
};

export const Swap = (props: SwapProps) => {
  return (
    <div className="flex justify-between phone:w-10/12 tablet:w-8/12 laptop:w-4/12 px-3">
      <div>
        <button
          onClick={props.handleSwap}
          className="bg-emerald-500 text-white rounded p-1 my-2"
        >
          交換
        </button>
      </div>
      <div>
        <p className="p-1 my-2 text-emerald-500 font-bold">
          {props.currency1Amount}
          {props.currency1Symbol} = {props.currency2Amount}
          {props.currency2Symbol}
        </p>
      </div>
    </div>
  );
};
