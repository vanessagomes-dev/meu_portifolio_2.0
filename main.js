// Menu Hambúrguer
const menuToggler = document.getElementById("menu-toggler");
const navMenu = document.getElementById("nav-menu");

menuToggler.addEventListener("click", function() {
  menuToggler.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// Animação das letras do banner
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

setInterval(changeText, 3000);

// Configuração do botão de envio do Formspree
window.formbutton = window.formbutton || function() {
    (formbutton.q = formbutton.q || []).push(arguments);
};

formbutton("create", {
    action: "https://formspree.io/f/xanwrjew",
    title: "How can we help?",
    fields: [
        { 
            type: "email", 
            label: "Email:", 
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    },
    onInit: function() {
        // Aplicar estilo ao botão Formbutton após a criação
        let formButtonElement = document.querySelector('.formbutton-button');
        formButtonElement.style.position = 'fixed';
        formButtonElement.style.bottom = '80px';
        formButtonElement.style.right = '20px';
        formButtonElement.style.zIndex = '1000';
    }
});

// particules, fond background (desativado apos a atualização do portifolio):

/* particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
}); */ 

