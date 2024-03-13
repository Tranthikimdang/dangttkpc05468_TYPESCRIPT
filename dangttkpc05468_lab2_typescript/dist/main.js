"use strict";
var cards = [
    { id: 1, image: "bo.jpg", name: "bo", flipped: false },
    { id: 2, image: "tao.jpg", name: "tao", flipped: false },
    { id: 3, image: "chanh.jpg", name: "chanh", flipped: false },
    { id: 4, image: "cherry.jpg", name: "cherry", flipped: false },
    { id: 5, image: "chuoi.jpg", name: "chuoi", flipped: false },
    { id: 6, image: "dau.jpg", name: "dau", flipped: false },
    { id: 7, image: "duahau.jpg", name: "duahau", flipped: false },
    { id: 8, image: "xoai.jpg", name: "xoai", flipped: false },
    { id: 9, image: "man.jpg", name: "man", flipped: false },
    { id: 10, image: "cam.jpg", name: "cam", flipped: false },
    // Thêm các thẻ bài khác vào đây
    { id: 11, image: "bo.jpg", name: "bo", flipped: false },
    { id: 12, image: "tao.jpg", name: "tao", flipped: false },
    { id: 13, image: "chanh.jpg", name: "chanh", flipped: false },
    { id: 14, image: "cherry.jpg", name: "cherry", flipped: false },
    { id: 15, image: "chuoi.jpg", name: "chuoi", flipped: false },
    { id: 16, image: "dau.jpg", name: "dau", flipped: false },
    { id: 17, image: "duahau.jpg", name: "duahau", flipped: false },
    { id: 18, image: "xoai.jpg", name: "xoai", flipped: false },
    { id: 19, image: "man.jpg", name: "man", flipped: false },
    { id: 20, image: "cam.jpg", name: "cam", flipped: false },
];
var cardsArea = document.querySelector(".cards-area");
var scoreElement = document.querySelector("#score");
var infoUser = document.querySelector("#info-user");
var selectedCards = [];
var score = 0;
var user = "";
function shuffleCards() {
    cards.sort(function () { return Math.random() - 0.5; });
}
var form = document.querySelector("#player-form");
var inputName = document.querySelector("#player-name");
var playerNameArea = document.querySelector("#player-name-area");
var cancelBtn = document.querySelector("#cancel-btn");
var resetBtn = document.querySelector("#reset-btn");
var submit = document.querySelector("#submit");
cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener("click", function () {
    if (form) {
        form.style.display = "block";
    }
    if (infoUser)
        infoUser.style.display = "none";
    if (cardsArea) {
        cardsArea.innerHTML = "";
    }
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", function () {
    score = 0;
    startGame();
});
function validateName(name) {
    // Kiểm tra tên có rỗng hay không
    if (name.trim() === "") {
        return false;
    }
    // Kiểm tra tên có chứa kí tự đặc biệt hay không
    var regex = /[^a-zA-Z0-9 ]/g;
    if (regex.test(name)) {
        return false;
    }
    // Kiểm tra độ dài tên
    if (name.length < 2) {
        return false;
    }
    return true;
}
function createCard(card) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-id", card.id.toString());
    cardElement.addEventListener("click", function (e) { return flipCard(card, e); });
    var cardBack = document.createElement("img");
    cardBack.classList.add("card-back");
    cardBack.src = "images/".concat(card.image);
    cardElement.appendChild(cardBack);
    return cardElement;
}
function flipCard(card, e) {
    var clickedElement = e.target;
    clickedElement.style.backgroundColor = "red";
    if (clickedElement &&
        clickedElement.querySelector &&
        typeof clickedElement.querySelector === "function") {
        var imgElement = clickedElement.querySelector("img");
        if (imgElement) {
            imgElement.style.opacity = "1";
            clickedElement.style.backgroundColor = "red";
        }
        else {
            clickedElement.style.opacity = "1";
            if (clickedElement.parentElement)
                clickedElement.parentElement.style.backgroundColor = "red";
        }
    }
    if (selectedCards.length < 2) {
        selectedCards.push(card);
        card.flipped = true;
        if (selectedCards.length === 2) {
            if (selectedCards[0].image === selectedCards[1].image) {
                var element1 = document.querySelector("div[data-id='".concat(selectedCards[0].id, "']"));
                var element2 = document.querySelector("div[data-id='".concat(selectedCards[1].id, "']"));
                if (element1)
                    element1.style.backgroundColor = "green";
                if (element2)
                    element2.style.backgroundColor = "green";
                score += 10;
                if (scoreElement)
                    scoreElement.textContent = score.toString();
                selectedCards = [];
            }
            else {
                setTimeout(function () {
                    for (var _i = 0, selectedCards_1 = selectedCards; _i < selectedCards_1.length; _i++) {
                        var selectedCard = selectedCards_1[_i];
                        selectedCard.flipped = false;
                        var element = document.querySelector("div[data-id='".concat(selectedCard.id, "']"));
                        var imgElement = document.querySelector("div[data-id='".concat(selectedCard.id, "'] img"));
                        if (element)
                            element.style.backgroundColor = "transparent";
                        if (imgElement)
                            imgElement.style.opacity = "0";
                    }
                    selectedCards = [];
                }, 500);
            }
        }
    }
}
function startGame() {
    shuffleCards();
    if (cardsArea)
        cardsArea.innerHTML = "";
    cards.forEach(function (card) {
        var cardElement = createCard(card);
        cardsArea === null || cardsArea === void 0 ? void 0 : cardsArea.appendChild(cardElement);
    });
}
