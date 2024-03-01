const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks()

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);

        taskInput.value = '';

        saveTasks();

    } else {
        alert('Please enter a task!')
    }

}

addButton.addEventListener('click', addTask)

function createTaskElement(task){

    const listItem = document.createElement('li')

    listItem.textContent = task;

    const deleteButton = document.createElement('button')
    const completeBtn = document.createElement('button')

    deleteButton.textContent = 'Delete'
    completeBtn.textContent = 'Mark as done'

    listItem.appendChild(deleteButton)
    listItem.appendChild(completeBtn)

    taskList.appendChild(listItem)

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem)
        saveTasks()
        
    })

    completeBtn.addEventListener('click', function(){
        completeBtn.classList.toggle('done-task')

        saveTasks()
    })

}

function saveTasks() {

    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('DeleteMark as done', '').trim())
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(createTaskElement);
}