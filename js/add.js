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

let date = new Date();

let tahun = ""+date.getFullYear();
let iniId = tahun.substring(2) + (date.getMonth()<10?'0':'') + (date.getMonth() + 1)  + (date.getDate()<10?'0':'') + date.getDate() /* InIBATAS*/ + (date.getHours()<10?'0':'') + date.getHours() + (date.getMinutes()<10?'0':'') + date.getMinutes() + (date.getSeconds()<10?'0':'') + date.getSeconds();

// referensi ke database
db = firebase.database();
dataRef = db.ref('Data/Wisata/' + iniId);
// Tambah data
let simpanData  = document.getElementById('simpan');
let txtJudul    = document.getElementById('judul_field');
let txtIsi      = document.getElementById('isi_field');
let txtAlamat   = document.getElementById('alamat_field');
let txtHTM      = document.getElementById('htm_field');
let images      = document.getElementById('fileImages');

// simpan ke firebase storage
const storage = firebase.storage();
images.addEventListener('change', function(e){
  // var url = "";
  var file = e.target.files[0];
  var storageRef = storage.ref('Wisata/'+ iniId+ '/' + file.name);
  // storageRef.put(file);
  storageRef.put(file).then(function(snapshot){
    console.log(snapshot.downloadURL);
    const img = document.getElementById('myimg');
    img.src = snapshot.downloadURL;
  });
});


// const storage = firebase.storage();
simpanData.addEventListener('click' , function(e) {
  var img = document.getElementById('myimg').src;
  e.preventDefault();
  dataRef.set({
        id : iniId,
        judul : txtJudul.value,
        isi : txtIsi.value,
        alamat : txtAlamat.value,
        HTM : txtHTM.value,
        gambar : img
  });
  window.alert('Berhasil');
  window.location.href = '/dashboard.html';
});

// selain push , bisa juga set . tapi hanya untuk
dataRef.on('child_changed' , dataBerubah , dataGagal);

function dataBerubah() {
  alert('Data berhasil diperbaharui!');  
}

function dataGagal() {
  console.log("isi data");
}