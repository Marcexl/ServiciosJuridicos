import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WhatsApp from './Components/WhatsApp/WhatsApp';
import Recaptcha from './Components/RecaptchaV3/Recaptcha';
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <Slider />
    <About />
    <Contact />
    <WhatsApp />
    <Footer />
    <Recaptcha />
    </>
);

