import { 
    VIDEO_GAMES, 
    ANIMES, 
    FOOTBALL_PLAYERS, 
    FOOTBALL_TEAMS, 
    MOVIES, 
    RANDOM_WORDS 
} from './constants.js';

const $form = document.getElementById("settingsForm");
const $gameDiv = document.getElementById("game");
const $h1CurrentPlayer = document.querySelector(".player-rol");
const $pCurrentPlayer = document.querySelector(".p-rol");
const $nextButton = document.querySelector(".next");

let PLAYERS = 0;
let SPIES = [];
let minutes = 2;
let word = "null";
let spies = 0;
let finished = false;
let randomElement;
let currentPlayer = 1;
let currentIteration = 1;
let category;

const pickRandom = (arr) => Array.isArray(arr) && arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;

$form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    PLAYERS = parseInt(document.getElementById("players").value, 10);
    spies = parseInt(document.getElementById("spies").value, 10);
    minutes = parseInt(document.getElementById("minutes").value, 10);
    
    // Select multiple spies randomly
    SPIES = [];
    while (SPIES.length < spies) {
        const randomSpy = Math.floor(Math.random() * PLAYERS) + 1;
        if (!SPIES.includes(randomSpy)) {
            SPIES.push(randomSpy);
        }
    }
    
    category = document.getElementById("category").value;
    switch (category) {
        case "videogames":
            randomElement = pickRandom(VIDEO_GAMES);
            word = "juego";
            break;
        case "animes":
            randomElement = pickRandom(ANIMES);
            word = "anime";
            break;
        case "movies":
            randomElement = pickRandom(MOVIES);
            word = "película";
            break;
        case "football-players":
            randomElement = pickRandom(FOOTBALL_PLAYERS);
            word = "jugador";
            break;
        case "football-teams":
            randomElement = pickRandom(FOOTBALL_TEAMS);
            word = "equipo";
            break;
        case "random-words":
            randomElement = pickRandom(RANDOM_WORDS);
            word = "palabra";
            break;
        default:
            randomElement = null;
        }

    if (randomElement === null) {
        console.warn("Category not found or the list is empty.");
    }
    $gameDiv.style.display = "block";    
    $form.style.display = "none";

    nextPlayer();
});

function nextPlayer() {
    $h1CurrentPlayer.innerHTML = SPIES.includes(currentPlayer) ? `Jugador ${currentPlayer}. Te tocó ser el <strong style="color:rgb(185, 32, 32);">Espía</strong>`
                                                    : `Jugador ${currentPlayer}. ${word == "película" || word == "palabra" ? "La" : "El"} ${word} es: <strong>${randomElement}</strong>`;    
    $pCurrentPlayer.textContent = "Dale a Aceptar y pasa la pantalla al siguiente jugador."
    $nextButton.textContent = "Aceptar"
    currentPlayer++;
    currentIteration++;
}

$nextButton.addEventListener("click", () => { 
    if(finished) {
        location.reload(true);
    }
    if(currentPlayer > PLAYERS) {
        $h1CurrentPlayer.textContent = "Todos los roles asignados"
        const spyText = spies > 1 ? "los espías adivinan" : "el espía adivina";
        const spyText2 = spies > 1 ? "se equivocan o los descubren" : "se equivoca o lo descubren";
        $pCurrentPlayer.textContent = `Si ${spyText} ${word == "película" || word == "palabra" ? "la" : "el"} ${word} y ${word == "película" ? "la" : "lo"} ${spies > 1 ? "dicen" : "dice"} en voz alta, ${spies > 1 ? "ganan" : "gana"} la partida. Si ${spyText2}, ${spies > 1 ? "pierden" : "pierde"}.`;
        $nextButton.classList.add("green-btn");
        $nextButton.textContent = spies > 1 ? "Espías descubiertos" : "Espía descubierto"
        finished = true;
        startCountdown();
        return;
    }
    if(currentIteration % 2 == 0) {
        $h1CurrentPlayer.textContent = "Esperando.."
        $pCurrentPlayer.textContent = "Dale a Aceptar para ver tu rol."
        currentIteration++;
    } else {
        nextPlayer();
    }
});

const $countdownEl = document.getElementById("countdown");

function startCountdown() {
    $countdownEl.style.display = "block";
    let timeLeft = minutes * 60;
    const timer = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;

        $countdownEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            $countdownEl.textContent = spies > 1 ? "Fin del tiempo, ganan los espías." : "Fin del tiempo, gana el espía.";
            return;
        }

        timeLeft--;
    }, 1000);
}