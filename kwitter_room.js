var firebaseConfig = {
      apiKey: "AIzaSyB5N-97QOcAm_gfcn_zd8pWJUwwAGD8T2E",
      authDomain: "twitter-c9b13.firebaseapp.com",
      projectId: "twitter-c9b13",
      storageBucket: "twitter-c9b13.appspot.com",
      messagingSenderId: "574748923608",
      appId: "1:574748923608:web:0a364e66996c32553629ad"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
