class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  harshit = new Animal("Harshit", 4);

  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
