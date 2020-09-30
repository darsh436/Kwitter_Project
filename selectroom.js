  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOP33dBxMNlxdykK5Nv3L_HcQGeUX2Cog",
    authDomain: "kwitter-6fa18.firebaseapp.com",
    databaseURL: "https://kwitter-6fa18.firebaseio.com",
    projectId: "kwitter-6fa18",
    storageBucket: "kwitter-6fa18.appspot.com",
    messagingSenderId: "708726153521",
    appId: "1:708726153521:web:c55c5b1a9fbd0dee281010",
    measurementId: "G-35G9XH41Z0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "login.html";
}