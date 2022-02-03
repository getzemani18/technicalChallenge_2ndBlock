
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  import {getFirestore,collection, addDoc,getDocs,onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIe-vn4Lvj6Ik1C3SYhL7CGhF3W6hqTSI",
    authDomain: "tecnologichallenge.firebaseapp.com",
    projectId: "tecnologichallenge",
    storageBucket: "tecnologichallenge.appspot.com",
    messagingSenderId: "156053888333",
    appId: "1:156053888333:web:676165c8dba1f1c8296b04"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


        // Empezamos a ejecutar el Firestore
        const db = getFirestore()

    //     console.log(db);
    //    console.log(addDoc);

        // Creamos una contstante
        // Espero que de esta constante me pueda pasar el titulo, la descripcion, el tipo y el mes
        // Creamos una funcion con parametros esperados
        // Exportamos la funcion para llevarla al app.js
        export const saveTask = (title, description, type, month) => {
             // Le paso como parametros cada uno de los que espero que pase esta funcion
            // Creamos la collection
           addDoc(collection(db, "task"), {title, description,type, month})
            
        }
       
        
        //-----------LISTAMOS DATOS 

        //obtenemos tareas
        export const getTasks = () => {
            //Utilizamos el firebase para ir al servidor y trarer los datos que exitan 
            // Traemos funcion 
            // Nos traemos la coleccion
            getDocs(collection(db, 'task'))
        } 
        
        //Cuando los datos cambien 
        //le pasamos un parametro donde vendra la coleccion
        export const onGetTasks = (callback) => {
            onSnapshot(collection(db, 'task'), callback)
        }

        //--------Eliminamos Datos
        //Creamos una funcion para ejecutar una consulta en la base de datos
        export const deleteTask = (id) => {
            //eliminar un documento
            //recibe la colleccion de datos y las tareas, que son los id de cada card que vamos a eliminar
          deleteDoc(doc(db, 'task', id))

        }

        //obtener una sola tarea
        export const getTask = async (id) => {
            //alert(id,'llego')
            const docRef = doc(db, 'task', id)
            const docSnap = await getDoc(docRef)
            //console.log(docSnap.data());  
            const datosD =  docSnap.data()    
            console.log(datosD);
        }

        //Actualizar 
        export const  updateTask = (id, newCard) => {
             updateDoc(doc(db, 'task', id), newCard)
        }