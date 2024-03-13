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
const inputName: HTMLInputElement | null =
  document.querySelector("#player-name");
const playerNameArea: HTMLElement | null =
  document.querySelector("#player-name-area");
const cancelBtn: HTMLElement | null = document.querySelector("#cancel-btn");
const resetBtn: HTMLElement | null = document.querySelector("#reset-btn");
const submit: HTMLElement | null = document.querySelector("#submit");



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
  startGame();
});

function validateName(name: string): boolean {
  // Kiểm tra tên có rỗng hay không
  if (name.trim() === "") {
    return false;
  }

  // Kiểm tra tên có chứa kí tự đặc biệt hay không
  const regex = /[^a-zA-Z0-9 ]/g;
  if (regex.test(name)) {
    return false;
  }

  // Kiểm tra độ dài tên
  if (name.length < 2) {
    return false;
  }

  return true;
}

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

  cards.forEach((card) => {
    const cardElement = createCard(card);
    cardsArea?.appendChild(cardElement);
  });
}
