/* =========================================
   ELEGANT PURPLE BIRTHDAY WEBSITE
   Ms. Mary Antonette
========================================= */


/* =========================================
   GET ELEMENTS
========================================= */

const stage = document.getElementById("stage");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");

const gift = document.getElementById("gift");
const cake = document.getElementById("cake");

const surprise = document.getElementById("surprise");
const wishMessage = document.getElementById("wishMessage");

const closeSurprise =
    document.getElementById("closeSurprise");

const closeWish =
    document.getElementById("closeWish");


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    for (let i = 0; i < 100; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            2 + Math.random() * 4;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            1.8 + Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    /* Random heart */

    const heartTypes = [
        "♡",
        "♥",
        "♡",
        "✦"
    ];

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];

    /* Random horizontal position */

    heart.style.left =
        Math.random() * 100 + "%";

    /* Start from bottom */

    heart.style.bottom =
        "-30px";

    /* Different sizes */

    heart.style.fontSize =
        10 + Math.random() * 19 + "px";

    /* Different speeds */

    heart.style.animationDuration =
        4.5 + Math.random() * 4 + "s";

    /* Slight random delay */

    heart.style.animationDelay =
        Math.random() * .7 + "s";

    hearts.appendChild(heart);

    /* Remove after animation */

    setTimeout(() => {

        heart.remove();

    }, 9000);
}


/*
   Create hearts continuously
*/

setInterval(
    createHeart,
    550
);


/* Create a few immediately */

for (let i = 0; i < 8; i++) {

    setTimeout(
        createHeart,
        i * 300
    );
}


/* =========================================
   GIFT CLICK
========================================= */

gift.addEventListener(
    "click",
    function () {

        /* Open surprise */

        surprise.classList.add("show");

        /* Confetti */

        createConfetti();

        /* Extra hearts */

        createHeart();
        createHeart();
        createHeart();

    }
);


/* =========================================
   CLOSE GIFT MESSAGE
========================================= */

closeSurprise.addEventListener(
    "click",
    function () {

        surprise.classList.remove("show");

    }
);


/* Click outside */

surprise.addEventListener(
    "click",
    function (event) {

        if (
            event.target === surprise
        ) {

            surprise.classList.remove("show");

        }

    }
);


/* =========================================
   CAKE CLICK
========================================= */

cake.addEventListener(
    "click",
    function () {

        /* Open wish */

        wishMessage.classList.add("show");

        /* Confetti */

        createConfetti();

        /* Blow candle */

        blowCandle();

        /* Hearts */

        for (let i = 0; i < 5; i++) {

            setTimeout(
                createHeart,
                i * 150
            );

        }

    }
);


/* =========================================
   CLOSE WISH
========================================= */

closeWish.addEventListener(
    "click",
    function () {

        wishMessage.classList.remove("show");

    }
);


/* Click outside wish card */

wishMessage.addEventListener(
    "click",
    function (event) {

        if (
            event.target === wishMessage
        ) {

            wishMessage.classList.remove("show");

        }

    }
);


/* =========================================
   CANDLE EFFECT
========================================= */

function blowCandle() {

    const flame =
        document.querySelector(".flame");

    if (!flame) return;

    /* Turn off flame */

    flame.style.transition =
        "all .5s ease";

    flame.style.transform =
        "scale(0)";

    flame.style.opacity =
        "0";

    /* Turn it back on later */

    setTimeout(
        function () {

            flame.style.transform =
                "";

            flame.style.opacity =
                "";

        },
        2800
    );
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "✦",
        "♥",
        "★",
        "♡",
        "✧",
        "◆"
    ];

    for (let i = 0; i < 75; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        /* Random symbol */

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        /* Random position */

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-20px";

        /* Random size */

        piece.style.fontSize =
            8 + Math.random() * 15 + "px";

        /* Random delay */

        piece.style.animationDelay =
            Math.random() * .8 + "s";

        /* Random duration */

        piece.style.animationDuration =
            2 + Math.random() * 2 + "s";

        /* Natural purple palette */

        piece.style.color =
            randomPurple();

        document.body.appendChild(piece);

        /* Remove */

        setTimeout(
            function () {

                piece.remove();

            },
            5000
        );
    }
}


/* =========================================
   NATURAL PURPLE COLORS
========================================= */

function randomPurple() {

    const colors = [

        "#eee5ef",
        "#d9c2dd",
        "#c6a5ca",
        "#b58fbd",
        "#e2d0df",
        "#d4b9a0"

    ];

    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];
}


/* =========================================
   EXTRA SPARKLES
========================================= */

function createSparkle() {

    if (!sparkles) return;

    const sparkle =
        document.createElement("div");

    sparkle.innerHTML =
        Math.random() > .5
            ? "✦"
            : "·";

    sparkle.style.position =
        "absolute";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkle.style.color =
        "#e5d9e7";

    sparkle.style.opacity =
        ".55";

    sparkle.style.fontSize =
        8 + Math.random() * 12 + "px";

    sparkle.style.pointerEvents =
        "none";

    sparkle.style.textShadow =
        "0 0 8px rgba(230,215,234,.6)";

    sparkle.style.animation =
        "twinkle 1.6s ease forwards";

    sparkles.appendChild(sparkle);

    setTimeout(
        function () {

            sparkle.remove();

        },
        1700
    );
}


/* Create sparkles */

setInterval(
    createSparkle,
    500
);


/* =========================================
   CLICK EFFECT
========================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
           Don't create an extra heart
           when clicking the main buttons.
        */

        if (
            event.target.closest(".gift") ||
            event.target.closest(".cake") ||
            event.target.closest(".surprise-card") ||
            event.target.closest(".wish-card")
        ) {
            return;
        }


        const heart =
            document.createElement("div");

        heart.innerHTML = "♡";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.color =
            "#c8a4ce";

        heart.style.fontSize =
            "21px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "300";

        heart.style.transition =
            "1s ease";

        heart.style.textShadow =
            "0 0 8px rgba(214,185,220,.5)";

        document.body.appendChild(
            heart
        );


        requestAnimationFrame(
            function () {

                heart.style.transform =
                    "translateY(-60px) scale(1.4)";

                heart.style.opacity =
                    "0";

            }
        );


        setTimeout(
            function () {

                heart.remove();

            },
            1000
        );

    }
);


/* =========================================
   INITIALIZE
========================================= */

createStars();


/* =========================================
   PREVENT BUTTON FOCUS OUTLINE
========================================= */

document.querySelectorAll("button")
    .forEach(
        function (button) {

            button.addEventListener(
                "focus",
                function () {

                    button.style.outline =
                        "none";

                }
            );

        }
    );