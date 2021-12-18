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
