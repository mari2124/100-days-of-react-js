import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Foodimg from './../../asset/images/food.jpg';
import Foodimg1 from './../../asset/images/food1.jpg';
import Foodimg2 from './../../asset/images/food2.jpg';
import Foodimg3 from './../../asset/images/food3.jpg';
import Foodimg4 from './../../asset/images/food4.jpg';

const multicarosuel = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return (
<Carousel responsive={responsive}>
  <div><img src={Foodimg} className="img-fluid" /></div>
  <div><img src={Foodimg4} className="img-fluid" /></div>
  <div><img src={Foodimg2} className="img-fluid" /></div>
  <div><img src={Foodimg3} className="img-fluid" /></div>
  <div><img src={Foodimg4} className="img-fluid" /></div>
  <div><img src={Foodimg4} className="img-fluid" /></div>
  <div><img src={Foodimg2} className="img-fluid" /></div>
  <div><img src={Foodimg3} className="img-fluid" /></div>
  <div><img src={Foodimg4} className="img-fluid" /></div>
  <div><img src={Foodimg} className="img-fluid" /></div>
  <div><img src={Foodimg2} className="img-fluid" /></div>
  <div><img src={Foodimg3} className="img-fluid" /></div>
</Carousel>

);

}
export default multicarosuel;