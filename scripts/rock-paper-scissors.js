let score = JSON.parse(localStorage.getItem(`score`)) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === `Scissors`) {
    if (computerMove === "Rock") {
      result = `You lose!`;
    } else if (computerMove === "Paper") {
      result = `You won!`;
    } else if (computerMove === "Scissors") {
      result = `It's a tie!`;
    }
  } else if (playerMove === `Paper`) {
    if (computerMove === "Rock") {
      result = `You won!`;
    } else if (computerMove === "Paper") {
      result = `It's a tie!`;
    } else if (computerMove === "Scissors") {
      result = `You lose!`;
    }
  } else if (playerMove === `Rock`) {
    if (computerMove === "Rock") {
      result = `It's a tie!`;
    } else if (computerMove === "Paper") {
      result = `You lose!`;
    } else if (computerMove === "Scissors") {
      result = `You won!`;
    }
  }

  if (result === `You won!`) {
    score.wins = score.wins + 1;
  } else if (result === `You lose!`) {
    score.loses = score.loses + 1;
  } else if (result === `It's a tie!`) {
    score.ties = score.ties + 1;
  }

  localStorage.setItem(`score`, JSON.stringify(score));

  updateScoreElement();

  document.querySelector(`.js-result`).innerHTML = "Result:";

  document.querySelector(`.js-moves`).innerHTML = `   You:
      <img class="rock-paper-scissors-icon" src="../assets/Images/minigame-images/${playerMove}-emoji.png" alt="" />
      <img class="rock-paper-scissors-icon" src="../assets/Images/minigame-images/${computerMove}-emoji.png" alt="" />
      : Computer`;
}

function updateScoreElement() {
  document.querySelector(
    `.js-score`
  ).innerHTML = ` Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

let computerMove = "";
function pickComputerMove() {
  const randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}
const audioElement = document.getElementById(`myAudio`);

let MusicisPlaying = false;

function playMusic() {
  if (MusicisPlaying) {
    audioElement.pause();
    document.getElementById(`playButton`).innerHTML = `
      <img id="test" class="music-button" src="minigame-images/play.png" />`;
  } else {
    audioElement.play();
    document.getElementById(`playButton`).innerHTML = `
      <img id="test" class="music-button" src="minigame-images/pause.png" />`;
  }

  MusicisPlaying = !MusicisPlaying;
}
