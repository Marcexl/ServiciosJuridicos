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
                                Collins Street West Victoria 8007 Australia.<br />
                                1800 1234 56789 / 98532100987 
                                <a href="mailto:support@websitename.com">support@websitename.com</a>
                            </p>
                        </address>
                    </Col>
                    <Col md={3} sm={3}>
                        <ul>
                            <li><a href="#about" title="About us">About us</a></li>
                            <li><a href="#service" title="Services">Services</a></li>
                            <li><a href="#work" title="Works">Works</a></li>
                            <li><a href="#contact" title="Contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={3}>
                        <ul class="socil-icon-one">
                            <li><a href="#terms" title="Terms">Terms and Conditions</a></li>
                            <li><a href="#prices" title="Prices">Prices</a></li>
                            <li><a href="#privacy" title="Privacy">Privacy</a></li>
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