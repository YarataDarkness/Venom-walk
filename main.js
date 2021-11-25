/* Consignes: https://smnarnold.com/exercices/venom */

const isMarchePause = document.querySelector('.btn');

const isvenom = document.querySelector('.venom');

const isbtn = document.querySelector('.btn');

const isanimation = document.querySelector('.animation');



isMarchePause.addEventListener('click', function(){
    isanimation.classList.toggle('is-walking');
    //isbtn.classList.toggle('is-walking');
    //isMarchePause.innerHTML = "Pause";
    //console.log(isanimation);
});
