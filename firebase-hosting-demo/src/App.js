import logo from './logo.svg';
import './App.css';
import './asset/fonts/Besley-Black.ttf';
import Navtabs from './view/component/navtab';
import Btnincdec from './view/component/increment';
import DemoCarousel from './view/component/carosuel';
import Menu from './view/component/nav';
import {Container, fluid, Row, Col} from 'react-bootstrap';
import Search from './view/component/search';
import Multicarosuel from './view/component/multicarosuel';



function App() {
  return (
    <div className="App">
      <Container fluid>
          <Row>
            <Col sm={12} className="main-banner">
              <Menu />
              <Search />
            </Col>
          </Row>

          </Container>
          
          <Container className="home-container">
          <Row>
            <Col sm={12} className="Home-slider">
              <Multicarosuel />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Navtabs />
              
            </Col>
          </Row>
          
      </Container>
     
    
      <div>
      
      
    
      </div>
      
    </div>
  );
}

export default App;
