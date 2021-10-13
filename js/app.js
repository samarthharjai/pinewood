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
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phonenumber;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.province
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.postalcode
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a class="btn btn-outline-primary" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-outline-danger" onClick="onDelete(this)">Delete</a>`;
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
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("province").value = selectedRow.cells[4].innerHTML;
    document.getElementById("postalcode").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.phonenumber;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.province;
    selectedRow.cells[5].innerHTML = formData.postalcode;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("customertable").deleteRow(row.rowIndex);
        resetForm();
    }
}
