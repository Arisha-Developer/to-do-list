//get items in form of list
var list=document.getElementById('list')
function addTodo(){
    var input=document.getElementById('input')     
    var li=document.createElement('li') 
     var liTxt=document.createTextNode(input.value)
     input.innerHTML=""
     li.appendChild(liTxt)
    list.appendChild(li)
     console.log(li)
//Delete button
var btn=document.createElement("Button")
var btnTxt=document.createTextNode("Delete")
btn.setAttribute('class','delbtn')
btn.setAttribute('onclick','remove(this)')
btn.appendChild(btnTxt)
li.appendChild(btn)
console.log(btn )
//create edit button
var edbtn=document.createElement('Button')
var edTxt=document.createTextNode("Edit")
edbtn.appendChild(edTxt)
li.appendChild(edbtn)
edbtn.setAttribute('class','edbtn')
edbtn.setAttribute('onclick','edit(this)')
}
//function of delete button
function remove(del){
    del.parentNode.remove()
    console.log(del)
}
//delete all function
function delAll(){
    list.innerHTML=""
}
//create edit function
function edit(e){
var editval=prompt("Enter new value:",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue=editval
}