function passwardGen(){

    let NumLeng = prompt("what is the length of the passward?");

    while (NumLeng < 8 || NumLeng > 128){
        NumLeng = prompt("Invalid number, Please choose number between 8 and 128")
    }
        let LoCaseLett = confirm("Would you like to include lower case letters");
        let UpCaseLett = confirm("Would you like to include Upper case letters");

        while (LoCaseLett === false && UpCaseLett === false){
            alert("At least one type of character is required");
            LoCaseLett = confirm("Would you like to include lower case letters");
            UpCaseLett = confirm("Would you like to include Upper case letters");
        
    }
        const MericNum = confirm("Would you like to include numeric numebrs?");
        const SpChar = confirm("Would you like to include special characters?");
    

    const char1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_+?></";
    const char2 = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*=-_+?></";
    const char3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_+?></";
    const char4 = "abcdefghijklmnopqrstuvwxyz!@#$%^&*=-_+?></";
    const char5 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const char6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const char7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const char8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*=-_+?></";
    const char9 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*=-_+?></";
    const char10 = "abcdefghijklmnopqrstuvwxyz123456789";
    const char11 = "abcdefghijklmnopqrstuvwxyz";
    const char12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        

        function CheckPswrd(x) {

            let pswrd = ' ';
            for (let i = 0; i < NumLeng; i++){
                pswrd += x.charAt(Math.floor(Math.random()* x.length));

          }
          let passresult = document.getElementById('password');
          passresult.innerText = pswrd;
      };



     

       if (LoCaseLett && MericNum && SpChar && UpCaseLett){
        
         CheckPswrd(char1);
      };

      if (LoCaseLett === true && MericNum === true && SpChar === true && UpCaseLett === false){
        
         CheckPswrd(char2);
      };

      if (LoCaseLett === false && MericNum === true && SpChar === true && UpCaseLett === true){
        
         CheckPswrd(char3);
      };

      if (LoCaseLett === true && MericNum === false && SpChar === true && UpCaseLett === false){
        
        CheckPswrd(char4);
      };

      if (LoCaseLett === true && MericNum === true  && SpChar === false  && UpCaseLett === true){
        
        CheckPswrd(char5);
      };

      if (LoCaseLett === true && MericNum === false  && SpChar === false  && UpCaseLett === true){
        
        CheckPswrd(char6);
      };

      if (LoCaseLett === false && MericNum === true  && SpChar === false  && UpCaseLett === true){
        
        CheckPswrd(char7);
      };

      if (LoCaseLett === false && MericNum === false  && SpChar === true  && UpCaseLett === true){
        
        CheckPswrd(char8);
      };

      if (LoCaseLett === true && MericNum === false  && SpChar === true  && UpCaseLett === true){
        
        CheckPswrd(char9);
      };

      if (LoCaseLett === true && MericNum === true  && SpChar === false  && UpCaseLett === false){
        
        CheckPswrd(char10);
      };
      
      if (LoCaseLett === true && MericNum === false  && SpChar === false  && UpCaseLett === false){
        
        CheckPswrd(char11);
      };

      if (LoCaseLett === false && MericNum === false  && SpChar === false  && UpCaseLett === true){
        
        CheckPswrd(char12);
      };

};
           


   


