firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // ketika user sudah login ngapain?
      // window.location.href = 'dashboard.html';
      var user = firebase.auth().currentUser;
  
      if(user != null){
        // var email_id = user.email;
      }
  
    } else {
      // No user is signed in.
      console.log("Gagal");
      window.location.href = 'login.html';
    }
  });
  
  function logout(){
    firebase.auth().signOut();
  }
  