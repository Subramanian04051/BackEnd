

function a(arr,i)

{

    try

    {

        if(i==arr.length)

        {

            index=(index+i)

            return {flag,index}

        }

        else

        {

          //  console.log(arr[i]+`--`+arr[i-1])

           flag=(arr[i]==arr[i-1])?true:false

           index=(flag==true)?i:0

            return a(arr.splice(1),i+1)

        }

    }

    catch(err)

    {

        console.log(err)

    }

}

arr=[1,2,3,4,5,6,7,7,8]

console.log(a(arr,1))
