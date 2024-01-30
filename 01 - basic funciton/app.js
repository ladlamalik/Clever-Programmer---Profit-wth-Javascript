console.log('Hellow');
let fruits = ['apple', 'pear', 'pineapple', 'orange'];

console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits);

console.log(fruits.sort());

let someNumber = [23, 24, 35, 49, 100, 8, 9, 6, 4, 3];

console.log(
  someNumber.sort(function (a, b) {
    return a - b;
  })
); // asscending order number sort
console.log(
  someNumber.sort(function (a, b) {
    return b - a;
  })
); // desscending order number sort


//funciton to add number in array
let emprtArray = new Array();

for (let num = 0; num <= 10; num++) {
  emprtArray.push(num);
}

console.log(emprtArray);
