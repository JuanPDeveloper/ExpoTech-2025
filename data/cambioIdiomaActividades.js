

let language = localStorage.getItem("language") || "ES";
let theme = localStorage.getItem("theme") || "light";

let $body = document.querySelector("body")
let $DarkModeBTN = document.getElementById("DarkModeBTN");
let $LightModeBTN = document.getElementById("LightModeBTN");

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage();
    loadTheme();
});

function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else if ((localStorage.getItem("theme") === "light")) {
        document.body.classList.remove("dark-mode");
    }
}

const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {

    if ($body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        let temaSeleccionado = "Tema claro activado"
        theme = localStorage.setItem("theme", "light")

        console.log(temaSeleccionado);
    } else {
        document.body.classList.add("dark-mode");
        let temaSeleccionado = "Tema oscuro activado"
        theme = localStorage.setItem("theme", "dark")
        console.log(temaSeleccionado);
    }
    localStorage.setItem("theme", "dark")
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

// Actividades CONST

const $Años = document.querySelectorAll(".span2");

const $DescripcionMaikel = document.getElementById("infoMaikel");
const $DescripcionMiguel = document.getElementById("infoMiguel");
const $DescripcionLaura = document.getElementById("infoLaura");

const $hourActivity = document.querySelectorAll(".hourActivity");
const $placeActivity = document.querySelectorAll(".placeActivity");
const $dateActivity = document.querySelectorAll(".dateActivity");

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

const ActividadesTraduction = {
    ES: {
        years: "Años",
        hour: "Hora",
        place: "Lugar",
        date: "Fecha",
        Maikel: {
            info: "Se va a realizar una charla donde se toque el tema del desarrollo de software, tambien se van a aclarar dudas y mucho más."
        },
        Miguel: {
            info: "Se va hacer una conferencias para para explicar a fondo el tema de la informatica para aclarar dudas y mucho más."
        },
        Laura: {
            info: "Se realizara un taller basado en la electronica para que aprendan del tame y sepan como se hace"
        }
    },

    EN: {
        years: "Years",
        hour: "Hour",
        place: "Place",
        date: "Date",
        Maikel: {
            info: "There will be a talk on software development, and questions will be answered, among other things."
        },
        Miguel: {
            info: "A conference will be held to thoroughly explain the topic of computer science, clarify doubts, and much more."
        },
        Laura: {
            info: "A workshop based on electronics will be held so that they can learn about tame and know how it is done."
        }
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

        // INICIO EN


    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN
        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;

        // Actividades EN

        $Años.forEach(year => year.textContent = ActividadesTraduction.EN.years);
        
        $DescripcionMaikel.textContent = ActividadesTraduction.EN.Maikel.info
        $DescripcionMiguel.textContent = ActividadesTraduction.EN.Miguel.info
        $DescripcionLaura.textContent = ActividadesTraduction.EN.Laura.info

        $placeActivity.forEach(place => place.textContent = ActividadesTraduction.EN.place);
        $hourActivity.forEach(place => place.textContent = ActividadesTraduction.EN.hour);
        $dateActivity.forEach(place => place.textContent = ActividadesTraduction.EN.date);
    }
}

