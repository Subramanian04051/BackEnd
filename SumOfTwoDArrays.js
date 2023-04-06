let arr=[[3,2,5], [1,2], [4, 12]]
let sum=0
//console.log(arr[1].length)
sum=SumOfArrays(arr,0,sum,arr[0])
//console.log(arr.length)
console.log(sum)

function SumOfArrays(arr,i,sum,ele)
{
  //  return sum
  if(i==arr.length)
  {
      return sum
  }
  else
  {
      sum+=SumOfTwoDArray(arr,i,0,0)
    //  console.log(sum)
     // sum=sum+ele
      //console.log(sum)
      return SumOfArrays(arr,i+1,sum,arr[i+1])
  }
}
function SumOfTwoDArray(arr,i,j,sum)
{
    if(j==arr[i].length)
    {
        return sum
    }
    else
    {
        sum+=arr[i][j]
        //console.log(sum)
        return SumOfTwoDArray(arr,i,j+1,sum)
    }
}