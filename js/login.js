var config = {
    apiKey: "AIzaSyCuVJDldXEcX55G0MEiXGopBiJV-gef1cM",
    authDomain: "at-bandung.firebaseapp.com",
    databaseURL: "https://at-bandung.firebaseio.com",
    projectId: "at-bandung",
    storageBucket: "at-bandung.appspot.com",
    messagingSenderId: "740884082386",
    appId: "1:740884082386:web:ff5879496507eae97a870b"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // ketika user sudah login ngapain?
    window.location.href = 'dashboard.html';
    var user = firebase.auth().currentUser;

    if(user != null){
      console.log('Berhasil');
    }

  } else {
    // No user is signed in.
    console.log("Gagal");
  }
});

function login(){
  var userEmail = document.getElementById("txt_email").value;
  var userPass = document.getElementById("txt_password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    // alert(''+errorCode);
    // ...
  }
  );
}

function logout(){
  firebase.auth().signOut();
}



