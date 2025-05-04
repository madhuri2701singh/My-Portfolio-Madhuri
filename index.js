function humburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    navbar.style.display = "block"; // Make sure it's visible
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    setTimeout(() => {
        navbar.style.display = "none"; // Hide after animation
    }, 200);
}

// Typewriter Effect
const texts = [
    "FRONTEND",
    "DEVELOPER"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter on load
window.onload = () => {
    typeWriter();
};
