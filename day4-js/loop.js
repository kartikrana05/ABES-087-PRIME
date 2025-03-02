const getMetaData=()=>{
    const name=prompt("Please enter your name");
    console.log("HELLO",name);
    const noOfSubText=prompt("Please enter the number of subjects");
    const numOfSub=parseInt(noOfSubText); //parseFloat(),Number()
    return numOfSub;
};
const getSubjects=(num)=>{
    for(let i=0;i<num;i++){
        const subName=prompt("Please enter the name of subject");
        const marks=Number(prompt(`Please enter the marks ${subName}`));
        record[subName]=marks;
    }
   
}
const getPercentage=(obj)=>{
   const marks=Object.values(obj);
   let tsum=0;
   let tsub=0;
   marks.forEach((elem)=>{
    tsum+=elem;
    tsub++;

   });
   const percent=tsum/tsub;
   console.log("percentage is" ,percent);
   return percent;
}

const getHighestScoringSubject=(obj)=>{
   const marks=Object.values(obj);
   let maxi=0;
   for(let i=0;i<marks.length;i++){
      if(marks[i]>maxi){
        maxi=marks[i];
      }
      console.log("i:",marks[i]);
   }
   console.log("Maximum marks:",maxi);
};
const getGrades=(percentage)=>{
    const grades=[[60,"C"],[70,"B+"],[80,"A"],[90,"A+"]];
    let grade="F";
    grades.forEach((arr)=>{
        if(arr[0]<=percentage){
            grade=arr[1];
        }
    });
    console.log(grade);
};
const record={}
const sub=getMetaData();
getSubjects(sub);
getHighestScoringSubject(record);
const p=getPercentage(record);
getGrades(p);
