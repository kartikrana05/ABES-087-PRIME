// document.children[0].children[1].children[0].style.color = 'red'
// const outerDiv = document.querySelector("div")
// outerDiv.style.backgroundColor = "blue"
// console.dir(outerDiv)
// const divChildren = Array.from(outerDiv.children)
// console.log(divChildren)
// divChildren.forEach((elem) => {
//     elem.style.backgroundColor = "green"
// })
const divElement = Array.from(document.querySelectorAll("div div"))
divElement.forEach((elem) => {
    elem.style.backgroundColor = "yellow"
})
const mappings = {
    Invitation: "You are invited for event",
    Reminder: "You ar reminded for task",
    Invitation: "You have a notice for college",
    Invitation: "YOu have 7 messages"
}
const newElement=document.createElement("div");
const rootElement=document.querySelectorAll("body");
rootElement.appendChild(newElement);