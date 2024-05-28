`
Write a function that will take a number
If the number is divisible by 3, it returns the string "Fizz"
If the number is divisible by 5, it returns the string "Buzz"
If the number is divisible by both 3 and 5, it returns the string "FizzBuzz"
Otherwise if the number is not divisible by 3 or 5, then it returns the number itself.
`

function fizzBuzz(num) {
     if (num % 3 == 0 && num % 5 == 0) {
      return "FizzBuzz";
    }
    else if (num % 3 == 0) {
        return "Fizz"
    }
    else if (num % 5 == 0) {
        return "Buzz";
    }
    else {
      return num;
    }
}
  
  for (let num = 1; num <= 100; num++) {
    console.log(fizzBuzz(num))
    }

  module.exports = {fizzBuzz};