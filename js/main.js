document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        loop: false,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button--next",
            prevEl: ".swiper-button--prev",
        },
    });

    const header = document.querySelector('.header');

    document.querySelectorAll(".faq-wrapper__item").forEach((item) => {
        const img = item.querySelector(".faq-wrapper__img");
        const src = img.getAttribute("src");
        const srcH = img.getAttribute("data-hover-src");
        const srcO = img.getAttribute("data-click-src");
        const preview = item.getElementsByTagName("div")[0];

        item.addEventListener("mouseenter", () => {
            const index = img.src.indexOf("img/");

            if (img.src.substring(index) == src) {
                img.src = srcH;

                preview.style.color = "#fff";
            }
        });

        item.addEventListener("mouseleave", () => {
            const index = img.src.indexOf("img/");

            if (img.src.substring(index) == srcH) {
                img.src = src;
                preview.style.color = "#000";
            }
        });

        item.addEventListener("click", () => {
            const text = item.getElementsByTagName("p")[0];

            if (text.style.display == "block") {
                text.style.display = "none";
                preview.style.color = "#000";
                img.src = src;
            } else {
                text.style.display = "block";
                preview.style.color = "#DD3934";
                img.src = srcO;
            }
        });
    });

    document.querySelector('.swiper-button--next').addEventListener('click', () => {
        document.querySelector('.swiper-button--prev').style.visibility = 'visible';
    });

    const formSlider = document.querySelector(".test-bottom__form");

    formSlider.addEventListener("submit", (e) => {
        e.preventDefault();

        document.querySelectorAll(".test-slider__slide")[4].style.display =
            "flex";

        swiper.update();

        swiper.slideNext(500, false);

        swiper.disable();
    });

    document.querySelectorAll(".test-bottom__btn").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            item.style.backgroundColor = "#FFDE01";

            swiper.slideNext(500, false);
        });
    });

    header.querySelectorAll(".header-menu__link").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const blockId = item.getAttribute("href"); //получаем ссылку на какой блок ссылкает
            document.querySelector("" + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            }); //прокручиваем скрол к объекту
        });
    });

    const menu = header.querySelector('.menu');

    menu.addEventListener('click', ()=>{
        const menuMobile = header.querySelector('.header-bottom');
        const logo = header.querySelector('.logo__image');
        const src = logo.getAttribute("data-mobile-src");
        const srcH = logo.getAttribute("data-close-src");
        const menuImage = menu.querySelector('img');

        if(menuMobile.style.display == 'none')
        {
            menuMobile.style.display = 'flex';
            header.style.cssText = `
                background: linear-gradient(233.54deg, rgba(95, 76, 142, 0.2) 28.75%, rgba(228, 42, 42, 0.2) 52.12%, rgba(26, 8, 51, 0.2) 88.11%), radial-gradient(25% 30.33% at 25% 30.33%, rgba(160, 32, 103, 0.3) 0%, rgba(26, 9, 51, 0.3) 100%), linear-gradient(0deg, #1A0933, #1A0933), radial-gradient(25.1% 194.59% at 71.88% 49.19%, rgba(182, 229, 243, 0.9) 0%, rgba(182, 229, 243, 0) 100%), #2D69A5;
                color: #fff;
            `;
            logo.src = srcH;
            menu.style.cssText = 'background-color: transparent;'
            menu.querySelectorAll('.menu__line').forEach(item => {
                item.style.display = 'none';
            });
            menuImage.style.display = 'block';
        }
        else {
            logo.src = src;
            menuMobile.style.display = 'none';
            header.style.cssText = `
                background: #fff;
                color: #000;
            `;
            menuImage.style.display = 'none';
            menu.querySelectorAll('.menu__line').forEach(item => {
                item.style.display = 'inline';
            });
        }
    });
});
