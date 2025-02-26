document.querySelectorAll(".card__img img").forEach(img => {
    img.addEventListener("click", function () {
        const card = img.closest(".locations__card, .locations__card--active");
        card.classList.toggle("locations__card");
        card.classList.toggle("locations__card--active");
    });
});