const $form = document.getElementById("settingsForm");
const $gameDiv = document.getElementById("game");
const $h1CurrentPlayer = document.querySelector(".player-rol");
const $pCurrentPlayer = document.querySelector(".p-rol");
const $nextButton = document.querySelector(".next");

let PLAYERS = 0;
let SPY = -1;
let minutes = 2;
let word = "null";
const videoGames = [
  // 80s Classics
  "Pac-Man",
  "Donkey Kong",
  "Tetris",
  "Space Invaders",
  "Super Mario Bros.",
  "The Legend of Zelda",
  "Metroid",
  "Mega Man",
  "Street Fighter",
  "Duck Hunt",

  // 90s Legends
  "Sonic the Hedgehog",
  "Mortal Kombat",
  "DOOM",
  "Quake",
  "Diablo",
  "Warcraft II",
  "StarCraft",
  "GoldenEye 007",
  "Final Fantasy VII",
  "Resident Evil",
  "Pokémon Red and Blue",
  "Crash Bandicoot",
  "Tomb Raider",
  "The Legend of Zelda: Ocarina of Time",
  "Half-Life",
  "Metal Gear Solid",
  "Super Smash Bros.",
  "Tony Hawk's Pro Skater",

  // 2000s Icons
  "Halo: Combat Evolved",
  "Halo 2",
  "Grand Theft Auto III",
  "Grand Theft Auto: Vice City",
  "Grand Theft Auto: San Andreas",
  "World of Warcraft",
  "The Elder Scrolls III: Morrowind",
  "The Elder Scrolls IV: Oblivion",
  "Call of Duty 4: Modern Warfare",
  "Counter-Strike",
  "Kingdom Hearts",
  "God of War",
  "Shadow of the Colossus",
  "Resident Evil 4",
  "The Sims",
  "The Sims 2",
  "Gears of War",
  "Bioshock",
  "Left 4 Dead",
  "Portal",

  // 2010s Hits
  "Minecraft",
  "The Elder Scrolls V: Skyrim",
  "Dark Souls",
  "Bloodborne",
  "The Witcher 3: Wild Hunt",
  "Overwatch",
  "Fortnite",
  "PlayerUnknown’s Battlegrounds (PUBG)",
  "League of Legends",
  "Dota 2",
  "Red Dead Redemption",
  "Red Dead Redemption 2",
  "Grand Theft Auto V",
  "Uncharted 4: A Thief’s End",
  "The Last of Us",
  "The Last of Us Part II",
  "Horizon Zero Dawn",
  "God of War (2018)",
  "Undertale",
  "Celeste",
  "Cuphead",
  "Super Mario Odyssey",
  "The Legend of Zelda: Breath of the Wild",
  "Super Smash Bros. Ultimate",

  // 2020s & Newer
  "Elden Ring",
  "Cyberpunk 2077",
  "Baldur’s Gate 3",
  "Animal Crossing: New Horizons",
  "Among Us",
  "Valorant",
  "Hades",
  "Starfield",
  "Final Fantasy XVI",
  "Street Fighter 6",
  "Mortal Kombat 11",
  "Resident Evil Village",
  "Metroid Dread"
];
const animeList = [
  // Classics
  "Dragon Ball",
  "Naruto",
  "One Piece",
  "Bleach",
  "Yu Yu Hakusho",
  "Sailor Moon",
  "Saint Seiya (Knights of the Zodiac)",
  "Neon Genesis Evangelion",
  "Cowboy Bebop",
  "Inuyasha",
  "Pokémon",
  "Digimon Adventure",
  "Fullmetal Alchemist",
  "Death Note",
  "Code Geass",

  // Newer & Popular
  "Attack on Titan",
  "My Hero Academia",
  "Kimetsu no Yaiba (Demon Slayer)",
  "Jujutsu Kaisen",
  "Tokyo Revengers",
  "Black Clover",
  "Dr. Stone",
  "Chainsaw Man",
  "Blue Lock",
  "Spy x Family",
  "The Seven Deadly Sins",
  "Fire Force",
  "Re:Zero",
  "Sword Art Online",

  // Sports
  "Haikyuu!!",
  "Captain Tsubasa / Supercampeones",
  "Hajime no Ippo",


  // Big franchises / Modern epics
  "Boruto: Naruto Next Generations",
  "Fairy Tail",
  "Hunter x Hunter",
  "JoJo’s Bizarre Adventure",
  "One Punch Man",
  "Mob Psycho 100",
  "Parasyte",
  "Overlord"
];
const footballPlayers = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Kylian Mbappé",
  "Erling Haaland",
  "Neymar Jr.",
  "Kevin De Bruyne",
  "Mohamed Salah",
  "Luka Modrić",
  "Karim Benzema",
  "Robert Lewandowski",
  "Virgil van Dijk",
  "Harry Kane",
  "Antoine Griezmann",
  "Vinícius Jr.",
  "Jude Bellingham",
  "Phil Foden",
  "Gavi",
  "Pedri",
  "Rodri",
  "João Félix",
  "Marc-André ter Stegen",
  "Thibaut Courtois",
  "Alisson Becker",
  "Ederson",
  "Manuel Neuer",
  "Son Heung-min",
  "Achraf Hakimi",
  "Trent Alexander-Arnold",
  "Andrew Robertson",
  "Frenkie de Jong",
  "Raphaël Varane",
  "Casemiro",
  "Federico Valverde",
  "Jamal Musiala",
  "Pelé",
  "Diego Maradona",
  "Ronaldo Nazário",
  "Ronaldinho",
  "Zinedine Zidane",
  "David Beckham",
  "Paolo Maldini",
  "Francesco Totti",
  "Andrea Pirlo",
  "Gianluigi Buffon",
  "Iker Casillas",
  "Oliver Kahn",
  "Roberto Carlos",
  "Carlos Valderrama",
  "Thierry Henry",
  "Xavi Hernández",
  "Andrés Iniesta",
  "Carles Puyol",
  "Fernando Torres",
  "Luis Figo",
  "Johan Cruyff",
  "Philipp Lahm",
  "Bastian Schweinsteiger",
  "Didier Drogba",
  "Arjen Robben",
  "Robin van Persie",
  "Wesley Sneijder",
  "Frank Lampard",
  "Steven Gerrard",
  "John Terry",
  "Rio Ferdinand",
  "Wayne Rooney",
  "Zlatan Ibrahimović",
  "Javier Zanetti",
  "Gabriel Batistuta",
  "Claudio Caniggia",
  "Daniel Passarella",
  "Oscar Ruggeri",
  "Diego Forlán",
  "Enzo Francescoli",
  "Carlos Tevez",
  "Juan Román Riquelme",
  "Robinho",
  "Kaká",
];
const footballTeams = [
  "Real Madrid",
  "FC Barcelona",
  "Atlético Madrid",
  "Sevilla",
  "Valencia CF",
  "Villarreal",

  "Manchester United",
  "Manchester City",
  "Liverpool",
  "Chelsea",
  "Arsenal",
  "Tottenham Hotspur",

  "Bayern Munich",
  "Borussia Dortmund",
  "Bayer Leverkusen",

  "Juventus",
  "AC Milan",
  "Inter Milan",
  "AS Roma",
  "Napoli",

  "Paris Saint-Germain",
  "Olympique de Marseille",
  "Olympique Lyonnais",
  "AS Monaco",

  "Ajax",

  "Benfica",
  "Sporting CP",
  "Porto",

  "Boca Juniors",
  "River Plate",
  "Racing Club",
  "Independiente",
  "San Lorenzo",
  "Estudiantes de La Plata",
  "Newells Old Boys",
  "Rosario Central",
  "Vélez Sarsfield",

  "Flamengo",
  "Fluminense",
  "São Paulo",
  "Santos",
  "Palmeiras",
  "Corinthians",
  "Grêmio",
  "Internacional",

  "Peñarol",
  "Nacional (Uruguay)",

  "Colo-Colo",
  "Universidad de Chile",

  "Atlético Nacional (Colombia)",
  "Millonarios (Colombia)",

];
const movies = [
  // Clásicos
  "El Padrino",
  "Scarface: Cara Cortada",
  "Buenos Muchachos",
  "Taxi Driver",
  "Pulp Fiction: Tiempos Violentos",
  "Bastardos Sin Gloria",
  "El Club de la Pelea",
  "Sueños de Fuga (Sueños de Libertad)", // The Shawshank Redemption

  "Star Wars",

  "El Señor de los Anillos",

  "Matrix",
  
  "Blade Runner 2049",

  // Superhéroes
  "Batman",
  "Liga de la Justicia",
  "Mujer Maravilla",
  "Aquaman",
  "El Escuadrón Suicida",
  "Joker",
  "Superman",

  "Spider-Man",

  "Los Vengadores",
  "Capitán América",
  "Iron Man",
  "Thor",
  "Pantera Negra",
  "Doctor Strange",
  "Guardianes de la Galaxia",

  "Toy Story",
  "Buscando a Nemo",
  "Los Increíbles",
  "Coco",
  "Ratatouille",
  "Cars",
  "Monsters Inc.",
  "Intensamente",
  "Frozen",
  "Enredados",
  "Moana",
  "Zootopia",
  "Ralph el Demoledor",
  "Big Hero 6",
  "Luca",

  "Titanic",
  "Avatar",
  "Gladiador",
  "300",
  "Forrest Gump",
  "Atrápame Si Puedes",
  "El Pianista",
  "La Lista de Schindler",
  "La Vida es Bella",
  "Parásitos",
  "El Viaje de Chihiro",
  "Mi Vecino Totoro",

  "Mujer Bonita",
  "Un Lugar Llamado Notting Hill",
  "La Propuesta",
  "Cómo Perder a un Hombre en 10 Días",
  "10 Cosas que Odio de Ti",
  "27 Bodas",
  "La La Land: Una Historia de Amor",
  "500 Días con Ella",
  "Antes del Amanecer",
  "Antes del Anochecer",
  "Antes del Atardecer"
];

