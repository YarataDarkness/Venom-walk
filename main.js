/* Consignes: https://smnarnold.com/exercices/venom */

const isMarchePause = document.querySelector('.btn');

const isvenom = document.querySelector('.venom');

const isbtn = document.querySelector('.btn');

isMarchePause.addEventListener('click', function(){
    isvenom.classList.toggle('is-walking');
    isbtn.classList.toggle('is-walking');
    //isMarchePause.innerHTML = "Pause";
    //console.log(isanimation);
});
