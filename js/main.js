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

    document.querySelectorAll(".header-menu__link").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const blockId = item.getAttribute("href"); //получаем ссылку на какой блок ссылкает
            document.querySelector("" + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            }); //прокручиваем скрол к объекту
        });
    });
});
