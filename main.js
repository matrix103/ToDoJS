let AddMessage = document.querySelector('.message'),
   AddButton = document.querySelector('.add'),
   todo = document.querySelector('.todo');

let TodoList = []

if(localStorage.getItem('todo')){
   TodoList = JSON.parse(localStorage.getItem('todo'));
   DisplayMessages()
}

AddButton.addEventListener('click', function(){
   let NewTodo = {
      todo: AddMessage.value,
      check: false,
      important: false,
   }

   TodoList.push(NewTodo);
   DisplayMessages();
   localStorage.setItem('todo', JSON.stringify(TodoList));
});

function DisplayMessages(){
   let DisplayMessage = '';
   TodoList.forEach(function(item,i){
      DisplayMessage += `
      <li>
         <input type='checkbox' id = 'item_${i}' ${item.check ? 'checked' : ""}>
         <label for='item_${i}'>${item.todo}</label>
      </li>
      `;
      todo.innerHTML = DisplayMessage;
   });
}

todo.addEventListener('change',function(event){
   let idInput = event.target.getAttribute('id'); 
   let valueLabel = todo.querySelector('[for='+idInput+']').innerHTML;
   TodoList.forEach(function(item){
      if(item.todo===valueLabel){
         item.check = !item.check;
         localStorage.setItem('todo', JSON.stringify(TodoList));
      }
   });
});