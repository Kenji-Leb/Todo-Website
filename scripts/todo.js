const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const dateInput = document.getElementById("dateInput")

loadTasks()

function addTask() {
    const task = taskInput.value.trim();
    const date = dateInput.value.trim();

    if (task && date) {
        createTaskElement(task, date);

        taskInput.value = '';
        dateInput.value = '';

        saveTasks();

    } else {
        alert('Please enter the missing fields!')
    }

}

addButton.addEventListener('click', addTask)

function createTaskElement(task, date){

    const listItem = document.createElement('h3');

    listItem.textContent = task;

    const dateItem = document.createElement('p')
    const deleteButton = document.createElement('button')
    const completeBtn = document.createElement('button')

    deleteButton.textContent = 'Delete'
    completeBtn.textContent = 'Mark as done'
    dateItem.textContent = date;

    deleteButton.classList.add('red-clr')
    dateItem.classList.add('p')

    listItem.appendChild(dateItem)
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
    taskList.querySelectorAll('h3').forEach(function(item){
        tasks.push(item.textContent.replace('DeleteMark as done', '').trim())
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(function(item){
        const [task, date] = item.split('||||');
        createTaskElement(task, date);
    });
}