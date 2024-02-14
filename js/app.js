const player = {
    currentChoice: null
  };
  
  const computer = {
    currentChoice: null
  };
  //the array and below is where player picks button
  const choices = ['Rock', 'Paper', 'Scissors', ' Lizard', 'Spock'];
  //random generator for computet to pick
  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  function playerChoses(num) {
    player.currentChoice = choices[num];
    let result = document.createElement('p');
    result.setAttribute('class', 'result');
    result.innerText = compareChoices();
    document.body.appendChild(result);
  }
  //connecting the buttons to the array
  document.getElementById('Rock').addEventListener('click', function () {
    playerChoses(0);
  });
  
  document.getElementById('Paper').addEventListener('click', function () {
    playerChoses(1);
  });
  
  document.getElementById('Scissors').addEventListener('click', function () {
    playerChoses(2);
  });
  
  document.getElementById('Lizard').addEventListener('click', function () {playerChoses(3);
                                              })
  
  document.getElementById('Spock').addEventListener('click', function (){
    playerChoses(4);
  })
  
  function compareChoices() {
    computerChooses();
  
    if (player.currentChoice === computer.currentChoice) {
      return "It's a tie! Both the Sheldon and you picked " + player.currentChoice;
    } else if (
      //computer picks rock and player picks paper so player wins
      (computer.currentChoice === choices[0] && player.currentChoice === choices[1]) ||
      //computer picks paper and player picks scissors so player wins
      (computer.currentChoice === choices[1] && player.currentChoice === choices[2]) ||
      //computer picks scissors and player picks rock so player wins
      (computer.currentChoice === choices[2] && player.currentChoice === choices[0]) ||
    //computer picks Lizard and you and player picks scissors
      (computer.currentChoice === choices[3] && player.currentChoice === choices[2]) ||
      //computer picks Spock and player picks Lizard so player wins
      (computer.currentChoice === choices[4] && player.currentChoice === choices[3]) ||
      //computer picks Rock and player picks Spock so player wins
      (computer.currentChoice === choices[0] && player.currentChoice === choices[4]) ||
    //computer picks paper and player picks Lizard so player wins
      (computer.currentChoice === choices[1] && player.currentChoice === choices[3]) ||
      //computer picks lizard and player picks rock so player wins
      (computer.currentChoice === choices[3] && player.currentChoice === choices[0]) ||
      //computer picks Spock and player picks paper so player wins
      (computer.currentChoice === choices[4] && player.currentChoice === choices[1]) ||
     //computer picks scissors and player picks spock
      (computer.currentChoice === choices[2] && player.currentChoice === choices[4])  
   ){
      return (
        "Whoohoo, you win! Sheldon picked " +
        computer.currentChoice +
        " and you picked " +
        player.currentChoice + "."
      );
    } else {
      return (
        "Womp, womp! The Sheldon wins! He picked " +
        computer.currentChoice +
        " and you picked " +
        player.currentChoice + "."
      );
    }
  }
  document.getElementById('Reset').addEventListener('click', function(){
    let elementToDelete = document.querySelectorAll('.result');
      elementToDelete.forEach(function(element) {
      element.parentNode.removeChild(element);
    
    });
        //reset player and computer choices
    player.currentChoice = null;
    computer.currentChoice = null;
  });
  
  //ChatGPT Assistance
  
  function playerChoses(num) {
    player.currentChoice = choices[num];
    let result = document.createElement('p');
    result.setAttribute('class', 'result');
    result.innerText = compareChoices();
    document.body.appendChild(result);
  //show reset button once result is made by player playing
    document.getElementById ('Reset').style.display = 'inline-block';
    }
  
  document.getElementById('Reset').addEventListener('click', function(){
    let elementToDelete = document.querySelectorAll('.result');
    
    elementToDelete.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
    
    player.currentChoice = null;
    computer.currentChoice =null;
    
    document.getElementById('Reset').style.display = 'none';
  });