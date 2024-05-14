document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var registerLink = document.getElementById("registerLink");
    var closeBtn = document.getElementsByClassName("close")[0];
    registerLink.onclick = function() {
        modal.style.display = "block";
    }
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
});
