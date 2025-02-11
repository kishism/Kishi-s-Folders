document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
        event.preventDefault();
    }
}, false);

document.addEventListener("wheel", function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });