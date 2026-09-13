const todoList = [{}]

renderTodoList()

function renderTodoList(){
    let todolistHTML = "";

    todoList.forEach((todoObject, index)=>{
        const {task, date} = todoObject;

        const html = `
            <div>${task}</div>
            <div>${date}</div>
            <button class="js-delete-button">Delete</button>
         `
         todolistHTML+=html;
    })

}

document.querySelector('js-add-button').addEventListener('click', ()=>{
    addTodo();
})

function addTodo(){
    const inputTask = document.querySelector('.js-task-input');
    const task = inputTask.value;

    const inputDate = document.querySelector('.js-date-input');
    const date = inputDate.value;

    todoList.push({task, date});
    inputTask.value = '';
    renderTodoList();

}