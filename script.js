/* ================================================= */
/* ================= MOBILE MENU =================== */
/* ================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


/*
    Open and close mobile navigation
*/

if (menuBtn && navLinks) {


    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    /*
        Close menu after
        clicking any navigation link
    */

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

                }
            );

        }
    );

}


/* ================================================= */
/* ================= TYPING EFFECT ================= */
/* ================================================= */

const words = [

    "Computer Science Student",

    "Data Science Enthusiast",

    "Web Developer",

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


    /* ================= TYPING ================= */

    if (!deleting) {


        typing.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        /*
            When complete word is typed
        */

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


    /* ================= DELETING ================= */

    else {


        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        /*
            When word is completely deleted
        */

        if (charIndex === 0) {


            deleting = false;


            wordIndex =
                (wordIndex + 1)
                % words.length;

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
/* ============== 3D PROFILE EFFECT ================ */
/* ================================================= */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


document.addEventListener(
    "mousemove",
    (event) => {


        /*
            Don't apply mouse
            3D effect on phones
        */

        if (
            window.innerWidth <= 600
        ) {


            if (profileCard) {

                profileCard.style.transform =
                    "rotateY(0deg) rotateX(0deg)";

            }


            return;

        }


        if (!profileCard) {

            return;

        }


        const x =

            (
                window.innerWidth / 2 -
                event.clientX
            ) / 25;


        const y =

            (
                window.innerHeight / 2 -
                event.clientY
            ) / 25;


        profileCard.style.transform =

            `rotateY(${x}deg)
             rotateX(${y}deg)`;

    }
);


/* ================================================= */
/* ================ SCROLL 3D EFFECT ============== */
/* ================================================= */

const cards =

    document.querySelectorAll(

        ".skill-card, " +
        ".project-card, " +
        ".achievement-card, " +
        ".about-card"

    );


function scrollAnimation() {


    const windowHeight =
        window.innerHeight;


    cards.forEach(
        (card) => {


            const position =

                card
                    .getBoundingClientRect()
                    .top;


            const visible =

                position <
                windowHeight - 100;


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
                    "rotateX(20deg) " +
                    "translateY(60px)";

            }

        }
    );

}


window.addEventListener(
    "scroll",
    scrollAnimation
);


scrollAnimation();


/* ================================================= */
/* ============== PARALLAX BACKGROUND ============== */
/* ================================================= */

window.addEventListener(
    "scroll",
    () => {


        const scroll =
            window.scrollY;


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