const additem=()=>{
    let userinput=document.querySelector("#inp").value
    console.log(userinput)
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    console.log(listitem)
    let list = document.querySelector("#todo")
    list.appendChild(listitem)
}
let addbtn=document.getElementById("addbtn")
addbtn.addEventListener("click",additem)