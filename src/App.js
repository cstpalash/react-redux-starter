import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

import Home from './components/home';
import Register from './components/register';

import config from './config';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const menuItems = _.map(config.menuItems, (item, index) => {
      return  <NavItem key={index}>
                <NavLink exact={item.to === '/' ? true : false} className="nav-link" to={item.to}>{item.menu}</NavLink>
              </NavItem>
    });
    return (
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">{config.brand}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {menuItems}
              </Nav>
            </Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}