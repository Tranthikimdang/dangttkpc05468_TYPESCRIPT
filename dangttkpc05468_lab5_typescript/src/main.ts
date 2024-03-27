const cards: { id: number; image: string; name: string; flipped: boolean }[] = [
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
const cardsArea: HTMLElement | null = document.querySelector(".cards-area");
const scoreElement: HTMLElement | null = document.querySelector("#score");
const infoUser: HTMLElement | null = document.querySelector("#info-user");
let selectedCards: {
  id: number;
  image: string;
  name: string;
  flipped: boolean;
}[] = [];
let score: number = 0;
let user: string = "";
function shuffleCards(): void {
  cards.sort(() => Math.random() - 0.5);
}

const form: HTMLElement | null = document.querySelector("#player-form");
const playerNameInput: HTMLInputElement | null =
  document.querySelector("#player-name");
const playerNameArea: HTMLElement | null =
  document.querySelector("#player-name-area");
const errorMessageElement: HTMLElement | null = document.querySelector<HTMLElement>("#error-message");

const cancelBtn: HTMLElement | null = document.querySelector("#cancel-btn");
const resetBtn: HTMLElement | null = document.querySelector("#reset-btn");
const submit: HTMLElement | null = document.querySelector("#submit");
const root = document.documentElement.style;

let countdownTime = 600; // 10 phút trong giây
let countdownInterval: any;

submit?.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định
  validateForm();
});

function validateForm() {

  if (errorMessageElement) {
    errorMessageElement.textContent = "";
  }
  let playerName = null
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
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  // Kiểm tra xem thời gian còn lại có hết không
  if (countdownTime === 0) {
    clearInterval(countdownInterval);
    alert("Trò chơi đã kết thúc!");
  } else {
    countdownTime--;
  }
}
function cancelCountdown() {
  clearInterval(countdownInterval);
  countdownTime = 600; // Đặt lại thời gian đếm ngược về 10 phút
  updateCountdown(); // Cập nhật hiển thị đồng hồ đếm ngược
}

cancelBtn?.addEventListener("click", () => {
  // Hiển thị hộp thoại xác nhận
  const confirmCancel = confirm("Bạn có chắc chắn muốn hủy trò chơi không?");

  if (confirmCancel) {
    alert("Trò chơi đã bị hủy!");

    if (form) {
      form.style.display = "block";
    }
    if (infoUser) infoUser.style.display = "none";
    if (cardsArea) {
      cardsArea.innerHTML = "";
    }
  }
});

// Thêm sự kiện click cho nút Reset
resetBtn?.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  cancelCountdown();
  startGame(); // Bắt đầu trò chơi mới
}

function displayError(message: string) {
  // Hiển thị thông báo lỗi trên màn hình
  var errorMessageElement = document.querySelector<HTMLElement>("#error-message");
  if (errorMessageElement) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = "red";
  }
}

cancelBtn?.addEventListener("click", () => {
  if (form) {
    form.style.display = "block";
  }
  if (infoUser) infoUser.style.display = "none";
  if (cardsArea) {
    cardsArea.innerHTML = "";
  }
});

resetBtn?.addEventListener("click", () => {
  score = 0;
  root.setProperty('--opacity', '1')
  startGame();
});



function createCard(card: {
  id: number;
  image: string;
  name: string;
  flipped: boolean
}): HTMLElement {
  const cardElement: HTMLElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.setAttribute("data-id", card.id.toString());
  cardElement.addEventListener("click", (e) => flipCard(card, e));

  const cardBack: HTMLImageElement = document.createElement("img");
  cardBack.classList.add("card-back");
  cardBack.src = `images/${card.image}`;
  cardElement.appendChild(cardBack);

  return cardElement;
}

function flipCard(
  card: { id: number; image: string; name: string; flipped: boolean },
  e: Event
): void {
  const clickedElement: HTMLElement = e.target as HTMLElement;
  clickedElement.style.backgroundColor = "red";

  if (
    clickedElement &&
    clickedElement.querySelector &&
    typeof clickedElement.querySelector === "function"
  ) {
    const imgElement = clickedElement.querySelector<HTMLImageElement>("img");
    if (imgElement) {
      imgElement.style.opacity = "1";
      clickedElement.style.backgroundColor = "red";
    } else {
      clickedElement.style.opacity = "1"
      if (clickedElement.parentElement)
        clickedElement.parentElement.style.backgroundColor = "red"
    }
  }
  if (selectedCards.length < 2) {
    selectedCards.push(card);
    card.flipped = true;

    if (selectedCards.length === 2) {
      if (selectedCards[0].image === selectedCards[1].image) {
        const element1 = document.querySelector<HTMLDivElement>(
          `div[data-id='${selectedCards[0].id}']`
        );
        const element2 = document.querySelector<HTMLDivElement>(
          `div[data-id='${selectedCards[1].id}']`
        );
        if (element1) element1.style.backgroundColor = "green";
        if (element2) element2.style.backgroundColor = "green";


        score += 10;
        if (scoreElement) scoreElement.textContent = score.toString();
        selectedCards = [];
      } else {
        setTimeout(() => {
          for (const selectedCard of selectedCards) {
            selectedCard.flipped = false;

            const element = document.querySelector<HTMLDivElement>(
              `div[data-id='${selectedCard.id}']`
            );
            const imgElement = document.querySelector<HTMLImageElement>(
              `div[data-id='${selectedCard.id}'] img`
            );
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

function startGame(): void {
  shuffleCards();
  if (cardsArea) cardsArea.innerHTML = "";
  score = 0;
  countdownTime = 600;
  if (scoreElement) scoreElement.textContent = score.toString();

  cards.forEach((card) => {
    const cardElement = createCard(card);
    cardsArea?.appendChild(cardElement);
  });
  setTimeout(() => {
    root.setProperty('--opacity', '0')
    startCountdown(); // Bắt đầu đồng hồ đếm ngược mới
  }, 3000)
}

