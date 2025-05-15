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

// Inicio CONST
const $YearsMaikel = document.getElementById("YearsMaikel");
const $YearsMiguel = document.getElementById("YearsMiguel");
const $YearsLaura = document.getElementById("YearsLaura");
const $EspecialidadTitle = document.querySelectorAll(".informacion_p1");
const $EspecialidadName = document.querySelectorAll(".informacion_p2");
const $EspecialidadElectro = document.querySelector(".informacion_p2-Electro");
const $DescriptionTitle = document.querySelectorAll(".descripcion_p-1");
const $DescriptionInfoMaikel = document.querySelector(".descripcion_p-2-Maikel");
const $DescriptionInfoMiguel = document.querySelector(".descripcion_p-2-Miguel");
const $DescriptionInfoLaura = document.querySelector(".descripcion_p-2-Laura");

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

const ExpositoresTraduction = {
    ES: {
        EspecialidadTitle: "Especialidad",
        DescriptionTitle: "Descripción",
        YearsTitle: "Años",
        Maikel: {
            Especialidad: "Informática",
            Description: "Soy Maike, y mi pasión es hacer que el fascinante mundo de la informática sea accesible y emocionante para todos. Me dedico a desmitificar los conceptos complejos, mostrando cómo la lógica y la creatividad se unen para crear soluciones tecnológicas innovadoras. Mi objetivo es guiarte a través de este viaje digital, brindándote las herramientas y la comprensión necesarias para que no solo entiendas la tecnología, sino que también puedas aplicarla y crear con ella."
        },
        Miguel: {
            Especialidad: "Informática",
            Description: "Soy Miguel, y me apasiona el mundo de la informática y su capacidad para transformar ideas en realidades. Mi objetivo es ayudarte a comprender este universo digital desde sus fundamentos, con un enfoque claro y profundo."
        },
        Laura: {
            Especialidad: "Electronics",
            Description: "Soy Laura, una apasionada de la electrónica, y mi misión es despertar la curiosidad y el entusiasmo por esta increíble área. Me encanta enseñar de forma práctica y divertida, mostrando cómo los componentes y circuitos pueden dar vida a grandes ideas."
        }
    },
    EN: {
        EspecialidadTitle: "Specialty",
        DescriptionTitle: "Description",
        YearsTitle: "Years",
        Maikel: {
            Especialidad: "Computing",
            Description: "I'm Maike, and my passion is making the fascinating world of computing accessible and exciting for everyone. I'm dedicated to demystifying complex concepts, showing how logic and creativity come together to create innovative technological solutions. My goal is to guide you through this digital journey, giving you the tools and understanding you need to not only understand the technology, but also how to apply and create with it."
        },
        Miguel: {
            Especialidad: "Computing",
            Description: "I'm Miguel, and I'm passionate about the world of computing and its ability to transform ideas into reality. My goal is to help you understand this digital universe from its foundations, with a clear and in-depth approach."
        },
        Laura: {
            Especialidad: "Electronics",
            Description: "I'm Laura, a passionate electronics enthusiast, and my mission is to spark curiosity and enthusiasm for this incredible field. I love teaching in a practical and fun way, showing how components and circuits can bring great ideas to life."
        }

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

        // Expositores EN

        $YearsLaura.textContent = ExpositoresTraduction.ES.YearsTitle;
        $YearsMaikel.textConteSt = ExpositoresTraduction.ES.YearsTitle;
        $YearsMiguel.textContent = ExpositoresTraduction.EN.YearsTitle;

        $EspecialidadTitle.forEach(title => title.textContent = ExpositoresTraduction.ES.EspecialidadTitle);
        $EspecialidadElectro.textContent = ExpositoresTraduction.ES.Laura.Especialidad;
        $EspecialidadName[0].textContent = ExpositoresTraduction.ES.Maikel.Especialidad;
        $EspecialidadName[1].textContent = ExpositoresTraduction.ES.Miguel.Especialidad;
        $EspecialidadElectro.textContent = ExpositoresTraduction.ES.Laura.Especialidad;

        $DescriptionTitle.forEach(title => title.textContent = ExpositoresTraduction.ES.DescriptionTitle)

        $DescriptionInfoMaikel.textContent = ExpositoresTraduction.ES.Maikel.Description;
        $DescriptionInfoMiguel.textContent = ExpositoresTraduction.ES.Miguel.Description;
        $DescriptionInfoLaura.textContent = ExpositoresTraduction.ES.Laura.Description;

    } else if (localStorage.getItem("language") == "EN") {

        // NAV EN
        $NavInicio.textContent = navTraduction.EN.Inicio;
        $NavActividades.textContent = navTraduction.EN.Actividades;
        $NavExpositores.textContent = navTraduction.EN.Expositores;
        $NavFAQ.textContent = navTraduction.EN.FAQ;
        $NavRegistro.textContent = navTraduction.EN.Registro;
        $NavContacto.textContent = navTraduction.EN.Contacto;
        $ChangeLanguageBTN.textContent = navTraduction.EN.CambiarIdioma;


        // Expositores EN

        $YearsLaura.textContent = ExpositoresTraduction.EN.YearsTitle;
        $YearsMaikel.textContent = ExpositoresTraduction.EN.YearsTitle;
        $YearsMiguel.textContent = ExpositoresTraduction.EN.YearsTitle;

        $EspecialidadTitle.forEach(title => title.textContent = ExpositoresTraduction.EN.EspecialidadTitle);
        $EspecialidadElectro.textContent = ExpositoresTraduction.EN.Laura.Especialidad;
        $EspecialidadName[0].textContent = ExpositoresTraduction.EN.Maikel.Especialidad;
        $EspecialidadName[1].textContent = ExpositoresTraduction.EN.Miguel.Especialidad;
        $EspecialidadElectro.textContent = ExpositoresTraduction.EN.Laura.Especialidad;

        $DescriptionTitle.forEach(title => title.textContent = ExpositoresTraduction.EN.DescriptionTitle)

        $DescriptionInfoMaikel.textContent = ExpositoresTraduction.EN.Maikel.Description;
        $DescriptionInfoMiguel.textContent = ExpositoresTraduction.EN.Miguel.Description;
        $DescriptionInfoLaura.textContent = ExpositoresTraduction.EN.Laura.Description;
    }
}