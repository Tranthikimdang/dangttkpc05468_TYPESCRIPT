interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Di chuyển với tốc độ: " + speed);
}

const bird: Bird = {
  type: "bird",
  flyingSpeed: 50,
};

const horse: Horse = {
  type: "horse",
  runningSpeed: 40,
};

console.log("Động vật 1:");
moveAnimal(bird);
console.log("Động vật 2:");
moveAnimal(horse);
