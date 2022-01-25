import Navbar from "./Navbar";
import Home from "./Home";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateBlog from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import React, { useContext, useReducer } from "react";
//import ComponentC from "./components/componentC";
import CounterOne from "./components/CounterOne";
import ComponentA from "./useReducerAndContext/ComponentA";
import ComponentB from "./useReducerAndContext/ComponentB";
import ComponentC from "./useReducerAndContext/ComponentC";
import ParentComponent from "./useCallBack.js/ParentComponent";
export const userContext = React.createContext();
export const userHometownContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route path="/create" component={CreateBlog} />
    //         <Route path="/blogs/:id" component={BlogDetails} />
    //         <Route path="*" component={NotFound} />
    //       </Switch>
    //     </div>
    //   </div>
    // </BrowserRouter>

    // useContext hook
    // <div className="App">
    //   <userContext.Provider value={"Mrunmayi"}>
    //     <userHometownContext.Provider value={"Jalgaon"}>
    //       <ComponentC />
    //     </userHometownContext.Provider>
    //   </userContext.Provider>
    // </div>

    //useReducer
    // <div className="App">
    //   <CounterOne></CounterOne>
    // </div>

    //useReducer & useContext
    // <userContext.Provider
    //   value={{ countStateValue: count, countdispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count-{count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </userContext.Provider>

    //useCallback
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
