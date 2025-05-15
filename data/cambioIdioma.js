let language = localStorage.getItem("language") || "ES";
let theme = localStorage.getItem("theme") || "light";

let $body = document.querySelector("body")
let $themeIcon = document.getElementById("themeIcon");
let $OpenMenu = document.getElementById("OpenMenu");
let $OptionsNavegation = document.getElementById("Nav_ul");

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage();
});

function loadTheme() {
    if (localStorage.getItem("theme") == "dark") {
        document.body.classList.add("dark-mode");
        $themeIcon.classList.remove("fa-sun");
        $themeIcon.classList.add("fa-moon");
    } else if ((localStorage.getItem("theme") == "light")) {
        document.body.classList.remove("dark-mode");
        $themeIcon.classList.remove("fa-moon");
        $themeIcon.classList.add("fa-sun");
    }
}

$OpenMenu.addEventListener("click", () => {
    if ($OpenMenu.classList.contains("fa-bars")) {
        $OpenMenu.classList.remove("fa-bars")
        $OpenMenu.classList.add("fa-xmark")
        $OptionsNavegation.style.display = "flex";
    }
    else if ($OpenMenu.classList.contains("fa-xmark")) {
        $OpenMenu.classList.remove("fa-xmark")
        $OpenMenu.classList.add("fa-bars")
        $OptionsNavegation.style.display = "none";
    }
})

const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
    if ($body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        let temaSeleccionado = "Tema claro activado"
        theme = localStorage.setItem("theme", "light")
        $themeIcon.classList.remove("fa-sun");
        $themeIcon.classList.add("fa-moon");

        console.log(temaSeleccionado);
    } else {
        document.body.classList.add("dark-mode");
        let temaSeleccionado = "Tema oscuro activado"
        theme = localStorage.setItem("theme", "dark")
        console.log(temaSeleccionado);
        $themeIcon.classList.remove("fa-moon");
        $themeIcon.classList.add("fa-sun");
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

// Inicio CONST
const $Box1_p = document.getElementById("box1_p");
const $Box1_button = document.getElementById("box1_btn");

const $Faltan = document.getElementById("box2_Faltan");
const $dias = document.getElementById("DiasP");
const $horas = document.getElementById("HorasP");

const $RegistroPresencial = document.getElementById("RegistroPresencial");
const $RegistroOnline = document.getElementById("RegistroOnline");

const $info_p = document.querySelector(".info_p");
const $info_p_2 = document.querySelector(".info_p-2");
const $info_h2 = document.querySelector(".info_h2");


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

const InicioTraduction = {
    ES: {
        Box1: {
            p: "<span>Congreso internacional en Ciencia</span>,Tecnología, <span>Innovacion y Educación </span>en Ingeniería",
            btn: "Obtener Acceso"
        },

        Box2: {
            Faltan: "Faltan:",
            Dias: "Días",
            Horas: "Horas"
        },

        Registro: {
            Personal: "Registro en persona",
            Online: "Registro en línea"
        },

        Info: {
            title: "¿Qué es ExpoTecnica?",
            p1: "EXPOTÉCNICA es un espacio educativo que promueve el desarrollo integral de los estudiantes de la Educación Técnico-Profesional, potenciando sus habilidades técnicas, humanas, lingüísticas y emprendedoras. Busca fomentar la innovación, la investigación y el uso responsable de las tecnologías, facilitando su empleabilidad y creando oportunidades sostenibles.",

            p2: "Este evento permite a las y los estudiantes demostrar sus habilidades ante la comunidad, explorar nuevas experiencias de aprendizaje y conectar con profesionales de diversas áreas como la ingeniería, el diseño, la contabilidad, el turismo, la salud ocupacional, entre otros. Además, fortalece el vínculo entre la educación y las demandas del sector productivo, promoviendo vocaciones técnicas clave para el desarrollo del país."
        }
    },

    EN: {
        Box1: {
            p: "<span>International Congress on Science, Technology, Innovation, and Engineering Education</span>",
            btn: "Get Access"
        },

        Box2: {
            Faltan: "Left:",
            Dias: "Days",
            Horas: "Hours"
        },

        Registro: {
            Personal: "In-person registration",
            Online: "Online registration"
        },

        Info: {
            title: "What is ExpoTecnica?",
            p1: "EXPOTÉCNICA is an educational space that promotes the comprehensive development of Vocational Technical Education students, enhancing their technical, human, linguistic, and entrepreneurial skills. It seeks to foster innovation, research, and the responsible use of technologies, facilitating their employability and creating sustainable opportunities.",

            p2: "This event allows students to showcase their skills to the community, explore new learning experiences, and connect with professionals from diverse fields such as engineering, design, accounting, tourism, occupational health, and others. It also strengthens the link between education and the demands of the productive sector, promoting key technical vocations for the country's development."
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

        $Box1_p.innerHTML = InicioTraduction.ES.Box1.p;
        $Box1_button.textContent = InicioTraduction.ES.Box1.btn;

        $Faltan.textContent = InicioTraduction.ES.Box2.Faltan;
        $dias.textContent = InicioTraduction.ES.Box2.Dias;
        $horas.textContent = InicioTraduction.ES.Box2.Horas;

        $RegistroOnline.textContent = InicioTraduction.ES.Registro.Online;
        $RegistroPresencial.textContent = InicioTraduction.ES.Registro.Personal;

        $info_h2.textContent = InicioTraduction.ES.Info.title;
        $info_p.textContent = InicioTraduction.ES.Info.p1;
        $info_p_2.textContent = InicioTraduction.ES.Info.p2;
    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN
        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;

        // INICIO EN

        $Box1_p.innerHTML = InicioTraduction.EN.Box1.p;
        $Box1_button.textContent = InicioTraduction.EN.Box1.btn;

        $Faltan.textContent = InicioTraduction.EN.Box2.Faltan;
        $dias.textContent = InicioTraduction.EN.Box2.Dias;
        $horas.textContent = InicioTraduction.EN.Box2.Horas;

        $RegistroOnline.textContent = InicioTraduction.EN.Registro.Online;
        $RegistroPresencial.textContent = InicioTraduction.EN.Registro.Personal;

        $info_h2.textContent = InicioTraduction.EN.Info.title;
        $info_p.textContent = InicioTraduction.EN.Info.p1;
        $info_p_2.textContent = InicioTraduction.EN.Info.p2;

        // Expositores EN

        $YearsLaura.textContent = InicioTraduction.EN.Info.title;
    }
}

