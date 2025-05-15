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

// FAQ CONST

const $FAQTitle = document.getElementById("FAQTitle")
const $Pregunta1 = document.getElementById("Pregunta1");
const $Pregunta2 = document.getElementById("Pregunta2");
const $Pregunta3 = document.getElementById("Pregunta3");

const $Pregunta1Respuesta = document.getElementById("Pregunta1_Respuesta");
const $Pregunta2Respuesta = document.getElementById("Pregunta2_Respuesta");
const $Pregunta3Respuesta = document.getElementById("Pregunta3_Respuesta");

$LangES.addEventListener("click", () => {
    language = localStorage.setItem("language", "ES");
    changeLanguage()
})
$LangEN.addEventListener("click", () => {
    language = localStorage.setItem("language", "EN");
    changeLanguage()
})




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

const FAQTraduction = {
    ES:{
        title: "Preguntas Frecuentes",
        Pregunta1Title: "¿Quiénes pueden participar en la ExpoTech?",
        Pregunta1Respuesta: "Generalmente, pueden participar estudiantes de distintos niveles educativos, así como docentes, investigadores, startups tecnológicas y entusiastas de la innovación. Algunos eventos también están abiertos a la comunidad en general.",

        Pregunta2Title: "¿Qué tipo de proyectos se pueden presentar?",
        Pregunta2Respuesta: "Se aceptan proyectos relacionados con tecnología, ciencia, electrónica, programación, robótica, energías renovables, realidad aumentada/virtual, inteligencia artificial, entre otros. Pueden ser prototipos físicos, apps, investigaciones o demostraciones interactivas.",

        Pregunta3Title: "¿Cómo se evalúan los proyectos en la ExpoTech?",
        Pregunta3Respuesta: "Los proyectos suelen ser evaluados por un jurado especializado bajo criterios como innovación, aplicabilidad, originalidad, nivel técnico, presentación y utilidad. Algunos eventos también incluyen votaciones del público.",
    },
    EN:{
        title: "Frequently Asked Questions",
        Pregunta1Title: "Who can participate in ExpoTech?",
        Pregunta1Respuesta: "Generally, students from different educational levels, as well as teachers, researchers, technology startups, and innovation enthusiasts, are welcome to participate. Some events are also open to the general public.",
    
        Pregunta2Title: "What types of projects can be submitted?",
        Pregunta2Respuesta: "Projects related to technology, science, electronics, programming, robotics, renewable energy, augmented/virtual reality, artificial intelligence, and others are welcome. These projects may include physical prototypes, apps, research projects, or interactive demonstrations.",
    
        Pregunta3Title: "How are projects evaluated at ExpoTech?",
        Pregunta3Respuesta: "Projects are typically evaluated by a specialized jury based on criteria such as innovation, applicability, originality, technical level, presentation, and usefulness. Some events also include public voting.",
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

        // FAQ EN
        $FAQTitle.textContent = FAQTraduction.ES.title;

        $Pregunta1.textContent = FAQTraduction.ES.Pregunta1Title;
        $Pregunta1Respuesta.textContent = FAQTraduction.ES.Pregunta1Respuesta;

        $Pregunta2.textContent = FAQTraduction.ES.Pregunta2Title;
        $Pregunta2Respuesta.textContent = FAQTraduction.ES.Pregunta2Respuesta;

        $Pregunta3.textContent = FAQTraduction.ES.Pregunta3Title;
        $Pregunta3Respuesta.textContent = FAQTraduction.ES.Pregunta3Respuesta;

    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN
        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;

        // FAQ EN
        $FAQTitle.textContent = FAQTraduction.EN.title;
        $Pregunta1.textContent = FAQTraduction.EN.Pregunta1Title;
        $Pregunta1Respuesta.textContent = FAQTraduction.EN.Pregunta1Respuesta;

        $Pregunta2.textContent = FAQTraduction.EN.Pregunta2Title;
        $Pregunta2Respuesta.textContent = FAQTraduction.EN.Pregunta2Respuesta;

        $Pregunta3.textContent = FAQTraduction.EN.Pregunta3Title;
        $Pregunta3Respuesta.textContent = FAQTraduction.EN.Pregunta3Respuesta;
    }
}