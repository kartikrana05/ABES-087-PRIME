// print("Kartik")
// function print(a){
//     console.log("hello",a);
// }
// print("Kartik")
//............................. FUNCTION ASSIGNMENT
// const view=function(a){
//     console.log("Hi",a);
// };

// view("Rakesh");
//.....(arrow) function assignment
//ES6+
const view=(a)=>{
    console.log("hi",a);
    
}

view("Rakesh");
// Function to calculate sum and retunr it's and mod 10 value using type 1
// const printi=(a,b)=>{
//     const sum=a+b;
//     return sum%10;
// }
// const printi=function sumMod(a,b){
//     const sum=a+b;
//     return sum%10;
// }
const sumMod=(a,b)=>(a+b)%10;
var a=sumMod(99, 87);
console.log(a);

