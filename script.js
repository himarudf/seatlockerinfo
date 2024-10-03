setInterval(() => {
    fetchData().then(data => {
        document.getElementById('seatContainer').innerHTML = ''; // Kosongkan dulu
        displayData(data); // Muat ulang data
    });
}, 60000); // Refresh setiap 60 detik