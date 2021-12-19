/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];
    let targ = target;
    for(let i = 0; i <= nums.length; i++){
        if(nums[i] + nums[i+1] == targ){
            answer.push(i,i+1);
        }
        else {
            return answer;
        }
    }
};

/* 
a. Sort List in ascending order
b. Start at the first(f) and last positions in a list(l).
c. Add values until target is reached or consensus that the combination does not exist in the list, 
    if(f + l < target) -> move f to next position to the right of the first element.
    if(f+l > target) -> move l to the next position to the left of the last element.
d. Keep running until target is reached.
e. Log positions of key pair that reaches target value.

*/
