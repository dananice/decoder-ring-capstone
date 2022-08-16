const caesarModule = (function () {
    // you can add any code you want within this function scope
  
    function caesar(input, shift, encode = true) {
      if (!shift || shift === 0 || shift > 25 || shift < -25){
        return false
      };
  
      if (encode === false) shift = -shift;
  
      const lowerCaseInput = input.toLowerCase();
  
      const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
      let encodedMessage = []
      
      for (let i = 0; i < lowerCaseInput.length; i++){
        for (let j = 0; j < alphabet.length; j++){
          if(lowerCaseInput[i] === alphabet[j]){
            encodedMessage.push(alphabet[j+shift]) 
            if (j+shift > 25){
              encodedMessage.push(alphabet[j+shift-26])
            }   
            if(j+shift < 0){
              encodedMessage.push(alphabet[j+shift+26])
            }              
          }        
        }
        if (!alphabet.includes(lowerCaseInput[i])){
          encodedMessage.push(lowerCaseInput[i])
        }
      } return encodedMessage.join('')
    }
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
