// const temp=()=>{
//     if(true){
//         var username="Raj"
//     }
//     console.log(username);
// } 
// temp();
// console.log(username);
//........... function inside a function
const sumMod10=(a,b)=>{
    const ans=(a+b)%10;
    // console.log(ans);
    const printPretty=(txt)=>{
        console.log("........",txt,"................");
    }
    printPretty(ans);
    console.log("SUMdone")

};
sumMod10(19,99);
console.log("end");

