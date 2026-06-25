const isSecondLargest = (nums) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > largest){
            secondLargest = largest
            largest = nums[i];
        }
        else if(nums[i] > secondLargest && nums[i] !== largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

console.log(isSecondLargest([10, 50, 30, 80, 70]))