let randomElement;
let currentPlayer = 1;
let currentIteration = 1;
let category;

const pickRandom = (arr) => Array.isArray(arr) && arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;

$form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    PLAYERS = parseInt(document.getElementById("players").value, 10);
    minutes = parseInt(document.getElementById("minutes").value, 10);
    SPY = Math.floor(Math.random() * PLAYERS) + 1;
    category = document.getElementById("category").value;
    switch (category) {
        case "videogames":
            randomElement = pickRandom(videoGames);
            word = "juego";
            break;
        case "animes":
            randomElement = pickRandom(animeList);
            word = "anime";
            break;
        case "movies":
            randomElement = pickRandom(movies);
            word = "película";
            break;
        case "football-players":
            randomElement = pickRandom(footballPlayers);
            word = "jugador";
            break;
        case "football-teams":
            randomElement = pickRandom(footballTeams);
            word = "equipo";
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
    $h1CurrentPlayer.innerHTML = SPY === currentPlayer ? `Jugador ${currentPlayer}. Te tocó ser el <strong style="color:rgb(185, 32, 32);">Espía</strong>`
                                                    : `Jugador ${currentPlayer}. ${word == "película" ? "La" : "El"} ${word} es: <strong>${randomElement}</strong>`;    
    $pCurrentPlayer.textContent = "Dale a Aceptar y pasa la pantalla al siguiente jugador."
    $nextButton.textContent = "Aceptar"
    currentPlayer++;
    currentIteration++;
}
let finished = false;
$nextButton.addEventListener("click", () => { 
    if(finished) {
        location.reload(true);
    }
    if(currentPlayer > PLAYERS) {
        $h1CurrentPlayer.textContent = "Todos los roles asignados"
        $pCurrentPlayer.textContent = `Si el espía adivina ${word == "película" ? "la" : "el"} ${word} y ${word == "película" ? "la" : "lo"} dice en voz alta, gana la partida. Si se equivoca o lo descubren, pierde.`;
        $nextButton.classList.add("green-btn");
        $nextButton.textContent = "Espía descubierto"
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
            $countdownEl.textContent = "Fin del tiempo, gana el espía.";
            return;
        }

        timeLeft--;
    }, 1000);
}
