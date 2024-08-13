let nums = [100, 4, 200, 1, 3, 2,5,6,7,8,9,11],count_conseq=1
nums=nums.sort((a,b)=>
{
  return a-b
})
console.log(nums)


for(let i=0;i<nums.length-1;i++)
{
  if(nums[i]+1==nums[i+1])
  {
    count_conseq++
  }
  else
  {
    break
  }
}

console.log(count_conseq)
