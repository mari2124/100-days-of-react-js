import React from 'react';
import ReactDom from 'react-dom';
import {NavBar, Nav, NavItem} from 'react-bootstrap';
 
 
const Menu = () => {    
    return (
 
 
 <div className="cus-menu">
     <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
<div className="col-9 justify-content-start d-flex">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Discover</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Popular</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Feature</Nav.Link>
  </Nav.Item>
  </div>
  <div className="col-3 justify-content-end d-flex">
  <Nav.Item>
    <Nav.Link eventKey="link-2">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Register</Nav.Link>
  </Nav.Item>
  </div>    
  
</Nav>
   </div>
    )
}

export default Menu;