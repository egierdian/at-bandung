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
    let urlParam = new URLSearchParams(window.location.search);
    let idParam = urlParam.get("id");

    let tampilkan = "";
    let ambilData = document.getElementById("dataLoker");
    data.forEach(function(konten) {
        if(konten.val().ID == idParam) {
            tampilkan =
            `
            <h6 class="border-bottom border-gray pb-2 mb-0">${konten.val().Judul} - ${konten.val().Perusahaan}</h6>
            <div class="media text-muted pt-3">
            
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 pb-2">
                            <img class="center" src="/images/job-1.jpg" style="height: 100%; width:100%;">
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 pb-2">
                            <strong>Deskripsi lowongan:</strong>
                            <br /><br />
                            ${konten.val().Isi} 
                            <br /><br />
                            <img src="images/terlengkap-icon.png" style="height: 15px; width:15px; align-items: center;">
                            <strong>${konten.val().Perusahaan}</strong>
                            <br />
                            <img src="images/map.png" style="height: 15px; width:15px;">
                            ${konten.val().Alamat}  
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        
    });
    ambilData.innerHTML += tampilkan;  
}

function dataGagal(err){
  console.log(err);
}
