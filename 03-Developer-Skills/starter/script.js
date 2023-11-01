/*
'use strict';
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem

// - What is a temperature amplitude? Answer:  Difference between highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems

// - How to ignore errors?
// - Find max value in temperature array?
// - Find the min value in temperature array
// - Substract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log('Amplitude', amplitude);

// PROBLEM 2

// Function should now receive 2 arrays of temps.

// 1) Understanding the problem
// - With two arrays, should I implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log('Amplitude new', amplitudeNew);
*/

/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

"use strict";

const temperatures = [17, 21, 23];

function printForecast(arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days...`;
  }
  return str;
}

console.log(printForecast(temperatures));
