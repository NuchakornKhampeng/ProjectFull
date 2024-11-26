window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add("animate");
        }
    });
});


