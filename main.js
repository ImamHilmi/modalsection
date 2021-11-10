
    // Menyimpan Data Dari Hasil Inputan User
            
    $(document).ready(function() {
        $('#button').click(function() {
            $("#modalSection").modal("show");
        
            let namaPengguna = $('#nama').val();
            let tanggalPengguna = $('#tanggal').val();
            let alamatPengguna = $('#alamat').val();
            let hpPengguna = $('#hp').val();
            let kelaminPengguna = $('input[name="jenisKelamin"]:checked').val();
            let agamaPengguna = $('#agama').val();
            let fotoPengguna = $('#foto').val();

            $('#nama1').html(namaPengguna);
            $('#tanggal1').html(tanggalPengguna);
            $('#alamat1').html(alamatPengguna);
            $('#hp1').html(hpPengguna);
            $('#kelamin1').html(kelaminPengguna);
            $('#agama1').html(agamaPengguna);
        });
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $('#foto1').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    (function () {
        'use strict'

        var forms = document.querySelectorAll('#form')
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('button', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            } else {
                event.preventDefault();
                $("#modalSection").modal("show");

                let namaPengguna = $('#nama').val();
                let tanggalPengguna = $('#tanggal').val();
                let alamatPengguna = $('#alamat').val();
                let hpPengguna = $('#hp').val();
                let kelaminPengguna = $('input[name="jenisKelamin"]:checked').val();
                let agamaPengguna = $('#agama').val();
                let fotoPengguna = $('#foto').val();

                $('#nama1').html(namaPengguna);
                $('#tanggal1').html(tanggalPengguna);
                $('#alamat1').html(alamatPengguna);
                $('#hp1').html(hpPengguna);
                $('#kelamin1').html(kelaminPengguna);
                $('#agama1').html(agamaPengguna);
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()


 