 (function () {
    const sliders = [...document.querySelectorAll(".slider_body")];
    const arrowNext = document.querySelector("#next");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", ()=>changePosition(1));

    arrowBefore.addEventListener("click", ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector(".slider_body--show").dataset.id);

        value = currentElement;
        value+= change;
        
        if(value== 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[currentElement-1].classList.toggle("slider_body--show");
        sliders[value-1].classList.toggle("slider_body--show");
    }
})()

window.onload = function(){
    $("#onload").fadeOut();
    $("body").removeClass("hidden")
} 

/* intro */

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
       logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index + 1) * 30);
       });

       setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.remove('active');
               span.classList.add('fade'); 
            }, (span + 1) * 50);
          });
       }, 1500);

       setTimeout(() => {
          intro.style.top  = '-100vh';
       }, 2300);

    });

});
