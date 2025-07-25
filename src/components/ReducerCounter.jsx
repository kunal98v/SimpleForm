import { useReducer } from "react";

export const ReducerCounter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="flex flex-col items-center justify-center m-10">
        <div className="text-xl font-bold">Counter : {state.count}</div>
        <div>
          <button
            className="bg-gray-300 w-20 h-10 hover:bg-gray-400 m-3 cursor-pointer"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button
            className="bg-gray-300 w-20 h-10 hover:bg-gray-400 cursor-pointer"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
          <div className="text-center">
            <button
              className="bg-red-300 w-20 h-10 hover:bg-red-400 cursor-pointer"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
