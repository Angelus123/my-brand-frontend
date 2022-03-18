let newData=0
try{let newData = JSON.parse(sessionStorage.data).data.user
  document.getElementById("email").innerHTML=newData.name
}
catch{
  location.href = 'index.html';

}
const formLogout = () =>{
  sessionStorage.clear()
  location.href = 'index.html';
  
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

      //Blog Manage button---------------------------------------------
      function manageBlog() {
        document.getElementById("manage-blog").style.backgroundColor ="rgb(39, 52, 80)";
        document.getElementById("manage-message").style.backgroundColor =  "#1a1919";
        document.getElementById("working-space-blog").style.display = "block";
        document.getElementById("working-space-message").style.display = "none";
      }
        //Message Manage button---------------------------------------------
        function manageMessage() {
          document.getElementById("manage-blog").style.backgroundColor = "#1a1919";
          document.getElementById("manage-message").style.backgroundColor = "rgb(39, 52, 80)"; 
          document.getElementById("working-space-blog").style.display = "none";
          document.getElementById("working-space-message").style.display = "block";
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
    const deleteData = (id, doc) => {
      let conf = false
      conf =  confirm("Are you sure, You want to delete this blog!");
      if(conf){
        db.collection(`${doc}`).doc(id).delete().then(() => {
          myToasterfunction("Successfully Deleted...")
          if(doc == "blogs"){
            manageBlog();
          }
          else if(doc == "message"){
            manageBlog();
          }

          location.reload();
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
      } 

      else {
      }
    }

    const editData = (id) => {
      db.collection("blogs").doc(id).edit().then(() => {
        console.log("Blog successfully Edit!");
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
        });
        data.map(rowdata => {
                      // Find a <table> element with id="myTable":
                      var table = document.getElementById("myTable");
                      console.log(rowdata.Url)
                      // Create an empty <tr> element and add it to the 1st position of the table:
                      var row = table.insertRow(1);

                      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      var cell3 = row.insertCell(2);
                      var cell4 = row.insertCell(3);


                      // Add some text to the new cells:
                      cell1.innerHTML = `<img src="${rowdata.Url}" height="100px" width="100px">`;
                      cell2.innerHTML = `${rowdata.title}`;
                      cell3.innerHTML = `${rowdata.article}`;
                      cell4.innerHTML = `<button onclick = deleteData('${rowdata.id}',"blogs")> 
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
   const doneWBlog = document.querySelector("#done-w-blog");
  spinner.style.display = "block";
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       console.log("Upload is " + progress + "% done")
       if(progress <= 99) {
        document.getElementById("photo").value = "";
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-text").value = "";
        percent.innerHTML = `${ Math.trunc(progress)}%`;
        percent.style.marginLeft = "48%";
        spinner.style.display = "inline-block";
       }
       else if(progress==100){
       percent.style.display = "none";
       spinner.style.display = "none";
       doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;
        
       myToasterfunction("Successfully Created...")
       setTimeout(function() {
          doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;
       
          //your code to be executed after 1 second
        }, 2000);
       }

       else{
        
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
 
})


function  myToasterfunction(successfully) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML= `${successfully}`
  setTimeout(function()
  { 
    x.className = x.className.replace("show", ""); }, 4000);
}

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
      let preMessage = {};
        querySnapshot.forEach((doc) => {
          preMessage = doc.data()
          preMessage.id = doc.id;

            data.push(preMessage)
            console.log(data);
        });
        data.map(rowMessage => {
          console.log("message: ", rowMessage)
                      // Find a <table> element with id="myTable":
                   
                      if(rowMessage.name){
                        var table = document.getElementById("myTableMessage");

                        // Create an empty <tr> element and add it to the 1st position of the table:
                        var row = table.insertRow(1);
  
                        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        cell1.innerHTML = `${rowMessage.name}`;
                        cell2.innerHTML = `${rowMessage.message}`;
                        cell3.innerHTML = `<a href="#myMessageForm"><button onclick=deleteData('${rowMessage.id}',"message")> DELETE </button><button style="font-size: 16px; color: green; font-weight: 300; margin: 10px;" onclick="openMessageForm()">REPLY</button></a>`;
                      }

                      // Add some text to the new cells:
                     

        })
    })
    .catch((error) => {
    });