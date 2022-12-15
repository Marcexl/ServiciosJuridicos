import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Alert from 'react-bootstrap/Alert';
import './contact.css';

function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) 
      {
        event.preventDefault();
        event.stopPropagation();
      }
      else
      {
        event.preventDefault();
        setValidated(true);

        let name  = document.getElementById('name').value;
        let fname = document.getElementById('fname').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let consulting = document.getElementById('consulting').value;
        
        const data = JSON.stringify({ name: name, fname: fname, phone: phone, email: email, consulting: consulting });
        fetch('./Mail/mail.php', {
            method: 'POST',
            body: data
            }).then((response) => {
            if (response.ok) 
            {
                let msj = document.getElementById("success");
                msj.style.display = 'block';

                setTimeout(function(){
                    document.getElementById("contactform").reset();
                    msj.style.display = 'none';
                },500);
            }else
            {
                let msj = document.getElementById("danger");
                msj.style.display = 'block';
                console.log(response);
            }
        })  
      }
    };

    return (
        <Container fluid id="contact">
            <Container className='contact-container'>
                <Row>
                    <Col md={6} className='contact-container-form'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id="contactform">                        
                        <h5 className='mb-5'>Envianos tus datos para contactarte</h5>
                        <Form.Group as={Col} md="6" controlId="name" className='pr-2'>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                                defaultValue=""
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col} md="6" controlId="fname">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Apellido"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="email" className='pr-2'>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="phone">
                            <Form.Control
                                required
                                type="number"
                                placeholder="Celular"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="12" controlId="consulting">
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Resumen de la consulta"/>
                        </Form.Group>
                        
                            <Button type="submit">Enviar</Button>
                            <div className="g-recaptcha" data-sitekey="6LfT9H4jAAAAACbAj68p2FIsIQX42KfbzBANyuNJ"></div>

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
                <Alert variant="success" id="success">Gracias por enviarnos tu consulta. Nos comunicaremos a la brevedad.</Alert>
                <Alert variant="danger" id="danger">Ha ocurrido un error. Por favor, intente mas tarde.</Alert>
            </Container>
        </Container>
    );
  }
  
export default Contact;
