import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center m-10">
      <div className="text-xl font-semibold">Count : {count}</div>
      <div>
        <button
          className="px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
