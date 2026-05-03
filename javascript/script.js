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
    "Las Cruces homes are built with stucco exteriors, tile floors, and flat roofs designed to handle the desert climate. It’s part of what gives the city its signature Southwest style.",
    "NASA used the nearby area for landing the Space Shuttle Columbia in 1982. It is also known as the gateway to Spaceport America.",
    "Las Cruces hosts one of the largest open-air Farmers Markets in the U.S. in its historic downtown.",
    "Billy the Kid stood trial for murder in Las Cruces in 1880, and later, lawman Pat Garrett was killed here in a shooting.",
    "Despite its flat appearance in town, Las Cruces sits at an elevation of nearly 4,000 feet.",
    "In 2020, New Mexico ranked first in the nation for pecan production, with the Mesilla Valley’s massive orchards being a primary contributor.",
    "For decades, the city was famous for the Whole Enchilada Fiesta, which once held the Guinness World Record for making the world's largest enchilada.",
    "The city sits within the Organ Caldera; the iconic Organ Mountains to the east and the Doña Ana Mountains to the north were formed by a massive volcanic eruption approximately 32 million years ago."
];

let factIndex = 0;

document.getElementById("factButton").addEventListener("click", function () {

    document.getElementById("factDisplay").textContent = facts[factIndex];

    factIndex++;

    if (factIndex >= facts.length) {
        factIndex = 0;
    }
});

//Image gallery with next and previous button
const galleryImage = document.getElementById("galleryImage");

const images = [
    {
        src: "../images/splashdowntownart.jpg",
        alt: "Downtown Las Cruces art mural"
    },
    {
        src: "../images/splashbuildingart.jpg",
        alt: "Historic building artwork in Las Cruces"
    },
    {
        src: "../images/splashtheater.jpg",
        alt: "Rio Grande Theatre exterior in downtown Las Cruces"
    },
    {
        src: "../images/splashdowntownstreet.jpg",
        alt: "Downtown Las Cruces street view"
    },
    {
        src: "../images/splashfarmandranch.jpg",
        alt: "Farm and ranch landscape near Las Cruces"
    },
    {
        src: "../images/splashmountainflowers.jpg",
        alt: "Wildflowers in front of desert mountains"
    },
    {
        src: "../images/splashorganmountains.jpg",
        alt: "Organ Mountains skyline at sunset"
    },
    {
        src: "../images/splashorganlandscape.jpg",
        alt: "Wide landscape view of the Organ Mountains"
    },
    {
        src: "../images/splashroadrunner.jpg",
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