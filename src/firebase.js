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

        import {
            getFirestore, collection, addDoc
        }
        from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

        const db = getFirestore()

        // Referencias
        // let title = document.getElementById("task-title")
        // let description = document.getElementById("task-description")
        // let type = document.getElementById("type")
        // let month = document.getElementById("mes")
        // let dia = document.getElementById("dia")

        let saveBtn = document.getElementById("guardar")

        // Agregar documentos
        const  addDocument = async () => {
           try {
            const docRef = await addDoc(collection(db, "users"), {
                Title:  document.getElementById("task-title").value,
                DEscr: document.getElementById("task-description").value,
                Tipo: document.getElementById("type").value,
                Mes: document.getElementById("mes").value
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
        };

        // Asigando eventos
        saveBtn.addEventListener("click", addDocument)
