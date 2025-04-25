let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }
  
  function computerMove() {
    const randomNumber = Math.random();
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      return 'rock'
    }
  
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      return 'paper'
    }
  
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      return 'scissors'
    }
  }
  
  
  
  
  function playGame(playerMove) {
    let result = '';
    let compMove = computerMove();
  
    console.log(playerMove)
    console.log(compMove)
  
  
    if (playerMove == 'rock') {
      if (compMove == 'rock') {
        result = 'Tie';
      }
      else if (compMove == 'paper') {
        result = 'Lose';
      }
  
      else if (compMove == 'scissors') {
        result = 'Win';
      }
    }
  
    if (playerMove == 'paper') {
      if (compMove == 'paper') {
        result = 'Tie';
      }
      else if (compMove == 'scissors') {
        result = 'Lose';
      }
  
      else if (compMove == 'rock') {
        result = 'Win';
      }
    }
  
  
  
    if (playerMove == 'scissors') {
      if (compMove == 'scissors') {
        result = 'Tie';
      }
      else if (compMove == 'rock') {
        result = 'Lose';
      }
  
      else if (compMove == 'paper') {
        result = 'Win';
      }
    }
  
    console.log(result);
  
  
    // return result;
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"><img class="move-icon" src="images/${compMove}-emoji.png"> Computer`
  
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} losses:${score.losses} ties:${score.ties}`
  
  
    if (result == 'Win') {
      score.wins += 1;
    }
    else if (result == 'Lose') {
      score.losses += 1;
    }
  
    else if (result == 'Tie') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
  }
  
  
  function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} losses:${score.losses} ties:${score.ties}`
  }
  