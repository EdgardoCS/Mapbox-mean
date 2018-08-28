toparser = function (f) {
    // file_path = '/home/geropolis/Documents/Projects/Mapbox-mean/src/xlsx/example/PSCV.xlsx';

    file_name = f.name;
    file_path = f.path;

    goToPath = file_path;

    if (typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(goToPath);

    var _hl = workbook.SheetNames.length;
    for (h = 0; h < _hl; h++) {
        hojas = workbook.SheetNames[h];
    }
    var worksheet = workbook.Sheets[hojas];

    console.log(worksheet);
    var workspace = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
    });

    console.log(workspace);
    var _w = workspace.length;

    var mheader_inicio = [];
    var mheader_fin = [];
 
    var merge = worksheet["!merges"];
    var _m = merge.length;

    var currentwork = [];

    var index_numbers = [];
    var sub_headers = [];
    var gruop_sub_headers = [];




    for (co = 0; co < _w; co++) {
        _c = workspace[co].length;
        if (co == 0) {
            for (c = 0; c < _c; c++) {
                headers = workspace[co][c]
                if (headers != undefined) {

                    for (m = 0; m < _m; m++) {
                        mheader_inicio[m] = merge[m].s.c; //inicio celda compartida
                        mheader_fin[m] = merge[m].e.c; //fin celda compartida

                        if (c == mheader_inicio[m]) {

                            inicio = mheader_inicio[m];
                            fin = mheader_fin[m];
                            index_numbers[m] = [inicio, fin] //<--
                            gruop_sub_headers[m] = headers //<--
                        };
                    };

                };
                // console.log("sectarian"); 
            };
        };
        if (co == 1) {
            for (c = 0; c < _c; c++) {
                sub_headers[c] = workspace[co][c] //<--
            }
        };
        if (co > 1) {
            currentwork.push(workspace[co]); //<--
        };

    };

    widows_needs(index_numbers, sub_headers);
    //return "main_headers"

    disarm(currentwork, sub_headers);
    // return "usuarios"
    console.log(usuarios);

    letsdance(main_headers, gruop_sub_headers, usuarios);
    // return "cabecera"
    console.log(cabecera);
}