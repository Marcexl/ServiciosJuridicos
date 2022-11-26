import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './footer.css'; 

function Footer() {
    return (
        <Container fluid className='footer'>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <address>
                            <figure>
                                <h4>Servicios Juridicos</h4>
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
                            <li><a href="#" title="About us">About us</a></li>
                            <li><a href="#" title="Services">Services</a></li>
                            <li><a href="#" title="Works">Works</a></li>
                            <li><a href="#" title="Contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={3}>
                        <ul class="socil-icon-one">
                            <li><a href="#" title="Facebook">Terms and Conditions</a></li>
                            <li><a href="#" title="Behance">Prices</a></li>
                            <li><a href="#" title="Instagram">Privacy</a></li>
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