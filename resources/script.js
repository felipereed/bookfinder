// resources/script.js

const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu-container");

function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggleBtn.classList.toggle("is-open", open);

    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggleBtn.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    setMenu(open);
});

// Close when a nav link is clicked
nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") setMenu(false);
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    const clickedInside = nav.contains(e.target) || toggleBtn.contains(e.target);
    if (!clickedInside) setMenu(false);
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});

// Optional: if user resizes to desktop while menu is open, reset state
window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) setMenu(false);
});
