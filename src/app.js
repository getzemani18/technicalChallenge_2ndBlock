// import * as module from "./firebase.js"
import {db} from "./firebase.js"
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

console.log(db)
const db = firebase.firestore()

traerTasks()
const taskForm = document.getElementById("task-form")

const saveTask = (title, description, type, mes) => {
  try {
  const docRef = await addDoc(collection(db, "task"), {
        title, 
        description, 
        type,
        mes
    
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}


taskForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(subir);
    const title = taskForm['task-title'].value
    const description = taskForm['task-description'].value
    const type = taskForm['type'].value
    const mes = taskForm['mes'].value
    
    await saveTask(title, description, type, mes);

    

    console.log(response);
    console.log(title, description, type, mes)
})
  
const traerTasks = (formulario) => {
    onSnapshot(collection(db, "task"), formulario)
}


