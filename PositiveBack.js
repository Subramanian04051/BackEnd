
let a=[1,2,3,-4,5,-6],temp=[]

console.log(a)
 
for(let i=0;i<a.length;i++){

    if(a[i]<0)

    {

        sample=Number(a.splice(i,1))

        temp.push(sample)

    }

}

console.log(temp.concat(a))
 
 
Negative values at front
