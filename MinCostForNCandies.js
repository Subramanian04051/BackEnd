let a=[3,2,1,4],sum_cost_min=0,k=2,b=[...a]
a.sort() //sorting the array 

for(let i=0;i<a.length;i++)
{
    sum_cost_min+=a[i] //getting the minimum cost and add it to existing sum
    for(let j=0;j<k;j++)
    {
        a=a.slice(0,-1) //Removing last elements for minimum cost ,since the last index level costs will be maximum
        
    }
    //console.log(a)
}
console.log(sum_cost_min)
