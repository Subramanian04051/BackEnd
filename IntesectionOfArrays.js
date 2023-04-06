let arr1=[1,2,3,4,5,6,5,90,60,70]
let arr2=[2,4,8,6,9,1,10,90,70]
let arr3=[]
let len=(arr1.length>arr2.length)?arr1.length:arr2.length
for(let i=0;i<len;i++)
{
    if(arr1.indexOf(arr2[i])!=-1)
    {
        arr3.push(arr2[i])
    }
}
console.log(arr3)