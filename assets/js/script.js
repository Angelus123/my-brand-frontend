function openLoginForm() {
    document.getElementById("myLoginForm").style.display = "block";
  }

  function closeLoginForm() {
    document.getElementById("myLoginForm").style.display = "none";
  }
  function openSignUpForm() {
    document.getElementById("mySignUpForm").style.display = "block";

  }
 
  function closeSignUpForm() {
    document.getElementById("mySignUpForm").style.display = "none";
  }
  function openReadMoreForm() {
    console.log("Hellooooo")
    document.getElementById("readMore").style.display = "block";
    location.href = '#readMore';

  }
  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const form = document.querySelector('.form-container')
  const formSignup = document.querySelector('.form-container-signup')
  const formMessage = document.querySelector('.form-container-message')
  const firebaseConfig = {
    apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
    authDomain: "my-brand-6d710.firebaseapp.com",
    projectId: "my-brand-6d710",
    storageBucket: "my-brand-6d710.appspot.com",
    messagingSenderId: "290071395795",
    appId: "1:290071395795:web:a2681620feeec77c908326"
  };
  const app=firebase.initializeApp(firebaseConfig);

form.addEventListener('submit', (e)=>{
  console.log("Loged In")
  e.preventDefault()
  // Initialize Firebase
  
  app.auth().signInWithEmailAndPassword(form.email.value, form.password.value)
  .then((userCredential) => {
    console.log("Logged In")
    location.href = 'dashboard.html';

    // Signed in
    var user = userCredential.user;
    console.log("Logged In: ", user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
})

formSignup.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log("signUp In: ",formSignup.email.value, "signUp In: ",formSignup.password.value)
  // Initialize Firebase
  app.auth().createUserWithEmailAndPassword(formSignup.email.value, formSignup.password.value)
    .then((userCredential) => {
      // Signed in 
      
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    })
  })
  const db = app.firestore();

  formMessage .addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(formMessage.name.value, formMessage.message.value)
  
  db.collection("message").add({
    name: formMessage.name.value,
    message: formMessage.message.value,

})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  })
