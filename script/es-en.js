const mainDescription = document.querySelector('.main--description');
const aboutMe = document.querySelector('#aboutMe');
const aMDescription1 = document.querySelector('.aboutMe--description1');
const descriptionDegree = document.querySelector('.description--degree');
const descriptionInterest = document.querySelector('.description--interest');
const aMDescription2 = document.querySelector('.aboutMe--description2');
const stackLanguages = document.querySelector('#languages');
const stackTools = document.querySelector('#tools');
const stackLearning = document.querySelector('#learning');
const contactMe = document.querySelector('#contactMe');
const lanButton = document.getElementById('toggle-language');

let isEnglish = true;  // A flag to track the current language

function languageSwitch() {
    lanButton.addEventListener('mouseenter', function(){
        this.style.cursor = 'pointer';
    });

    lanButton.addEventListener('click', function(){
        if (isEnglish) {
            // Switch to Spanish
            mainDescription.innerHTML = 'ESTUDIANTE DE INGENIERÍA DE SOFTWARE';
            aboutMe.innerHTML = 'SOBRE MÍ';
            aMDescription1.innerHTML = 'Estudiante de cuarto año de Ingeniería de Software, interesado en desarrollo Full Stack';
            aMDescription2.innerHTML = 'Me esfuerzo por entregar proyectos y presentaciones de alta calidad, prestando atención al detalle y buscando continuamente la mejora. Soy una persona curiosa, rápida para aprender nuevas herramientas a través del aprendizaje continuo, y comprometida con resolver desafíos de manera creativa.';
            stackLanguages.innerHTML = 'IDIOMAS';
            stackTools.innerHTML = 'OTRAS HERRAMIENTAS';
            stackLearning.innerHTML = 'APRENDIENDO ACTUALMENTE';
            contactMe.innerHTML = 'CONTÁCTAME';
        } else {
            // Switch to English
            mainDescription.innerHTML = 'SOFTWARE ENGINEERING STUDENT';
            aboutMe.innerHTML = 'ABOUT ME';
            aMDescription1.innerHTML = 'Fourth year Software Engineering Student, interested in Full Stack development';
            aMDescription2.innerHTML = 'I make an effort to deliver high-quality projects and presentations, paying close attention to detail and continuously seeking improvement. I am a curious person, quick to learn new tools through continuous learning, and committed to creatively solving challenges.';
            stackLanguages.innerHTML = 'LANGUAGES';
            stackTools.innerHTML = 'OTHER TOOLS';
            stackLearning.innerHTML = 'CURRENTLY LEARNING';
            contactMe.innerHTML = 'CONTACT ME';
        }
        isEnglish = !isEnglish;  // Toggle the language
    });
}

export { languageSwitch };
