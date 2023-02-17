import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Create from "./pages/create/Create.js";
import Recipe from "./pages/recipe/Recipe.js";
import Search from "./pages/search/Search.js";
import NavLink from "./components/navlink/navlink/NavLink/NavLink";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/recipe/:id">
            <Recipe />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
