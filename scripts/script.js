const CATEGORIES = {
  videogames: {
    name: "Videojuegos",
    prompt: "El videojuego es:",
    items: [
      "Pac-Man", "Donkey Kong", "Tetris", "Space Invaders", "Super Mario Bros.",
      "The Legend of Zelda", "Metroid", "Mega Man", "Street Fighter", "Duck Hunt",
      "Sonic the Hedgehog", "Mortal Kombat", "DOOM", "Quake", "Diablo",
      "Warcraft II", "StarCraft", "GoldenEye 007", "Final Fantasy VII", "Resident Evil",
      "Pokémon Rojo y Azul", "Crash Bandicoot", "Tomb Raider",
      "The Legend of Zelda: Ocarina of Time", "Half-Life", "Metal Gear Solid",
      "Super Smash Bros.", "Tony Hawk's Pro Skater", "Halo: Combat Evolved", "Halo 2",
      "Grand Theft Auto III", "Grand Theft Auto: Vice City",
      "Grand Theft Auto: San Andreas", "World of Warcraft",
      "The Elder Scrolls IV: Oblivion", "Call of Duty 4: Modern Warfare",
      "Counter-Strike", "Kingdom Hearts", "God of War", "Shadow of the Colossus",
      "Resident Evil 4", "Los Sims", "Los Sims 2", "Gears of War", "BioShock",
      "Left 4 Dead", "Portal", "Minecraft", "The Elder Scrolls V: Skyrim",
      "Dark Souls", "Bloodborne", "The Witcher 3: Wild Hunt", "Overwatch",
      "Fortnite", "PlayerUnknown's Battlegrounds (PUBG)", "League of Legends",
      "Dota 2", "Red Dead Redemption", "Red Dead Redemption 2",
      "Grand Theft Auto V", "Uncharted 4: El Desenlace del Ladrón",
      "The Last of Us", "The Last of Us Parte II", "Horizon Zero Dawn",
      "God of War (2018)", "Undertale", "Celeste", "Cuphead", "Super Mario Odyssey",
      "The Legend of Zelda: Breath of the Wild", "Super Smash Bros. Ultimate",
      "Elden Ring", "Cyberpunk 2077", "Baldur's Gate 3",
      "Animal Crossing: New Horizons", "Among Us", "Valorant", "Hades",
      "Starfield", "Final Fantasy XVI", "Street Fighter 6", "Mortal Kombat 11",
      "Resident Evil Village", "Metroid Dread"
    ]
  },
  animes: {
    name: "Animes",
    prompt: "El anime es:",
    items: [
      "Dragon Ball", "Naruto", "One Piece", "Bleach", "Yu Yu Hakusho",
      "Sailor Moon", "Caballeros del Zodiaco", "Neon Genesis Evangelion",
      "Cowboy Bebop", "Inuyasha", "Pokémon", "Digimon Adventure",
      "Fullmetal Alchemist", "Death Note", "Code Geass", "Attack on Titan",
      "My Hero Academia", "Demon Slayer", "Jujutsu Kaisen", "Tokyo Revengers",
      "Black Clover", "Dr. Stone", "Chainsaw Man", "Blue Lock", "Spy x Family",
      "Los Siete Pecados Capitales", "Fire Force", "Re:Zero", "Sword Art Online",
      "Haikyuu!!", "Supercampeones", "Hajime no Ippo", "Boruto",
      "Fairy Tail", "Hunter x Hunter", "JoJo's Bizarre Adventure",
      "One Punch Man", "Mob Psycho 100", "Parasyte", "Overlord"
    ]
  },
  movies: {
    name: "Películas",
    prompt: "La película es:",
    items: [
      "El Padrino", "Scarface: Cara Cortada", "Buenos Muchachos", "Taxi Driver",
      "Pulp Fiction: Tiempos Violentos", "Bastardos Sin Gloria", "El Club de la Pelea",
      "Sueños de Fuga", "Star Wars", "El Señor de los Anillos", "Matrix",
      "Blade Runner 2049", "Batman", "Liga de la Justicia", "Mujer Maravilla",
      "Aquaman", "El Escuadrón Suicida", "Joker", "Superman", "Spider-Man",
      "Los Vengadores", "Capitán América", "Iron Man", "Thor", "Pantera Negra",
      "Doctor Strange", "Guardianes de la Galaxia", "Toy Story", "Buscando a Nemo",
      "Los Increíbles", "Coco", "Ratatouille", "Cars", "Monsters Inc.",
      "Intensamente", "Frozen", "Enredados", "Moana", "Zootopia", "Ralph el Demoledor",
      "Big Hero 6", "Luca", "Titanic", "Avatar", "Gladiador", "300", "Forrest Gump",
      "Atrápame Si Puedes", "El Pianista", "La Lista de Schindler", "La Vida es Bella",
      "Parásitos", "El Viaje de Chihiro", "Mi Vecino Totoro", "Mujer Bonita",
      "Un Lugar Llamado Notting Hill", "La Propuesta",
      "Cómo Perder a un Hombre en 10 Días", "10 Cosas que Odio de Ti", "27 Bodas",
      "La La Land: Una Historia de Amor", "500 Días con Ella", "Antes del Amanecer",
      "Antes del Atardecer", "Antes del Anochecer"
    ]
  },
  series: {
    name: "Series",
    prompt: "La serie es:",
    items: [
      "Breaking Bad", "Better Call Saul", "Stranger Things", "Game of Thrones",
      "Los Soprano", "The Office", "Friends", "Dark", "La Casa de Papel", "Narcos",
      "The Mandalorian", "Chernobyl", "Peaky Blinders", "The Wire", "Lost",
      "The Walking Dead", "Rick y Morty", "Arcane", "Succession", "Modern Family",
      "Cómo Conocí a Vuestra Madre", "Merlí", "Élite", "El Marginal", "Okupas",
      "Los Simuladores", "Casados con Hijos", "Rebelde Way", "Chiquititas",
      "The Last of Us", "Severance", "The Bear", "Merlina", "Black Mirror",
      "Vikingos", "House of Cards", "Grey's Anatomy", "Dr. House", "Sherlock",
      "Los Bridgerton", "El Juego del Calamar", "The Boys", "Euphoria", "Ozark"
    ]
  },
  music: {
    name: "Música",
    prompt: "El artista o la banda es:",
    items: [
      "The Beatles", "Queen", "Michael Jackson", "Madonna", "Elvis Presley",
      "Bob Marley", "David Bowie", "Freddie Mercury", "Pink Floyd", "Led Zeppelin",
      "The Rolling Stones", "AC/DC", "Nirvana", "Metallica", "Guns N' Roses", "U2",
      "Coldplay", "Radiohead", "Daft Punk", "The Weeknd", "Taylor Swift", "Beyoncé",
      "Rihanna", "Lady Gaga", "Adele", "Ed Sheeran", "Bruno Mars", "Drake",
      "Kendrick Lamar", "Eminem", "Bad Bunny", "Shakira", "J Balvin", "Karol G",
      "Maluma", "Ozuna", "Daddy Yankee", "Luis Miguel", "Soda Stereo",
      "Gustavo Cerati", "Charly García", "Fito Páez", "Los Fabulosos Cadillacs",
      "Patricio Rey y sus Redonditos de Ricota", "Luis Alberto Spinetta",
      "Andrés Calamaro", "Mercedes Sosa", "Carlos Gardel", "BTS", "Blackpink",
      "Rosalía", "Dua Lipa", "Billie Eilish", "Harry Styles", "Ariana Grande",
      "Justin Bieber"
    ]
  },
  books: {
    name: "Libros",
    prompt: "El libro es:",
    items: [
      "Don Quijote de la Mancha", "Cien Años de Soledad",
      "El Amor en los Tiempos del Cólera", "Crónica de una Muerte Anunciada",
      "Rayuela", "La Casa de los Espíritus", "La Sombra del Viento",
      "El Nombre de la Rosa", "El Principito", "1984", "Rebelión en la Granja",
      "Un Mundo Feliz", "Fahrenheit 451", "El Señor de las Moscas", "Drácula",
      "Frankenstein", "Orgullo y Prejuicio", "Jane Eyre", "Cumbres Borrascosas",
      "Moby Dick", "La Odisea", "La Ilíada", "La Divina Comedia", "Hamlet",
      "Romeo y Julieta", "El Gran Gatsby", "Matar un Ruiseñor",
      "Los Juegos del Hambre", "Harry Potter y la Piedra Filosofal", "El Hobbit",
      "El Señor de los Anillos", "Las Crónicas de Narnia",
      "Alicia en el País de las Maravillas", "Peter Pan", "El Mago de Oz",
      "La Metamorfosis", "Crimen y Castigo", "Los Hermanos Karamazov",
      "Guerra y Paz", "Anna Karenina", "El Código Da Vinci", "El Alquimista",
      "Como Agua para Chocolate", "Ficciones", "El Túnel",
      "Sobre Héroes y Tumbas", "Martín Fierro"
    ]
  },
  superheroes: {
    name: "Superhéroes",
    prompt: "El superhéroe o villano es:",
    items: [
      "Superman", "Batman", "Spider-Man", "Iron Man", "Capitán América", "Thor",
      "Hulk", "Viuda Negra", "Doctor Strange", "Pantera Negra", "Wolverine",
      "Deadpool", "Flash", "Mujer Maravilla", "Aquaman", "Linterna Verde",
      "Flecha Verde", "Capitana Marvel", "Hombre Hormiga", "Star-Lord", "Groot",
      "Rocket Raccoon", "Gamora", "Doctor Octopus", "Joker", "Lex Luthor",
      "Thanos", "Loki", "Magneto", "Mística", "Profesor X", "Cíclope", "Tormenta",
      "Jean Grey", "Estela Plateada", "Daredevil", "El Castigador",
      "Motorista Fantasma", "Blade", "Hellboy", "Spawn"
    ]
  },
  "football-players": {
    name: "Jugadores de Fútbol",
    prompt: "El jugador de fútbol es:",
    items: [
      "Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Erling Haaland",
      "Neymar Jr.", "Kevin De Bruyne", "Mohamed Salah", "Luka Modrić",
      "Karim Benzema", "Robert Lewandowski", "Virgil van Dijk", "Harry Kane",
      "Antoine Griezmann", "Vinícius Jr.", "Jude Bellingham", "Phil Foden", "Gavi",
      "Pedri", "Rodri", "João Félix", "Marc-André ter Stegen",
      "Thibaut Courtois", "Alisson Becker", "Ederson", "Manuel Neuer",
      "Son Heung-min", "Achraf Hakimi", "Trent Alexander-Arnold",
      "Andrew Robertson", "Frenkie de Jong", "Raphaël Varane", "Casemiro",
      "Federico Valverde", "Jamal Musiala", "Pelé", "Diego Maradona",
      "Ronaldo Nazário", "Ronaldinho", "Zinedine Zidane", "David Beckham",
      "Paolo Maldini", "Francesco Totti", "Andrea Pirlo", "Gianluigi Buffon",
      "Iker Casillas", "Oliver Kahn", "Roberto Carlos", "Carlos Valderrama",
      "Thierry Henry", "Xavi Hernández", "Andrés Iniesta", "Carles Puyol",
      "Fernando Torres", "Luis Figo", "Johan Cruyff", "Philipp Lahm",
      "Bastian Schweinsteiger", "Didier Drogba", "Arjen Robben",
      "Robin van Persie", "Wesley Sneijder", "Frank Lampard", "Steven Gerrard",
      "John Terry", "Rio Ferdinand", "Wayne Rooney", "Zlatan Ibrahimović",
      "Javier Zanetti", "Gabriel Batistuta", "Claudio Caniggia",
      "Daniel Passarella", "Oscar Ruggeri", "Diego Forlán", "Enzo Francescoli",
      "Carlos Tevez", "Juan Román Riquelme", "Robinho", "Kaká"
    ]
  },
  "football-teams": {
    name: "Equipos de Fútbol",
    prompt: "El equipo de fútbol es:",
    items: [
      "Real Madrid", "FC Barcelona", "Atlético Madrid", "Sevilla", "Valencia CF",
      "Villarreal", "Manchester United", "Manchester City", "Liverpool", "Chelsea",
      "Arsenal", "Tottenham Hotspur", "Bayern Munich", "Borussia Dortmund",
      "Bayer Leverkusen", "Juventus", "AC Milan", "Inter Milan", "AS Roma",
      "Napoli", "Paris Saint-Germain", "Olympique de Marsella",
      "Olympique de Lyon", "AS Monaco", "Ajax", "Benfica", "Sporting CP", "Porto",
      "Boca Juniors", "River Plate", "Racing Club", "Independiente", "San Lorenzo",
      "Estudiantes de La Plata", "Newell's Old Boys", "Rosario Central",
      "Vélez Sarsfield", "Flamengo", "Fluminense", "São Paulo", "Santos",
      "Palmeiras", "Corinthians", "Grêmio", "Internacional", "Peñarol",
      "Nacional (Uruguay)", "Colo-Colo", "Universidad de Chile",
      "Atlético Nacional (Colombia)", "Millonarios (Colombia)"
    ]
  },
  sports: {
    name: "Deportes",
    prompt: "El deporte es:",
    items: [
      "Fútbol", "Básquetbol", "Tenis", "Vóley", "Balonmano", "Béisbol", "Rugby",
      "Hockey", "Golf", "Natación", "Atletismo", "Ciclismo", "Boxeo",
      "Artes marciales", "Judo", "Karate", "Taekwondo", "Esgrima", "Gimnasia",
      "Patinaje", "Esquí", "Snowboard", "Surf", "Remo", "Vela", "Piragüismo",
      "Escalada", "Montañismo", "Equitación", "Automovilismo", "Motociclismo",
      "Fórmula 1", "Tenis de mesa", "Bádminton", "Sóftbol", "Críquet", "Polo",
      "Halterofilia", "Lucha libre", "Skateboarding", "Parkour", "Bolos",
      "Petanca", "Dardos", "Ajedrez"
    ]
  },
  places: {
    name: "Países y Ciudades",
    prompt: "El país o la ciudad es:",
    items: [
      "Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Bolivia", "Perú",
      "Ecuador", "Colombia", "Venezuela", "México", "España", "Francia", "Italia",
      "Alemania", "Reino Unido", "Portugal", "Grecia", "Egipto", "Marruecos",
      "Sudáfrica", "India", "China", "Japón", "Corea del Sur", "Australia",
      "Nueva Zelanda", "Canadá", "Estados Unidos", "Rusia", "Turquía", "Tailandia",
      "Vietnam", "Indonesia", "Buenos Aires", "Córdoba", "Rosario",
      "Ciudad de México", "Madrid", "Barcelona", "París", "Roma", "Londres",
      "Berlín", "Tokio", "Nueva York", "Los Ángeles", "Río de Janeiro",
      "San Pablo", "Lima", "Santiago", "Bogotá", "Montevideo", "Ámsterdam",
      "Lisboa", "Estambul", "Dubái", "Sídney"
    ]
  },
  animals: {
    name: "Animales",
    prompt: "El animal es:",
    items: [
      "Perro", "Gato", "Elefante", "León", "Tigre", "Oso polar", "Pingüino",
      "Delfín", "Ballena azul", "Tiburón blanco", "Águila", "Búho", "Loro",
      "Cocodrilo", "Serpiente", "Tortuga", "Conejo", "Caballo", "Vaca", "Cerdo",
      "Oveja", "Cabra", "Gallina", "Jirafa", "Cebra", "Rinoceronte", "Hipopótamo",
      "Mono", "Chimpancé", "Gorila", "Panda", "Koala", "Canguro", "Lobo", "Zorro",
      "Ciervo", "Murciélago", "Rana", "Sapo", "Mariposa", "Abeja", "Hormiga",
      "Araña", "Pulpo", "Cangrejo", "Medusa", "Estrella de mar", "Camello",
      "Dromedario", "Llama", "Alpaca", "Armadillo", "Perezoso", "Puma", "Jaguar",
      "Flamenco", "Pavo real", "Avestruz", "Foca", "Morsa", "Castor", "Nutria",
      "Erizo", "Topo", "Halcón", "Cuervo", "Cisne", "Pelícano"
    ]
  },
  food: {
    name: "Comidas y Bebidas",
    prompt: "La comida o bebida es:",
    items: [
      "Pizza", "Hamburguesa", "Empanada", "Asado", "Milanesa", "Sushi", "Tacos",
      "Paella", "Lasagna", "Ravioles", "Choripán", "Locro", "Guiso", "Estofado",
      "Pollo al horno", "Puré de papas", "Papas fritas", "Ensalada", "Sopa",
      "Ceviche", "Arepa", "Tamales", "Feijoada", "Pasta", "Risotto",
      "Tortilla de patatas", "Gazpacho", "Croquetas", "Tapas", "Churros", "Flan",
      "Helado", "Torta de chocolate", "Panqueques", "Medialunas", "Alfajores",
      "Dulce de leche", "Mate", "Café", "Té", "Cerveza", "Vino", "Fernet",
      "Gaseosa", "Jugo de naranja", "Agua", "Milkshake", "Brownie", "Cheesecake",
      "Donas", "Galletitas"
    ]
  },
  professions: {
    name: "Profesiones",
    prompt: "La profesión es:",
    items: [
      "Médico", "Enfermero", "Profesor", "Abogado", "Ingeniero", "Arquitecto",
      "Programador", "Contador", "Bombero", "Policía", "Militar", "Piloto",
      "Astronauta", "Chef", "Panadero", "Carnicero", "Peluquero", "Dentista",
      "Veterinario", "Psicólogo", "Periodista", "Escritor", "Actor", "Músico",
      "Pintor", "Escultor", "Fotógrafo", "Diseñador", "Modista", "Carpintero",
      "Plomero", "Electricista", "Mecánico", "Albañil", "Jardinero", "Agricultor",
      "Ganadero", "Pescador", "Minero", "Cartero", "Taxista", "Colectivero",
      "Camionero", "Guardia de seguridad", "Recepcionista", "Vendedor",
      "Banquero", "Economista", "Científico", "Físico", "Químico", "Biólogo",
      "Historiador", "Filósofo", "Traductor", "Juez", "Político"
    ]
  },
  brands: {
    name: "Marcas",
    prompt: "La marca es:",
    items: [
      "Coca-Cola", "Pepsi", "Nike", "Adidas", "Puma", "Apple", "Samsung",
      "Google", "Microsoft", "Amazon", "Netflix", "McDonald's", "Burger King",
      "KFC", "Starbucks", "Subway", "Domino's", "Toyota", "Ford", "Chevrolet",
      "Volkswagen", "BMW", "Mercedes-Benz", "Ferrari", "Lamborghini", "Honda",
      "Yamaha", "Sony", "Nintendo", "Xbox", "PlayStation", "Lego", "Mattel",
      "Disney", "Gucci", "Louis Vuitton", "Zara", "H&M", "Chanel", "Rolex",
      "Red Bull", "Monster", "Corona", "Heineken", "Quilmes", "Arcor", "Bagley",
      "La Serenísima"
    ]
  },
  objects: {
    name: "Objetos Cotidianos",
    prompt: "El objeto es:",
    items: [
      "Cepillo de dientes", "Pasta de dientes", "Jabón", "Champú", "Toalla",
      "Espejo", "Peine", "Cuchillo", "Tenedor", "Cuchara", "Plato", "Vaso",
      "Taza", "Sartén", "Olla", "Horno", "Heladera", "Microondas", "Licuadora",
      "Tostadora", "Cafetera", "Lavadora", "Aspiradora", "Plancha", "Escoba",
      "Trapeador", "Balde", "Llave", "Cerradura", "Silla", "Mesa", "Cama",
      "Almohada", "Sábana", "Manta", "Armario", "Lámpara", "Reloj", "Teléfono",
      "Celular", "Computadora", "Televisor", "Control remoto", "Radio",
      "Auriculares", "Cargador", "Ventilador", "Aire acondicionado", "Calefactor",
      "Paraguas", "Mochila", "Billetera", "Cuaderno", "Lápiz", "Bolígrafo",
      "Tijeras", "Pegamento", "Regla"
    ]
  }
};

