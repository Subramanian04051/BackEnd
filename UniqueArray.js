let arr=[1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
arr=RemoveDuplicate(arr)
console.log(arr)

function RemoveDuplicate(arr)
{
    const set1=new Set(arr)
    let arr1=[]
    set1.forEach((value)=>
    {
        arr1.push(value)
    })
    return arr1
}