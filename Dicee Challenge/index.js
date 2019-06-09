
  var d2 = Math.floor((Math.random()*6));
  var d1 = Math.floor((Math.random()*6));

      d1+=1;
      d2+=1;

  var diceImage1 = "images/dice" + d1 + ".png";
  var diceImage2 =  "images/dice" + d2 + ".png";
   document.querySelector(".img1").setAttribute("src",diceImage1);
   document.querySelector(".img2").setAttribute("src",diceImage2);

  if(d1>d2)
  {
    document.querySelector("h1").innerHTML = "!Winner player 1";
  }
  else if(d2>d1){
    document.querySelector("h1").innerHTML = "Winner player 2!";
  }
  else {
    document.querySelector("h1").innerHTML =  "draw";
  }
