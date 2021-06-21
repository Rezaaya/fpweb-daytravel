

/* API Covid-19 Dengan Rapid API*/

$(document).ready(function() {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://covid-193.p.rapidapi.com/statistics",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "f7ce86e5aemshea66c749ce176fdp1f70a5jsnb9fb0b96308e"
      }
    }

    $.ajax(settings).done(function (getdata) {
        console.log(getdata);
        
        for(var i = 0; i < getdata.response.length; i++){

          var takedata = getdata.response[i];
          
          if (i == 36) {
            
            var negara = takedata.country;
            var kontingen = takedata.continent;
            var day = takedata.day;

            var populasi = takedata.cases["1M_pop"];
            var new_positif = takedata.cases.new;
            var recovery = takedata.cases.recovered;
            var tot_positif = takedata.cases.total; 

            var populasi_mati = takedata.deaths["1M_pop"];
            var new_deaths = takedata.deaths.new;
            var tot_deaths = takedata.deaths.total;
            var populasi_test = takedata.tests["1M_pop"];
            var tot_test = takedata.tests.total;

            document.getElementById('negara').innerHTML = negara;
            document.getElementById('kontingen').innerHTML = kontingen;
            document.getElementById('tanggal-hari-ini').innerHTML = day;

            document.getElementById('1m_populasi').innerHTML = populasi;
            document.getElementById('positif-baru').innerHTML = new_positif;
            document.getElementById('recovered').innerHTML = recovery;
            document.getElementById('total-positif').innerHTML = tot_positif;
            document.getElementById('1m_kematian').innerHTML = populasi_mati;
            document.getElementById('meninggal-baru').innerHTML = new_deaths;
            document.getElementById('total-kematian').innerHTML = tot_deaths;
            document.getElementById('test').innerHTML = populasi_test;
            document.getElementById('total-test').innerHTML = tot_test;
          }
        }

        /*
        */
    });

});

/* API MAP Untuk Wilayah Bali */

$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtZGFtYXIzMCIsImEiOiJja2JnZjUwOGwxNHd1MnlzN2RsM3dpOTRmIn0.X9tdeFA_1pexn07pzXuGqw';

    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
        .forwardGeocode({
            query: 'Bali, Indonesia',
            autocomplete: false,
            limit: 1
        })
        .send()
        .then(function(response) {
            if (
                response &&
                response.body &&
                response.body.features &&
                response.body.features.length
            ) {

                var feature = response.body.features[0];

                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: feature.center,
                    zoom: 10
                });
                new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            }

            /*Untuk Geo Coder nya/Search Menu */

            map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
            );

            map.addControl(new mapboxgl.NavigationControl());
        });
});