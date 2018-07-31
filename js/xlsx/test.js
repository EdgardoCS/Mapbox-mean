toparser = function (f) {
    file_path = f.path;
    file_name = f.name;

    goToPath = file_path;

    if (typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(goToPath);

    //console.log(workbook.Sheets.Pacientes);

    var _hl = workbook.SheetNames.length;
    for (h = 0; h < _hl; h++) {
        hojas = workbook.SheetNames[h];
    }
    var worksheet = workbook.Sheets[hojas];
    /*
    var workspace = XLSX.utils.sheet_to_json(worksheet, {
        range: 1,
        defval: 'sin datos'
    });
    var workwork = XLSX.utils.sheet_to_json(worksheet, {
    nuevo    header:'A'
    })
    */
    var workspace = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
    });
    var _w = workspace.length

    var mheader_inicio = [];
    var mheader_fin = [];

    var merge = worksheet["!merges"];
    var _m = merge.length;

    //console.log(workspace);
    var currentwork = [];
    //console.log(_w);  
    var group_headers = [];
    var common_headers = [];

    for (co = 0; co < _w; co++) {
        _c = workspace[co].length;
        if (co == 0) {
            for (c = 0; c < _c; c++) {
                shared_headers = workspace[co][c]
                if (shared_headers != undefined) {
                    for (m = 0; m < _m; m++) {
                        mheader_inicio[m] = merge[m].s.c; //inicio celda compartida
                        mheader_fin[m] = merge[m].e.c; //fin celda compartida

                        if (c == mheader_inicio[m]) {

                            inicio = mheader_inicio[m];
                            fin = mheader_fin[m];
                            group_headers[m] = [shared_headers, inicio, fin]
                        };
                    };
                };
            };
        };
        if (co == 1) {
            for (c = 0; c < _c; c++) {
                common_headers[c] = workspace[co][c]
            }
        };
        if (co > 1) {
            currentwork[co] = workspace[co]
        };
    };
    widows_needs(group_headers, common_headers, currentwork);
};

widows_needs = function (group_headers, common_headers, currentwork) {
    /*
    console.log(group_headers);
    console.log(common_headers)
    console.log(currentwork); 
*/
    for (i = 0; i < group_headers.length; i++) {
        for (j = group_headers[i][1]; j< group_headers[i][2]; j++){
            console.log(group_headers[j]); 
        }
    }

}