const $form = document.getElementById("settingsForm");
const $players = document.getElementById("players");
const $minutes = document.getElementById("minutes");
const $category = document.getElementById("category");
const $game = document.getElementById("game");
const $timer = document.getElementById("timer");
const $playerPill = document.getElementById("playerPill");
const $progressBar = document.getElementById("progressBar");
const $roleCard = document.getElementById("roleCard");
const $roleKicker = document.getElementById("roleKicker");
const $roleTitle = document.getElementById("roleTitle");
const $roleText = document.getElementById("roleText");
const $gameBtn = document.getElementById("gameBtn");
const $countdown = document.getElementById("countdown");
const $timerLabel = document.getElementById("timerLabel");
const $timerBar = document.getElementById("timerBar");
const $timerHint = document.getElementById("timerHint");
const $restartBtn = document.getElementById("restartBtn");
const $formError = document.getElementById("formError");

const state = {
  phase: "setup",
  players: 0,
  spy: 0,
  minutes: 2,
  category: null,
  secret: "",
  currentPlayer: 0,
  endTime: 0,
  totalTime: 0,
  timerId: null
};

const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];
const pad = (value) => String(value).padStart(2, "0");
let lastTimeText = "";

function setCountdown(text) {
  if (text !== lastTimeText) {
    $countdown.textContent = text;
    lastTimeText = text;
  }
}

