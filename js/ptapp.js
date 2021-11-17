var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData)
        else
            updateRecord(formData)
    resetForm()
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("customertable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.Brand;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.Price;
    cell2 = newRow.insertCell(3);
    cell2.innerHTML = data.Quantity;
    cell6 = newRow.insertCell(4);
    cell6.innerHTML = `<a class="btn btn-outline-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-outline-danger" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Quantity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Price;
    selectedRow.cells[3].innerHTML = formData.Quantity;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("parttable").deleteRow(row.rowIndex);
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