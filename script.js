     let count = 0;
function getPin(){
    const randomNumbers = Math.random() * 10000;
    const pin = (randomNumbers + '').split('.')[0];
    if(pin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

//Generated pin

 function generatedPin(){
    const generatedPin = getPin();
    document.getElementById('generated-pin').value = generatedPin;
 }

 //Input Digit Handler

 const digitClick = document.getElementById('digit-container');
 digitClick.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle backspace and clear
        if (digit === 'C') {
            const typedDigit = document.getElementById('typed-digit').value = "";
        }
        if (digit === '<') {
            var value = document.getElementById("typed-digit").value;
            document.getElementById("typed-digit").value = value.substr(0, value.length - 1);
        }
    }else{
        const typedDigit = document.getElementById('typed-digit');

        typedDigit.value = typedDigit.value + digit;
    }
 })

 function submitPin(){
     const generatedPin = document.getElementById('generated-pin').value;
     const typedPin = document.getElementById('typed-digit').value;

     if(generatedPin === typedPin){
        pinMatchMessage('block', 'none');
        document.getElementById('action-left').innerText = 3;
        count = 0;
     }
     else{
        pinMatchMessage('none', 'block');
        count = count + 1;
        const actionLeftCount = 1;
       document.getElementById('action-left').innerText = parseInt(document.getElementById('action-left').innerText) - actionLeftCount;
        if (count >= 3) {
            btnDisabledAfterWrongAttempts();
            document.getElementById('generated-pin').value = '';
            document.getElementById('action-left').innerText = 0;
        }
     }
     document.getElementById('typed-digit').value = "";
         
    //  count = count + 1;
    //  const actionLeftCount = 1;
    // document.getElementById('action-left').innerText = parseInt(document.getElementById('action-left').innerText) - actionLeftCount;
    // if (count >= 3) {
    //     btnDisabledAfterWrongAttempts();
    //     document.getElementById('generated-pin').value = '';
    //     document.getElementById('action-left').innerText = 0;
    // }
 }

 function pinMatchMessage(correct,wrong){
    document.getElementById('correct-pin').style.display = correct;
    document.getElementById('wrong-pin').style.display = wrong;
 }

 function btnDisabledAfterWrongAttempts(){
             document.getElementById('submit-btn').disabled = true; 
        document.getElementById('typed-digit').disabled = true; 
 }
