

let report = document.getElementsByClassName("reqsp");
let target = document.getElementsByClassName("reqfield");

function input_Validation() {
    for (let x = 0; x < target.length; x++) {
        if (target[x].value === "") {
            report[x].style.visibility = "visible";
        }
        else {
            report[x].style.visibility = "hidden";
        }
    }
}

function setState() {
    let numcheck = target.length;
    let checker = new Array(numcheck).fill(false);
    let rolling = true;

    while (rolling === true) {
        for (let i = 0; i < target.length; i++) {
            if (target[i].value !== "") {
                report[i].before.style.visibility = "visible";
            } else {
                report[i].before.style.visibility = "hidden";
            }
        }
    }
}