let a=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
	{"name":"Subramanian",
	"age":11}
]

doTraversal(a)


function doTraversal(json_obj)
{
  Object.keys(json_obj).forEach((key_one)=>
  {
  if(Array.isArray(key_one))
  {
    Object.keys(key_one).forEach((val)=>
    {
      doTraversal(key_one[val])
    })
  }
  else if(typeof(key_one)=="object")
  {
    doTraversal(json_obj[key_one])
  }
   else{
     
   console.log('Key'+key_one)
      console.log('Value'+JSON.stringify(json_obj[key_one]))
    
  }  
  })
  
}
