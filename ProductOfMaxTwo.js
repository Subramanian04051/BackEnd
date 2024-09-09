let input=[1, 20, 30, 5, 4, 7], max_one=input[0],max_two=input[1],length=input.length-1

for(let i=2;i<length;i++)
{
    if(max_one<input[i])
    {
        max_one=input[i]
    }
    if(max_two<input[i])
    {
        max_one=input[i]
    }
    if(max_one<max_two)
    {
        max_one=max_two
    }
}
console.log(max_one*max_two)
