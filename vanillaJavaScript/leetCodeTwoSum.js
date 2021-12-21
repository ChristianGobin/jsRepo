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

*/
