function input_Validation() {
    let target = document.getElementsByClassName("reqfield");

    for (let x = 0; x < target.length; x++) {
        let tarVal = target[x].getElementsByTagName("input").value;
        let report = target[x].getElementsByTagName("span");
        if (tarVal.length < 1) {
            report.style.display = "block";
        }
    }
}