let prices=[7,1,5,3,6,4],one_price=0,max_price=0,low=0,high=prices.length-1,mid=Math.floor(prices.length/2)
//console.log(mid)
 
for(let i=0,j=high;i<mid,j>=mid;i++,j--)
{
    if(prices[i]<prices[j])
    {
        one_price=prices[j]-prices[i]
    }
    if(one_price>max_price)
    {
        max_price=one_price
    }

}
console.log(max_price)

//console.log(low)
//console.log(high)
