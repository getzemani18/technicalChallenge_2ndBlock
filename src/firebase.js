// Import the functions you need from the SDKs you need
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
     import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
    
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
        const db = getFirestore();

        console.log(app, db);
