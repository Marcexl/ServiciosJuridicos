import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './slider.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={require('./001.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>ESTUDIO JURÍDICO DE EXCELENCIA</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum</h3>
          <Button variant="warning slider-but">
            <LocalPhoneIcon />            
            Llamanos
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={require('./002.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>ESPECIALISTAS EN DIVORCIOS Y SUCESIONES</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <Button variant="warning slider-but">
            <EmailIcon />            
            Consultanos
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={require('./003.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>CHAT DIRECTO CON EXPERTOS</h1>
          <h3>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
          </h3>
          <Button variant="warning slider-but">
            <WhatsAppIcon />            
            Contactanos
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;