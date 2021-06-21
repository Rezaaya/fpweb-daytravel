/* -----------------   Javascript   -------------------------*/
$(document).ready(function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=bali",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "f7ce86e5aemshea66c749ce176fdp1f70a5jsnb9fb0b96308e"
        }
    }

    $.ajax(settings).done(function(response) {
        console.log(response);

        /* -------------- angger Isi.. -------------*/

        /* -------------- ngambile : document.getElementById('').innerHTML = var nya */

    });
});

var global_json_data;
$(document).ready(function() {
    api = 'https://v1.nocodeapi.com/iamdamar/instagram/GNVcQwidQQMOfNtC';

    $.ajax({
        url: api,
        success: function(getdata) {
            console.log(getdata);

            for (var a = 0; a < getdata.data.length; a++) {

                var putdata = getdata.data[a];
                var name = putdata.username;
                if (a == 0) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-1').append((tag));
                }
                if (a == 1) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-2').append((tag));
                }
                if (a == 2) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-3').append((tag));
                }
                if (a == 3) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-4').append((tag));
                }
                if (a == 4) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-5').append((tag));
                }
                if (a == 5) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-6').append((tag));
                }
                if (a == 6) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-7').append((tag));
                }
                if (a == 7) {
                    var tag = "";
                    tag += "<div id='image-1'><img src='" + putdata.media_url + "' alt='' class ='img-fluid mt-2 mb-2'></div>";
                    $('#image-8').append((tag));
                }
                document.getElementById('username').innerHTML = name;
            }
        }
    });
});
/*
	api ='http://api.openweathermap.org/data/2.5/';
        key = '89ae18189651a8ce860e946ae2d9e44f';
        city = 'London';
        city2 = 'Stockholm';

        $(document).ready(function () {
            $('#spin').show();
            $('.forecast1').text(city);
            $.ajax({
                url: api + 'forecast?q=' + city + '&appid=' + key + '&units=metric',
                success: function(res){
                  $('#spin').hide();
                    for(var i=0; i < res.list.length; i++){
                        var w = res.list[i];
                        var tr = $('<tr></tr>');

                        var d = new Date(w.dt_txt);
                        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
                        var dt = d.getUTCDate()+" "+months[d.getUTCMonth()]+" "+d.getFullYear();
                        
                        var tag="";
                        tag += "<td><img src='http://openweathermap.org/img/wn/'"+w.weather[0].icon+"@2x.png'></td>";
                        tag += "<td> <i class='fa fa-calendar-check-o' aria-hidden='true'></i>"+ dt + "<br />" + "<i class='fa fa-clock-o' aria-hidden='true'></i>"+w.dt_txt.substring(11,16)+"</td>";
                        tag += "<td><h3 class='text-info'>"+ w.main.temp +"&deg;C</h3>" + "<small>Min: "+ w.main.temp_min +"&deg;C, Max: "+ w.main.temp_max +"&deg;C</small></td>";
                        tag += "<td>"+w.weather[0].main+"<br />"+w.weather[0].description+"</td>";
                        $('#body').append(tr.html(tag));
                    }
                }
            });

*/