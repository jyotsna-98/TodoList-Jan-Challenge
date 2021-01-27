
let input_text=document.querySelector("#text__input");
let add_btn=document.querySelector('#add__btn');
const hitSound = new Audio("/assets/hitSound.mp3");
const closeSound=new Audio("/assets/closeSound.mp3")
let  todoList=[];

add_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    hitSound.play();
    if (input_text.value===""){
            let alert=document.createElement('div');
            let div=document.getElementById("addTodo");
            alert.setAttribute('id','alert_placeholder');
            let message="You Must Write Something"
           alert.innerHTML='<div class="alert alert-dark"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>'
            div.appendChild(alert);
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

        
        }

          // Click on a close button to hide the current list item
          var close = document.getElementsByClassName("close");
          var i;
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              closeSound.play();
              var div = this.parentElement;
              
              //console.log(div);
              div.style.display = "none";
            }
          }
          // Add a "checked" symbol when clicking on a list item

          list_item.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
              ev.target.classList.toggle('checked');
            }
          }, false);

           }
          }