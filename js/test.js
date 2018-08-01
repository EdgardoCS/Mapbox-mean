//toparser = function (f) {
file_path = '/home/geropolis/Documents/Projects/Mapbox-mean/src/xlsx/example/PSCV.xlsx';

//  file_name = f.name;
//  file_path = f.path;

goToPath = file_path;

if (typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile(goToPath);

var _hl = workbook.SheetNames.length;
for (h = 0; h < _hl; h++) {
    hojas = workbook.SheetNames[h];
}
var worksheet = workbook.Sheets[hojas];

var workspace = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
});
var _w = workspace.length;

var mheader_inicio = [];
var mheader_fin = [];

var merge = worksheet["!merges"];
var _m = merge.length;

var currentwork = [];

var group_headers = [];
var common_headers = [];
var shared_headers = [];

invitation = function (join, shared_headers, currentwork) {

    console.log(join);
    console.log(shared_headers);
    console.log(currentwork); 

    var final = [];
/*
    for (c = 0; c < join.length; c++) {
        head = 'shared_headers[c]'
        for (d = 0; d < join[c].length; d ++){
        Object.assign(final, {
            [eval(head)]: {
                [eval('join[c][d]')]: "",
            }
        })
    }
}
*/
    console.log(final);

}

widows_needs = function (group_headers, shared_headers, common_headers, currentwork) {
    var common = [];
    var join = [];

    for (a = 0; a < group_headers.length; a++) {
        header = shared_headers[a];
        inicio = group_headers[a][0];
        final = group_headers[a][1] + 1;
        medio = final - inicio;

        for (b = inicio; b <= final; b++) {
            medio = final - inicio;

            if (common.length < medio) {
                common.push(common_headers[b])
                join[a] = common;
            } else {
                common = [];
            }
        }
    }
    invitation(join, shared_headers, currentwork);

    /*
    console.log(group_headers);
    console.log(common_headers)
    console.log(currentwork);
    */
}

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
                        group_headers[m] = [inicio, fin]
                        shared_headers[m] = headers
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
widows_needs(group_headers, shared_headers, common_headers, currentwork);
//}