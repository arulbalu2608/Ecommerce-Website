import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, NavItem } from "reactstrap";
import Jewellery from "./Jewellery";
import AllItems from "./AllItems";
import Mens from "./Mens";
import Womens from "./Womens";
import Electronics from "./Electronics";
import Cart from "./Cart";
import BuyNow from "./BuyNow";
import "./style.css";

function RouteFunction(props) {
  return (
    <Router>
      <div className="Main">
        <h1 className="center">E commerce Website</h1>
        <br />
        <Nav>
          <NavItem>
            <Link className="linkdec" to="/">
              All
            </Link>
          </NavItem>
          <NavItem>
            <Link className="linkdec" to="/Electronics">
              Electronics
            </Link>
          </NavItem>
          <NavItem>
            <Link className="linkdec" to="/Jewellery">
              Jewellery
            </Link>
          </NavItem>
          <NavItem>
            <Link className="linkdec" to="/Mens">
              Mens
            </Link>
          </NavItem>
          <NavItem>
            <Link className="linkdec" to="/Womens">
              Womens
            </Link>
          </NavItem>
          <NavItem>
            <Link className="linkdec" to="/Cart">
              Cart ({props.cartCount})
            </Link>
          </NavItem>
        </Nav>
        <br />

        <Switch>
          <Route path="/Electronics">
            <Electronics />
          </Route>
          <Route path="/Jewellery">
            <Jewellery />
          </Route>
          <Route path="/Mens">
            <Mens />
          </Route>
          <Route path="/Womens">
            <Womens />
          </Route>
          <Route path="/BuyNow">
            <BuyNow />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route exact path="">
            <AllItems />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    cartCount: state.cartItem.length,
  };
};

export default connect(mapStateToProps)(RouteFunction);
