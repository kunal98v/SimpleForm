import { useState } from "react";
import { Counter } from "./components/Counter";
import { ReducerCounter } from "./components/ReducerCounter";
import { FormDetails } from "./components/FormDetails";
import { FormDetailsRef } from "./components/FormDetailsRef";
import { CounterRedux } from "./components/CounterRedux";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { TodoList } from "./components/TodoList";
import { TodoListRedux } from "./components/TodoListRedux";
import { Accoridan } from "./components/Accoridan";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <ReducerCounter/> */}
      {/* <FormDetails/> */}
      {/* <FormDetailsRef/> */}
      {/* <TodoList/> */}
      {/* <Provider store={appStore}> */}
      {/* <TodoListRedux/> */}
      {/* <Accoridan/> */}
      {/* <CounterRedux/> */}
      {/* </Provider>  */}
      <Pagination />
    </>
  );
}

export default App;
