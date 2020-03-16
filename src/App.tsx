import React from "react";
import "./App.css";
import { Home, ProductDetails, ProductList } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./pages/routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <main className='Content'>
            <Switch>
              <Route exact path={[Routes.Home, Routes.Default]}>
                <Home />
              </Route>
              <Route exact path={Routes.ProductList}>
                <ProductList />
              </Route>
              <Route exact path={Routes.ProductDetails}>
                <ProductDetails />
              </Route>
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
