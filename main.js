//degrees
function addRow() {
    "use strict";

    var table = document.getElementById("table");

    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = document.getElementById("date").value;
    td2.innerHTML = document.getElementById("name").value;
    td3.innerHTML = document.getElementById("institution").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.children[0].appendChild(row);
};


function toggle() {
    var toggleBtn = document.getElementById("tabIpt");
    if (toggleBtn.style.display === "none") {
        toggleBtn.style.display = "block";
    } else {
        toggleBtn.style.display = "none";
    }
}

//calculator
var oppOperator = 0;
var previousDisplay = 0;
var checkOpp = 0;



function addDigit(num) {

    var displayValue;

    displayValue = document.getElementById("display").value;
    if (displayValue === '0' || checkOpp !== 0) {

        checkOpp = 0;
        document.getElementById("display").value = num;
    }

    else {
        document.getElementById("display").value = displayValue + num;
    }
}

function clearDisplay() {
    let f = document.getElementById("display");
    let h = document.getElementById ("history");


    if (f.value === '0' && (window.confirm("You will clear the calculator history.\nAre you sure?")))  {
        h.innerText = 'Calculations History ';
    }

    else {
        f.value = 0;
    }
    
    oppOperator = 0;
}

 function operate(opp) {
     checkOpp = 1;
     oppOperator = opp;
     previousDisplay = document.getElementById("display").value;
}

function calculate() {
    if (previousDisplay === 0) { 
    }
    else {
        var value1 = parseFloat(previousDisplay);
        var value2 = parseFloat(document.getElementById("display").value);

        if (oppOperator === "+") {
            document.getElementById("display").value = parseFloat(value1 + value2);
        }
        else if (oppOperator === "-") {
            document.getElementById("display").value = parseFloat(value1 - value2);
        }
        else if (oppOperator === "/") {
            document.getElementById("display").value = parseFloat(value1 / value2);
        }
        else if (oppOperator === "*") {
            document.getElementById("display").value = parseFloat(value1 * value2);
        }


        x = value1;
        y = oppOperator; 
        z = value2;
        k = document.getElementById("display").value
        previousDisplay = 0;

        
    }
}
function addToHist() {
    let hist = document.getElementById("history");
    let histItem = document.createElement('li');
    histItem.appendChild(document.createTextNode(x + y + z + '= ' + k))
    hist.appendChild(histItem);   
}
function withEval() {
    if (displayValue.value !== '') {
       eval(document.getElementById("display").value) 
    }
}




// calculadora
