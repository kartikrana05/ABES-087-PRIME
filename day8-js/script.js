// console.log("Start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
const getData=()=>{
const pr=fetch("http://dummyjson.com/products");
console.log(pr);
pr.then((a)=>{
    console.log("a",a);
    const pr2=a.json();
    pr2.then((data)=>{
        showUI(data);
    });
    

}).catch((b)=>{
    console.log("b",b);
});
};