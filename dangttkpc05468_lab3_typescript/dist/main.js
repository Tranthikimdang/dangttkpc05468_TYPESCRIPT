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
var playerNameInput = document.querySelector("#player-name");
var playerNameArea = document.querySelector("#player-name-area");
var errorMessageElement = document.querySelector("#error-message");
var cancelBtn = document.querySelector("#cancel-btn");
var resetBtn = document.querySelector("#reset-btn");
var submit = document.querySelector("#submit");
var root = document.documentElement.style;
var countdownTime = 600; // 10 phút trong giây
var countdownInterval;
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định
    validateForm();
});
function validateForm() {
    if (errorMessageElement) {
        errorMessageElement.textContent = "";
    }
    var playerName = null;
    if (playerNameInput) {
        playerName = playerNameInput.value;
    }
    if (!playerName || playerName.trim() === "") {
        displayError("Tên không được trống!");
        return false;
    }
    // Kiểm tra tên người chơi có ít nhất 2 ký tự
    if (playerName.length < 2) {
        displayError("Tên không được dùng 1 ký tự!");
        return false;
    }
    // Kiểm tra tên người chơi không chứa ký tự đặc biệt
    if (!/^[a-zA-Z0-9 \u00C0-\u017F]+$/.test(playerName)) {
        displayError("Tên không chứa ký tự đặc biệt!");
        return false;
    }
    // Ẩn form và hiển thị game
    if (form) {
        form.style.display = "none";
    }
    if (infoUser) {
        infoUser.style.display = "block";
    }
    if (playerNameArea) {
        playerNameArea.textContent =
            "Tên người chơi: " + playerName;
    }
    // Bắt đầu game
    startGame();
    // Trả về false để ngăn form submit
    return false;
}
function startCountdown() {
    // Gọi hàm updateCountdown mỗi giây
    countdownInterval = setInterval(updateCountdown, 1000);
}
function updateCountdown() {
    // Hiển thị thời gian còn lại trong countdownElement
    var countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;
        countdownElement.textContent = "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
    }
    // Kiểm tra xem thời gian còn lại có hết không
    if (countdownTime === 0) {
        clearInterval(countdownInterval);
        alert("Trò chơi đã kết thúc!");
    }
    else {
        countdownTime--;
    }
}
function cancelCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 600; // Đặt lại thời gian đếm ngược về 10 phút
    updateCountdown(); // Cập nhật hiển thị đồng hồ đếm ngược
}
cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener("click", function () {
    // Hiển thị hộp thoại xác nhận
    var confirmCancel = confirm("Bạn có chắc chắn muốn hủy trò chơi không?");
    if (confirmCancel) {
        alert("Trò chơi đã bị hủy!");
        if (form) {
            form.style.display = "block";
        }
        if (infoUser)
            infoUser.style.display = "none";
        if (cardsArea) {
            cardsArea.innerHTML = "";
        }
    }
});
// Thêm sự kiện click cho nút Reset
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", function () {
    resetGame();
});
function resetGame() {
    cancelCountdown();
    startGame(); // Bắt đầu trò chơi mới
}
function displayError(message) {
    // Hiển thị thông báo lỗi trên màn hình
    var errorMessageElement = document.querySelector("#error-message");
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = "red";
    }
}
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
    root.setProperty('--opacity', '1');
    startGame();
});
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
    score = 0;
    countdownTime = 600;
    if (scoreElement)
        scoreElement.textContent = score.toString();
    cards.forEach(function (card) {
        var cardElement = createCard(card);
        cardsArea === null || cardsArea === void 0 ? void 0 : cardsArea.appendChild(cardElement);
    });
    setTimeout(function () {
        root.setProperty('--opacity', '0');
        startCountdown(); // Bắt đầu đồng hồ đếm ngược mới
    }, 3000);
}
