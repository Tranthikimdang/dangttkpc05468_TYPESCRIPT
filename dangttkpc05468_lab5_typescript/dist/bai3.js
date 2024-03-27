"use strict";
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Di chuyển với tốc độ: " + speed);
}
var bird = {
    type: "bird",
    flyingSpeed: 50,
};
var horse = {
    type: "horse",
    runningSpeed: 40,
};
console.log("Động vật 1:");
moveAnimal(bird);
console.log("Động vật 2:");
moveAnimal(horse);
