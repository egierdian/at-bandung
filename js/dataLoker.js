// Initialize Firebase 
var config = {
    apiKey: "AIzaSyBTgsrqUA5yaiu31kZcGKv1D9wrKqHf87E",
    authDomain: "e-loker.firebaseapp.com",
    databaseURL: "https://e-loker.firebaseio.com",
    projectId: "e-loker",
    storageBucket: "e-loker.appspot.com",
    messagingSenderId: "951305612488",
    appId: "1:951305612488:web:4b55d0a4a21e9a5c8509fd",
    measurementId: "G-ZRHRT5T6FG"
};
firebase.initializeApp(config);

let db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('loker');

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    // console.log(data.val());
    let tampilkan = "";
    let ambilData = document.getElementById("dataLoker");
    data.forEach(function(konten) {
        tampilkan +=
        `
        <div class="media text-muted pt-3">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <a class="text-dark" href="./detail.html?id=${konten.val().ID}"><strong class="d-block text-gray-dark">${konten.val().Judul} - ${konten.val().Perusahaan}</strong></a>
                ${konten.val().Alamat}   
            </p>
        </div>
        `;
    });
    ambilData.innerHTML += tampilkan;  
}

function dataGagal(err){
  console.log(err);
}
