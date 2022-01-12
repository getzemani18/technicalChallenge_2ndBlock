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
            getFirestore, collection, addDoc, doc, getDocs
        }
        from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

        const db = getFirestore()

        let today = new Date()
        let todayString = today.toDateString()
    
        console.log(today);
        console.log(todayString);

        // Referencias
    
        let saveBtn = document.getElementById("guardar")

        

        // Agregar documentos
        const  addDocument = async () => {
           try {
            const docRef = await addDoc(collection(db, "users"), {
                Title:  document.getElementById("task-title").value,
                DEscr: document.getElementById("task-description").value,
                Tipo: document.getElementById("type").value,
                Mes: document.getElementById("mes").value,
                date: today,
                dateS : todayString
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }   
        };

       
        // Asigando eventos
        saveBtn.addEventListener("click", addDocument)


        let carrousel = document.getElementById("carrousel")
        const getAllData = async () => {
            const querySnapshot = await getDocs(collection(db, "users"))

            var notas = []

            querySnapshot.forEach(doc => {
                notas.push(doc.data())
                console.log(doc.data())
                console.log(`${doc.id}`);


                carrousel.innerHTML += 
                `<div class="card">
                <div class="card-header">
                    <h4>Notes</h4>
                </div>
                <div class="card-body">
                    <div id="${doc.id}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#${doc.id}" data-bs-slide-to="0"
                                class="active"></button>
                            <button type="button" data-bs-target="#${doc.id}" data-bs-slide-to="0"
                                class="active"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h1>${doc.data().Title}</h1>
                                <h2>${doc.data().DEscr}</h2>
                                <h2>${doc.data().Tipo}</h2>
                                <h2>${doc.data().Mes}</h2>
                                <h1>${doc.data().date.toDate()}</h1>
                            </div>
                        
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${doc.id}"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${doc.id}"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>

                        </button>
                    </div>
                </div>
            </div>
                `

            })
        }
       getAllData()
        // .forEach((doc) => {
           
        


        // dINAMICO
       
        


      