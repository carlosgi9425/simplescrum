const API_URL = "https://my-json-server.typicode.com/carlosgi9425/simplescrum/tasks"


axios.get(API_URL)
.then(resp => fillTasks(resp.data))
.catch(err => console.log(err))

function fillTasks(data){
    data.map(d => {
        let newTask = document.createElement("article")
        newTask.classList.add("task")
        let taskTitle = document.createElement("h3")
        taskTitle.innerText = d.title

        let tasksPerson = document.createElement("p")
        tasksPerson.innerHTML= `<span>Responsable:</span> ${d.person}`

        let tasksDeadLine = document.createElement("p")
        tasksDeadLine.innerHTML = `<span> Plazo:</span> ${unixToDate(d.deadLine)}`


        newTask.appendChild(taskTitle)
        newTask.appendChild(tasksPerson)
        newTask.appendChild(tasksDeadLine)

        let columnTodo = document.getElementById("todoTasks")
        let columnInProgress = document.getElementById("inProgressTasks")
        let columnDone = document.getElementById("doneTasks")

        if(d.state === "to-do"){
            columnTodo.appendChild(newTask)
        }
        if(d.state === "in-progress"){
            columnInProgress.appendChild(newTask)
        }
        if(d.state === "done"){
            columnDone.appendChild(newTask)
        }
    })
}