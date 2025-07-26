import { useState } from "react";
import { Counter } from "./components/Counter";
import { ReducerCounter } from "./components/ReducerCounter";
import { FormDetails } from "./components/FormDetails";
import { FormDetailsRef } from "./components/FormDetailsRef";
import { CounterRedux } from "./components/CounterRedux";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { TodoList } from "./components/TodoList";

function App() {

  return (
    <>
     {/* <Counter/> */}
     {/* <ReducerCounter/> */}
     {/* <FormDetails/> */}
     {/* <FormDetailsRef/> */}
     <TodoList/>
     {/* <Provider store={appStore}>
      <CounterRedux/>
     </Provider> */}
    </>
  );
}

export default App;
