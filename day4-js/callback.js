//........................
// const sum=(a,b)=>{
//     const ans=a+b;
//     return ans;
// };
// const printPretty=(txt)=>{
//     console.log("........");
//     console.log(txt);
//     console.log("...........");
// };
// printPretty(sum(20,30));
const sum=(a,b,c)=>{
    const ans=a+b;
    // return ans;
    c(ans);
};
const printPretty=(txt)=>{
    console.log("........");
    console.log(txt);
    console.log("...........");
};
sum(20,30,printPretty)
