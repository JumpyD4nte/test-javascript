//!! find space
//** first solution */

const { scandirSync } = require("@nodelib/fs.scandir");
const { default: AsyncReader } = require("@nodelib/fs.walk/out/readers/async");
const { log } = require("console");
const { setServers } = require("dns");
const { DefaultDeserializer } = require("v8");

// function findSpace(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findSpace('hello world ddd d d'));

// //** second solution */

// function findSpace2(str) {

//     return str.split(" ").length - 1;
// }

// let result = findSpace("ss aa dd fff ggg f f f f")
// console.log(`result is ${result}`);
// console.log(findSpace2('hello world ddd d'));

// let str = "food is delicious and yummy"
// let result = str.split(" ")
// console.log(result);

//!! จงเขียน  function แทนที่ช่องว่างด้วยเครื่องหมาย "-"
//** first solution */

// function replaceSpacesWithHyphen(str) {
//     return str.split(' ').join('-');
// }

// let inputString = "Hello world this is a test";
// let resultString = replaceSpacesWithHyphen(inputString);
// console.log(resultString);

// //** second solution */

// function replaceSpacesWithHyphen2(str) {
//     return str.replace(/ /g, "-")
// }

// let inputString2 = "Hello world this is a test2";
// let result2 = replaceSpacesWithHyphen2(inputString2)
// console.log(result2);

// //** third solution */

// function replaceSpacesWithHyphen3(str) {
//     return str.replaceAll(" ", "-")
// }

// let inputString3 = "Hello world this is a test3";
// console.log(replaceSpacesWithHyphen3(inputString3));


//!! จงเขียน function ถอดรหัสตัวอักษร ถ้าต้องการถอดตัวอักษรนั้นๆ ต้องบวก 5 ตัวอักษร
//สร้าง array a-z
//สร้าง function
//แยกตัวอักษร
//หา index ของ input //!!(ไม่สามารถที่จะบอกว่า [... + 5])

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z']

// let arrAns = []
// function decode(str) {
//     let splitStr = str.split('')

//     for (const s of splitStr) {
//         if (s !== ' ') {
//             let inputIndex = arr.indexOf(s)
//             let indexAns = inputIndex + 5
//             let ansValue = arr[indexAns]
//             if (ansValue) {
//                 arrAns.push(ansValue)
//             } else {
//                 let numOfEnd = (arr.length - 1) - inputIndex
//                 let newLoop = 5 - numOfEnd
//                 let ans = arr[newLoop - 1]
//                 arrAns.push(ans)
//             }
//         } else {
//             arrAns.push(s)
//         }

//     }
//     let answer = arrAns.join("")
//     return answer
// }
// console.log(decode("xvo"));
// console.log(decode("ww qwe ff saedwq sadw"));

//!! ตัวอักษร ตรงข้าม

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]
// let answer = []
// function converter(str) {

//     let splitStr = str.split('') //["u", "v", "w", "x", "y", "z]

//     for (const s of splitStr) {
//         console.log(s);
//         if (s != ' ') {
//             let value = String(s).toLowerCase();
//             let index = arr.indexOf(value);
//             let char = "";
//             if (index <= 12) {
//                 char = arr[index + 13]
//             } else {
//                 char = arr[index - 13]
//             }

//             answer.push(char)

//         } else {
//             answer.push(s)
//         }
//         console.log(answer.join(''));
//     }


// }

// let result = converter("URYYB QNAGR");

//!! จงหาค่าน้อยที่สุด และ ค่ามากที่สุด จากข้อมูลที่กำหนดให้
//** first solution */

// function findMinMax(...number) {
//     if (number === 0) {
//         return { min: null, max: null } //* if array is empty
//     }
//     const min = Math.min(...number);
//     const max = Math.max(...number);

//     // return { min: min, max: max }
//     // return { min, max };
//     return ` Min is ${min}, Max is ${max} `
// }
// console.log(findMinMax(2231, 23, 67, 93, 221, 101));

//** second solution */

// function findMinMax(data) {
//     if (data.length === 0) {
//         return { min: null, max: null }; //* กรณีที่ array ว่างเปล่า
//     }

//     const min = Math.min(...data);
//     const max = Math.max(...data);

//     return { min, max };
// }

// // ทดสอบการใช้งานฟังก์ชัน
// const data = [12, 5, 8, 130, 44];
// const result = findMinMax(data);

// console.log(result);

//!! จงเขียนโปรแกรมพิมพ์จำนวนเฉพาะตั้งแต่เลข 1 จนถึง input
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % 1 === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }

// function findPrimesUpTo(n) {
//     const prime = [];
//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             prime.push(i);
//         }
//     }
//     return prime
// }

// let input = 50
// const primes = findPrimesUpTo(input);
// console.log(`ตัวเลขเฉพาะตั้งแต่ 1 ถึง ${input} คือ: ${primes.join(' ')}`);

//!! function ตรวจสอบ ตัวพิมพ์เล็ก หรือ ตัวพิมพ์ใหญ่ หรือ ผสมกัน

// function checkCase(input) {
//     let hasUpperCase = false;
//     let hasLowerCase = false;

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] >= 'a' && input[i] <= 'z') {
//             hasLowerCase = true;
//         } else if (input[i] >= 'A' && input[i] <= 'Z') {
//             hasUpperCase = true;
//         }

//         if (hasLowerCase && hasUpperCase) {
//             return 'mix'
//         }
//     }
//     if (hasLowerCase) {
//         return 'All small letters'
//     }
//     if (hasUpperCase) {
//         return 'All capital letters'
//     }
// }
// console.log(checkCase('Hello World'));
// console.log(checkCase('HELLO WORLD'));
// console.log(checkCase('hello world'));



let sub = (x, y) => {
    return x - y
}
