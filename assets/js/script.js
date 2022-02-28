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
  document.getElementById("readMore").style.display = "block";
  location.href = "#readMore";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const form = document.querySelector(".form-container");
const formSignup = document.querySelector(".form-container-signup");
const formMessage = document.querySelector(".form-container-message");
const formComment = document.querySelector(".comment-form")
const firebaseConfig = {
  apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
  authDomain: "my-brand-6d710.firebaseapp.com",
  projectId: "my-brand-6d710",
  storageBucket: "my-brand-6d710.appspot.com",
  messagingSenderId: "290071395795",
  appId: "1:290071395795:web:a2681620feeec77c908326",
};
const app = firebase.initializeApp(firebaseConfig);

formComment.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formComment._id.value) 
    console.log(formComment.comment.value)
    console.log(formComment.name.value);

  db.collection("comment")
    .add({
      article_id: formComment._id.value,
      comment: formComment.comment.value,
      name: formComment.name.value
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      location.href = "#myCommentTable";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});

form.addEventListener("submit", (e) => {
  console.log("Loged In");
  e.preventDefault();
  // Initialize Firebase

  app
    .auth()
    .signInWithEmailAndPassword(form.email.value, form.password.value)
    .then((userCredential) => {
      console.log("Logged In");
      location.href = "dashboard.html";

      // Signed in
      var user = userCredential.user;
      console.log("Logged In: ", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    "signUp In: ",
    formSignup.email.value,
    "signUp In: ",
    formSignup.password.value
  );
  // Initialize Firebase
  app
    .auth()
    .createUserWithEmailAndPassword(
      formSignup.email.value,
      formSignup.password.value
    )
    .then((userCredential) => {
      // Signed in

      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
});
const db = app.firestore();
function readMore(id, title, article, image) {
  console.log(id, title, article, image);
  const form = document.getElementById("readMore");
  form.style.display ="block"
  db.collection("comment").where("article_id", "==", id)
    .get()
    .then((querySnapshot) => {
      
        querySnapshot.forEach((doc) => {

          var table = document.getElementById("myCommentTable");

          // Create an empty <tr> element and add it to the 1st position of the table:
          var row = table.insertRow(1);
    
          // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
          var cell1 = row.insertCell(0);
    
          // Add some text to the new cells:
          cell1.innerHTML = `${doc.data().comment}`
         
                 
        }); 
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    }
    );
  document.getElementById("readmore-image").innerHTML=`<img src=${image} alt="Blog" height=400px width=70%>`
  document.getElementById("readmore-title").innerHTML=`${title}`
  document.getElementById("comment-id").setAttribute("value", `${id}`);
  document.getElementById("readmore-article").innerHTML=`${article}`
  location.href = "#readMore";

}

formMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formMessage.name.value, formMessage.message.value);

  db.collection("message")
    .add({
      name: formMessage.name.value,
      message: formMessage.message.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});

const data = [];
let preData = {};
db.collection("blogs")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      preData = doc.data();
      preData.id = doc.id;
      data.push(preData);
      // console.log(doc.data());
    });
    data.forEach(function (rowdata) {
      console.log(rowdata.title);
      // Find a <table> element with id="myTable":
      var table = document.getElementById("myBlogTable");

      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);

      // Add some text to the new cells:
      cell1.innerHTML = `
                    <div class="blog-info">
                    <img src="${rowdata.Url}" alt="" srcset=""
                      class="blog-img">
                    <h2>${rowdata.title}</h2>
                    
                    <button class="read-more" onclick="readMore('${rowdata.id}','${rowdata.title}','${rowdata.article}','${rowdata.Url}')">Read more</button>
                    <span class="blog-date">Jan 21, 2022 • 8 min read</span>
                    <div class="options">
                      <span><img src="./assets/img/icon/comments.png" alt="" style="height: 25px ; width: 35px"
                          srcset=""></span>
                      <span><img src="./assets/img/icon/like.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                      <span><img src="./assets/img/icon/unlike.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                      <span><img src="./assets/img/icon/share.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                    </div>
                  </div>`;
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
