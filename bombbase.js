//https://www.codechef.com/learn/course/c-beginner/BC01BC19/problems/AOCC012

let count=8,power=6
let house_defence=[4,1,6,1,6,5,6,8],house_arr_index=[]

for(let i=0;i<house_defence.length;i++)
{
    if(power<house_defence[i])
    {
        house_arr_index.push(i)
    }
}
if(house_arr_index>1)
{
console.log(house_arr_index-1)    
}