function showError(message) {
  $formError.textContent = message;
  $formError.hidden = false;
}

function clearError() {
  $formError.textContent = "";
  $formError.hidden = true;
}

function setButton(label) {
  $gameBtn.textContent = label;
}

function updateProgress(value) {
  $progressBar.style.width = `${Math.round(value * 100)}%`;
}

function startGame() {
  clearError();

  const players = parseInt($players.value, 10);
  const minutes = parseInt($minutes.value, 10);
  const categoryKey = $category.value;
  const category = CATEGORIES[categoryKey];

  if (!Number.isInteger(players) || players < 3) {
    showError("Seleccioná al menos 3 jugadores.");
    return;
  }
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 60) {
    showError("La duración debe estar entre 1 y 60 minutos.");
    return;
  }
  if (!category || category.items.length === 0) {
    showError("La categoría seleccionada no está disponible.");
    return;
  }

  Object.assign(state, {
    phase: "pass",
    players,
    minutes,
    category,
    secret: pickRandom(category.items),
    spy: Math.floor(Math.random() * players) + 1,
    currentPlayer: 1,
    endTime: 0,
    totalTime: 0,
    timerId: null
  });

  $form.hidden = true;
  $timer.hidden = true;
  $game.hidden = false;
  renderPass();
}

function renderPass() {
  state.phase = "pass";
  $roleCard.classList.remove("is-spy");
  $roleKicker.textContent = "Pasa el dispositivo";
  $roleTitle.textContent = `Jugador ${state.currentPlayer}`;
  $roleText.textContent = "Asegurate de que nadie más mire la pantalla. Cuando estés listo, tocá el botón.";
  $playerPill.textContent = `Jugador ${state.currentPlayer} de ${state.players}`;
  updateProgress((state.currentPlayer - 1) / state.players);
  setButton("Ver mi rol");
}

