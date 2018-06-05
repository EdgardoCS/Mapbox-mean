var csvParser = new SimpleExcel.Parser.CSV();
var fileInput = document.getElementById('test.xlsx');

// parse when file loaded, then print the result to console
fileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    csvParser.loadFile(file, function () {
        console.log(csvParser.getSheet()); // print.
    });
});
