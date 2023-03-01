function applyNight(value) {
    if (value.toString() === 'true') {
        document.body.classList.remove('light');
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
        document.body.classList.add('light');
    }
}

function showTheme() {
    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(`dark mode: ${dark}`);
    applyNight(dark);
}

function showContent() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = 1;
}

window.addEventListener('DOMContentLoaded', function () {
    showTheme();
    showContent();
});
