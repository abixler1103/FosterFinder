 (function() {

     var config = {
         apiKey: "AIzaSyCQPCJy7TgD8p7vxaP8OdaKMdzJMubG5qA",
         authDomain: "fosterfinder-768a0.firebaseapp.com",
         databaseURL: "https://fosterfinder-768a0.firebaseio.com",
         projectId: "fosterfinder-768a0",
         storageBucket: "",
         messagingSenderId: "906341196923"
     };
     firebase.initializeApp(config);

     //get elements
     const username = document.getElementById('username');
     const mail = document.getElementById('mail');
     const password = document.getElementById('password');
     const login = document.getElementById('login');
     const register = document.getElementById('register');
     //add login event
     login.addEventListener('click', e => {
         //get email and pass
         const email = email.value;
         const pass = password.value;
         const auth = firebase.auth;
         //sign in
         const promise = auth.signInWithEmailAndPassword(email, pass);
         promise.catch(e => console.log(e.mesage))
     });
     // add signup event
     register.addEventListener('click', e => {
         const email = email.value;
         const pass = password.value;
         const auth = firebase.auth;
         //sign in
         const promise = auth.createUserWithEmailAndPassword(email, pass);
         promise.catch(e => console.log(e.mesage))
     });


     //add a realtime listener
     firebase.auth().onAuthStateChaged(firebaseUser => {
         if (firebaseUser) {
             console.log(firebaseUser);
         } else {
             firebase.auth().signInAnonymously().catch(e => console.log('logged in always'));
         }
     })


 });