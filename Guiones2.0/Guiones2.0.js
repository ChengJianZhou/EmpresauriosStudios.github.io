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


const slidersA = [...document.querySelectorAll(".slider_bodyA")];
    const arrowNextA = document.querySelector("#nextA");
    const arrowBeforeA = document.querySelector("#beforeA");
    let valueA;

    arrowNextA.addEventListener("click", ()=>changePosition(1));

    arrowBeforeA.addEventListener("click", ()=>changePosition(-1));

    function changePosition(changeA){
        const currentElementA = Number(document.querySelector(".slider_bodyA--show").dataset.id);

        valueA = currentElementA;
        valueA+= changeA;
        
        if(valueA== 0 || valueA == slidersA.length+1){
            valueA = valueA === 0 ? slidersA.length : 1;
        }
        
        slidersA[currentElementA-1].classList.toggle("slider_bodyA--show");
        slidersA[valueA-1].classList.toggle("slider_bodyA--show");
    }


window.onload = function(){
    $("#onload").fadeOut();
    $("body").removeClass("hidden")
}