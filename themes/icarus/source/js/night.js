function applyNight(value) {
    if (value.toString() === 'true') {
        document.body.classList.remove('light');
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
        document.body.classList.add('light');
    }
}

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(`dark mode: ${dark}`);
applyNight(dark);
