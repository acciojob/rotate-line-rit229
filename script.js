//your JS code here. If required.
let angle = 0; // Starting angle

function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    document.getElementById('line').style.transform = `rotate(${angle}deg)`; // Apply rotation
}

// Call rotateLine every 20 milliseconds
setInterval(rotateLine, 20);