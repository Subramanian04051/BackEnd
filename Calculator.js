/*exports.Calculator={
  //constructor(){}
   Add(a,b)
{
  console.log(a+b)
},
Subtract(a,b)
{
  return a-b
},
Multiply(a,b)
{
  return a*b
},
Divide(a,b)
{
  return a/b
}
}*/
 class Calculator  {

 // var PI = 3.1416;
 static add(a,b){
  return a + b;
  }
  
  static  sub(a,b){
  return a - b;
  }
  
  static   mul(a,b){
  return a * b;
  }
  
  static  div(a,b){
  return a / b;
  }
  }
  module.exports=Calculator

//module.exports.Calculator=Calculator.Add
//module.exports.url=url