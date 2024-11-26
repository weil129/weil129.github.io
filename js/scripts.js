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

// Spanish Food Modal Variables
var spanishModal = document.getElementById("spanishModal");
var spanishBtn = document.getElementById("spanishBtn");
var spanishClose = spanishModal.getElementsByClassName("close")[0];

// Pizza Modal Variables
var pizzaModal = document.getElementById("pizzaModal");
var pizzaBtn = document.getElementById("pizzaBtn");
var pizzaClose = pizzaModal.getElementsByClassName("close")[0];

// Indian Food Modal Variables
var indianModal = document.getElementById("indianModal");
var indianBtn = document.getElementById("indianBtn");
var indianClose = indianModal.getElementsByClassName("close")[0];

// 新加的
var chickenBtn = document.getElementById("chickenBtn");
var chickenModel = document.getElementById("chickenModel");
var chickenClose = chickenModel.getElementsByClassName("close")[0];

// Open Modals
bagelBtn.onclick = function () {
	bagelModal.style.display = "block";
};

dumplingBtn.onclick = function () {
	dumplingModal.style.display = "block";
};

friesBtn.onclick = function () {
	friesModal.style.display = "block";
};

sushiBtn.onclick = function () {
	sushiModal.style.display = "block";
};

spanishBtn.onclick = function () {
	spanishModal.style.display = "block";
};

pizzaBtn.onclick = function () {
	pizzaModal.style.display = "block";
};

indianBtn.onclick = function () {
	indianModal.style.display = "block";
};

chickenBtn.onclick = function () {
	chickenModel.style.display = "block";
};
// Close Modals (when clicking 'x')
bagelClose.onclick = function () {
	bagelModal.style.display = "none";
};

dumplingClose.onclick = function () {
	dumplingModal.style.display = "none";
};

friesClose.onclick = function () {
	friesModal.style.display = "none";
};

sushiClose.onclick = function () {
	sushiModal.style.display = "none";
};

spanishClose.onclick = function () {
	spanishModal.style.display = "none";
};

pizzaClose.onclick = function () {
	pizzaModal.style.display = "none";
};

indianClose.onclick = function () {
	indianModal.style.display = "none";
};
chickenClose.onclick = function () {
	chickenModel.style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
	if (event.target == bagelModal) {
		bagelModal.style.display = "none";
	}
	if (event.target == dumplingModal) {
		dumplingModal.style.display = "none";
	}
	if (event.target == friesModal) {
		friesModal.style.display = "none";
	}
	if (event.target == sushiModal) {
		sushiModal.style.display = "none";
	}
	if (event.target == spanishModal) {
		spanishModal.style.display = "none";
	}
	if (event.target == pizzaModal) {
		pizzaModal.style.display = "none";
	}
	if (event.target == indianModal) {
		indianModal.style.display = "none";
	}
	if (event.target == chickenModel) {
		chickenModel.style.display = "none";
	}
};
