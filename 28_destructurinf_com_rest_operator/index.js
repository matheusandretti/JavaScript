let arr = [1, 3, 45, 6, 7, 78, 'asd', 'asd'];
let arr2 = [1, 3, 45, 6, 7, 78, 8,9,234,343,13,55,77,34];

let [ a, b, ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);