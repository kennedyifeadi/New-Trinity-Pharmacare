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


document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.getElementById('default-carousel');
    const options = {
        interval: 5000, // Set the interval to 5000 milliseconds (5 seconds)
        indicators: {
            activeClasses: 'bg-blue-500',
            inactiveClasses: 'bg-gray-300'
        },
        pauseOnHover: true,
        wrap: true
    };
    const carousel = new Carousel(carouselElement, options);
});