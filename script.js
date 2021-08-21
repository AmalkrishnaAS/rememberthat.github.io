let addbtn=document.getElementById("add");
addbtn.addEventListener("click",addLI)


        
       
function addLI() {
if (content.value.trim()!=0&&deadline.value.length!=0) {
    

    let deadline=document.getElementById("deadline")
    console.log(deadline.value)
    let content=document.getElementById("content");
    let listnode=document.getElementById("list")
    let textnode=document.createTextNode(`You have to ${content.value} by ${deadline.value}`)
    let linode=document.createElement("LI")
    linode.appendChild(textnode)
    listnode.appendChild(linode)
    linode.classList.add("item")
}
else
alert('please give a valid input combination')

    
}
