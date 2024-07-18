document.addEventListener("DOMContentLoaded", function() {
      let g = document.querySelector("#green");
      let b = document.querySelector("#blue");
      let o = document.querySelector("#orange");
      let y = document.querySelector("#yellow");
      let t = document.querySelector(".start");
      let Level = 1;
      document.addEventListener("keypress", function() {
          t.innerText = "Level " + Level;
      });
let buttons = document.querySelectorAll(".game button");
buttons.forEach(button => {
          button.addEventListener("click", function() {
      let guessNumber = Math.floor(Math.random()*4)+1;
            if(parseInt(button.innerText) === guessNumber) {
                  Level++;
                  let song=button.id;
                  let pl = new Audio("sounds/"+song +".mp3");
                  pl.play();
                  t.innerText="Level "+Level;
              } 
              else {
                  let wrong = new Audio("sounds/wrong.mp3");
                  wrong.play();
                  t.innerText = "Press A key to Start the Game!";
                  Level=1;
              }
          });
      });
  });