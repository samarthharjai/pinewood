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
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Type"] = document.getElementById("Type").value;
    formData["Color"] = document.getElementById("Color").value;
    formData["Serial"] = document.getElementById("Serial").value;
    formData["Model"] = document.getElementById("Model").value;
    formData["Customer"] = document.getElementById("Customer").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("eqipmenttable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.Name;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.Brand;
    cell2 = newRow.insertCell(3);
    cell2.innerHTML = data.Type;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.Color;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.Serial;
    cell5 = newRow.insertCell(6);
    cell5.innerHTML = data.Model
    cell5 = newRow.insertCell(7);
    cell5.innerHTML = data.Customer
    cell6 = newRow.insertCell(8);
    cell6.innerHTML = `<a class="btn btn-outline-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-outline-danger" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("Name").value = "";
    document.getElementById("Brand").value = "";
    document.getElementById("Type").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("Serial").value = "";
    document.getElementById("Model").value = "";
    document.getElementById("Customer").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Brand").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Type").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Color").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Serial").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Customer").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Brand;
    selectedRow.cells[3].innerHTML = formData.Type;
    selectedRow.cells[4].innerHTML = formData.Color;
    selectedRow.cells[5].innerHTML = formData.Serial;
    selectedRow.cells[6].innerHTML = formData.Model;
    selectedRow.cells[7].innerHTML = formData.Customer;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("eqipmenttable").deleteRow(row.rowIndex);
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


  //login-out fuunction
function login(){
  let txtPsw = document.getElementById("txtPsw").value;

  if (txtPsw == "1111"){
      document.getElementById("txtPsw").hidden = true;
      document.getElementById("btnLogin").hidden = true;
      document.getElementById("btnLogout").hidden = false;
      document.getElementById("txtPsw").value = "";
      document.getElementById("loginName").innerHTML = "Wendy";
  }
  else if (txtPsw == "0000"){
      document.getElementById("txtPsw").hidden = true;
      document.getElementById("btnLogin").hidden = true;
      document.getElementById("btnLogout").hidden = false;
      document.getElementById("txtPsw").value = "";
      document.getElementById("loginName").innerHTML = "William";
  }
  else{
      document.getElementById("txtPsw").value = "";
      alert("Invalid Employee ID");
  }
}


function logout(){    
  if (confirm('Are you sure you want to logout?')){
      document.getElementById("txtPsw").hidden = false;
      document.getElementById("btnLogin").hidden = false;
      document.getElementById("btnLogout").hidden = true;
      document.getElementById("loginName").innerHTML = "";
  }
}

