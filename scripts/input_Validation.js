

let report = document.getElementsByClassName("reqsp");
let target = document.getElementsByClassName("reqfield");
let targetlabel = document.getElementsByClassName("reqlabel");

function input_Validation() {
    let checkB4 = 0;
    for (let x = 0; x < target.length; x++) {
        if (target[x].value === "") {
            report[x].style.visibility = "visible";
        }
        else {
            report[x].style.visibility = "hidden";
            checkB4++;
        }
    }
    if (checkB4 === target.length) { document.forms["AHGproposalform2020"].submit(); }
}

function setState() {
    for (let i = 0; i < target.length; i++) {
        if (target[i].value !== "") {
            targetlabel[i].classList.add("stay");
            report[i].style.visibility = "hidden";
            report[i].classList.add("valid");
            report[i].classList.remove("invalid");
        } else {
            report[i].classList.remove("valid");
            report[i].classList.add("invalid");
            targetlabel[i].classList.remove("stay");
        }
    }
}