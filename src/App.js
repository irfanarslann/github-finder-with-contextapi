import Navbar from "./components/Navbar";
import Search from "./components/Search";
import UserList from "./components/UserList";
import GithubState from "./context/github/GithubState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <GithubState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Search />
              <UserList />
            </Route>

            <Route path="/userdetail/:id">
              <UserDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </GithubState>
    </div>
  );
}

export default App;
