/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    darkBtn.textContent = "☀️";

}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        darkBtn.textContent = "☀️";

    }

    else {

        localStorage.setItem("theme", "light");

        darkBtn.textContent = "🌙";

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});


/* ==========================================
   TYPING EFFECT
========================================== */

const typing = document.getElementById("typing");

const words = [

    "Web Developer",

    "Graphic Designer",

    "Python Programmer",

    "Freelancer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section, header");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll("section");

function revealSections() {

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/* ==========================================
   SKILL BARS
========================================== */

const bars = document.querySelectorAll(".progress");

function animateSkills() {

    bars.forEach(bar => {

        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            if (bar.classList.contains("html")) {

                bar.style.width = "90%";

            }

            else if (bar.classList.contains("css")) {

                bar.style.width = "85%";

            }

            else if (bar.classList.contains("javascript")) {

                bar.style.width = "75%";

            }

            else if (bar.classList.contains("python")) {

                bar.style.width = "80%";

            }

        }

    });

}

window.addEventListener("scroll", animateSkills);

animateSkills();


/* ==========================================
   COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const stats = document.getElementById("stats");

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = Math.max(1, Math.floor(target / 50));

            function update() {

                count += speed;

                if (count >= target) {

                    counter.textContent = target;

                }

                else {

                    counter.textContent = count;

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", runCounters);

runCounters();


/* ==========================================
   PROJECT FILTER
========================================== */

const filterButtons = document.querySelectorAll(".filter");

const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if (filter === "all" || project.classList.contains(filter)) {

                project.style.display = "block";

            }

            else {

                project.style.display = "none";

            }

        });

    });

});


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});