function convert() {
    let amount = Number(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == "VND"&& to == "USD") {
        result = amount/23000
    }
    else if (from == "USD"&& to == "VND") {
        result = amount*23000
    }
    else result = "Chọn lại loại tiền cần quy đổi"
    ;
    document.getElementById("display").innerText = result;


}