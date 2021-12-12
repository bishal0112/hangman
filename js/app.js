"use strict";
// list of word
let guessWords = [
	"thor",
	"ironman",
	"spiderman",
	"blackpanther",
	"blackwidow",
	"captainamerica",
	"captainmarvel",
	"doctorstrange",
	"hulk",
	"scarletwitch",
	"daredevil",
	"jeangrey",
	"hawkeye",
	"loki",
	"deadpool",
	"thanos",
	"vision",
	"wolverine",
	"silversurfer",
	"groot",
	"galactus",
	"antman",
	"nickfury",
	"storm",
];

// generate random number
let randomNumber = Math.floor(Math.random() * guessWords.length);

let guess = guessWords[randomNumber];

// Generates the boxes for the word....
for (let i = 1; i < guess.length; i++) {
	let tag = document.createElement("input");
	let text = document.createTextNode("");
	let attribute = document.createAttribute("class", "guesses");
	tag.appendChild(text);
	document.querySelector(".guess").appendChild(tag, attribute);
	document.getElementsByTagName("input")[i].setAttribute("class", "guesses");
}
let badguess = () => {
	document.querySelector(".message").textContent = "Bad Guess try again....😔";
};
let final = [];
let count = 1;
function start() {
	document.querySelector(".modal-window").classList.remove("show-modal");
	let word = document.querySelector(".display").value;
	if (guess.includes(word)) {
		for (let i = 0; i <= guess.length; i++) {
			if (word === guess[i]) {
				final.push(word);
				document.getElementsByTagName("input")[i].value = word;
				document.querySelector(".message").textContent = "Good Guessing";
			}
		}
	} else {
		if (count === 1) {
			document.querySelector(".head").classList.add("show");
			badguess();
		} else if (count === 2) {
			document.querySelector(".left-arm").classList.add("show");
			badguess();
		} else if (count === 3) {
			document.querySelector(".body").classList.add("show");
			badguess();
		} else if (count === 4) {
			document.querySelector(".right-arm").classList.add("show");
			badguess();
		} else if (count === 5) {
			document.querySelector(".left-leg").classList.add("show");
			document.querySelector(".message").textContent = "Last Guess 😱";
		} else if (count === 6) {
			document.querySelector(".right-leg").classList.add("show");
		}
		console.log("i cant do");
		count++;
	}
	if (count === 7) {
		console.log("game over");
		document.querySelector(".message").textContent = "Game over😢...";
		document.querySelector(".loose").classList.add("show-modal");
	}
	document.querySelector(".display").value = "";
	document.querySelector(".display").focus();
	if (final.length === guess.length) {
		console.log("hurray");
		document.querySelector(".message").textContent = "Hurray You Win🥇😜";
		document.querySelector(".win").classList.add("show-modal");
	}
}
document.querySelector("#play").addEventListener("click", start);
document
	.querySelector(".play-again-lose")
	.addEventListener("click", function () {
		location.reload();
	});
document
	.querySelector(".play-again-win")
	.addEventListener("click", function () {
		location.reload();
	});
