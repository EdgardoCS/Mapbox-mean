//////////////// MERGE //////////////////////////////////////////////////////////
widows_needs = function (index_numbers, sub_headers) {
    common = [];
    main_headers = [];

    for (a = 0; a < index_numbers.length; a++) {
        inicio = index_numbers[a][0];
        final = index_numbers[a][1] + 1;
        medio = final - inicio;

        for (b = inicio; b <= final; b++) {
            medio = final - inicio;

            if (common.length < medio) {
                common.push(sub_headers[b])
                main_headers[a] = common;
            } else {
                common = [];
            }
        }
    }
}

cassandra = function (currentwork, sub_headers) {
    usuarios = [];

    for (p = 0; p < currentwork.length; p++) {
        paciente = currentwork[p];
        _e = sub_headers.length;

        for (e = 0; e < _e; e++) {

            field = paciente[e]
            head = 'sub_headers[e]'

            Object.assign(paciente, {
                [eval(head)]: field
            });
        }

        for (e = 0; e < _e; e++) {
            paciente.splice(0, 1);
        }
        usuarios.push(paciente);
    }
}

letsdance = function (main_headers, gruop_sub_headers) {
    cabecera = {};

    gruop_sub_headers.forEach(function (element, index) {
        indice = index;

        ele = element;
        halt = "ele";

        main_headers.forEach(function (element, index) {
            if (indice == index) {
                Object.assign(cabecera, {
                    [eval(halt)]: element
                })
            }
        });
    });
}
//////////////////////////////////////////////////////////////////////////
// fill is the key (like fear);

geminni = function (currentwork, sub_headers) {
    usuarios = [];

    for (p = 0; p < currentwork.length; p++) {
        paciente = currentwork[p];
        _e = sub_headers.length;

        for (e = 0; e < _e; e++) {

            field = paciente[e]
            head = 'sub_headers[e]'

            Object.assign(paciente, {
                [eval(head)]: field
            });
        }

        for (e = 0; e < _e; e++) {
            paciente.splice(0, 1);
        }
        usuarios.push(paciente);
    }
}