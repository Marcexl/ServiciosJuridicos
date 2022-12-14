import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './whatsapp.css';

function WhatsApp() {
  return (
    <div className='whatsapp-icon'>
        <a href="https://wa.me/5491165785785?text=Hola%20me%20contacto%20desde%20la%20web">
            <WhatsAppIcon/>
            <span>¿Necesitas ayuda?</span>
        </a>
    </div> 
  );
}

export default WhatsApp;