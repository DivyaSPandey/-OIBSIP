let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')


function addTask(){    //empty
    if(inputBox.value === ''){
        alert('Add Your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7'    // for mark X
        task.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}


listContainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
       
    // for cross button

    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove ()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML)
}

//after refresh data still there
 
function showData() {
    listContainer.innerHTML = localStroage.getItem('tasks')

}
showData()

        