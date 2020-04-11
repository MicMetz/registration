let report = document.getElementsByClassName("reqsp");
let target = document.getElementsByClassName("reqfield");
let targetlabel = document.getElementsByClassName("reqlabel");
let off_target = document.getElementsByClassName("nonreq");
let off_targetLabel = document.getElementsByClassName("nonreqlabel");

function input_Validation() {
    let checkB4 = 0;
    for (let x = 0; x < target.length; x++) {
        if (target[x].value === "") {
            report[x].style.visibility = "visible";
        } else {
            report[x].style.visibility = "hidden";
            checkB4++;
        }
    }
    if (checkB4 === target.length) {
        document.forms["AHGproposalform2020"].submit();
    }
}

function setState() {
    debugger
    for (let i = 0; i < target.length; i++) {
        if (target[i].value !== "") {
            report[i].style.visibility = "hidden";
            report[i].classList.add("valid");
            report[i].classList.remove("invalid");
            if (i === 4) { continue; }
            else { targetlabel[i].classList.add("stay"); }
        } else {
            report[i].classList.remove("valid");
            report[i].classList.add("invalid");
            if (i === 4) { continue; }
            else { targetlabel[i].classList.remove("stay"); }
        }
    }
    for (let i = 0; i < off_target.length; i++) {
        if (off_target[i].value !== "") {
            off_targetLabel[i].classList.add("stay");
        }
        else { off_targetLabel[i].classList.remove("stay"); }
    }
}

function setStateRadio(x) {
    debugger
    let targetRadio = document.getElementsByClassName("reqfield")[4];
    targetRadio.value = x;
    setState();
}

function maxCharCount(x) {
    let txtrep = document.getElementById("a_rep");
    let lmin = 1500;
    let lleft = lmin - x.value.length;

    txtrep.innerText = lleft + " characters remaining.";
}