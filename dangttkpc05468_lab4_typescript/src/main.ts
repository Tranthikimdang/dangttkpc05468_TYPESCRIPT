interface Card {
  id: number;
  image: string;
  name: string;
  flipped: boolean;
}

class Game {
  private cards: Card[] = [
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

  private cardsArea: HTMLElement | null = document.querySelector(".cards-area");
  private scoreElement: HTMLElement | null = document.querySelector("#score");
  private infoUser: HTMLElement | null = document.querySelector("#info-user");
  private selectedCards: Card[] = [];
  private score: number = 0;
  private user: string = "";
  private countdownTime: number = 600;
  private countdownInterval: any;

  private form: HTMLElement | null = document.querySelector("#player-form");
  private playerNameInput: HTMLInputElement | null = document.querySelector("#player-name");
  private playerNameArea: HTMLElement | null = document.querySelector("#player-name-area");
  private errorMessageElement: HTMLElement | null = document.querySelector<HTMLElement>("#error-message");
  private cancelBtn: HTMLElement | null = document.querySelector("#cancel-btn");
  private resetBtn: HTMLElement | null = document.querySelector("#reset-btn");
  private submit: HTMLElement | null = document.querySelector("#submit");
  private root = document.documentElement.style;

  constructor() {
    this.submit?.addEventListener("click", (event) => {
      event.preventDefault();
      this.validateForm();
    });

    this.cancelBtn?.addEventListener("click", () => {
      this.cancelGame();
    });

    this.resetBtn?.addEventListener("click", () => {
      this.resetGame();
    });
  }

  private shuffleCards(): void {
    this.cards.sort(() => Math.random() - 0.5);
  }

  private validateForm(): boolean {
    if (this.errorMessageElement) {
      this.errorMessageElement.textContent = "";
    }
    let playerName = null;
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
    if (this.infoUser) this.infoUser.style.display = "block";
    if (this.playerNameArea) {
      this.playerNameArea.textContent =
        "Tên người chơi: " + playerName;
    }

    this.startGame();
    return false;
  }

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
      const minutes = Math.floor(this.countdownTime / 60);
      const seconds = this.countdownTime % 60;
      countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    if (this.countdownTime === 0) {
      clearInterval(this.countdownInterval);
      alert("Trò chơi đã kết thúc!");
    } else {
      this.countdownTime--;
    }
  }

  cancelCountdown(): void {
    clearInterval(this.countdownInterval);
    this.countdownTime = 600;
    this.updateCountdown();
  }

  displayError(message: string): void {
    if (this.errorMessageElement) {
      this.errorMessageElement.textContent = message;
      this.errorMessageElement.style.color = "red";
    }
  }

  cancelGame(): void {
    const confirmCancel = confirm("Bạn có chắc chắn muốn hủy trò chơi không?");
    if (confirmCancel) {
      alert("Trò chơi đã bị hủy!");
      if (this.form) {
        this.form.style.display = "block";
      }
      if (this.infoUser) this.infoUser.style.display = "none";
      if (this.cardsArea) {
        this.cardsArea.innerHTML = "";
      }
    }
  }

  resetGame(): void {
    this.cancelCountdown();
    this.startGame();
  }

  createCard(card: Card): HTMLElement {
    const cardElement: HTMLElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-id", card.id.toString());
    cardElement.addEventListener("click", (e) => this.flipCard(card, e));

    const cardBack: HTMLImageElement = document.createElement("img");
    cardBack.classList.add("card-back");
    cardBack.src = `images/${card.image}`;
    cardElement.appendChild(cardBack);

    return cardElement;
  }

  flipCard(card: Card, e: Event): void {
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
          const element1 = document.querySelector<HTMLDivElement>(
            `div[data-id='${this.selectedCards[0].id}']`
          );
          const element2 = document.querySelector<HTMLDivElement>(
            `div[data-id='${this.selectedCards[1].id}']`
          );
          if (element1) element1.style.backgroundColor = "green";
          if (element2) element2.style.backgroundColor = "green";

          this.score += 10;
          if (this.scoreElement) this.scoreElement.textContent = this.score.toString();
          this.selectedCards = [];
        } else {
          setTimeout(() => {
            for (const selectedCard of this.selectedCards) {
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
            this.selectedCards = [];
          }, 500);
        }
      }
    }
  }

  startGame(): void {
    this.shuffleCards();
    if (this.cardsArea) this.cardsArea.innerHTML = "";
    this.score = 0;
    this.countdownTime = 600;
    if (this.scoreElement) this.scoreElement.textContent = this.score.toString();
    this.root.setProperty('--opacity', '1');
    this.cards.forEach((card) => {
      const cardElement = this.createCard(card);
      this.cardsArea?.appendChild(cardElement);
    });
    setTimeout(() => {
      this.root.setProperty('--opacity', '0');
      this.startCountdown();
    }, 3000);
  }
}

const game = new Game();

