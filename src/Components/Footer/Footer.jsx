import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './logo2023white.png';

import './footer.css'; 

function Footer() {
    return (
        <Container fluid className='footer'>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <address>
                            <figure>
                                    <img src={Logo} alt='logo-white' className='logo-footer'/>
                    
                            </figure>
                            <p>
                                Matrícula tomo 142 folio 682 CPACF
                            </p>
                        </address>
                    </Col>
                    <Col md={3} sm={3}>
                        <ul>
                            <li><a href="#about" title="About us">Nosotros</a></li>
                            <li><a href="#service" title="Services">Servicios</a></li>
                            <li><a href="#contact" title="Contact">Contacto</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={3}>
                        <ul class="socil-icon-one">
                            <li><a href="#terms" title="Terms">Terminos y condiciones</a></li>
                            <li><a href="#prices" title="Prices">Modos de Pago</a></li>
                            <li><a href="#privacy" title="Privacy">Privacidad</a></li>
                        </ul>
                    </Col>
                
                </Row>
            </Container>
            <div className="copyright">
                <p>© 2023 marcexl.com.ar. All Rights Reserved.</p>
            </div>
        </Container>
        );
}

export default Footer;