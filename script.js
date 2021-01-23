let input_text=document.querySelector("#text__input");
let add_btn=document.querySelector('#add__btn');
let  todoList=[];
add_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (input_text.value===""){
        alert("You Must Write Something")
   
        return
    }
    else{
        getTodo();
        input_text.value="";
    }
    
})

input_text.addEventListener('keyup',(e)=>{
   if(input_text.value.length > 0) { 
          add_btn.disabled = false; 
        } else { 
           add_btn.disabled = true;
        }
})
getTodo=()=>{
    let todo=input_text.value;
    todoList.push(todo);
    displayTodo();
   
}



displayTodo=()=>{
  let list_item=document.getElementById('list_item');
  if(input_text.value !==""){
     // Creating element and adding value to it 
      let make_li = document.createElement("LI");
      make_li.setAttribute('id','todo-item'); 
      make_li.appendChild(document.createTextNode(input_text.value)); 
  
      // Adding li to ul 
      list_item.appendChild(make_li); 
      var myNodeList = document.getElementsByTagName("LI");
      //Creating Close Button
var i;
for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
   myNodeList[i].appendChild(span);

  //Adding edit icon 
  let e=document.createElement('i');
  e.setAttribute('id','edit');
  e.setAttribute('class',"fas fa-edit");
  // e.addEventListener('click',edit);
  myNodeList[i].appendChild(e);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    
    //console.log(div);
    div.style.display = "none";
  }
}
 
//Click on a edit button to edit the list item
var edit=document.getElementById('edit');
console.log(edit.parentElement);  
}

// edit=()=>{
//   console.log("hi");
//   let edit=document.getElementsByTagName('i');
//   console.log(edit);
//   let ed;
//   for(ed=0;ed<edit.length;ed++){
//     edit[ed].onclick=()=>{
//       console.log('this is me'+ edit.ed);
//     }
//   }
}