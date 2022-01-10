const db = firebase.firestore()

const taskForm = document.getElementById("task-form")

const saveTask = (title, description, type, mes) => {
     db.collection('tasks').doc().set({
        title, 
        description, 
        type,
        mes
    })
}
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(subir);
    const title = taskForm['task-title'].value
    const description = taskForm['task-description'].value
    const type = taskForm['type'].value
    const mes = taskForm['mes'].value
    
    await saveTask(title, description, type, mes);

    taskForm.reset()

    console.log(response);
    console.log(title, description, type, mes)
})