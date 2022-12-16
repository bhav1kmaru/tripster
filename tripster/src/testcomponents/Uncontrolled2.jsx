import Carousel from 'react-bootstrap/Carousel';
import Experiences from '../components/Home/Experiences';
import Experiences2 from '../components/Home/Experiences2';
import Experiences3 from '../components/Home/Experiences3';
import Nye2 from '../components/Home/Nye2';
import Places from '../components/Home/Places';
import Places2 from '../components/Home/Places2';

function UncontrolledExample2() {
  return (
    <Carousel width="100%" m='auto' variant='dark'>
      <Carousel.Item>
      <Places />
       
      </Carousel.Item>
      <Carousel.Item>
      <Nye2 />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample2;