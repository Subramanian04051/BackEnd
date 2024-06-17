let a=[6,7,4,2,5,3],b=a.slice(1,a.length),b_len=b.length-1,leader_or_not={}
b.sort()
console.log(a)
console.log(b)

for(let i=0;i<a.length;i++)
{
    if(a[i]>b[b_len] || i==a.length-1)
    {
        leader_or_not[a[i]]='yes'
        
    }
    else
    {leader_or_not[a[i]]='no'
        
    }
    b.pop()
    b_len--
}
console.log(leader_or_not)
