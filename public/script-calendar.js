window.onload = function(){



};





function calendar() {

    var table = document.createElement('table');

    var rowsNum = 6;
    var colsNum = 8;

    for (i in rowsNum) {
        var rows = document.createElement('tr');
        table.appendChild(rows);

        for (j in colsNum) {
            var cols = document.createElement('td');
            rows[i].appendChild(cols);
        }
    }
}