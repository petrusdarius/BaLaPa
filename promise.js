window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
  });
  
  setTimeout(function() {
    console.log('This is executed once the timer is done');
  }, 3000);
  
  console.log('This is executed rigt after setTimeout()');

  var promise = new Promise (function(resolve, reject) {
      setTimeout(function() {
          reject({code: 500, message: 'An error occured!'});
      }, 3000)
  })
  
  promise.then(function(text) {
      return text;
  }).then(function(newText) {
      console.log(newText);
  }).catch(function(err) {
      console.log(err.code, err.message);
  });

  console.log('This is executed right after setTimeout()');