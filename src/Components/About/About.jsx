import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

function About() {
    return (
      <>
      <Container fluid className='about-container' id="about">
        <Row>
            <Col>
                <p className='about-text'>
                "We are a creative agency dedicated to new media. By constantly pushing <br />
                boundaries we create memorable designs that elevate your brand and  <br />
                the ultimate elegeble enlighten your partners."
                </p>
            </Col>
        </Row>
      </Container>
      <Container className='about-team'>
        <Row>
          <Col md={8} sm={6}>
            <h3>Facundo Perotto</h3>
            <h4>Maecenas pretium enim ut mollis laoreet. Vestibulum aliquet ut nisi in <br />
              porttitor. Donec luctus ipsum non dui aliquet, ac imperdiet arcu cursus. <br />
              Morbi aliquam aculis ipsum malesuada et.</h4>
              <p>Maecenas metus magna, condimentum eu elementum vitae, finibus eu mauris. Suspendisse bibendum 
              dapibus lacus, eget commodo turpis hendrerit non. Cras euismod, nisi sit amet porta lobortis, 
              purus augue bibendum augue, ut ornare elit risus ac enim.Aliquam pretium interdum lorem sit 
              amet aliquam. Pellentesque quis felis orci. Integer fringilla.<br />
              lorem non tincidunt commodo, eros erat interdum urna, sodales interdum nibh erat eget sapien. 
              Vestibulum et erat ac eros pellentesque pulvinar. Cras viverra vel sapien et molestie. Cras euismod, 
              nisi sit amet porta lobortis, purus augue bibendum augue, </p>
          </Col>
          <Col md={4}>
           <img src={require('./serives-text-img.jpg')} />
          </Col>
        </Row>
      </Container>

      <Container className='about-team'>
        <Row>
          <Col md={4}>
           <img src={require('./serives-text-img.jpg')} />
          </Col>
          <Col md={8} sm={6}>
            <h3>Piter Lanzani</h3>
            <h4>Maecenas pretium enim ut mollis laoreet. Vestibulum aliquet ut nisi in <br />
              porttitor. Donec luctus ipsum non dui aliquet, ac imperdiet arcu cursus. <br />
              Morbi aliquam aculis ipsum malesuada et.</h4>
            <p>Maecenas metus magna, condimentum eu elementum vitae, finibus eu mauris. Suspendisse bibendum 
              dapibus lacus, eget commodo turpis hendrerit non. Cras euismod, nisi sit amet porta lobortis, 
              purus augue bibendum augue, ut ornare elit risus ac enim.Aliquam pretium interdum lorem sit 
              amet aliquam. Pellentesque quis felis orci. Integer fringilla.<br />
              lorem non tincidunt commodo, eros erat interdum urna, sodales interdum nibh erat eget sapien. 
              Vestibulum et erat ac eros pellentesque pulvinar. Cras viverra vel sapien et molestie. Cras euismod, 
              nisi sit amet porta lobortis, purus augue bibendum augue, </p>
          </Col>
        </Row>
      </Container>
      <Container id='services'>
        <Row className="about-expertise">
          <h3>Area of Expertise</h3>
        <Col md={3} sm={6}>
          <ul>
            <li>Digital Strategy</li>
            <li>Websites</li>
            <li>Videography</li>
            <li>Usability</li>
            <li>Social Media</li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <ul>
            <li>User Experience</li>
            <li>Logo &amp; Identity</li>
            <li>Photography</li>
            <li>Digital marketing</li>
            <li>Promotion material</li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <ul>
            <li>Motion graphics</li>
            <li>iOS apps</li>
            <li>Web Analytics</li>
            <li>Digital marketing</li>
            <li>Promotion material</li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <ul>
            <li>Motion graphics</li>
            <li>iOS apps</li>
            <li>Web Analytics</li>
            <li>Digital marketing</li>
            <li>Promotion material</li>
          </ul>
        </Col>
        </Row>
      </Container>
      </>
    );
  }
  
export default About;
