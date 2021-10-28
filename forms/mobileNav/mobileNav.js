hmbMenu.onshow=function(){
  hmbMenu.hidden = false
}

hmbMenu.onclick=function(s){ // when just click the control. "s" is
                              // the object returned
    if (typeof(s) ==  "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Dessert Voting":
                ChangeForm(dessertVoting)
                break;
            case "Describe You":
                ChangeForm(describeYou)
                break;
            case "Favorite Excercises":
                ChangeForm(favExercises)
            
       }  //switch
   } //else
}
