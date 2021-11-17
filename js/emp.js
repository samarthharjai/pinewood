var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;
    formData["city"] = document.getElementById("city").value;
    formData["province"] = document.getElementById("province").value;
    formData["postalcode"] = document.getElementById("postalcode").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("customertable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.phonenumber;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.province
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.postalcode
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a class="btn btn-outline-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-outline-danger" data-toggle="popover" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("city").value = "";
    document.getElementById("province").value = "";
    document.getElementById("postalcode").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    selectedRow.cells[0].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
    document.getElementById("province").value = selectedRow.cells[5].innerHTML;
    document.getElementById("postalcode").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML
    selectedRow.cells[1].innerHTML = formData.firstname;
    selectedRow.cells[2].innerHTML = formData.lastname;
    selectedRow.cells[3].innerHTML = formData.phonenumber;
    selectedRow.cells[4].innerHTML = formData.city;
    selectedRow.cells[5].innerHTML = formData.province;
    selectedRow.cells[6].innerHTML = formData.postalcode;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("customertable").deleteRow(row.rowIndex);
        resetForm();
    }
}


(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();



/*
function taArray(){
    let table = document.getElementById("parttable").getElementsByTagName('tbody')[0];
    let array = []

    for(let i = 0; i < table.rows.length; i++)  {
        array.push(table.rows[i].cells[2].innerHTML);
      }

    return array

    //let rows = table.rows;
    //let cells, t;


    for (var i=0, iLen=rows.length; i<iLen; i++) {
        cells = rows[i].cells;
        t = [];
    
        // Iterate over cells
        for (var j=0, jLen=cells.length; j<jLen; j++) {
          t.push(cells[j].textContent);
        }
        array.push(t);
      }
      return array; 

}

let data = document.getElementById("customertable").getElementsByTagName('tbody')[0]
localStorage.setItem('customer', JSON.stringify(data));
*/