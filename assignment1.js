

// Create a function which accept an array (i.e. x length of array) of numbers as argument and that function returns the total sum of that array. 
// e.g arr = [1,2, 3, 4], total = 10
// If array has any value other than number then it ignores that value.


function sum(arr){
  let totalSum = 0;

  arr.forEach(num => {
    if(Number.isInteger(num)) {
        totalSum += num;
    }
  })
  
  return totalSum;
}

let arr = [1, 2, 3, 4, 5, "Ali", 15];
console.log("Total = " + sum(arr));