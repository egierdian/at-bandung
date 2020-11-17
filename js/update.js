let dbs , dataRefs;

// membuat id parameter
let urlParams = new URLSearchParams(window.location.search);
let idParams = urlParams.get("id");

// referensi ke database
dbs = firebase.database();
dataRefs = dbs.ref('Data/Wisata/' + idParams);

// Tambah data
let simpanData  = document.getElementById('ubah');
let txtJudul    = document.getElementById('judul_field');
let txtIsi      = document.getElementById('isi_field');
let txtAlamat   = document.getElementById('alamat_field');
let txtHTM      = document.getElementById('htm_field');
let images      = document.getElementById('fileImages');

// update data image firabase
const storage = firebase.storage();
images.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = storage.ref('Wisata/'+ idParams + '/' + file.name);
  // storageRef.put(file);
  storageRef.put(file).then(function(snapshot){
    console.log(snapshot.downloadURL);
    const img = document.getElementById('myimg');
    img.src = snapshot.downloadURL;
  });
});


simpanData.addEventListener('click' , function(e) {
  var img = document.getElementById('myimg').src;
  e.preventDefault();
    // menyimpan data
  dataRef.set({
        id : idParams,
        judul : txtJudul.value,
        isi : txtIsi.value,
        alamat : txtAlamat.value,
        HTM : txtHTM.value,
        gambar : img
  });
  window.alert('Berhasil');
  window.location.href = 'dashboard.html';
});

// selain push , bisa juga set . tapi hanya untuk
dataRef.on('child_changed' , dataBerubah , dataGagal);

function dataBerubah() {
  console.log('Data berhasil diperbaharui!');  
}

function dataGagal() {
  console.log("isi data");
}