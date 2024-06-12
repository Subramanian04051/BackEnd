let a=[4,7,3,2],rank_obj={},cp_arr=[...a]

a.sort()

for(let i=0;i<a.length;i++)
{
    rank_obj[a[i]]=i+1
}
console.log(rank_obj)

a=cp_arr.map((val)=>
{
    return rank_obj[val]
})
console.log(a)
