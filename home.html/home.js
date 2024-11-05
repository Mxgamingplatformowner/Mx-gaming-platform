const HomeEL = document.querySelector(".Home");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(HomeEL.offsetHeight);

console.log(bottomContainerEl.offsetTop);


window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainerEl.offsetTop - HomeEL.offsetHeight) {
    
    }
});

