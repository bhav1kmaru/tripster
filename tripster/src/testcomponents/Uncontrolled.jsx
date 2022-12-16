import Carousel from 'react-bootstrap/Carousel';
import Experiences from '../components/Home/Experiences';
import Experiences2 from '../components/Home/Experiences2';
import Experiences3 from '../components/Home/Experiences3';

function UncontrolledExample() {
  return (
    <Carousel width="100%" m='auto' variant='dark'>
      <Carousel.Item>
      <Experiences />
       
      </Carousel.Item>
      <Carousel.Item>
      <Experiences2 />
        
      </Carousel.Item>
      <Carousel.Item>
      <Experiences3 />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;