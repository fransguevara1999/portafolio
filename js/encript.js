function encryptText(){
    var input=document.getElementById('inpText');
    var output=document.getElementById('textAreaOut');

    const message=input.value;
    const encrymessage=encry(message);

    output.value=encrymessage;
}
function encry(message){
    const lowMessage= message.toLowerCase();
    const encryMessage=lowMessage.replace(/[áéíóú]/g,'');
    return encryMessage;
}

function copiar(){
    var entrada=document.getElementById('textAreaOut');
    const message=entrada.value;
    var output2=document.getElementById('inpText');
    output2.value=message;
    return message;
}
