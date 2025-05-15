const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


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

// Contacto CONST

const $formH2 = document.getElementById("formH2")
const $labelNombre = document.getElementById("labelNombre")
const $labelEmail = document.getElementById("labelEmail")
const $labelAsunto = document.getElementById("labelAsunto")
const $labelMensaje = document.getElementById("labelMensaje")
const $sendBTN = document.getElementById("sendBTN")
const $locationH2 = document.getElementById("locationH2")

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

const contactoTraduction = {
    ES: {
        title: "Formulario de Contacto",
        name: "Nombre",
        enviar: "Envíar",
        email: "Correo",
        asunto: "Asunto",
        mensaje: "Mensaje",
        ubicacion: "Nuestra ubicación"
    },
    EN: {
        title: "Contact Form",
        name: "Name",
        enviar: "Send",
        email: "Email",
        asunto: "Subject",
        mensaje: "Message",
        ubicacion: "Our location"
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

        // CONTACTO EN

        $formH2.textContent = contactoTraduction.ES.title;
        $labelNombre.textContent = contactoTraduction.ES.name;
        $labelNombre.textContent = contactoTraduction.ES.name;
        $labelEmail.textContent = contactoTraduction.ES.email;
        $labelAsunto.textContent = contactoTraduction.ES.asunto;
        $labelMensaje.textContent = contactoTraduction.ES.mensaje;
        $sendBTN.textContent = contactoTraduction.ES.enviar;
        $locationH2.textContent = contactoTraduction.ES.ubicacion;
    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN

        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;

        // CONTACTO EN

        $formH2.textContent = contactoTraduction.EN.title;
        $labelNombre.textContent = contactoTraduction.EN.name;
        $labelNombre.textContent = contactoTraduction.EN.name;
        $labelEmail.textContent = contactoTraduction.EN.email;
        $labelAsunto.textContent = contactoTraduction.EN.asunto;
        $labelMensaje.textContent = contactoTraduction.EN.mensaje;
        $sendBTN.textContent = contactoTraduction.EN.enviar;
        $locationH2.textContent = contactoTraduction.EN.ubicacion;

    }
}