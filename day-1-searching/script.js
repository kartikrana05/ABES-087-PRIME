const getData=(text)=>{
    const pr=fetch("https://dummyjson.com/recipes/search?q=Margherita%27");
    pr.then((res)=>{
        const pr2=res.json();
        pr2.then((data)=>{
            showCards(data.recipies);})
        })
    };

const showCards=(dataArr)=>{
    dataArr.forEach(elem)=> {


        
    });

}