function renderRole() {
  state.phase = "role";
  const isSpy = state.currentPlayer === state.spy;

  $roleCard.classList.toggle("is-spy", isSpy);
  $playerPill.textContent = `Jugador ${state.currentPlayer} de ${state.players}`;
  updateProgress(state.currentPlayer / state.players);

  if (isSpy) {
    $roleKicker.textContent = "Eres el espía";
    $roleTitle.textContent = "No conocés la palabra secreta";
    $roleText.textContent = "Escuchá con atención, improvisá y tratá de adivinar la palabra sin que te descubran.";
  } else {
    $roleKicker.textContent = state.category.prompt;
    $roleTitle.textContent = state.secret;
    $roleText.textContent = "Recordala y no la digas en voz alta ni la muestres a los demás.";
  }

  setButton(state.currentPlayer === state.players ? "Ocultar y finalizar" : "Ocultar y pasar");
}

function renderReady() {
  state.phase = "ready";
  $roleCard.classList.remove("is-spy");
  $playerPill.textContent = `${state.players} jugadores · ${state.minutes} min`;
  updateProgress(1);
  $roleKicker.textContent = "Todo listo";
  $roleTitle.textContent = "Todos los roles fueron asignados";
  $roleText.textContent = "Si el espía adivina la palabra secreta y la dice en voz alta, gana la partida. Si se equivoca o lo descubren, pierde.";
  setButton("Comenzar ronda");
}

