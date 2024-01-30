// adding two numbers

// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// console.log(addTwo(2, 5));
// console.log(addTwo(5, 5));

// // convert minutres to seconds

// function convert(minutes) {
//   return minutes * 60;
// }
// console.log(convert(3600));

// //your age in second function

// function yourAgeInSeconds(age) {
//   return age * 365 * 24 * 60 * 60;
// }

// console.log(yourAgeInSeconds(33));

// //funciton to get first item in array

// function getFirstItem(items) {
// //   return items[0];
// // }

// // let items = ['banana', 'godfather', 'Shwashank', 'Pickle'];

// // console.log(getFirstItem(items));

// //if something is less than or greater than 7

// let movie_result;

// function badOrGoodMovie(movie_rating) {
//   if (movie_rating >= 7) {
//     movie_result = 'Good Movie';
//   } else {
//     movie_result = 'Bad Movie';
//   }
//   return movie_result;
// }

// console.log(badOrGoodMovie(9));
// console.log(badOrGoodMovie(5));

// // check if a string is empty

// function isEmptyStirng(some_string) {
//   if (some_string.length == '') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmptyStirng('Avatar'));
// console.log(isEmptyStirng(''));

// // find min and max in a Array

// function findMin(numbers) {
//   //findMinMax([5, 2, 9, 8, 7, 3])

//   let minimum = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minimum) {
//       minimum = numbers[i];
//     }
//   }
//   return minimum;
// }

// console.log(findMin([5, 3, 9, 8, 7, 3]));

// function findMax(numbers) {
//   //findMinMax([5, 2, 9, 8, 7, 3])

//   let maximum = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maximum) {
//       maximum = numbers[i];
//     }
//   }
//   return maximum;
// }
// console.log(findMax([5, 3, 9, 8, 7, 3]));

// // Sort best movies

function sortBestRatingsFrist(numbers) {
  // sortBestRathingsFrist([5, 8, 2, 9, 3, 10]);
  let maximum = numbers[0];
  let max_location = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
      max_location = i;
    }
    return max_location;
  }
}

console.log(sortBestRatingsFrist([5, 8, 2, 9, 3, 10]));

function sortBestRatingsFirst(numbers) {
  let max_num = numbers[0];
  let max_location = 0;

  for (let i = 1; i < max_num.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
      max_location = i;
    }
  }

  numbers[max_location] = numbers[0];
  numbers[0] = max_num;

  return max_location;
}

console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));

// helpers funtion


