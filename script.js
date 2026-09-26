/* ================================================= */
/* ================ MOBILE MENU ==================== */
/* ================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {


    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );


            const icon =
                menuBtn.querySelector("i");


            if (
                navLinks.classList.contains(
                    "active"
                )
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            }

            else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );


                    const icon =
                        menuBtn.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        }
    );

}



/* ================================================= */
/* ================ TYPING EFFECT ================== */
/* ================================================= */

const words = [

    "Computer Science Student",

    "Web Developer",

    "Data Science Enthusiast",

    "Programmer",

    "Problem Solver"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typing =
    document.getElementById("typing");


function typeEffect() {


    if (!typing) {

        return;

    }


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
                typeEffect,
                1500
            );


            return;

        }

    }

    else {


        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {


            deleting = false;


            wordIndex =
                (
                    wordIndex + 1
                )
                %
                words.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting
            ? 50
            : 100

    );

}


typeEffect();



/* ================================================= */
/* =============== PROFILE 3D EFFECT ============== */
/* ================================================= */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


let mouseX = 0;

let mouseY = 0;


document.addEventListener(
    "mousemove",
    (event) => {


        if (!profileCard) {

            return;

        }


        /*
            Disable 3D mouse effect
            on mobile devices.
        */

        if (
            window.innerWidth <= 600
        ) {

            return;

        }


        mouseX =

            (
                window.innerWidth / 2 -
                event.clientX
            ) / 45;


        mouseY =

            (
                window.innerHeight / 2 -
                event.clientY
            ) / 45;


        profileCard.style.transform =

            `rotateY(${mouseX}deg)
             rotateX(${mouseY}deg)`;

    }
);



/* ================================================= */
/* =============== PROFILE RESET =================== */
/* ================================================= */

document.addEventListener(
    "mouseleave",
    () => {


        if (!profileCard) {

            return;

        }


        if (
            window.innerWidth > 600
        ) {


            profileCard.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }

    }
);



/* ================================================= */
/* ================= SCROLL EFFECT ================= */
/* ================================================= */

const animatedCards =

    document.querySelectorAll(

        ".skill-card, " +

        ".project-card, " +

        ".achievement-card, " +

        ".about-card, " +

        ".stat-card, " +

        ".resume-card, " +

        ".contact-card"

    );


function scrollAnimation() {


    const windowHeight =
        window.innerHeight;


    animatedCards.forEach(
        (card) => {


            const position =

                card
                    .getBoundingClientRect()
                    .top;


            const visible =

                position <
                windowHeight - 80;


            if (visible) {


                card.style.opacity =
                    "1";


                card.style.transform =

                    "perspective(1000px) " +

                    "rotateX(0deg) " +

                    "translateY(0)";

            }

            else {


                card.style.opacity =
                    "0";


                card.style.transform =

                    "perspective(1000px) " +

                    "rotateX(12deg) " +

                    "translateY(45px)";

            }

        }
    );

}


window.addEventListener(
    "scroll",
    scrollAnimation
);


window.addEventListener(
    "load",
    scrollAnimation
);


scrollAnimation();



/* ================================================= */
/* ================= PARALLAX ====================== */
/* ================================================= */

const glow1 =
    document.querySelector(
        ".glow1"
    );


const glow2 =
    document.querySelector(
        ".glow2"
    );


const glow3 =
    document.querySelector(
        ".glow3"
    );


window.addEventListener(
    "scroll",
    () => {


        const scroll =
            window.scrollY;


        if (glow1) {

            glow1.style.transform =
                `translateY(
                    ${scroll * 0.15}px
                )`;

        }


        if (glow2) {

            glow2.style.transform =
                `translateY(
                    ${scroll * -0.10}px
                )`;

        }


        if (glow3) {

            glow3.style.transform =
                `translateY(
                    ${scroll * 0.08}px
                )`;

        }

    }
);



/* ================================================= */
/* ================= NAVBAR SCROLL ================= */
/* ================================================= */

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {


        if (!header) {

            return;

        }


        if (
            window.scrollY > 50
        ) {

            header.style.background =
                "rgba(2, 7, 19, 0.94)";

        }

        else {

            header.style.background =
                "rgba(2, 7, 19, 0.80)";

        }

    }
);



/* ================================================= */
/* ================= ACTIVE NAV ===================== */
/* ================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {


        let currentSection =
            "";


        sections.forEach(
            (section) => {


                const sectionTop =
                    section.offsetTop - 150;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            (link) => {


                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute(
                        "href"
                    )
                    ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);



/* ================================================= */
/* =============== RESIZE SAFETY =================== */
/* ================================================= */

window.addEventListener(
    "resize",
    () => {


        if (!profileCard) {

            return;

        }


        if (
            window.innerWidth <= 600
        ) {


            profileCard.style.transform =
                "scale(0.76)";

        }

        else {


            profileCard.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }

    }
);



/* ================================================= */
/* ================= IMAGE SAFETY ================== */
/* ================================================= */

const profileImage =
    document.querySelector(
        ".profile-image img"
    );


if (profileImage) {


    profileImage.addEventListener(
        "error",
        () => {


            console.log(
                "Profile image could not be loaded. Make sure suraj.jpeg is in the same folder as index.html."
            );

        }
    );

}



/* ================================================= */
/* ================ PAGE LOADED ==================== */
/* ================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
