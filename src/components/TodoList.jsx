import React, { useRef, useState } from "react";

export const TodoList = () => {
  const [data, setData] = useState([]);

  const todo = useRef(null);

  const addTodo = () => {
    setData([...data, {todo : todo.current.value, status: false}]);
  }

  const handleRemove = (index) => {
    const filteredData = data.filter((item, key) => index != key);
    setData(filteredData);
  }

  const handleComplete = (index) => {
      const completeData = data.map((item, key) => index == key ? {todo : item.todo , status : !item.status} : item)
      setData(completeData)
  }
  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Todo List</h2>
      <div className="flex justify-center items-center m-5">
        <input
          ref={todo}
          className="border-b border-gray-400 w-4/12"
          type="text"
          placeholder="Enter todo"
        ></input>
        <button
          className="bg-blue-500 w-25 h-7 m-1 rounded-xl cursor-pointer hover:bg-blue-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="m-4 py-2 px-5 shadow-xl w-6/12 flex  justify-between"
          >
            <div className= {item.status ? "line-through" : ""}>{item.todo}</div>
            <div>
              <button
                className="bg-yellow-400 w-12 cursor-pointer mx-2 hover:bg-yellow-500 rounded-md"
                onClick={() => handleComplete(index)}
              >
                Done
              </button>
              <button
                className="bg-red-600 w-7 cursor-pointer hover:bg-red-700 rounded-xl"
                onClick={() => handleRemove(index)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
