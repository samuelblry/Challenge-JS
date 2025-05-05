function createTask() {

    let input = document.getElementById("taskvalue")

    if (input.value == "") {
        return
    }

    tasklist = document.getElementById("tasklist")

    let task = document.createElement('div')
    task.className = "task"

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"

    let label = document.createElement('label')
    label.textContent = input.value

    tasklist.appendChild(task)
    task.appendChild(label)
    task.appendChild(checkbox)

    input.value = ""

    checkbox.addEventListener('change', function() {
        if (this.checked) {
          task.remove()
        }
      });

}



