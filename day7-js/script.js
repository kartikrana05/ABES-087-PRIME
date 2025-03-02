const data = [
    {
        email: "rakesh@gmail.com",
        name: "Rakesh",
        city: "Delhi"
    },
    {
        email: "mohan@gmail.com",
        name: "Mohan",
        city: "Noida"
    },
    {
        email: "Risha@gmail.com",
        name: "Rishabh",
        city: "Mumbai"
    }
];

const root = document.getElementById('root')

const showCards = () => {
    data.forEach((ele) => {
        const card = document.createElement('div');
        card.className = "card"
        card.innerHTML = 
        `
        <div>
            <h1>${ele.name}</h1>
            <p>${ele.city}</p>
            <button onClick = "deleteCard(event)">Delete</button>

        </div>
        `
        root.appendChild(card)
    })
}

const deleteCard = (e,elemId) => {
    const index=data.findIndex((elem)=>elem.id==elemId);
    data.splice(index,1);
    showCards(data);
}
const handleSelect=(e)=>{
    const selectedCity=e.target.value;
    const newData=data.filter((elem)=>{
        if(elem.city==selectedCity) return true;
        return false;
    });
    showCards(newData);
};
showCards()
const handleFormSubmit=(e)=>{
    e.preventDefault();
    const isEmailExist=data.some((elem)=>{
        return elem.email===e.target.email.value;
    })
    if(isEmailExist){
        alert("Email already exist");
        return;
    }
    const newElem={
        name: e.target.fullname.value,
        name: e.target.email.value,
        name: e.target.city.value,

    };
}
