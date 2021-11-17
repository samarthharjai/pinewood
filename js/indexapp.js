

function addSale() {
    let selectedRow = null
    let formData = saleData();
    let quan = document.getElementById("txtQan").value;
    let price = document.getElementById("txtPrice").value; 

    if(document.getElementById("loginName").innerHTML == "")
        alert("You must login first!")
    else
    if(quan != 0 && price != ""){
        if(selectedRow == null)
            insertNewRecord(formData)
            saleTotal()
    }
    resetSale()
}

function saleData() {
    let cboPart = document.getElementById("cboPart");
    let txtPart = document.getElementById("txtOtherPart");
    let saleData = {};

    let part = cboPart.value;
    if (part == "other"){
        saleData["part"] = txtPart.value;
        saleData["quantity"] = document.getElementById("txtQan").value;
        saleData["price"] = document.getElementById("txtPrice").value;
        return saleData;
    }
    else
        saleData["part"] = part;
        saleData["quantity"] = document.getElementById("txtQan").value;
        saleData["price"] = document.getElementById("txtPrice").value;
        return saleData;
}

function resetSale() {
    document.getElementById("cboPart").value = "";
    document.getElementById("txtOtherPart").value = "";
    document.getElementById("txtOtherPart").disabled = true;
    document.getElementById("txtQan").value = "0";
    document.getElementById("txtPrice").value = "";
}

function calcSubtotal(){
    let qan = document.getElementById("txtQan").value;
    let price = saleData["txtPrice"] = document.getElementById("txtPrice").value;

    return (qan * price).toFixed(2)
}

function tableLeng(){
    let table = document.getElementById("saletable");
    let length = table.tBodies[0].rows.length;
    return length
}

