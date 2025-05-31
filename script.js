function kirimData() {
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    var formattedDate = new Date(tanggal).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    alert(
        "Name : " + name +
        "\nNIM : " + nim +
        "\nAngkatan : " + angkatan +
        "\nTanggal Pendaftaran : " + formattedDate +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + alamat
    );
}