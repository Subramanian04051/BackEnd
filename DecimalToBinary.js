
console.log(binaryStringConversion(15,""))

function binaryStringConversion(value,binary)
{
    if(value==0)
    {
        return binary+"0"
    }
    else
    {
        binary=binary+(value%2).toString()
        return binaryStringConversion(parseInt(value/2),binary) 
    }
}
