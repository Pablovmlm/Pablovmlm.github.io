document.querySelectorAll("a").forEach(link => {
    console.log(link);
    link.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.setItem("redirectAfterSpinner", link.href);
        window.location.href = "spinner.html";
    });
});