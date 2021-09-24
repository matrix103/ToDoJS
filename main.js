let AddMessage = document.querySelector('.message'),
   AddButton = document.querySelector('.add'),
   todo = document.querySelector('.todo');

let TodoList = []

AddButton.addEventListener('click', function(){
   let NewTodo = {
      todo: AddMessage.value,
      check: false,
      important: false,
   }

   TodoList.push(NewTodo);
   console.log(TodoList);
});

function DisplayMessages(){
   TodoList.forEach(function(item,i){
      let DisplayMessage = ``
   });
}