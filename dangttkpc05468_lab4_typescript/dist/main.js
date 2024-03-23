"use strict";
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        var _a, _b, _c;
        this.cards = [
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
        this.cardsArea = document.querySelector(".cards-area");
        this.scoreElement = document.querySelector("#score");
        this.infoUser = document.querySelector("#info-user");
        this.selectedCards = [];
        this.score = 0;
        this.user = "";
        this.countdownTime = 600;
        this.form = document.querySelector("#player-form");
        this.playerNameInput = document.querySelector("#player-name");
        this.playerNameArea = document.querySelector("#player-name-area");
        this.errorMessageElement = document.querySelector("#error-message");
        this.cancelBtn = document.querySelector("#cancel-btn");
        this.resetBtn = document.querySelector("#reset-btn");
        this.submit = document.querySelector("#submit");
        this.root = document.documentElement.style;
        (_a = this.submit) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            event.preventDefault();
            _this.validateForm();
        });
        (_b = this.cancelBtn) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            _this.cancelGame();
        });
        (_c = this.resetBtn) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
            _this.resetGame();
        });
    }
    Game.prototype.shuffleCards = function () {
        this.cards.sort(function () { return Math.random() - 0.5; });
    };
    Game.prototype.validateForm = function () {
        if (this.errorMessageElement) {
            this.errorMessageElement.textContent = "";
        }
        var playerName = null;
        if (this.playerNameInput) {
            playerName = this.playerNameInput.value;
        }
        if (!playerName || playerName.trim() === "") {
            this.displayError("Tên không được trống!");
            return false;
        }
        if (playerName.length < 2) {
            this.displayError("Tên không được dùng 1 ký tự!");
            return false;
        }
        if (!/^[a-zA-Z0-9 \u00C0-\u017F]+$/.test(playerName)) {
            this.displayError("Tên không chứa ký tự đặc biệt!");
            return false;
        }
        if (this.form) {
            this.form.style.display = "none";
        }
        if (this.infoUser)
            this.infoUser.style.display = "block";
        if (this.playerNameArea) {
            this.playerNameArea.textContent =
                "Tên người chơi: " + playerName;
        }
        this.startGame();
        return false;
    };
    Game.prototype.startCountdown = function () {
        var _this = this;
        this.countdownInterval = setInterval(function () {
            _this.updateCountdown();
        }, 1000);
    };
    Game.prototype.updateCountdown = function () {
        var countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            var minutes = Math.floor(this.countdownTime / 60);
            var seconds = this.countdownTime % 60;
            countdownElement.textContent = "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
        }
        if (this.countdownTime === 0) {
            clearInterval(this.countdownInterval);
            alert("Trò chơi đã kết thúc!");
        }
        else {
            this.countdownTime--;
        }
    };
    Game.prototype.cancelCountdown = function () {
        clearInterval(this.countdownInterval);
        this.countdownTime = 600;
        this.updateCountdown();
    };
    Game.prototype.displayError = function (message) {
        if (this.errorMessageElement) {
            this.errorMessageElement.textContent = message;
            this.errorMessageElement.style.color = "red";
        }
    };
    Game.prototype.cancelGame = function () {
        var confirmCancel = confirm("Bạn có chắc chắn muốn hủy trò chơi không?");
        if (confirmCancel) {
            alert("Trò chơi đã bị hủy!");
            if (this.form) {
                this.form.style.display = "block";
            }
            if (this.infoUser)
                this.infoUser.style.display = "none";
            if (this.cardsArea) {
                this.cardsArea.innerHTML = "";
            }
        }
    };
    Game.prototype.resetGame = function () {
        this.cancelCountdown();
        this.startGame();
    };
    Game.prototype.createCard = function (card) {
        var _this = this;
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-id", card.id.toString());
        cardElement.addEventListener("click", function (e) { return _this.flipCard(card, e); });
        var cardBack = document.createElement("img");
        cardBack.classList.add("card-back");
        cardBack.src = "images/".concat(card.image);
        cardElement.appendChild(cardBack);
        return cardElement;
    };
    Game.prototype.flipCard = function (card, e) {
        var _this = this;
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
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            card.flipped = true;
            if (this.selectedCards.length === 2) {
                if (this.selectedCards[0].image === this.selectedCards[1].image) {
                    var element1 = document.querySelector("div[data-id='".concat(this.selectedCards[0].id, "']"));
                    var element2 = document.querySelector("div[data-id='".concat(this.selectedCards[1].id, "']"));
                    if (element1)
                        element1.style.backgroundColor = "green";
                    if (element2)
                        element2.style.backgroundColor = "green";
                    this.score += 10;
                    if (this.scoreElement)
                        this.scoreElement.textContent = this.score.toString();
                    this.selectedCards = [];
                }
                else {
                    setTimeout(function () {
                        for (var _i = 0, _a = _this.selectedCards; _i < _a.length; _i++) {
                            var selectedCard = _a[_i];
                            selectedCard.flipped = false;
                            var element = document.querySelector("div[data-id='".concat(selectedCard.id, "']"));
                            var imgElement = document.querySelector("div[data-id='".concat(selectedCard.id, "'] img"));
                            if (element)
                                element.style.backgroundColor = "transparent";
                            if (imgElement)
                                imgElement.style.opacity = "0";
                        }
                        _this.selectedCards = [];
                    }, 500);
                }
            }
        }
    };
    Game.prototype.startGame = function () {
        var _this = this;
        this.shuffleCards();
        if (this.cardsArea)
            this.cardsArea.innerHTML = "";
        this.score = 0;
        this.countdownTime = 600;
        if (this.scoreElement)
            this.scoreElement.textContent = this.score.toString();
        this.root.setProperty('--opacity', '1');
        this.cards.forEach(function (card) {
            var _a;
            var cardElement = _this.createCard(card);
            (_a = _this.cardsArea) === null || _a === void 0 ? void 0 : _a.appendChild(cardElement);
        });
        setTimeout(function () {
            _this.root.setProperty('--opacity', '0');
            _this.startCountdown();
        }, 3000);
    };
    return Game;
}());
var game = new Game();
