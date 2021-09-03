 import React from 'react';
 import ReactDom from 'react-dom';
 import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 import { Tabs, Tab } from 'react-bootstrap';
 import {Container, fluid, Row, Col} from 'react-bootstrap';
 import Listview1 from './listview1';
 import Listview2 from './listview2';
 import Listview3 from './listview3';
 import Listview4 from './listview4';
  
 const Navtabs = () => {    
     return (
    <div className="custom-navtabs">
      <h4>React-Bootstrap Tab Component</h4>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Popular">
          <ul>
            <Listview1 />
            <Listview1 />
            <Listview1 />
          </ul>          
          <FavoriteBorderIcon />
        </Tab>
        <Tab eventKey="second" title="Discover">
        <ul>
            <Listview2 />
            <Listview2 />
            <Listview2 />
          </ul>   
        </Tab>
        <Tab eventKey="third" title="For You">
        <ul>
            <Listview3 />
            <Listview3 />
            <Listview3 />
          </ul>   
        </Tab>
        <Tab eventKey="fourth" title="News & Events">
        <ul>
            <Listview4 />
            <Listview4 />
            <Listview4 />
          </ul>   
        </Tab>
      </Tabs>
    </div>
     )
 }

 export default Navtabs;