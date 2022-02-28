
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
      function openBlogEditForm(id) {
        var docRef = db.collection("blogs").doc(id);
              docRef.get().then((doc) => {
                  if (doc.exists) {
                    let objData = doc.data()
                      document.getElementById("myBlogEditForm").style.display = "block";
                      document.getElementById("pic").innerHTML=`<img src=${objData.Url} alt="Blog" height=150px width=200px>`
                      document.getElementById("blog-edit-id").setAttribute("value", `${id}`);
                      document.getElementById("title-edit-field").setAttribute("value", `${objData.title}`);
                      // document.getElementById("article-edit-text").setAttribute("value", `${objData.article}`);
                  } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                  }
              }).catch((error) => {
                  console.log("Error getting document:", error);
              });
        console.log("id: ", id)
      }

      function closeBlogEditForm() {
        document.getElementById("myBlogEditForm").style.display = "none";
      }

      function closeBlogForm() {
        document.getElementById("myBlogForm").style.display = "none";
      }

      function openMessageForm() {
        document.getElementById("myMessageForm").style.display = "block";
      }
      function closeMessageForm() {
        document.getElementById("myMessageForm").style.display = "none";
      }
    
      function closeLoginForm() {
        document.getElementById("myBlogForm").style.display = "none";
      }

      const firebaseConfig = {
        apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
        authDomain: "my-brand-6d710.firebaseapp.com",
        projectId: "my-brand-6d710",
        storageBucket: "my-brand-6d710.appspot.com",
        messagingSenderId: "290071395795",
        appId: "1:290071395795:web:a2681620feeec77c908326"
      };
      
    const app=firebase.initializeApp(firebaseConfig);

    const db = app.firestore();
    const deleteData = (id) => {
      console.log("id: ", id)
      db.collection("blogs").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    }

    const editData = (id) => {
      console.log("id: ", id)
      db.collection("blogs").doc(id).edit().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    }
    const data = [];
    db.collection("blogs")
    .get()
    .then((querySnapshot) => {
          let  preData ={}
        querySnapshot.forEach((doc) => {
          preData = doc.data()
          preData.id = doc.id
          

            data.push(preData)
            console.log("Data:", preData);
        });
        data.map(rowdata => {
                      // Find a <table> element with id="myTable":
                      var table = document.getElementById("myTable");

                      // Create an empty <tr> element and add it to the 1st position of the table:
                      var row = table.insertRow(1);

                      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      var cell3 = row.insertCell(2);

                      // Add some text to the new cells:
                      cell1.innerHTML = `${rowdata.title}`;
                      cell2.innerHTML = `${rowdata.article}`;
                      cell3.innerHTML = `<button onclick=deleteData('${rowdata.id}')> 
                                          DELETE 
                                         </button>
                                         <a href="#myBlogEditForm"<button onclick=openBlogEditForm('${rowdata.id}')> EDIT</button></a>`;

        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

const formAddBlog = document.querySelector(".form-add-blog");
formAddBlog.addEventListener('submit', (e)=>{
  e.preventDefault()
  const blog__imgurl = document.getElementById("photo").files[0]
  const imageName = blog__imgurl.name
  const blogRef = app.storage().ref(`Images/${imageName}`)
  const uploadTask = blogRef.put(blog__imgurl)
  const title =  formAddBlog.title.value
  const article =  formAddBlog.article.value
  const BlogText = document.querySelector(".blog-text");
  const spinner = document.querySelector(".lds-ring");
  const percent = document.querySelector("#percent");
  spinner.style.display = "block";
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       console.log("Upload is " + progress + "% done")
       if(progress<=99) {
        percent.innerHTML = `${ Math.trunc(progress)}%`;
        percent.style.marginLeft = "48%";
        spinner.style.display = "inline-block";
       }
       else {
        
        percent.style.display = "none";
        spinner.style.display = "none";
       }
      switch (snapshot.state) {
        case firebase.storage.TaskState.paused:
          console.log("uplaoding paused")
          break
        case firebase.storage.TaskState.running:
          console.log("uplaod is running")
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
        db.collection("blogs")
          .add({
            title: title,
            Url: downloadedImage,
            article: article,
            like: [],
            disLike: [],
            createdAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((blogs) => {
            console.log(blogs)
            location.reload();
          })
          .catch((error) => {
            console.log(error)
            location.reload();
          })
      })
    }
  )
 
}
)

const formEditBlog = document.querySelector(".form-edit-blog");
formEditBlog.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log("Hello")
  console.log(formEditBlog.id.value)

})


//manage message
    db.collection("message")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data().id = doc.id;

            data.push(doc.data())
            // console.log(doc.data());
        });
        data.map(rowdata => {
                      // Find a <table> element with id="myTable":
                      var table = document.getElementById("myTableMessage");

                      // Create an empty <tr> element and add it to the 1st position of the table:
                      var row = table.insertRow(1);

                      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      var cell3 = row.insertCell(2);

                      // Add some text to the new cells:
                      cell1.innerHTML = `${rowdata.name}`;
                      cell2.innerHTML = `${rowdata.message}`;
                      cell3.innerHTML = `<a href="#myMessageForm"><button onclick=deleteData(8)> DELETE </button><button style="font-size: 16px; color: green; font-weight: 300; margin: 10px;" onclick="openMessageForm()">REPLY</button></a>`;

        })
    })
    .catch((error) => {
    });

    