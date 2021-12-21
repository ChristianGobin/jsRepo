/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target){
	// sort into ascending order and compare 'a' against 'b'.
	let newArray = nums.sort((a, b) => {return a - b});
	let lastPosition = newArray.length;
	let firstPosition = 0;
	let targetFound = false;
	
	//while targetFound !== true
	
}

twoSum([1,2,3,4], 3);
/* 
a. Sort List in ascending order
b. Start at the first(f) and last positions in a list(l).
c. Add values until target is reached or consensus that the combination does not exist in the list, 
    if(f + l < target) -> move f to next position to the right of the first element.
    if(f+l > target) -> move l to the next position to the left of the last element.
d. Keep running until target is reached.
e. Log positions of key pair that reaches target value.



========================================================================================
const twoSum = function(nums, target) {
  let newArray = nums.sort((a,b)=>{return a-b});
  let firstPosition = 0;
  let lastPosition = newArray.length;
  let targetFound = false;
  console.log(newArray)
  while(targetFound !== true){
    if((newArray[firstPosition] + newArray[lastPosition]) > target){
    	console.log("If Fired");
      console.log(newArray[firstPosition]);
    	lastPosition--;
      targetFound = false;
    }
    else if((newArray[firstPosition] + newArray[lastPosition]) < target){
    	console.log("Else IF 1 fired");
      firstPosition++;
      targetFound = false;
    }
    else if((newArray[firstPosition] + newArray[lastPosition]) == target){
    	console.log("Answer Found!");
      let answer = [firstPosition, lastPosition];
      targetFound = true;
      return answer;
    }
  }
}
##########################################################################################################

Sanity Check Function.
testFunct = (nums) => {
	let marker = false;
  let sortedArray = nums.sort((a, b) => {return a-b});
  let indO = 0;
  let lastIndex = sortedArray.length;
  while(marker !== true){
  	if(lastIndex !== indO){
    	console.log(sortedArray[indO]);
      console.log(sortedArray[lastIndex]);
      lastIndex--;
      indO++;
    }
  }
}


*/
