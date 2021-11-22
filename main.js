/* Consignes: https://smnarnold.com/exercices/venom */

const isMarchePause = document.querySelector('.btn');

const isvenom = document.querySelector('.venom');

isMarchePause.addEventListener('click', function(){
    isvenom.classList.add('is-walking');
    //isMarchePause.innerHTML = "Pause";
    //console.log(isanimation);
});