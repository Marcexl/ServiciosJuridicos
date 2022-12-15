import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Recaptcha() {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6Lcr534jAAAAAI9-8PJDS2uNFoXJDhP5PK4DqZTH"
            language="[optional_language]"
            useRecaptchaNet="[optional_boolean_value]"
            useEnterprise="[optional_boolean_value]"
            scriptProps={{
            async: false, // optional, default to false,
            defer: false, // optional, default to false
            appendTo: 'head', // optional, default to "head", can be "head" or "body",
            nonce: undefined // optional, default undefined
            }}
            container={{ // optional to render inside custom element
            element: "[required_id_or_htmlelement]",
            parameters: {
                badge: '[inline|bottomright|bottomleft]', // optional, default undefined
                theme: 'dark', // optional, default undefined
            }
            }}
        >
    </GoogleReCaptchaProvider>
    );
}

export default Recaptcha;
