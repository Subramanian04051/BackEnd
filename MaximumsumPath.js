
let arr1 = [2, 3, 7, 10, 12] ,arr2 = [1, 5, 7, 8],getcommonindex=0,sum=0
 
for(let i=0;i<arr2.length;i++)

{

    if(arr1.includes(arr2[i]))

    {getcommonindex=(arr1.findIndex((val)=>

    {

        return val==arr2[i]

    }))

    break

    }

    else

    {

        sum+=arr2[i]

    }

}

for(let i=getcommonindex;i<arr1.length;i++)

{

    sum+=arr1[i]

}

console.log(sum)
