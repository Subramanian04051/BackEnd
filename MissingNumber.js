
let a=[1,2,3,4,5,7,8,9,10,11]

n=a[a.length-1]

sum=(n*(n+1))/2,sum1=0

console.log(sum)
 
//console.log(sum)

length=a.length-1

for(let i=0;i<length/2;i++)

{

    sum1+=a[i]+a[length-i]

}

console.log(Math.abs(sum1-sum))
 
 
//Missing number
