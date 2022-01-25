import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateBlog} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

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
    // <div className="App">
    //   <ParentComponent />
    // </div>
  );
}

export default App;
