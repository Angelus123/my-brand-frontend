const firebaseConfig = {
    apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
    authDomain: "my-brand-6d710.firebaseapp.com",
    projectId: "my-brand-6d710",
    storageBucket: "my-brand-6d710.appspot.com",
    messagingSenderId: "290071395795",
    appId: "1:290071395795:web:a2681620feeec77c908326"
  };
  firebase.initializeApp(firebaseConfig);
const formLogout = () =>{
    firebase.auth().signOut().then(() => {
        location.href = 'index.html';
      console.log("Sign-out successful")
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    })
    }

    function openBlogForm() {
        document.getElementById("myBlogForm").style.display = "block";
      }
    
      function closeLoginForm() {
        document.getElementById("myBlogForm").style.display = "none";
      }