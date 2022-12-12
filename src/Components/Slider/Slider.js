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
          <h1>ASESORAMIENTO JURÍDICO INTEGRAL</h1>  
          <h3>
            Asesoría y seguimiento de casos
          </h3>
          <Button variant="warning slider-but">
            <LocalPhoneIcon />            
            Llámenos
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
          <h1>ESPECIALISTAS EN DERECHO PENAL</h1>
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
          <h1>Atendimento especial para brasileiros</h1>
          <h3>
            na Argentina
          </h3>
          <Button variant="warning slider-but">
            <WhatsAppIcon />            
            Whatsapp
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;