/* Consignes: https://smnarnold.com/exercices/venom */

const isMarchePause = document.querySelector('.btn');

const isanimation = document.querySelector('.animation');

isMarchePause.addEventListener('click', function(){
    isanimation.classList.add("is-walking");
    //isMarchePause.innerHTML = "Pause";
    //console.log(isanimation);
});