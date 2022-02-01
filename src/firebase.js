// ----------------------------IMPOTS FIREBASE-----------------

// Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
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

        // -------------IMPORTS PARA FIRESTORE
        import {
            getFirestore, collection, addDoc, doc, getDocs, updateDoc, deleteDoc
        }
        from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

        // inicializamos firestore

        const db = getFirestore()

        // Variables para el dia
        let today = new Date()
        let todayString = today.toDateString()
    
        console.log(today);
        console.log(todayString);

         

        // Referencias
    
        let saveBtn = document.getElementById("guardar")
    
        

        

        // Agregar documentos
        
        const  addDocument = async () => {   //Utilizamos aync para devolver una promesa 
            // try...Catch: Es una primesa que se utiliza en declaraciones, viene en pares
           try {  //try: Es una declaeacion que le permite definir un bloque de codigo para probar errores mientras se ejecuta
            // Utilizamos el await para que la promesa se cumpka y devuela el resultado, en esre caso es la collection
            const docRef = await addDoc(collection(db, "users"), {
                // Integramos un nombre con el id de cada seccion y le pones value por cada valor que tiene 
                Title:  document.getElementById("task-title").value,
                DEscr: document.getElementById("task-description").value,
                Tipo: document.getElementById("type").value,
                Mes: document.getElementById("mes").value,
                date: today,
                dateS : todayString
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) { //Catch: es una istruccion que perimite definir un bloque de codigo que se ejecutara si ocurre un error en el bloque de prube
            console.error("Error adding document: ", e);
            }   

           
           
        };
 
          // ¿Qué espero de la funcion Deleate?
          // Espero que pueda borrar cada card al presionar el boton "Eliminar"
          //Pseudocodigo
          //Hacer una funcion con el id del boton 
          let deleate = document.querySelectorAll('.delete') // se utiliza el querySelector por que solamente hay un elmento al que queremos utilizar
          console.log(deleate) //null
          const deleateF = () => {
              
              deleate.addEventListener("click", async (id) => {
                  await deleteDoc(doc(db, "users", id))
              })
          }
          deleateF()
          // agregar el addEvenListener para que al presionarlo comience
          // Dentro de esta, dar la orden de borrar 
          // Poner el codigo de borrar de FireBase 
          // Y ahi mismo dar la orden de borrar con el boton 


        
        
   
       
        // Asigando eventos
        // Prendemos el boton de guardar con la funcion donde iran integrando los datos 
        
        saveBtn.addEventListener("click",  addDocument)
        


        // dinamicamente las cards deñ formulario
        let carrousel = document.getElementById("carrousel") //Afregamos el id de la seccion donde se van a pintar
        const getAllData = async () => {
            const querySnapshot = await getDocs(collection(db, "users")) //Nos traemos la collecion

            // Metodo ForEach: Iterara cada vez que una persona agrega un dato dentro del arreglo que se va creando
            querySnapshot.forEach(doc => {
               
                // console.log(doc.data())
                // console.log(`${doc.id}`);


                // Nos traesmos la variable que va a pintar con el html y empezamos a pintar por cada vez que una persona igresa un dato, en este momento es donde el forEach empieza iterar mientras pinta
                carrousel.innerHTML += 
                `<div class="row">
                <div class="card border-success mb-3" style="max-width: 18rem;" style="display: block">
                    <div class="card-header bg-transparent border-success">${doc.data().Title}</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">${doc.data().Tipo}</h5>
                        <h5 class="card-title">${doc.data().Mes}</h5>
                        <p class="card-text">${doc.data().DEscr}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">${doc.data().date.toDate()}</div>
                    <button type="button" class="delete" data-id="${doc.id}" >Eliminar</button>
                    <button type="button" class="edit" data-id="${doc.id}">Editar</button>
                </div>
                `

            })
            
        }
        //Prendemos la funcion donde pintamos e iteramos
       getAllData()
       
       
        


      