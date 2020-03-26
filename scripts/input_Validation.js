

function input_Validation() {
    let report = document.getElementsByClassName("reqsp");
    let target = document.getElementsByClassName("reqfield");
    for (let x = 0; x < target.length; x++) {
        if (target[x].value === "") {
            report[x].style.visibility = "visible";
        }
        else {
            report[x].style.visibility = "hidden";
        }
    }
}