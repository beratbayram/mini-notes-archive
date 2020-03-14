var todos = [{
        todo: "true - 1",
        done: true
    },
    {
        todo: "false - 1",
        done: false
    },
    {
        todo: "true - 2",
        done: true
    },
    {
        todo: "false - 2",
        done: false
    },
    {
        todo: "true - 3",
        done: true
    },
    {
        todo: "false - 3",
        done: false
    },
    {
        todo: "true - 4",
        done: true
    },

]

var doneUl = document.getElementById("doneUl")
var notDoneUl = document.getElementById("notDoneUl")
var input = document.querySelector("input")
var dropdown = document.querySelector("select")
var button = document.querySelector("button")

function list(iterator) {
    let li = document.createElement("li")

    li.textContent = iterator.todo

    console.log("#### " + iterator.done);
    
    if (iterator.done == true || iterator.done == "true") doneUl.appendChild(li)
    else notDoneUl.appendChild(li)
}

for (const iterator of todos) {
    list(iterator)
}

button.addEventListener("click",() => {
    todos.push({
        todo:input.value,
        done:dropdown.options[dropdown.selectedIndex].value
    })

    console.log(todos[todos.length-1].done)
    
    list(todos[todos.length-1])
},)