function insertNewRecord(data) {
    let table = document.getElementById("saletable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.part;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `$${data.price}`;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `$${calcSubtotal()}`;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a class="btn btn-outline-danger" onClick="deleteSale(this)">Delete</a>`;    
}


function saleTotal() {
    let table = document.getElementById("saletable").getElementsByTagName('tbody')[0];

    let qan = 0;
    for(let i = 0; i < table.rows.length; i++)  {
        qan += parseFloat((table.rows[i].cells[2].innerHTML).slice(1));
      }

    let total = 0;
    for(let i = 0; i < table.rows.length; i++)  {
        total += parseFloat((table.rows[i].cells[4].innerHTML).slice(1));
      }

    let hst = (total * 0.13).toFixed(2)
    let sTotal = (parseFloat(total) + parseFloat(hst)).toFixed(2);

    document.getElementById("txtTotalQan").innerHTML = qan;
    document.getElementById("txtHst").innerHTML = `+ HST$${hst}`;
    document.getElementById("txtTotal").innerHTML = `$${sTotal}`;
}




let partArray = [{Name:"Control Cable", Price:"12.99"}, 
                {Name: "Spindle", Price:"42.99"},
                {Name: "Air Filter", Price:"14.59"},   
                {Name: "Deck Belt", Price:"39.95"},
                {Name: "Brush Blade", Price:"15.95"}]

let cusArray = [{Name: "Matt Perry"}, {Name: "Barry Allen"}, {Name: "Garry Tran"}, {Name: "Terry Grey"}, {Name: "Jerry Berry"}, ]

function populateCbo(){
    
    //let array = JSON.stringify(taArray(document.getElementById("parttable").getElementsByTagName('tbody')[0]))
    //let array = JSON.parse(localStorage.getItem('customer'));
    let partA = partArray;
    let ddl = document.getElementById("cboPart");
    if (ddl.options.length == 2)
        for (var i = 0; i < partA.length; i++) {
            var option = document.createElement("OPTION");
            option.innerHTML = partA[i].Name;
            option.value = partA[i].Name;
            ddl.options.add(option);
        }
    else
        NaN              
}

function populateCboCus(){
    let cusA = cusArray;
    let ddl = document.getElementById("cboCus");
    if (ddl.options.length == 2)
        for (var i = 0; i < cusA.length; i++) {
            var option = document.createElement("OPTION");
            option.innerHTML = cusA[i].Name;
            option.value = cusA[i].Name;
            ddl.options.add(option);
        }
    else
        NaN 
}


function populatePrice(){
    //let array = [{Name:"first", Price:"9.99"}, {Name: "second", Price:"4.99"}]

    let array= partArray;
    let ddl = document.getElementById("cboPart").value;

    document.getElementById("txtPrice").value = ddl;

    
    for (let i = 0; i < array.length; i++) {
        if (array[i].Name == ddl)
        {
            document.getElementById("txtPrice").value = array[i].Price;
        }        
    }    
}


function qanAdd(){
    let qan = document.getElementById("txtQan").value;
    document.getElementById("txtQan").value = parseFloat(qan) + 1;   
};

function qanMin(){
    let qan = document.getElementById("txtQan").value;
    if (qan == 0)
        document.getElementById("txtQan").value = 0
    else document.getElementById("txtQan").value = qan - 1;   
};

function deleteSale(th) {
    if (confirm('Are you sure you want to delete this ?')) {
    row = th.parentElement.parentElement;
    document.getElementById("saletable").deleteRow(row.rowIndex);  
    saleTotal() 
    }
}

function addPay() {
    insertNewReceipt();
    todayTotal()
    let table = document.getElementById("saletable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    document.getElementById("cboCus").value = "";
    document.getElementById("txtTotalQan").innerHTML = "0";
    document.getElementById("txtHst").innerHTML = "+ HST$0.00";
    document.getElementById("txtTotal").innerHTML = "$0";
    document.getElementById("cboCus").value = "";
    alert("Payment has been completed.")
}


function otherPart(){
    let cboPart = document.getElementById("cboPart");
    let txtPart = document.getElementById("txtOtherPart");
    let partChoice = cboPart.value;

    if(partChoice === "other"){
        txtPart.disabled = false;
        txtPrice.disabled = false;
        txtPart.focus();
    }
    else{
        txtPart.disabled = true;
        txtPrice.disabled = true;
        txtPart.value = "";
    }
};


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


//Update Nov 17
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


let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let time = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

let todayDate = (year + "-" + month + "-" + date);
document.getElementById("txtDate").innerHTML = todayDate;


function insertNewReceipt() {
    var table = document.getElementById("receiptTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = time;
    cell2 = newRow.insertCell(2);

    if(document.getElementById("loginName").innerHTML == "")
    cell2.innerHTML = "N/A";
    else{
    cell2.innerHTML = document.getElementById("loginName").innerHTML;}

    cell3 = newRow.insertCell(3);
    if(document.getElementById("cboCus").value == "")
        cell3.innerHTML = "N/A";
    else{
    cell3.innerHTML = document.getElementById("cboCus").value;}

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = document.getElementById("txtTotal").innerHTML;
}


function todayTotal(){
    let table = document.getElementById("receiptTable").getElementsByTagName('tbody')[0];


    let total = 0;
    for(let i = 0; i < table.rows.length; i++){
        total += parseFloat((table.rows[i].cells[4].innerHTML).slice(1));
    }

    let sparty = (total * 0.02).toFixed(2)
    let sTotal = (parseFloat(total) + parseFloat(sparty)).toFixed(2);

    document.getElementById("txtStaffParty").innerHTML = `Staff Party: $${sparty}`;
    document.getElementById("txtTodayTotal").innerHTML = `$${sTotal}`;
}


function popup(){

    window.open("receipt.html", "popup",  "width=800, height=650, top=50, left=320")
}


function popupClose(){
    self.close()
}


/*
function show(){
    document.querySelector(".background").className = "background show";
}

function close(){
    document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener("click", show());
document.querySelector("#close").addEventListener("click", close());
*/