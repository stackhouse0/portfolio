const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.getElementsByTagName("body");
const show = document.querySelector(".show");
const year = document.querySelector(".copyright");
const navbarToggle = document.querySelector(".navbar-toggler");
const navItem = document.querySelector(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
const imageContainerEl = document.querySelector(".image-container");
const faders = document.querySelectorAll(".fade-in");
const lightMode = document.querySelector('.lightMode');
const home = document.getElementById("home");
const topLink = document.querySelector(".top-link");

//scroll link
window.addEventListener('scroll', function(){
const scrollHeight = window.pageYOffset;
if(scrollHeight > 300){
    topLink.classList.add('show-link');
} else {
    topLink.classList.remove("show-link");
}
});


//Light mode

light.addEventListener("click", function(){
    lightMode.classList.add("light-mode");
});

    // Dark mode

dark.addEventListener("click", function(){
        lightMode.classList.remove("light-mode")
});

let paragraph = `I can make your imagination come to life 😊`
let counter = 0;
update()

function update() {
    show.innerHTML = paragraph.slice(0, counter);
    counter++;
    setTimeout(update, 200);
}

// intersection observer code

const appearOptions = {
    threshold: 0.25,
    rootMargin: "0px 0px -15px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            return;
    } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
})
}, appearOptions)


faders.forEach(function(fader){
    appearOnScroll.observe(fader);
})

//footer date

const date = new Date().getFullYear();
year.innerHTML = date;