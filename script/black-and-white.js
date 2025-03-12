

const bawButton = document.getElementById('toggle-dark');
const backround = document.querySelector('body');
const text = document.querySelectorAll('p, h3');


function darkLightSwitch () { 
    bawButton.addEventListener('mouseenter', function(){
        this.style.cursor = 'pointer';
    })
    bawButton.addEventListener('click', function() {

        this.classList.toggle('bi-toggle2-on');

        this.classList.toggle('bi-toggle2-off');

        if(this.getAttribute("class") == 'bi bi-toggle2-off'){

            backround.style.backgroundColor = '#FCE8F1';

            text.forEach(textAtom => {
                textAtom.style.color = '#111111';
            })

            return;
        }

        if(this.getAttribute("class") == 'bi bi-toggle2-on'){

            backround.style.backgroundColor = '#111111';

            text.forEach(textAtom => {
                textAtom.style.color = '#F9F9F9';
            })

            return;
        }


});

}

export {darkLightSwitch};