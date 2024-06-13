let arr = [1, 2, 4, 4,4, 5],  x = 4,pos_obj={},first=-1,last=-1

for(let i=0;i<arr.length;i++)
{
    if(pos_obj[arr[i]]==undefined)
    {
    pos_obj[arr[i]]=[]
    pos_obj[arr[i]].push(i)
    }
    else
    {
    pos_obj[arr[i]].push(i)    
    }
    
}
if(pos_obj[x]!=undefined)
{
    first=pos_obj[x][0]
    last=pos_obj[x][pos_obj[x].length-1]
}
console.log('first',first)
console.log('last',last)
