const isEqualTo100 = (a, b,) => a === 100 || b === 100

console.log(isEqualTo100(100, 100))
console.log(isEqualTo100(0, 100))

const sumOfBothEquals100 = (a, b) => {
    if (a + b === 100){
    return `The sum of ${a} and ${b} is equal a 100.`
   } else {
    return `The sum of ${a} and ${b} is not equal a 100.`
   }
}



console.log(sumOfBothEquals100(25, 65))