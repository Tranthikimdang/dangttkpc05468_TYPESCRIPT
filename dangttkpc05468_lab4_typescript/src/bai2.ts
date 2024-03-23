interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hello!");
    }
  }
}

let user1: Greetable;
user1 = new Person("Manu");
user1.greet("Hi there - I am");
console.log(user1);
