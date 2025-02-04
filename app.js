const $newGameScreenPickPlayerIcons = document.querySelectorAll(".new-game-screen-pick-player-icon")
const $newGameScreenNewGameCpuPlayer = document.querySelector(".new-game-screen-new-game-buttons__button")
const $newGameScreen = document.querySelector(".new-game-screen")
const $gameScreen = document.querySelector(".game-screen")


let currentPlayer = "o"


$newGameScreenPickPlayerIcons.forEach(function($newGameScreenPickPlayerIcon) {
    $newGameScreenPickPlayerIcon.addEventListener("click", function() {   
    for (let i = 0; i < $newGameScreenPickPlayerIcons.length; i++) {
        $newGameScreenPickPlayerIcons[i].classList.remove("new-game-screen-pick-player-icon--selected")
    }

        $newGameScreenPickPlayerIcon.classList.add("new-game-screen-pick-player-icon--selected")
        currentPlayer = $newGameScreenPickPlayerIcon.getAttribute("data-player")

        console.log(currentPlayer)
    })
})

$newGameScreenNewGameCpuPlayer.addEventListener("click", function() {
    $newGameScreen.classList.add("hidden")
    $gameScreen.classList.remove("hidden")
})
