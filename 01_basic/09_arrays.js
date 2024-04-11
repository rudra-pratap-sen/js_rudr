// ************ARRAY*************

const myArr = ["Rudra",23,true,null,undefined] // can have different data types

const myArr2 = new Array("Omni Man","Superman","Invncible")

// ***********ARRAY METHODS*********

const nums = [0,1,2,3,4,5]

// nums.push(6) // add to last
// nums.push(7) // add to last
// nums.pop() // remove from last
// nums.unshift(8) // add to first
// nums.shift // remove from first

// console.log(nums.includes(3)); // true

// console.log(nums.indexOf(2)); // gives position of 2 in array

const newNums = nums.join() // joins the array and change data type to string

// slice and Splice

console.log("A" , nums);

const nums1 = nums.slice(1,3)

console.log(nums1);

console.log("B" , nums);

const nums2 = nums.splice(1,3)

console.log(nums2);

console.log("C", nums)