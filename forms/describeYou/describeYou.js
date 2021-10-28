rdoPerson.onchange=function(){

  let choice = rdoPerson.value
  switch(choice){
case 0:
  console.log("I would agree that you are a Optimistic person too!")
  break;
case 1:
  console.log(" I would agree that you are a Pessimistic person too!")
  break;
case 2:
  console.log(" I would agree that you are a Trusting person too!")
  break;
case 3:
  console.log(" I would agree that you are a Envious person too!")
  break;
}
}

btnFE.onclick=function(){
  ChangeForm(favExercises)
}
