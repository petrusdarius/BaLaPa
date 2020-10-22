    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker
          .register('/sw.js')
          .then(function() {
              console.log('Registrasi Berhasil')
          })

          .catch(function() {
              console.log('Pendaftaran ServiceWorker gagal')
          })
        })
      }