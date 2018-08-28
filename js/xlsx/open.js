function handleFileSelect(evt) {
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');                    
          span.innerHTML = ['<p>',e.target.result,'</p>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      // console.log(f); //archivo
      toparser(f)
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
