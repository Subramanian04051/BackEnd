//https://www.codechef.com/problems/CS2023_STK

let n=6
let addy=[1,7,3,0,2,13],addy_cnt=0
let om=[0,2,3,4,5,0],om_count=0

for(let i=0;i<n;i++)
{
    if(addy[i]==0)
    {
        addy_cnt=0
    }
    else if(om[i]==0)
    {
        om_count=0
    }
    else
    {addy_cnt++
    om_count++
        
    }
}

console.log((addy_cnt>om_count)?"aDDY":"OM")
