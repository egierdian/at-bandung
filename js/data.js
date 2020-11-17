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
    var wisata = document.getElementById('tmpWisata');
    data.forEach(function(hasil){
        wisata.innerHTML +=
        `
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="wisata-item">
                    <a class="wisata-link" data-toggle="modal" href="#data${hasil.val().id}">
                        <div class="wisata-hover">
                            <div class="wisata-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${hasil.val().gambar}" alt=""/>
                    </a>
                    <div class="wisata-caption">
                        <div class="wisata-caption-heading">${hasil.val().judul}</div>
                        <div class="wisata-caption-subheading text-muted">${hasil.val().alamat}</div>
                    </div>
                </div>
            </div>
            <div class="wisata-modal modal fade" id="data${hasil.val().id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">${hasil.val().judul}</h2>
                                    <p class="item-intro text-muted">${hasil.val().alamat}</p>
                                    <img class="img-fluid d-block mx-auto" src="${hasil.val().gambar}" alt="" />
                                    <p>${hasil.val().isi}</p>
                                    <ul class="list-inline">
                                        <li>HTM: ${hasil.val().HTM}</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

function dataGagal(e){
    console.log("Error"+ e);
}