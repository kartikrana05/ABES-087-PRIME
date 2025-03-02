const username=prompt("enter user name:");
const nSub=parseInt(prompt("enter no. of subjects"));
const SubMark={}
let total=0;
let maxi=0;
let maxSub="none";
for(let i=0;i<nSub;i++){
    let m=prompt("enter sub name");
    let n=parseInt(prompt("enter the marks "));
    SubMark[m]=n;
    total+=n;
    if(maxi<n){
        maxSub=m;
    }

}
let percent = (total/(100*nSub))*100;
console.log("final percentage",percent);
console.log("name of highest scoring sub",maxSub);
