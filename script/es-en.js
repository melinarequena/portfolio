const mainDescription = document.querySelector('.main--description');
const aboutMe = document.querySelector('#aboutMe');
const aMDescription1 = document.querySelector('.aboutMe--description1');
const aMDescription2 = document.querySelector('.aboutMe--description2');
const stackLanguages = document.querySelector('#languages');
const stackTools = document.querySelector('#tools');
const stackLearning = document.querySelector('#learning');
const contactMe = document.querySelector('#contactMe');
const lanButton = document.getElementById('toggle-language');

let isEnglish = false; 

function languageSwitch() {
    lanButton.addEventListener('mouseenter', function(){
        this.style.cursor = 'pointer';
    });

    lanButton.addEventListener('click', function(){
        if (isEnglish) {
            mainDescription.innerHTML = 'ESTUDIANTE DE INGENIERÍA INFORMÁTICA';
            aboutMe.innerHTML = 'SOBRE MI';
            aMDescription1.innerHTML = 'Estudiante de cuarto año de <strong>Ingeniería en Informática</strong>, con interés en el desarrollo <strong>Full Stack</strong>.';
            aMDescription2.innerHTML = 'Me esfuerzo por ofrecer proyectos y presentaciones de alta calidad, prestando atención a los detalles y buscando siempre mejorar los resultados. Soy una persona curiosa, rápida para aprender nuevas herramientas mediante el aprendizaje continuo y comprometida con la resolución creativa de desafíos.';
            stackLanguages.innerHTML = 'LENGUAJES';
            stackTools.innerHTML = 'CONOCIMIENTOS Y HERRAMIENTAS';
            stackLearning.innerHTML = 'ACTUALMENTE APRENDIENDO';
            contactMe.innerHTML = 'CONTACTAME';
        } else {
            mainDescription.innerHTML = 'SOFTWARE ENGINEERING STUDENT';
            aboutMe.innerHTML = 'ABOUT ME';
            aMDescription1.innerHTML = 'Fourth year <strong>Software Engineering Student</strong>, interested in <strong>Full Stack development</strong>.';
            aMDescription2.innerHTML = 'I make an effort to deliver high-quality projects and presentations, paying close attention to detail and continuously seeking improvement. I am a curious person, quick to learn new tools through continuous learning, and committed to creatively solving challenges.';
            stackLanguages.innerHTML = 'LANGUAGES';
            stackTools.innerHTML = 'OTHER TOOLS';
            stackLearning.innerHTML = 'CURRENTLY LEARNING';
            contactMe.innerHTML = 'CONTACT ME';
        }
        isEnglish = !isEnglish;
    });
}

export { languageSwitch };
