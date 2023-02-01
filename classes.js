class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
  }
  introduction() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`
  }
  isLate() {
    this.tardies += 1
    if (this.tardies >= 3) {
      return `${this.firstName} ${this.lastName} is expelled`
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time[s]`
  }
  addScore(num) {
    this.scores.push(num)
  }
  calculateAvg() {
    let sum = this.scores.reduce((a, b) => a + b)
    return sum / this.scores.length
  }
}

const billy = new Student('Billy', 'Bones', 3)

console.log(billy.introduction())
console.log(billy.tardies)
console.log(billy.isLate())
console.log(billy.isLate())
console.log(billy.isLate())
console.log(billy.isLate())
console.log(billy.scores)
billy.addScore(100)
billy.addScore(25)
console.log(billy.calculateAvg())
