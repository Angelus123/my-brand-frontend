let newData=0
try{let newData = JSON.parse(sessionStorage.data).data.user
  document.getElementById("auth-section").innerHTML = `<a href="dashboard.html" style="color:rgb(91, 167, 238); padding:5px 10px;">DASHBOARD</a><i style="color:rgb(91, 167, 238); padding:0px 10px;">${newData.name}</i><br><a href="#myLoginForm"><button
  style="color:rgb(91, 167, 238); padding:5px 10px;"
  onclick="openLogout()">LOGOUT</button></a>`

}
catch{
  document.getElementById("auth-section").innerHTML = `<a href="#myLoginForm"><button
  style="border-radius: 20px; border: 2px rgb(5, 96, 231) solid; width:100px; margin-right: 5px;"
  onclick="openLoginForm()">LOGIN</button></a>


<a href="#mySignUpForm"><button
  style="border-radius: 20px; border: 2px rgb(0, 110, 255) solid; width:100px; background-color: rgb(0, 102, 255); color: white;"
  onclick="openSignUpForm()">SIGN UP</button></a>`

}

function openLogout() {
  sessionStorage.clear()
  location.href = 'index.html';
}
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
const formComment = document.querySelector(".comment-form")
const spinner = document.querySelector(".lds-ring");
const percent = document.querySelector("#percent");
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

// Singup implementation:
async function signIn(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Singup implementation:
async function signUp(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
const formLogin = document.querySelector(".form-container-login");
formLogin.addEventListener("submit", (e) => {
  console.log("Loged In");
  e.preventDefault();
  const userInfo = {}
  userInfo.email = formLogin.email.value
  userInfo.password = formLogin.password.value
  console.log(userInfo)
  signIn('http://localhost:4042/api/v1/login', userInfo)
    .then(data => {
      console.log("token:", data.token); // JSON data parsed by `data.json()` call
      // Set Item
      sessionStorage.setItem("data", JSON.stringify(data));
      
      let newData = JSON.parse(sessionStorage.data)
      console.log("role:", newData.data.user.role)
      if(newData.data.user.role==="admin"){
        location.href = 'dashboard.html';
      }
      else {
        location.href = 'index.html';
      }

    });

});
const formSignup = document.querySelector(".form-container-signup");
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInfo = {}

  userInfo.name = formSignup.phone.value,
    userInfo.email = formSignup.email.value,
    userInfo.phone = formSignup.phone.value,
    userInfo.confirmpassword = formSignup.confirmpassword.value,
    userInfo.password = formSignup.password.value,
    userInfo.role = "admin",
    userInfo.name = formSignup.name.value,

    signUp('http://localhost:4042/api/v1/signup', userInfo)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

});
const db = app.firestore();
function readMore(id, title, article, image) {
  console.log(id, title, article, image);
  const form = document.getElementById("readMore");
  form.style.display = "block"
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
  document.getElementById("readmore-image").innerHTML = `<img src=${image} alt="Blog" height=400px width=70%>`
  document.getElementById("readmore-title").innerHTML = `${title}`
  document.getElementById("comment-id").setAttribute("value", `${id}`);
  document.getElementById("readmore-article").innerHTML = `${article}`
  location.href = "#readMore";

}
function myToasterfunction(successfully) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = `${successfully}`
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
//----------Send Message Section-----------------------------------
const formMessage = document.querySelector(".form-container-message");
formMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("message")
    .add({
      name: formMessage.name.value,
      message: formMessage.message.value,
    })
    .then((docRef) => {
      myToasterfunction("Message Sent...")
      formMessage.name.value = "";
      formMessage.email.value = "";
      formMessage.message.value = "";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
//----------End Send Message Section-----------------------------------

const data = [];
let preData = {};
db.collection("blogs")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      preData = doc.data();
      preData.id = doc.id;
      data.push(preData);
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
