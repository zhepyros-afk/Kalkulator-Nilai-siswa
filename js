function hitungNilai() {

    let nama = document.getElementById("nama").value;
    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    let nilaiAkhir = (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);

    let keterangan;

    if (nilaiAkhir >= 75) {
        keterangan = "Lulus";
    } else {
        keterangan = "Tidak Lulus";
    }if (nilaiAkhir >= 75) {
    keterangan = '<span class="lulus">Lulus</span>';
} else {
    keterangan = '<span class="tidak-lulus">Tidak Lulus</span>';
}

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama + "<br>" +
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
        "Keterangan: " + keterangan;
}
