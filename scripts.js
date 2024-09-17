// Bagel Modal Variables
var bagelModal = document.getElementById("bagelModal");
var bagelBtn = document.getElementById("bagelBtn");
var bagelClose = bagelModal.getElementsByClassName("close")[0];

// Dumpling Modal Variables
var dumplingModal = document.getElementById("dumplingModal");
var dumplingBtn = document.getElementById("dumplingBtn");
var dumplingClose = dumplingModal.getElementsByClassName("close")[0];

// Fries Modal Variables
var friesModal = document.getElementById("friesModal");
var friesBtn = document.getElementById("friesBtn");
var friesClose = friesModal.getElementsByClassName("close")[0];

// Sushi Modal Variables
var sushiModal = document.getElementById("sushiModal");
var sushiBtn = document.getElementById("sushiBtn");
var sushiClose = sushiModal.getElementsByClassName("close")[0];

// Open Modals
bagelBtn.onclick = function() {
    bagelModal.style.display = "block";
}

dumplingBtn.onclick = function() {
    dumplingModal.style.display = "block";
}

friesBtn.onclick = function() {
    friesModal.style.display = "block";
}

sushiBtn.onclick = function() {
    sushiModal.style.display = "block";
}

// Close Modals
bagelClose.onclick = function() {
    bagelModal.style.display = "none";
}

dumplingClose.onclick = function() {
    dumplingModal.style.display = "none";
}

friesClose.onclick = function() {
    friesModal.style.display = "none";
}

sushiClose.onclick = function() {
    sushiModal.style.display = "none";
}

// Close Modals by clicking outside
window.onclick = function(event) {
    if (event.target == bagelModal) {
        bagelModal.style.display = "none";
    } else if (event.target == dumplingModal) {
        dumplingModal.style.display = "none";
    } else if (event.target == friesModal) {
        friesModal.style.display = "none";
    } else if (event.target == sushiModal) {
        sushiModal.style.display = "none";
    }
}

