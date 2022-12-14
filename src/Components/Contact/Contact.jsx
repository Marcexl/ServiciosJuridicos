import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './contact.css';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <Container fluid id="contact">
            <Container className='contact-container'>
                <Row>
                    <Col md={6} className='contact-container-form'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <h5 className='mb-5'>Envianos tus datos para contactarte</h5>
                        
                        <Form.Group as={Col} md="6" controlId="validationCustom01" className='pr-2'>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                                defaultValue=""
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Apellido"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className='pr-2'>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Control
                                required
                                type="number"
                                placeholder="Celular"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Resumen de la consulta"/>
                        </Form.Group>
                        
                        <Button type="submit">Enviar</Button>
                        </Form>
                    </Col>
                    <Col md={6} className='pl-4'>
                        <h6>contactános</h6>
                        <address>
                        Venezuela 1870. CABA. Argentina<br />
                        +5491165785785
                        <br />
                        <a href="mailto:consultas@serviciosjuridicos.ar">consultas@serviciosjuridicos.ar</a>
                        </address>
                        <div className="social_icons">
                            <a href='https://www.linkedin.com/in/fabiano-perotto-22a6511a7/'>
                                <LinkedInIcon />
                            </a>
                            <a href='https://www.instagram.com/fabianoperotto8/'>
                                <InstagramIcon />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100007329434870'>
                                <FacebookIcon />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
  
export default Contact;
