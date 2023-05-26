function copiar(){
    var entrada=document.getElementById('outputText');
    const message=entrada.value;
    var output2=document.getElementById('inpText');
    output2.value=message;
}
function encryptText(encriptar) {
    var inputText = document.getElementById("inpText").value;
    var outputText = document.getElementById("outputText");
  
    if (encriptar) {
      var encryptedText = encrypt(inputText);
      outputText.value = encryptedText;
    } else {
      var decryptedText = decrypt(inputText);
      outputText.value = decryptedText;
    }
  }
  
  function encrypt(text) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
      var character = text.charAt(i);
      switch (character) {
        case "a":
          encryptedText += "ai";
          break;
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += character;
          break;
      }
    }
    return encryptedText;
  }
  
  function decrypt(text) {
    var decryptedText = "";
    var i = 0;
    while (i < text.length) {
      var character = text.charAt(i);
      if (character === "a" && text.charAt(i + 1) === "i") {
        decryptedText += "a";
        i++;
      } else if (character === "e" && text.substring(i, i + 5) === "enter") {
        decryptedText += "e";
        i += 4;
      } else if (character === "i" && text.substring(i, i + 4) === "imes") {
        decryptedText += "i";
        i += 3;
      } else if (character === "o" && text.substring(i, i + 4) === "ober") {
        decryptedText += "o";
        i += 3;
      } else if (character === "u" && text.substring(i, i + 4) === "ufat") {
        decryptedText += "u";
        i += 3;
      } else {
        decryptedText += character;
      }
      i++;
    }
    return decryptedText;
  }
  
