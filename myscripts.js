function encryptMessage() {
    var plainText = document.getElementById("plainText").value;
    var codingMechanism = document.getElementById("codingMechanism").value;
    var resultMessage = document.getElementById("resultMessage");

    if (codingMechanism === "rot13") {
        resultMessage.value = rot13(plainText);
    }
}

function rot13(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
            result += String.fromCharCode(charCode + 13);
        } else if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) {
            result += String.fromCharCode(charCode - 13);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decryptMessage() {
    var encryptedText = document.getElementById("resultMessage").value;
    document.getElementById("resultMessage").value = rot13(encryptedText);
}