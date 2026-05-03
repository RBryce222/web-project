document.addEventListener("DOMContentLoaded", function () {

// Greeting Form
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;

    document.getElementById("greetingMessage").textContent =
        "Welcome to Las Cruces, " + name + "! 🌵";
});


// Fun Facts
const facts = [
    "Las Cruces is at the heart of New Mexico’s chile industry, holding a deep affection for both red and green chili.",
    "White Sands is the largest gypsum dune field in the world.",
    "The Organ Mountains are named for their pipe-like shape.",
    "White Sands Missile Range saw the first atomic bomb detonation (Trinity Site) in February 1945.",
    "The Rio Grande Theatre, built in 1926, was a hotspot for early Hollywood films and is a landmark in downtown Las Cruces.",
    "Clyde Tombaugh, the astronomer who discovered Pluto, was a professor at New Mexico State University (NMSU) and a resident for over 40 years.",
    "\"Las Cruces\" is Spanish for \"the crosses,\" referring to a 19th-century legend where crosses were erected to mark the graves of travelers attacked by Apache.",
    "Did you know movies and shows are regularly filmed here? From indie films to big productions, Las Cruces is becoming a quiet hotspot for the film industry, thanks to its diverse landscapes and welcoming community.",
    "Las Cruces homes are built with stucco exteriors, tile floors, and flat roofs designed to handle the desert climate. It’s part of what gives the city its signature Southwest style."
];

let lastFactIndex = -1;

document.getElementById("factButton").addEventListener("click", function() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === lastFactIndex);

    lastFactIndex = randomIndex;

    document.getElementById("factDisplay").textContent = facts[randomIndex];
});

//Image gallery with next and previous button
const galleryImage = document.getElementById("galleryImage");

const images = [
    {
        src: "../images/splash/splashdowntownart.jpg",
        alt: "Downtown Las Cruces art mural"
    },
    {
        src: "../images/splash/splashbuildingart.jpg",
        alt: "Historic building artwork in Las Cruces"
    },
    {
        src: "../images/splash/splashtheater.jpg",
        alt: "Rio Grande Theatre exterior in downtown Las Cruces"
    },
    {
        src: "../images/splash/splashdowntownstreet.jpg",
        alt: "Downtown Las Cruces street view"
    },
    {
        src: "../images/splash/splashfarmandranch.jpg",
        alt: "Farm and ranch landscape near Las Cruces"
    },
    {
        src: "../images/splash/splashmountainflowers.jpg",
        alt: "Wildflowers in front of desert mountains"
    },
    {
        src: "../images/splash/splashorganmountains.jpg",
        alt: "Organ Mountains skyline at sunset"
    },
    {
        src: "../images/splash/splashorganlandscape.jpg",
        alt: "Wide landscape view of the Organ Mountains"
    },
    {
        src: "../images/splash/splashroadrunner.jpg",
        alt: "Roadrunner bird in desert habitat"
    }
];

function updateImage() {
    galleryImage.style.opacity = 0;

    setTimeout(() => {
        galleryImage.src = images[currentIndex].src;
        galleryImage.alt = images[currentIndex].alt;
        galleryImage.style.opacity = 1;
    }, 200);
}

let currentIndex = 0;

galleryImage.src = images[currentIndex].src;
galleryImage.alt = images[currentIndex].alt;
galleryImage.style.opacity = 1;

//Previous button
document.getElementById("prevImageBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

//Next button
document.getElementById("nextImageBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

});