
let a=[1,2,2,2,2,3,5],element=0,count={}
 
a.forEach((val)=>

{

    count[val]=(count[val])?count[val]+1:1

})
 
Object.keys(count).forEach((count_var)=>

{

    console.log(count[count_var])

    if(count[count_var]==Math.ceil(a.length/2))

    {

        element=count_var

    }

})

result=(element!=0)?element:-1

console.log(result)
 
 
//Boore Mayors majority problem
