let a=[1,2,3,4,5]
let medium=(a.length%2==0)?a.length/2:Math.ceil(a.length/2)
let length=a.length,tmp=0
for(let i=0,j=length-1;i<=medium,j>=medium;i++,j--)
{
    tmp=a[i]
    a[i]=a[j]
    a[j]=tmp
    
}

console.log(a)
