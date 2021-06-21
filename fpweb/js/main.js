/* -----------------   Javascript   -------------------------*/


/* Untuk Toast Pada HOME */
function selamatdatang() {
    iziToast.settings({
        position: 'bottomRight',
        transitionIn: 'bounceInUp',
        transitionOut: 'flipOutX',
    });

    iziToast.show({
        theme: 'white',
        timeout: 5000,
        progressBar: false,
        title: 'Hello Everyone',
        message: 'Selamat Datang, Silahkan Berkunjung!',
    });
}

/* Untuk Toast Pada Blog sanur,dewata,tanah-lot,pura besakih  */

function blog_tunggal_sanur() {
    iziToast.show({
        theme: 'dark',
        title: 'Hai',
        MessageColor: 'white',
        messageSize: '15px',
        message: 'Terpesona dengan Keindahan Sanur ?',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['<button>Bangett</button>', function(instance, toast) {
                instance.hide({
                    transitionOut: 'fadeOutDown',
                    onClosing: function(instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy);
                    }
                }, toast, 'buttonName');
            }]
        ],
    });
}

function blog_tunggal_besakih() {
    iziToast.show({
        theme: 'dark',
        title: 'Hai',
        MessageColor: 'white',
        messageSize: '15px',
        message: 'Terpesona dengan Keindahan Besakih ?',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['<button>Bangett</button>', function(instance, toast) {
                instance.hide({
                    transitionOut: 'fadeOutDown',
                    onClosing: function(instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy);
                    }
                }, toast, 'buttonName');
            }]
        ],
    });
}

function blog_tunggal_pulau_dewata() {
    iziToast.show({
        theme: 'dark',
        title: 'Hai',
        MessageColor: 'white',
        messageSize: '15px',
        message: 'Terpesona dengan Keindahan Pulau Dewata ?',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['<button>Iyaww</button>', function(instance, toast) {
                instance.hide({
                    transitionOut: 'fadeOutDown',
                    onClosing: function(instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy);
                    }
                }, toast, 'buttonName');
            }]
        ],
    });
}

function blog_tunggal_tanah_lot() {
    iziToast.show({
        theme: 'dark',
        title: 'Hai',
        MessageColor: 'white',
        messageSize: '15px',
        message: 'Terpesona dengan Keindahan Tanah Lot ?',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['<button>Yoii</button>', function(instance, toast) {
                instance.hide({
                    transitionOut: 'fadeOutDown',
                    onClosing: function(instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy);
                    }
                }, toast, 'buttonName');
            }]
        ],
    });
}




/* Untuk Toast/ Notifikasi Modif pada Plan htmll.... */

$(document).ready(function() {
    iziToast.settings({
        resetOnHover: true,
        icon: 'material-icons',
        transitionIn: 'bounceInDown',
    });
    $('.show-toast').unbind('click').click(function() {
        iziToast.show({
            close: false,
            overlay: true,
            icon: 'fa fa-info',
            theme: 'white',
            displayMode: 'once',
            zindex: 999,
            title: 'Yeayy',
            message: 'Pemesanan Anda Berhasil',
            position: 'center',
            progressBarColor: 'rgb(0, 255, 184)',
            buttons: [
                ['<button>Close</button>', function(instance, toast) {
                    alert("Silahkan Melihat Destinasi Lainnya.")
                    instance.hide({
                        transitionOut: 'fadeOutUp',
                        onClosing: function(instance, toast, closedBy) {
                            console.info('closedBy: ' + closedBy);
                        }
                    }, toast, 'buttonName');
                }]
            ],
        });
    });
});

/* Fungsi untuk Button Scroll Page ke Atas*/

$(document).ready(function() {
    $('#cari-artikel').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#artikel *').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});


/* Fungsi Untuk Search*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("saatinput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/* Fungsi saat mencari artikel Wisata */

$(document).ready(function() {
    $('.on-click').click(function() {

        var kepage = $(this).attr('href');
        var elkepage = $(kepage);

        $('html, body').animate({
            scrollTop: elkepage.offset().top - 80
        }, 1500, 'easeInOutExpo');
        return false;
    });
});

/* Fungsi saat Mencari Artikel Tentang Bali */

$(document).ready(function() {
    $('.click-tentang-bali').click(function() {

        var kepage = $(this).attr('href');
        var elkepage = $(kepage);

        $('html, body').animate({
            scrollTop: elkepage.offset().top - 80
        }, 1500, 'easeInOutExpo');
        return false;
    });
});


/* Currency API Key nya*/

/* API Covid untuk wilayah Indonesia*/