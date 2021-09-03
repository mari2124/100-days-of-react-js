import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Foodimg from './../../asset/images/food4.jpg';
import {Container, fluid, Row, Col} from 'react-bootstrap';

const listview4 = () => {

   return (
       <li>
                <img src={Foodimg} className="img-fluid" />
                <Row>
                  <Col sm={12}>
                    <h3>Egg Gravy</h3>
                    <p>Descrption list view  ssdfhjsd sdj fjsdgfjhsgdfj</p>
                  </Col>
                  <Col sm={12}>
                    <p>$ 100.54</p>
                  </Col>
                </Row>
            </li>
   ) 
}

export default listview4;