/* ==================================
   REVEAL ANIMATION
================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==================================
   CONTACT FORM
================================== */

function sendMessage(event) {

    event.preventDefault();

    const message =
        document.getElementById(
            "formMessage"
        );

    if (message) {

        message.innerHTML =
            "✅ Thank you! Your message has been received.";

        message.style.color =
            "#2f5d50";

    }

    event.target.reset();

}

/* ==================================
   TYPEWRITER EFFECT
================================== */

const typing =
    document.getElementById(
        "typing"
    );

if (typing) {

    const words = [

        "Future Econnomist",
        "Economic Enthusiast",
        "Monetary Policy Analyst",
        "Strategic Thinker",
        

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeWriter() {

        const currentWord =
            words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (
                charIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeWriter,
                    1500
                );

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (
                charIndex === 0
            ) {

                deleting = false;

                wordIndex++;

                if (
                    wordIndex >=
                    words.length
                ) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(

            typeWriter,

            deleting
                ? 50
                : 90

        );

    }

    typeWriter();

}

/* ==================================
   ACTIVE NAVIGATION
================================== */

const sections =
    document.querySelectorAll(
        "section"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

window.addEventListener(
    "scroll",

    () => {

        let current = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    pageYOffset >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );

        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active-link"
                );

                if (
                    link
                        .getAttribute(
                            "href"
                        )
                        .includes(
                            current
                        )
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }

);

/* ==================================
   SMOOTH SCROLL
================================== */

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(
    (anchor) => {

        anchor.addEventListener(
            "click",

            function (e) {

                const target =
                    this.getAttribute(
                        "href"
                    );

                if (
                    target === "#"
                ) {

                    return;

                }

                const element =
                    document.querySelector(
                        target
                    );

                if (
                    !element
                ) {

                    return;

                }

                e.preventDefault();

                element.scrollIntoView({

                    behavior:
                        "smooth"

                });

            }

        );

    }

);

/* ==================================
   FOOTER YEAR
================================== */

const year =
    document.getElementById(
        "year"
    );

if (year) {

    year.textContent =
        new Date()
        .getFullYear();

}

/* ==================================
   CONSOLE
================================== */

console.log(`

💼 BUSINESS STUDENT PORTFOLIO

Strategy • Finance • Leadership

Portfolio Loaded Successfully

`);