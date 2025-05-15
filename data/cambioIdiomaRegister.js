let language = localStorage.getItem("language") || "ES";
document.addEventListener("DOMContentLoaded", function() {
    changeLanguage();
});

const $LangES = document.getElementById("Spanish");
const $LangEN = document.getElementById("English");

// Nav CONST
const $NavInicio = document.getElementById("Nav_Inicio");
const $NavActividades = document.getElementById("Nav_Actividades");
const $NavExpositores = document.getElementById("Nav_Expositores");
const $NavFAQ = document.getElementById("Nav_FAQ");
const $NavRegistro = document.getElementById("Nav_Registro");
const $NavContacto = document.getElementById("Nav_Contacto");
const $ChangeLanguageBTN = document.getElementById("ChangeLanguageBTN");


// Registro CONST
const $TitleH1 = document.querySelector(".formulario_h1")
const $LabelNombre = document.getElementById("labelNombre");
const $LabelEmail = document.getElementById("labelEmail");
const $LabelDate = document.getElementById("labelDate");
const $LabelTelefono = document.getElementById("labelTelefono");
const $LabelContrasena = document.getElementById("labelContrasena");
const $LabelReContrasena = document.getElementById("labelReContrasena");

const $LabelCondiciones = document.getElementById("labelCondiciones");
const $LabelRecordar = document.getElementById("labelRecordar");
const $SendBTN = document.getElementById("sendBTN");


const RegisterTraduction = {
    ES: {
        title: "Formulario de registro digital",
        name: "Nombre",
        bornDate: "Fecha de nacimiento",
        phone: "Teléfono",
        password: "Contraseña",
        repassword: "Verificar contraseña",
        condiciones: "Acepto los terminos y condiciones",
        recordar: "Recordarme",
        enviar: "Envíar"
    },
    EN: {
        title: "Digital Registration Form",
        name: "Name",
        bornDate: "Date of birth",
        phone: "Phone",
        password: "Password",
        repassword: "Verify password",
        condiciones: "I accept the terms and conditions",
        recordar: "Remember me",
        enviar: "Send"
    }
}



$LangES.addEventListener("click", () => {
    language = localStorage.setItem("language", "ES");
    changeLanguage()
})
$LangEN.addEventListener("click", () => {
    language = localStorage.setItem("language", "EN");
    changeLanguage()
})

const navTraduction = {
    ES: {
        Inicio: "Inicio",
        Actividades: "Actividades",
        Expositores: "Expositores",
        FAQ: "FAQ",
        Registro: "Registro",
        Contacto: "Contacto",
        CambiarIdioma: "Cambiar idioma",
    },
    EN: {
        Inicio: "Home",
        Actividades: "Activities",
        Expositores: "Exhibitors",
        FAQ: "FAQ",
        Registro: "Register",
        Contacto: "Contact",
        CambiarIdioma: "Change Language",
    }
}


function changeLanguage() {
    if (localStorage.getItem("language") == "ES") {
        // NAV ES
        $NavInicio.textContent = navTraduction.ES.Inicio;
        $NavActividades.textContent = navTraduction.ES.Actividades;
        $NavExpositores.textContent = navTraduction.ES.Expositores;
        $NavFAQ.textContent = navTraduction.ES.FAQ;
        $NavRegistro.textContent = navTraduction.ES.Registro;
        $NavContacto.textContent = navTraduction.ES.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.ES.CambiarIdioma;

        // Register ES

        $TitleH1.textContent = RegisterTraduction.ES.title;
        $LabelNombre.textContent =  RegisterTraduction.ES.name;
        $LabelDate.textContent =  RegisterTraduction.ES.bornDate;
        $LabelTelefono.textContent =  RegisterTraduction.ES.phone;
        $LabelContrasena.textContent =  RegisterTraduction.ES.password;
        $LabelReContrasena.textContent = RegisterTraduction.ES.repassword;
        $LabelCondiciones.textContent = RegisterTraduction.ES.condiciones;
        $LabelRecordar.textContent = RegisterTraduction.ES.recordar;
        $SendBTN.textContent = RegisterTraduction.ES.enviar;

    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN
        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;

        // Registro EN

        $TitleH1.textContent = RegisterTraduction.EN.title;
        $LabelNombre.textContent =  RegisterTraduction.EN.name;
        $LabelDate.textContent =  RegisterTraduction.EN.bornDate;
        $LabelTelefono.textContent =  RegisterTraduction.EN.phone;
        $LabelContrasena.textContent =  RegisterTraduction.EN.password;
        $LabelReContrasena.textContent = RegisterTraduction.EN.repassword;
        $LabelCondiciones.textContent = RegisterTraduction.EN.condiciones;
        $LabelRecordar.textContent = RegisterTraduction.EN.recordar;
        $SendBTN.textContent = RegisterTraduction.EN.enviar;
    }
}