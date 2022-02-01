// Empezamos a importar, utilozando exports desde firebasej,js
import {saveTask, getTasks, onGetTasks, deleteTask, getTask} from "./firabase1.js"


let taskCards = document.getElementById("cards") //Afregamos el id de la seccion donde se van a pintar
let editStatus = false

// Arrancando la aplicacion con el evento Window
// Agregamos un evento el cual nos va a servir ejecutar cuando la aplicacion carge
window.addEventListener('DOMContentLoaded', async () => {
  //Guardamos en una constante 
  //*Un querySnapshot: los datos que exiten en este  momento, trae los datos
  //  const querySnapshot = await getTasks()

   onGetTasks((querySnapshot) => {
     //console.log(querySnapshot);
 let cardsP = ''
   querySnapshot.forEach(doc => {
     const task = doc.data()
     //console.log(doc);
     cardsP += `<div class="row">
                <div class="card border-success mb-3" style="max-width: 18rem;" style="display: block">
                    <div class="card-header bg-transparent border-success">${task.title}</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">${task.description}</h5>
                        <h5 class="card-title">${task.type}</h5>
                        <p class="card-text">${task.month}</p>
                    </div>
                    
                    <button type="button" class="delete" data-id="${doc.id}" >Eliminar</button>
                    <button type="button" class="edit" data-id="${doc.id}">Editar</button>
                </div>`
   })
          taskCards.innerHTML = cardsP

          //----------Eliminamos datos
          // Hacemos que seleccione todos los botones que tienen esto, ya que son v arios por ue cada que ves que agregamos seran mas
         const btndDelete =  taskCards.querySelectorAll('.delete')
          
         //Por cada boton
         btndDelete.forEach(btn => {
           //Importamos dentro del event el target que esta dentro del objeto 
             btn.addEventListener('click', ({target:{dataset}}) => {
               console.log('elimienando');
               console.log(dataset.id);
               //Prendemos la funcion desde firebase  y nos traemos el id de cada boton
              deleteTask(dataset.id)
             })
         })

         //---------Editar datos
         const btnEdit = taskCards.querySelectorAll('.edit')
         btnEdit.forEach((btn) => {
           btn.addEventListener('click', async (e) => {
            console.log(e);
            console.log('editando');
            //Utilizamos el id para poder obtener la tarea
            const doc = await getTask(e.target.dataset.id)
            const task1 = doc.data()
            

            taskForm['task-title'].value = task1.title
            taskForm['task-description'].value = task1.description
            taskForm['type'].value = task1.type
            taskForm['mes'].value = task1.month

            editStatus = true
           })
         })
   })
})

// Nos traemos el id el que enrolla a el formulario(form)
const taskForm = document.getElementById('task-form')

taskForm.addEventListener('click', (e) => {
  console.log('di click')
  console.log(e);
  e.preventDefault()
       const title =  taskForm['task-title'] 
       const description = taskForm['task-description'] 
      const type= taskForm['type'] 
      const month = taskForm['mes'] 
      console.log(title);
      
      //Afregamos una condicional 
      if(editStatus) {
        console.log('Actualisa');
      } else {
        saveTask(title.value, description.value, type.value, month.value)
      }
        //console.log(title.value, description.value, type.value, month.value); 

})

// Utilizamos un addEvenListener
// Utilizamos un objeto Event para cancelar la actualizacion de la pagina al agregar una nueva nota 
// taskForm.addEventListener('submit', (e) => {
//       e.preventDefault() //Ya no se resfrescara la pagina
      
//       //Nos traemos los inputs del formulario por su id en variables
//       const title =  document.getElementById("task-title")
//       const description =  document.getElementById("task-description")
//       const type= document.getElementById("type")
//       const month = document.getElementById("mes")
      

//     //   Prendemos la funcion esportada desde app.js- saveTask 
//     // Adentro ponemos cada constante que pusimos arriba con los ids que serian su valor
//     saveTask(title.value, description.value, type.value, month.value)
    
//    

// })

