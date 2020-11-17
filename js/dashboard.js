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

// referensi ke database
db = firebase.database();
dataRef = db.ref('Data/Wisata');

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    console.log(data.val());
    var wisata = document.getElementById('dataWisata');
    var dataWisata = "";
    var tampilData = "";
    data.forEach(function(hasil){
        console.log(hasil.val().isi)
        dataWisata +=
        `
        <tr>
            <td width="20%"><img src="${hasil.val().gambar}" height="150px" width="150px"></td>
            <td>${hasil.val().judul}</td>
            <td>${hasil.val().isi}</td>
            <td>${hasil.val().alamat}</td>
            <td>${hasil.val().HTM}</td>
            <td width="20%" style="text-align: center;">
                <a class="btn btn-warning" href="edit.html?id=${hasil.val().id}">Ubah</a>
                <a class="btn btn-danger"" onclick="hapus(${hasil.val().id})">Hapus</a>
            </td>
        </tr>
        `;
    });
    tampilData = `
    <table class="table table-hover">
        <thead>
        <tr  style="text-align: center;">
            <th>Gambar</th>
            <th>Judul</th>
            <th>Isi</th>
            <th>Alamat</th>
            <th>HTM</th>
            <th>Aksi</th>
        </tr>
        </thead>
        <tbody>
        ${dataWisata}
        </tbody>
    </table>
    `;

    wisata.innerHTML = tampilData;
}

function dataGagal(e){
    console.log("Error"+ e);
}

function hapus(id){
    var cek_hapus = confirm('Apakah anda yakin ingin menghapus data ?');
    if (cek_hapus) {
        // hapus data produk
        dataRef.child(id).remove();
        // hapus data deskripsi
        db.ref('Data/Wisata').child(id).remove();
    }
}
// menampilkan data ke halaman browser
dataRef.on('child_removed' , dataDihapus , dataGagal);
function dataDihapus() {
    alert('Data berhasil dihapus !');  
}