const scrollers = document.querySelectorAll('.partnersScroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}

function addAnimation(){
    scrollers.forEach(scroller =>{
        scroller.setAttribute("data-animated", true)
    });
}
addAnimation()
