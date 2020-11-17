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
let db , dataRef;

// ini id
let date = new Date();
let tahun = ""+date.getFullYear();
let iniId = tahun.substring(2) + (date.getMonth()<10?'0':'') + (date.getMonth() + 1)  + (date.getDate()<10?'0':'') + date.getDate() /* InIBATAS*/ + (date.getHours()<10?'0':'') + date.getHours() + (date.getMinutes()<10?'0':'') + date.getMinutes() + (date.getSeconds()<10?'0':'') + date.getSeconds();

// membuat id parameter
let urlParam = new URLSearchParams(window.location.search);
let idParam = urlParam.get("id");

// database
db = firebase.database();
dataRef = db.ref('Data/Wisata/'+ idParam);

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    // let simpanData  = document.getElementById('Simpan');
    let txtJudul    = document.getElementById('judul_field');
    let txtIsi      = document.getElementById('isi_field');
    let txtAlamat   = document.getElementById('alamat_field');
    let txtHTM      = document.getElementById('htm_field');
    let images      = document.getElementById('fileImages');

    // konversi data
    let dataJudul    = data.val().judul;
    let dataAlamat   = data.val().alamat;
    let dataIsi      = data.val().isi;
    let dataHTML     = data.val().HTM;
    let imagesURL    = data.val().gambar;

    // initialize
    
    images.src       = imagesURL;
    txtJudul.value   = dataJudul;
    txtIsi.value     = dataIsi;
    txtAlamat.value  = dataAlamat;
    txtHTM.value     = dataHTML;
}

function dataGagal(err){
  console.log(err);
}
