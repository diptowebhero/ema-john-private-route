import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./components/context/AuthProvider";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOder from "./components/PlaceOder/PlaceOder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shop from "./components/Shop/Shop";
import Register from "./Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path="/placeoder">
              <PlaceOder></PlaceOder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

