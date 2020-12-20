/*
//Fibonacci Series or Number

function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2){
    console.log (1);
  }else{
  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }
  console.log (fibo[n]);
  console.log (fibo);
 }
} 
fibonacci(50);

//Remove Duplicate Number or String
function removeDuplicate(arr){
  var exists ={},
      outArr = [], 
      elm;
//console.log(arr.length)
  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  console.log(exists);
}
removeDuplicate([1,3,3,3,1,5,6,7,8,1]);

// Factorial number
function fact(n){
 let m =1;
 for(let i=1; i<=n; i++){
  m = (m * i)
 }
console.log(m)
}
fact(5);


// Reverse the String
function reverse(str){
newStr="";
for(let i = str.length-1; i>=0; i--){
 newStr = newStr + str[i];
}
console.log(newStr);
}
reverse('abcd')
*/


function Dog(name) {
  this.name = name
}
Dog.prototype.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
console.log(Dog)
fido.bark()