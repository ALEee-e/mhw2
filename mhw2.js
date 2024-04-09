function modificacolore(event) {
    const bot = event.currentTarget;
    const colo = bot.style.backgroundColor;
    if (colo === "white") {
        bot.style.backgroundColor = "#CCCCCC";
    } else {
        bot.style.backgroundColor = "white";

    }
};
const botton = document.getElementById("bot");
botton.addEventListener("click", modificacolore);


function bottoni(event) {
    const bottone = event.currentTarget;
    var bottone1 = document.querySelector('#bott1');
    var bottone2 = document.querySelector('#bott2');


    if (bottone === document.getElementById("bot1")) {
        bott1.classList.add('hidden');
        bott2.classList.remove('hidden');
        const img = document.querySelector('header');
        img.style.backgroundImage = "url('https://amabilejewels.it/media/slideshow/cache/1440x680/wysiwyg/prov1.jpg')";
    }
    else if (bottone === document.getElementById("bot2")) {
        bott1.classList.remove('hidden');
        bott2.classList.add('hidden');
        const img = document.querySelector('header');
        img.style.backgroundImage = "url('https://amabilejewels.it/media/slideshow/cache/1440x680/wysiwyg/banner-collezione-circle-orizzontale.jpg')"

    }


}
const bot1 = document.getElementById("bot1");
const bot2 = document.getElementById("bot2");
bot1.addEventListener("click", bottoni);
bot2.addEventListener("click", bottoni);


let indice = 0;
const slides = document.querySelectorAll('.ma');

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.add('hidden');
    });
    for (let i = index; i < index + 4; i++) {
        slides[i].classList.remove('hidden');
    }
}

function prevSlide() {
    if (indice === 0) return;
    indice--;
    showSlide(indice);
}

function nextSlide() {
    if (indice >= slides.length - 3) return;
    indice++;
    showSlide(indice);
}

showSlide(indice);

let indice2 = 0;
const slides2 = document.querySelectorAll('.ok');

function showSlide2(index) {
    slides2.forEach(slide2 => {
        slide2.classList.add('hidden');
    });
    for (let i = index; i < index + 4; i++) {
        slides2[i].classList.remove('hidden');
    }
}

function prevSlide2() {
    if (indice2 === 0) return;
    indice2--;
    showSlide2(indice2);
}

function nextSlide2() {
    if (indice2 >= slides2.length - 3) return;
    indice2++;
    showSlide2(indice2);
}

showSlide2(indice2);



const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggle(event) {
    const details = document.querySelector('.details');
    const image = event.currentTarget.querySelector('img');
    const text = event.currentTarget.querySelector('span');

    isVisible = !isVisible;
    if (isVisible) {
        details.classList.remove('hidden');
        image.src = DOWN_ARROW;
        text.textContent = 'Nascondi dettagli';
    } else {
        details.classList.add('hidden');
        image.src = RIGHT_ARROW;
        text.textContent = 'Mostra altro';
    }
}
let isVisible = false;

const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggle);