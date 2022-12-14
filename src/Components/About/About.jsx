import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './about.css';

function About() {
    return (
      <>
      <Container fluid className='about-container' id="about">
        <Row>
            <Col>
                <p className='about-text'>
                "Nuestra filosofía es tener contacto constante con el cliente para poder brindarle < br/> la mejor solucion posible con transparencia y honestidad. <br/>Ofrecemos soluciones reales acordes a cada caso."
                </p>
            </Col>
        </Row>
      </Container>
      <Container className='about-team'>
        <Row>
          <Col md={8} sm={6}>
            <h3>Fabiano Perotto</h3>
              <h4>Antes que abogado soy un ser humano. Uno como vos que ha tenido muchas experiencias y problemas propios de una persona.</h4>
              <p>Mi nombre es Fabiano Perotto, soy brasilero llegado a la Argentina a los 7 años. Papá de 3 hijos uno de los cuales es autista.<br />
              Soy docente pero también fui empleado y he tenido personal a cargo. Fui emprendedor, varias veces castigado por las crisis económicas, fui comerciante y ahora tengo el famoso monotributo.<br />
              Luego de haber vivido varias situaciones que, naturalmente podríamos pensar son injustas y cansado de no encontrar asesoramiento legal eficaz, decidí estudiar abogacía.<br />
              Como abogado, mi vocación es brindar el mejor asesoramiento para las personas comunes, como vos y como yo. Por eso, si lo que buscas es un abogado que te atienda el teléfono, te trate de igual a igual, y busque la manera de resolver los problemas tuyos, de tu familia o de tu empresa, de forma práctica, hablando con honestidad, claridad y franqueza; aun a costa de no realizar el trabajo; acá lo vas a encontrar.</p>
          </Col>
          <Col md={4}>
           <img src={require('./fabiano.jpeg')} alt='Fabiano Perotto' class="fabiano"/>
          </Col>
        </Row>
      </Container>

      
      <Container id='services'>
        <Row className="about-expertise">
          <h3>Áreas de práctica</h3>
          <Col md={3} sm={6}>
            <Card >
              <Card.Body>
                <Card.Title>Derecho Penal</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Defensas y querellas penales</li>
                    <li>Confección y radicales de denuncias</li>
                    <li>Excarcelaciones</li>
                    <li>Rebeldías</li>
                    <li>Eximición de prisión</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card >
              <Card.Body>
                <Card.Title>Defensa al Consumidor</Card.Title>
                <Card.Text>
                  <ul>
                  <li>Acompañamiento en mediaciones COPREC</li>
                  <li>Redacción de denuncias administrativas</li>
                  <li>Problemas con plan de autoahorro</li>
                  <li>Reclamos por servicios o productos (Internet, Productos en mal estado, etc.)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card >
              <Card.Body>
                <Card.Title>Derecho Laboral</Card.Title>
                <Card.Text>
                <ul>
                  <li>Despidos</li>
                  <li>Trabajo en negro</li>
                  <li>Jubilación</li>
                  <li>Sanciones disciplinarias</li>
                  <li>Maltrato</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card >
              <Card.Body>
                <Card.Title>Sucesiones y Divorcios</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Alimentos, fijación, aumento y disminución</li>
                    <li>Régimen de visitas</li>
                    <li>Responsabilidad Parental</li>
                    <li>Cuidado Personal</li>
                    <li>Divorcios por presentación conjunta o unilateral</li>
                    <li>Liquidación y adjudicación de bienes de la sociedad conyugal</li>
                    <li>Uniones convivenciales ( Concubinato)</li>
                    <li>Pactos de convivencia</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="about-expertise">
        <Col md={3} sm={6}>
          <Card >
            <Card.Body>
              <Card.Title>Atencion a Pymes</Card.Title>
              <Card.Text>
                <ul>
                  <li>Asesoramiento a empresas Fintech, emprendedores y StartUps</li>
								  <li>Asesoramiento general en derecho de los negocios</li>
								  <li>Litigios de complejidad</li>
								  <li>Contratos comerciales</li>
								  <li>Asesoramiento a exportadores de servicios</li>
								  <li>Reestructuración de pasivos y procesos concursales</li>
						    </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card >
            <Card.Body>
              <Card.Title>Discapacidad y salud</Card.Title>
              <Card.Text>
                <ul>
                  <li>Amparos de salud</li>
                  <li>Determinación de la capacidad</li>
                  <li>Curatela / Sistemas de apoyo</li>
                  <li>Internaciones geriátricas</li>
                  <li>Medicamentos según la patología</li>
                  <li>Asistentes domiciliarios</li>
                  <li>Internaciones domiciliarias</li>
                  <li>Intervenciones quirúrgicas</li>
                  <li>Externaciones compulsivas</li>
                  <li>Estudios de complejidad</li>
                  <li>Mala praxis médica</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card >
            <Card.Body>
              <Card.Title>Derecho Tributario</Card.Title>
              <Card.Text>
                  <ul>
                    <li>Resolvemos Ejecuciones</li>
                    <li>Inhibiciones</li>
                    <li>Embargos de AFIP</li> 
                    <li>Inspecciones</li> 
                    <li>Clausuras</li> 
                    <li>Asesoramos Empresas e Individuos</li>
                  </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card >
            <Card.Body>
              <Card.Title>Accidentes de tránsito y ART</Card.Title>
              <Card.Text>
                <ul>
                  <li>Iniciamos el reclamo para que puedas cobrar la mejor indemnización por los daños sufridos en un accidente de transito o laboral</li>
                  <li>Cobro por lesiones o siniestros que sufriste vos o los tuyos en el menor tiempo posible</li>
                  <li>Nos encargamos de todo el tramite en tu aseguradora y en la de terceros</li>
                </ul>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
      </>
    );
  }
  
export default About;
