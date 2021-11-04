const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button--next",
        prevEl: ".swiper-button--prev",
    },
});

function createHoverImage() {
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
}

createHoverImage();
