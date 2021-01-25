import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBarChat from "./components/SideBarChat";

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
