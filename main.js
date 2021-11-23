/* Consignes: https://smnarnold.com/exercices/venom */

const isMarchePause = document.querySelector('.btn');

const isvenom = document.querySelector('.venom');

const isbtn = document.querySelector('.btn');

isMarchePause.addEventListener('click', function(){
    isvenom.classList.add('is-walking');
    //isMarchePause.innerHTML = "Pause";
    //console.log(isanimation);
});

if (isvenom.classList.contains('is-walking')){
    //isMarchePause.addEventListener('click', function(){
   //     isvenom.classList.toggle('is-walking');
    //});
    isbtn.innerHTML = `<button>Pause</button>`;


};