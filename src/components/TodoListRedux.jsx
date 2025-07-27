import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo ,removeTodo, completeTodo, incTodo} from "../utils/todoSlice";

export const TodoListRedux = () => {
  const todo = useRef('');

  const dispatch = useDispatch()

  const data = useSelector((item) => item.todo.data)
  
  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Todo List - Redux</h2>
      <div className="flex justify-center items-center m-5">
        <input
          ref={todo}
          className="border-b border-gray-400 w-4/12"
          type="text"
          placeholder="Enter todo"
        ></input>
        <button
          className="bg-blue-500 w-25 h-7 m-1 rounded-xl cursor-pointer hover:bg-blue-600"
          onClick={() => dispatch(addTodo(todo.current.value))}
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
              <span>Count : {item.count}</span>
              <button className="bg-purple-400 w-12 cursor-pointer mx-2 hover:bg-purple-500 rounded-md"
                onClick={() => dispatch(incTodo(index))}>Inc</button>
              <button
                className="bg-yellow-400 w-12 cursor-pointer mx-2 hover:bg-yellow-500 rounded-md"
                onClick={() => dispatch(completeTodo(index))}
              >
                Done
              </button>
              <button
                className="bg-red-600 w-7 cursor-pointer hover:bg-red-700 rounded-xl"
                onClick={() => dispatch(removeTodo(index))}
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
