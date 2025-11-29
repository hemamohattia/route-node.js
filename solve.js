// q1
const result = Number("123") + 7;

console.log(result); // 130


// q2
function checkFalsy(value) {
  if (!value) return "Invalid";
  return "Valid";
}

console.log(checkFalsy(0)); // "Invalid"

// q3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
// q4

const arr = [1, 2, 3, 4, 5];
const evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
// q5
const a = [1, 2, 3];
const b = [4, 5, 6];

const merged = [...a, ...b];
console.log(merged); // [1,2,3,4,5,6]
// q6
function getDay(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid";
  }
}

console.log(getDay(2)); // Monday

// q7
const words = ["a", "ab", "abc"];
const lengths = words.map(w => w.length);

console.log(lengths); // [1,2,3]
// q8
function checkDiv(n) {
  if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
  return "Not divisible by both";
}

console.log(checkDiv(15)); // "Divisible by both"
// q9
const square = n => n * n;

console.log(square(5)); // 25
// q10
function describePerson({ name, age }) {
  return `${name} is ${age} years old`;
}

console.log(describePerson({ name: "John", age: 25 }));
// q11
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
// q12
function firstStep(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('One');

        if (mark > 30){
          resolve({ message: "Success" ,mark});
        }
        else{
          reject("failed");
        }
            

        }, 3000);
    });
}

firstStep(40).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log({ error });
});

// q13
function largest(arr) {
  return Math.max(...arr);
}

console.log(largest([1, 3, 7, 2, 4])); // 7
// q14
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 })); 
// ["name", "age"]

// q15
function splitWords(str) {
  return str.split(" ");
}

console.log(splitWords("The quick brown fox"));


