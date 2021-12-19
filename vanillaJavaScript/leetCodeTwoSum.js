/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target){
	let newArray = nums.sort().reverse();
  let firstPosition = 0;
  let lastPosition = newArray.length;
  let targetFound = false;
  while(targetFound == false){
  	if(newArray[firstPosition] + newArray[lastPosition] == target){
    	targetFound = true;
    	return [firstPosition , lastPosition];
    } else if(newArray[firstPosition] + newArray[lastPosition] < target){
    	firstPosition++;
    } else if(newArray[firstPosition] + newArray[lastPosition] > target){
    	lastPosition--;
    } else if(firstPosition == lastPosition){
    	targetFound = true;
      console.log("No Solution.");
    }
  }
}

/* 
a. Sort List in ascending order
b. Start at the first(f) and last positions in a list(l).
c. Add values until target is reached or consensus that the combination does not exist in the list, 
    if(f + l < target) -> move f to next position to the right of the first element.
    if(f+l > target) -> move l to the next position to the left of the last element.
d. Keep running until target is reached.
e. Log positions of key pair that reaches target value.

*/
