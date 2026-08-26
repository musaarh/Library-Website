/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "active"
        );

    }
);


/* Close menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    }
);


/* =========================================
   LIBRARY OPEN / CLOSED STATUS
========================================= */

function updateLibraryStatus() {

    const statusTitle =
        document.getElementById(
            "statusTitle"
        );

    const statusMessage =
        document.getElementById(
            "statusMessage"
        );

    const statusDot =
        document.getElementById(
            "statusDot"
        );


    const now = new Date();


    /*
        JavaScript:
        0 = Sunday
        1 = Monday
        2 = Tuesday
        3 = Wednesday
        4 = Thursday
        5 = Friday
        6 = Saturday
    */

    const day =
        now.getDay();


    const hours =
        now.getHours();


    const minutes =
        now.getMinutes();


    const currentTime =
        hours * 60 + minutes;


    const openingTime =
        9 * 60;


    const closingTime =
        17 * 60;


    const weekday =
        day >= 1 &&
        day <= 5;


    const libraryIsOpen =
        weekday &&
        currentTime >= openingTime &&
        currentTime < closingTime;


    if (libraryIsOpen) {

        statusTitle.textContent =
            "The library is open now";


        statusMessage.textContent =
            "We are open today until 17:00.";


        statusDot.style.background =
            "#2e8b57";

    }


    else if (weekday) {

        statusTitle.textContent =
            "The library is currently closed";


        statusMessage.textContent =
            "Weekday opening hours are 09:00 – 17:00.";


        statusDot.style.background =
            "#a94b4b";

    }


    else {

        statusTitle.textContent =
            "The library is closed today";


        statusMessage.textContent =
            "Saturday and Sunday are closed.";


        statusDot.style.background =
            "#a94b4b";

    }

}


/* Run status check */

updateLibraryStatus();


/*
    Update every minute so that
    the status remains accurate.
*/

setInterval(
    updateLibraryStatus,
    60000
);


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =========================================
   FOOTER
========================================= */

function renderFooter() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <footer class="site-footer">
            <div class="footer-content">

                <div class="footer-brand">
                    <h3>Mmakau Community Library</h3>
                    <p>
                        A place to read, learn, study, access information
                        and connect with the community.
                    </p>
                </div>

                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#opening-hours">Opening Hours</a>
                    <a href="#membership">Membership</a>
                    <a href="#services">Services</a>
                    <a href="#rules">Rules</a>
                    <a href="#contact">Contact</a>
                </div>

                <div class="footer-contact">
                    <h4>Contact</h4>
                    <p>Mmakau Community Library</p>
                    <p>Monday – Friday: 09:00 – 17:00</p>
                </div>

            </div>

            <div class="footer-bottom">
                <p>
                    © ${currentYear} Mmakau Community Library.
                    All rights reserved.
                </p>
            </div>
        </footer>
    `;
}

document.addEventListener("DOMContentLoaded", renderFooter);