function nextAction() {
  switch (state.phase) {
    case "pass":
      renderRole();
      break;
    case "role":
      if (state.currentPlayer >= state.players) {
        renderReady();
      } else {
        state.currentPlayer++;
        renderPass();
      }
      break;
    case "ready":
      startTimer();
      break;
    default:
      break;
  }
}

function formatTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  return `${pad(Math.floor(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;
}

function tick() {
  const remaining = Math.max(0, state.endTime - Date.now());

  setCountdown(formatTime(remaining));
  $timerBar.style.width = `${(remaining / state.totalTime) * 100}%`;
  $timer.classList.toggle("is-low", remaining <= 30000);

  if (remaining <= 0) {
    clearInterval(state.timerId);
    state.timerId = null;
    state.phase = "finished";
    $timerLabel.textContent = "Se terminó el tiempo";
    setCountdown("00:00");
    $timerBar.style.width = "0%";
    $timerHint.textContent = "Si nadie descubrió al espía, gana el espía.";
    $restartBtn.textContent = "Jugar de nuevo";
  }
}

function startTimer() {
  state.phase = "playing";
  state.totalTime = state.minutes * 60 * 1000;
  state.endTime = Date.now() + state.totalTime;

  $game.hidden = true;
  $timer.hidden = false;
  $timer.classList.remove("is-low");
  $timerLabel.textContent = "Tiempo restante";
  $timerHint.textContent = "Debatan, hagan preguntas y descubran al espía.";
  $restartBtn.textContent = "Nueva partida";
  lastTimeText = "";

  tick();
  state.timerId = setInterval(tick, 200);
}

function resetGame() {
  if (state.timerId) {
    clearInterval(state.timerId);
  }

  Object.assign(state, {
    phase: "setup",
    players: 0,
    spy: 0,
    minutes: 2,
    category: null,
    secret: "",
    currentPlayer: 0,
    endTime: 0,
    totalTime: 0,
    timerId: null
  });

  $timer.hidden = true;
  $game.hidden = true;
  $form.hidden = false;
  $timer.classList.remove("is-low");
  lastTimeText = "";
  clearError();
}

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  startGame();
});

$gameBtn.addEventListener("click", nextAction);
$restartBtn.addEventListener("click", resetGame);
