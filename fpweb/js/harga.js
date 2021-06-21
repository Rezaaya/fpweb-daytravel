
/* -----------------   Javascript   -------------------------*/


/* Bagian Local Storage */

$(document).ready(function(){

	$('#pesan').click(function (){

		// Nama Depan

		let nama_depan = document.querySelector('#namadepan');		
		let data_nama;

		if (localStorage.getItem('namadepan')===null)
		{
			data_nama = [];
		}
		else
		{
			data_nama = JSON.parse(localStorage.getItem('namadepan'));	
		}
		
		data_nama.push(nama_depan.value);	
		localStorage.setItem('namadepan',JSON.stringify(data_nama));
		

		// Nama Belakang

		let nama_belakang = document.querySelector('#namabelakang');		
		let data_nama_belakang;

		if (localStorage.getItem('namabelakang')===null)
		{
			data_nama_belakang = [];
		}
		else
		{
			data_nama_belakang = JSON.parse(localStorage.getItem('namabelakang'));	
		}
		
		data_nama_belakang.push(nama_belakang.value);	
		localStorage.setItem('namabelakang',JSON.stringify(data_nama_belakang));


		// Kota Asal

		let kota_asal= document.querySelector('#kotaasal');		
		let data_kota_asal;

		if (localStorage.getItem('kotaasal')===null)
		{
			data_kota_asal = [];
		}
		else
		{
			data_kota_asal = JSON.parse(localStorage.getItem('kotaasal'));	
		}
		
		data_kota_asal.push(kota_asal.value);	
		localStorage.setItem('kotaasal',JSON.stringify(data_kota_asal));


		//Provinsi

		let provinsi = document.querySelector('#provinsi');		
		let data_provinsi;

		if (localStorage.getItem('provinsi')===null)
		{
			data_provinsi = [];
		}
		else
		{
			data_provinsi = JSON.parse(localStorage.getItem('provinsi'));	
		}
		
		data_provinsi.push(provinsi.value);	
		localStorage.setItem('provinsi',JSON.stringify(data_provinsi));

		
		// Alamat

		let alamat = document.querySelector('#alamat');		
		let data_alamat;

		if (localStorage.getItem('alamat')===null)
		{
			data_alamat = [];
		}
		else
		{
			data_alamat = JSON.parse(localStorage.getItem('alamat'));	
		}
		
		data_alamat.push(alamat.value);	
		localStorage.setItem('alamat',JSON.stringify(data_alamat));


		// Pilihan Paket

		let pilihanpaket = document.querySelector('#pilihanpaket');		
		let data_pilihan_paket;

		if (localStorage.getItem('pilihanpaket')===null)
		{
			data_pilihan_paket = [];
		}
		else
		{
			data_pilihan_paket = JSON.parse(localStorage.getItem('pilihanpaket'));	
		}
		
		data_pilihan_paket.push(pilihanpaket.value);	
		localStorage.setItem('pilihanpaket',JSON.stringify(data_pilihan_paket));

		
		// Harga Paket


		let harga_paket = document.querySelector('#hargapaket');		
		let data_harga_paket;

		if (localStorage.getItem('hargapaket')===null)
		{
			data_harga_paket = [];
		}
		else
		{
			data_harga_paket = JSON.parse(localStorage.getItem('hargapaket'));	
		}
		
		data_harga_paket.push(harga_paket.value);	
		localStorage.setItem('hargapaket',JSON.stringify(data_harga_paket));

	});

	// Untuk Menghapus Data Local Storage

	$('#batal').click(function (){
		localStorage.removeItem('namadepan');
		localStorage.removeItem('namabelakang')
		localStorage.removeItem('kotaasal')
		localStorage.removeItem('provinsi')
		localStorage.removeItem('alamat')
		localStorage.removeItem('pilihanpaket')
		localStorage.removeItem('hargapaket')
	})

})