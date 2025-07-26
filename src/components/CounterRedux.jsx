import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../utils/counterSlice";

export const CounterRedux = () => {
  const dispatch = useDispatch();

  const count = useSelector((item) => item.counter.count);

  return (
    <div className="flex flex-col items-center m-10">
      <div className="text-xl font-semibold">Count : {count}</div>
      <div>
        <button
          className="px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="text-center">
          <button
            className="px-4 py-2 mx-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
