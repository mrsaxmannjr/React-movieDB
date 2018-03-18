import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import styled from "styled-components";
import "./App.css";

import rootReducer from "./rootReducer";

import MoviesList from "./Movies/MoviesList";
import MovieDetail from "./Movies/MovieDetail";
import Toggle from "./Toggle/Toggle";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <HeaderH1>SM-MDB</HeaderH1>
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
export default App;

const HeaderH1 = styled.h1`
  color: white;
`;
