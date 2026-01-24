// Configuración Inicial
const CONFIG = {
    minPlayers: 3,
    maxPlayers: 20,
    minPlayers: 3,
    maxPlayers: 20,
    defaultPlayers: 4
};

// Nombres por defecto si no se rellenan
const DEFAULT_NAMES = ["Alex", "Sam", "Cris", "Dani", "Jo", "Max", "Leo", "Pau", "Kim", "Noa"];

// Base de Datos Ampliada con "Doble Engaño"
const DATABASE = [
    {
        category: 'Comida y Bebida',
        items: [
            { word: 'Pizza', decoy: 'Lasaña', hint: 'Masa con cosas encima' },
            { word: 'Sushi', decoy: 'Sashimi', hint: 'Comida japonesa' },
            { word: 'Tacos', decoy: 'Burrito', hint: 'Comida mexicana' },
            { word: 'Paella', decoy: 'Risotto', hint: 'Lleva arroz' },
            { word: 'Hamburguesa', decoy: 'Sandwich', hint: 'Carne entre panes' },
            { word: 'Helado', decoy: 'Yogurt', hint: 'Es postre frío' },
            { word: 'Chocolate', decoy: 'Caramelo', hint: 'Dulce muy popular' },
            { word: 'Donut', decoy: 'Croissant', hint: 'Bollo de repostería' },
            { word: 'Tortilla', decoy: 'Revuelto', hint: 'Se hace con huevos' },
            { word: 'Cerveza', decoy: 'Vino', hint: 'Bebida con alcohol' },
            { word: 'Café', decoy: 'Té', hint: 'Bebida con cafeína/teína' },
            { word: 'Palomitas', decoy: 'Patatas Fritas', hint: 'Snack de cine' }
        ]
    },
    {
        category: 'Lugares y Viajes',
        items: [
            { word: 'Playa', decoy: 'Piscina', hint: 'Hay agua para nadar' },
            { word: 'Montaña', decoy: 'Colina', hint: 'Lugar elevado natural' },
            { word: 'Cine', decoy: 'Teatro', hint: 'Se ven espectáculos' },
            { word: 'Biblioteca', decoy: 'Librería', hint: 'Hay muchos libros' },
            { word: 'Gimnasio', decoy: 'Parque', hint: 'Lugar para ejercitarse' },
            { word: 'Aeropuerto', decoy: 'Estación', hint: 'Para viajar lejos' },
            { word: 'Hospital', decoy: 'Farmacia', hint: 'Relacionado con salud' },
            { word: 'Zoológico', decoy: 'Acuario', hint: 'Lugar para ver animales' },
            { word: 'Museo', decoy: 'Galería', hint: 'Se expone arte o historia' },
            { word: 'Desierto', decoy: 'Sabana', hint: 'Lugar con poca agua' },
            { word: 'Selva', decoy: 'Bosque', hint: 'Lugar con mucha vegetación' },
            { word: 'Isla', decoy: 'Península', hint: 'Rodeado de mar' }
        ]
    },
    {
        category: 'Animales',
        items: [
            { word: 'Perro', decoy: 'Lobo', hint: 'Es un cánido' },
            { word: 'Gato', decoy: 'Tigre', hint: 'Es un felino' },
            { word: 'Elefante', decoy: 'Rinoceronte', hint: 'Animal grande y gris' },
            { word: 'León', decoy: 'Guepardo', hint: 'Rey de la selva' },
            { word: 'Delfín', decoy: 'Ballena', hint: 'Mamífero acuático' },
            { word: 'Pingüino', decoy: 'Pato', hint: 'Ave que nada' },
            { word: 'Águila', decoy: 'Halcón', hint: 'Ave rapaz' },
            { word: 'Canguro', decoy: 'Koala', hint: 'Animal de Australia' },
            { word: 'Serpiente', decoy: 'Lagarto', hint: 'Es un reptil' },
            { word: 'Tiburón', decoy: 'Orca', hint: 'Depredador marino' },
            { word: 'Abeja', decoy: 'Avispa', hint: 'Insecto volador' },
            { word: 'Caballo', decoy: 'Cebra', hint: 'Animal de cuatro patas' }
        ]
    },
    {
        category: 'Deportes',
        items: [
            { word: 'Fútbol', decoy: 'Futsal', hint: 'Se juega con los pies' },
            { word: 'Baloncesto', decoy: 'Voleibol', hint: 'Se juega con las manos y balón' },
            { word: 'Tenis', decoy: 'Pádel', hint: 'Usa raqueta/pala' },
            { word: 'Natación', decoy: 'Waterpolo', hint: 'Deporte en el agua' },
            { word: 'Boxeo', decoy: 'Karate', hint: 'Deporte de contacto' },
            { word: 'Golf', decoy: 'Hockey', hint: 'Se golpea una bola pequeña' },
            { word: 'Ciclismo', decoy: 'Motociclismo', hint: 'Deporte sobre ruedas' },
            { word: 'Ajedrez', decoy: 'Damas', hint: 'Deporte de mesa y mente' },
            { word: 'Surf', decoy: 'Skate', hint: 'Deporte sobre tabla' },
            { word: 'Rugby', decoy: 'Fútbol Americano', hint: 'Deporte de mucho contacto' }
        ]
    },
    {
        category: 'Entretenimiento y Ficción',
        items: [
            { word: 'Batman', decoy: 'Iron Man', hint: 'Héroe millonario' },
            { word: 'Superman', decoy: 'Thor', hint: 'Vuela y es muy fuerte' },
            { word: 'Spiderman', decoy: 'Deadpool', hint: 'Lleva traje rojo/traje ajustado' },
            { word: 'Wonder Woman', decoy: 'Capitana Marvel', hint: 'Heroína poderosa' },
            { word: 'Hulk', decoy: 'Shrek', hint: 'Es grande y verde' },
            { word: 'Flash', decoy: 'Sonic', hint: 'Es muy rápido' },
            { word: 'Harry Potter', decoy: 'Merlín', hint: 'Es un mago famoso' },
            { word: 'Darth Vader', decoy: 'Voldemort', hint: 'Villano icónico' },
            { word: 'Mickey Mouse', decoy: 'Bugs Bunny', hint: 'Personaje de dibujos animados' },
            { word: 'Mario Bros', decoy: 'Sonic', hint: 'Personaje de videojuegos' },
            { word: 'Pikachu', decoy: 'Agumon', hint: 'Criatura que evoluciona' }
        ]
    },
    {
        category: 'Tecnología',
        items: [
            { word: 'Smartphone', decoy: 'Tablet', hint: 'Dispositivo portátil con pantalla' },
            { word: 'Internet', decoy: 'Bluetooth', hint: 'Sirve para conectar cosas' },
            { word: 'WhatsApp', decoy: 'Telegram', hint: 'App de mensajería' },
            { word: 'Instagram', decoy: 'TikTok', hint: 'Red social visual' },
            { word: 'Bitcoin', decoy: 'Euro', hint: 'Es un tipo de moneda' },
            { word: 'Netflix', decoy: 'YouTube', hint: 'Plataforma para ver vídeo' },
            { word: 'Teclado', decoy: 'Ratón', hint: 'Periférico de ordenador' },
            { word: 'Cámara', decoy: 'Telescopio', hint: 'Sirve para ver o capturar imágenes' },
            { word: 'Robot', decoy: 'IA', hint: 'Tecnología avanzada' }
        ]
    },
    {
        category: 'Profesiones',
        items: [
            { word: 'Médico', decoy: 'Enfermero', hint: 'Trabaja en un hospital' },
            { word: 'Bombero', decoy: 'Policía', hint: 'Lleva uniforme de servicio' },
            { word: 'Profesor', decoy: 'Alumno', hint: 'Está en un colegio' },
            { word: 'Cocinero', decoy: 'Camarero', hint: 'Trabaja con comida' },
            { word: 'Astronauta', decoy: 'Piloto', hint: 'Maneja naves o vehículos' },
            { word: 'Pintor', decoy: 'Escultor', hint: 'Es un artista' },
            { word: 'Arquitecto', decoy: 'Ingeniero', hint: 'Diseña y construye cosas' },
            { word: 'Juez', decoy: 'Abogado', hint: 'Trabaja en un juzgado' }
        ]
    },
    {
        category: 'Cosas de Casa',
        items: [
            { word: 'Nevera', decoy: 'Congelador', hint: 'Electrodoméstico de cocina' },
            { word: 'Cama', decoy: 'Sofá', hint: 'Sirve para descansar' },
            { word: 'Ducha', decoy: 'Bañera', hint: 'Para el aseo personal' },
            { word: 'Televisión', decoy: 'Monitor', hint: 'Tiene pantalla' },
            { word: 'Microondas', decoy: 'Horno', hint: 'Sirve para calentar comida' },
            { word: 'Espejo', decoy: 'Ventana', hint: 'Es de cristal' },
            { word: 'Lámpara', decoy: 'Vela', hint: 'Sirve para iluminar' },
            { word: 'Reloj', decoy: 'Calendario', hint: 'Sirve para medir el tiempo' }
        ]
    },
    {
        category: 'Mitología y Fantasía',
        items: [
            { word: 'Dragón', decoy: 'Dinosaurio', hint: 'Criatura gigante escamosa' },
            { word: 'Vampiro', decoy: 'Zombie', hint: 'Ser fantástico inmortal' },
            { word: 'Sirena', decoy: 'Hada', hint: 'Criatura con rasgos humanos' },
            { word: 'Unicornio', decoy: 'Caballo', hint: 'Animal con cuatro patas' },
            { word: 'Pirata', decoy: 'Vikingo', hint: 'Guerrero del mar' },
            { word: 'Fantasma', decoy: 'Espíritu', hint: 'Aparece en casas encantadas' },
            { word: 'Hombre Lobo', decoy: 'Yeti', hint: 'Criatura legendaria' },
            { word: 'Genio', decoy: 'Mago', hint: 'Puede conceder deseos' }
        ]
    },
    {
        category: 'Música e Instrumentos',
        items: [
            { word: 'Guitarra', decoy: 'Ukelele', hint: 'Instrumento de cuerda' },
            { word: 'Piano', decoy: 'Órgano', hint: 'Instrumento con teclas' },
            { word: 'Batería', decoy: 'Tambor', hint: 'Instrumento de percusión' },
            { word: 'Cantante', decoy: 'Rapero', hint: 'Persona que usa su voz' },
            { word: 'Rock', decoy: 'Heavy Metal', hint: 'Género musical movido' },
            { word: 'Violín', decoy: 'Violonchelo', hint: 'Se toca con arco' }
        ]
    },
    {
        category: 'Ciencia y Universo',
        items: [
            { word: 'Sol', decoy: 'Estrella', hint: 'Cuerpo celeste brillante' },
            { word: 'Luna', decoy: 'Satélite', hint: 'Se ve de noche en el cielo' },
            { word: 'Marte', decoy: 'Júpiter', hint: 'Es un planeta' },
            { word: 'Gravedad', decoy: 'Magnetismo', hint: 'Fuerza de la naturaleza' },
            { word: 'Átomo', decoy: 'Célula', hint: 'Algo muy pequeño' },
            { word: 'Telescopio', decoy: 'Microscopio', hint: 'Sirve para observar' }
        ]
    },
    {
        category: 'Concellos de Galicia',
        items: [
            { word: 'Vilagarcía de Arousa', decoy: 'Vilanova de Arousa', hint: 'Concello na beira da ría de Arousa' },
            { word: 'Catoira', decoy: 'Padrón', hint: 'Concello famoso polas súas torres ou relación co río Ulla' },
            { word: 'Caldas de Reis', decoy: 'Cuntis', hint: 'Concello con moita tradición de augas termais' },
            { word: 'Ferrol', decoy: 'Fene', hint: 'Concello con ría e moita historia naval' },
            { word: 'Cambados', decoy: 'O Grove', hint: 'Concello das Rías Baixas con moita sona polo viño ou marisco' },
            { word: 'Pontecesures', decoy: 'Valga', hint: 'Concello que fai fronteira entre provincias' },
            { word: 'Sanxenxo', decoy: 'Portonovo', hint: 'Lugar de moito turismo e praia no verán' },
            { word: 'Silleda', decoy: 'Vila de Cruces', hint: 'Concello do interior con feiras ou fervenzas' },
            { word: 'Rianxo', decoy: 'Boiro', hint: 'Concello mariñeiro na banda norte da ría' },
            { word: 'A Estrada', decoy: 'Santiago de Compostela', hint: 'Concello grande pola zona centro de Galicia' }
        ]
    },
    {
        category: 'Concellos e Cidades',
        items: [
            { word: 'Vigo', decoy: 'A Coruña', hint: 'Unha das grandes cidades de Galicia' },
            { word: 'Santiago de Compostela', decoy: 'Lugo', hint: 'Cidade con moita historia e muralla ou catedral' },
            { word: 'Ourense', decoy: 'Pontevedra', hint: 'Cidade galega con zona vella importante' },
            { word: 'Sanxenxo', decoy: 'O Grove', hint: 'Concello turístico nas Rías Baixas' },
            { word: 'Vilagarcía de Arousa', decoy: 'Cambados', hint: 'Concello na ría de Arousa' },
            { word: 'Ferrol', decoy: 'Narón', hint: 'Concello con gran tradición naval ou industrial' },
            { word: 'Viveiro', decoy: 'Ribadeo', hint: 'Concello da Mariña Lucense' },
            { word: 'Cangas', decoy: 'Moaña', hint: 'Concello na península do Morrazo' },
            { word: 'A Estrada', decoy: 'Lalín', hint: 'Concello do interior da provincia de Pontevedra' },
            { word: 'Baiona', decoy: 'Nigrán', hint: 'Concello costeiro cerca de Vigo' },
            { word: 'Carballo', decoy: 'Oleiros', hint: 'Concello con moita poboación na provincia da Coruña' },
            { word: 'Monforte de Lemos', decoy: 'Sarria', hint: 'Concello importante no interior de Lugo' },
            { word: 'O Carballiño', decoy: 'Ribadavia', hint: 'Concello famoso pola súa gastronomía ou viño' },
            { word: 'Tui', decoy: 'A Guarda', hint: 'Concello na fronteira con Portugal ou no Baixo Miño' },
            { word: 'Arteixo', decoy: 'Culleredo', hint: 'Concello da área metropolitana da Coruña' }
        ]
    }
];

// Estado del Juego
let gameState = {
    players: 4,
    impostors: 1,
    impostors: 1,
    mode: 'classic', // classic, confusion, spy, unconscious
    currentTurn: 0,
    roles: [],
    roles: [],
    playerNames: [], // Array de nombres reales
    currentRoundData: null, // { category, word, decoy, hint }
    timerInterval: null,
    timerSeconds: 0,
    expressActive: false,
    expressTurnIndex: 0, // Index within alivePlayers array
    alivePlayers: [] // Array of original player indices
};

// Elementos DOM
const dom = {
    views: {
        home: document.getElementById('home-view'),
        players: document.getElementById('players-view'),
        rules: document.getElementById('rules-view'),
        pass: document.getElementById('pass-view'),
        reveal: document.getElementById('reveal-view'),
        game: document.getElementById('game-view'),
        voting: document.getElementById('voting-view')
    },
    home: {
        btnLocal: document.getElementById('btn-mode-local'),
        btnOnline: document.getElementById('btn-mode-online')
    },
    players: {
        playerCount: document.getElementById('player-count'),
        playersList: document.getElementById('players-list'),
        btnDec: document.getElementById('btn-dec-players'),
        btnInc: document.getElementById('btn-inc-players'),
        btnNext: document.getElementById('btn-next-rules')
    },
    rules: {
        segments: document.querySelectorAll('.segment'),
        modeSelect: document.getElementById('game-mode'),
        modeDesc: document.getElementById('mode-description'),
        timerSelect: document.getElementById('timer-setting'),
        expressCheck: document.getElementById('express-mode'),
        btnStart: document.getElementById('btn-start')
    },
    pass: {
        playerNum: document.getElementById('current-player-num'),
        btnReveal: document.getElementById('btn-reveal')
    },
    reveal: {
        card: document.getElementById('role-card-content'),
        btnHide: document.getElementById('btn-hide')
    },
    game: {
        timer: document.getElementById('timer-display'),
        statusText: document.getElementById('game-status-text'),
        expressUI: document.getElementById('express-ui'),
        expressSelection: document.getElementById('express-start-selection'),
        expressStartList: document.getElementById('express-start-list'),
        expressActiveGame: document.getElementById('express-active-game'),
        expressName: document.getElementById('express-player-name'),
        btnExpressNext: document.getElementById('btn-express-next'),
        btnExpressVote: document.getElementById('btn-express-vote'),
        btnVote: document.getElementById('btn-start-vote'),
        btnNew: document.getElementById('btn-new-game'),
        btnHome: document.getElementById('btn-home')
    },
    voting: {
        grid: document.getElementById('voting-grid')
    }
};

// Init
generatePlayerInputs();

// Home Listeners
dom.home.btnLocal.addEventListener('click', () => switchView('players'));
dom.home.btnOnline.addEventListener('click', () => {
    alert('Esta funcionalidad estará disponible pronto. Jueguen en modo "Un solo móvil" mientras tanto.');
});

// Navigation Listeners
document.getElementById('btn-back-home').addEventListener('click', () => switchView('home'));
dom.players.btnNext.addEventListener('click', () => switchView('rules'));
document.getElementById('btn-back-players').addEventListener('click', () => switchView('players'));

// Setup Listeners
dom.players.btnDec.addEventListener('click', () => updatePlayers(-1));
dom.players.btnInc.addEventListener('click', () => updatePlayers(1));
dom.rules.segments.forEach(seg => seg.addEventListener('click', (e) => setImpostors(e.target)));
dom.rules.modeSelect.addEventListener('change', updateModeDescription);
dom.rules.btnStart.addEventListener('click', startGame);

dom.pass.btnReveal.addEventListener('click', showRole);
dom.reveal.btnHide.addEventListener('click', nextTurn);

dom.game.btnExpressNext.addEventListener('click', nextExpressTurn);
dom.game.btnExpressVote.addEventListener('click', startVotingPhase);
dom.game.btnVote.addEventListener('click', startVotingPhase);
dom.game.btnNew.addEventListener('click', () => switchView('players'));
dom.game.btnHome.addEventListener('click', () => switchView('home'));

// Funciones de Configuración
function updatePlayers(change) {
    let newVal = gameState.players + change;
    if (newVal >= CONFIG.minPlayers && newVal <= CONFIG.maxPlayers) {
        gameState.players = newVal;
        dom.players.playerCount.textContent = gameState.players;
        generatePlayerInputs();
        updateImpostorOptions(); // Refresh options based on count
    }
}

function generatePlayerInputs() {
    const list = dom.players.playersList;
    list.innerHTML = '';

    for (let i = 0; i < gameState.players; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Jugador ${i + 1}`;
        input.id = `player-input-${i}`;
        // Pre-fill solo para demo si se desea, aquí lo dejamos vacío o con placeholder
        list.appendChild(input);
    }
}

// Updates the segmented control buttons based on player count
function updateImpostorOptions() {
    const container = document.querySelector('.segmented-control');
    const currentSelection = gameState.impostors;

    // Base buttons
    let html = `
        <button class="segment ${currentSelection === 1 ? 'active' : ''}" data-impostors="1">1</button>
        <button class="segment ${currentSelection === 2 ? 'active' : ''}" data-impostors="2">2</button>
    `;

    // Add '3' option if players >= 6
    if (gameState.players >= 6) {
        html += `<button class="segment ${currentSelection === 3 ? 'active' : ''}" data-impostors="3">3</button>`;
    }

    // Add Random
    html += `<button class="segment ${currentSelection === 'random' ? 'active' : ''}" data-impostors="random"><i class="fa-solid fa-shuffle"></i></button>`;

    container.innerHTML = html;

    // Re-attach listeners because we replaced innerHTML
    container.querySelectorAll('.segment').forEach(seg => {
        seg.addEventListener('click', (e) => setImpostors(e.target));
    });
}

function setImpostors(target) {
    // Traverse up to find the button if icon was clicked
    const btn = target.closest('.segment');
    if (!btn) return;

    // Remove active class from neighbors (manual handling since we replaced references)
    const allSegments = btn.parentElement.querySelectorAll('.segment');
    allSegments.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');

    const val = btn.dataset.impostors;
    gameState.impostors = val === 'random' ? 'random' : parseInt(val);
}

function updateModeDescription() {
    gameState.mode = dom.rules.modeSelect.value;
    const descriptions = {
        classic: 'Clásico: Impostor tiene una pista genérica para ayudarse.',
        confusion: 'Confusión: Impostor tiene una palabra falsa muy parecida.',
        spy: 'Espía: Impostor NO tiene ayudas. Dificultad Máxima.',
        unconscious: 'Inconsciente: Impostor cree que es Aliado (palabra falsa).'
    };
    dom.rules.modeDesc.querySelector('span').textContent = descriptions[gameState.mode];
}

// Lógica del Juego
function startGame() {
    // gameState.hintType removed, driven by mode now
    // Store Timer & Express Setting
    gameState.timerSetting = dom.rules.timerSelect.value;
    gameState.expressActive = dom.rules.expressCheck.checked;

    // 0. Recoger nombres
    gameState.playerNames = [];
    gameState.alivePlayers = []; // Reset alive players
    for (let i = 0; i < gameState.players; i++) {
        const val = document.getElementById(`player-input-${i}`).value.trim();
        gameState.playerNames.push(val || `Jugador ${i + 1}`);
        gameState.alivePlayers.push(i); // All alive at start
    }

    // 1. Seleccionar Categoria y Palabra
    const catData = DATABASE[Math.floor(Math.random() * DATABASE.length)];
    const itemData = catData.items[Math.floor(Math.random() * catData.items.length)];

    gameState.currentRoundData = {
        category: catData.category,
        word: itemData.word,
        decoy: itemData.decoy,
        hint: itemData.hint
    };

    // 2. Definir Roles
    // 2. Definir Roles
    let numImpostors;
    if (gameState.impostors === 'random') {
        // Random Logic Updated
        // If players >= 6, Random can be 1 to 5 (or max safe limit)
        // Safe limit is usually players - 1, but for game balance let's stick to user request:
        // "que pueda ser de 1 a 5 en caso de 6" -> Wait, 5 impostors in 6 players means only 1 ally? That's chaotic!
        // Assuming user means standard game logic but with higher cap.

        // Let's cap max to (Players - 1) to ensure at least 1 ally.
        let maxPossible = gameState.players - 1;
        let maxLimit = gameState.players >= 6 ? 5 : Math.floor((gameState.players - 1) / 2); // Classic rule for small groups

        // Actually user requested: "random que podrá ser de 1 a 5 en caso de 6"
        // Let's respect the upper bound request but keep it physically possible.
        let effectiveMax = Math.min(maxPossible, (gameState.players >= 6 ? 5 : Math.max(1, Math.floor((gameState.players - 1) / 2))));

        numImpostors = Math.floor(Math.random() * effectiveMax) + 1;
    } else {
        numImpostors = gameState.impostors;
    }

    // Safety check
    if (numImpostors >= gameState.players) numImpostors = gameState.players - 1;

    let roles = Array(gameState.players).fill('ally');
    let assigned = 0;

    // EASTER EGG: Martin/Martín is always Impostor
    gameState.playerNames.forEach((name, index) => {
        if (assigned < numImpostors) {
            const lowerName = name.toLowerCase().trim();
            if (lowerName === 'martin' || lowerName === 'martín') {
                roles[index] = 'impostor';
                assigned++;
            }
        }
    });

    while (assigned < numImpostors) {
        let idx = Math.floor(Math.random() * gameState.players);
        if (roles[idx] === 'ally') {
            roles[idx] = 'impostor';
            assigned++;
        }
    }

    gameState.roles = roles;
    gameState.currentTurn = 0;

    gameState.currentTurn = 0;

    switchView('pass');
    updatePassView();
}

// Swipe logic removed

function updatePassView() {
    const name = gameState.playerNames[gameState.currentTurn];
    dom.pass.playerNum.textContent = name;
}

function showRole() {
    const role = gameState.roles[gameState.currentTurn];
    let isImpostor = role === 'impostor'; // Mutable for unconscious mode logic
    const data = gameState.currentRoundData;

    // Determine content variables
    let impostorContent = '';
    let roleTitle = 'ALIADO';
    let roleIcon = 'fa-mask';
    let themeClass = '';

    // Reset classes
    dom.reveal.card.className = 'role-card';

    // SPECIAL MODE: UNCONSCIOUS
    // If Unconscious mode, the impostor MUST see the Ally screen with the Decoy word.
    if (gameState.mode === 'unconscious' && isImpostor) {
        // We pretend they are NOT an impostor for the UI
        // They get the Decoy word as if it were the real 'word'
        // Theme stays default
        roleTitle = 'ALIADO';
        roleIcon = 'fa-mask';

        // Show Decoy as their word
        const allyInstruction = 'Di una palabra relacionada.';
        const allyContent = `
             <p class="role-subtitle">Tema: ${data.category}</p>
             <div class="secret-word-box">${data.decoy}</div>
             <p class="instruction">${allyInstruction}</p>
        `;

        dom.reveal.card.innerHTML = `
            <div class="${themeClass}">
                <i class="fa-solid ${roleIcon} role-icon"></i>
                <h2>${roleTitle}</h2>
                ${allyContent}
            </div>
        `;
        switchView('reveal');
        return; // Exit early
    }

    if (isImpostor) {
        dom.reveal.card.classList.add('impostor-theme');
        themeClass = 'impostor-theme';
        roleIcon = 'fa-user-secret';
        roleTitle = 'ERES EL IMPOSTOR';

        // Haptic Feedback only if they KNOW they are impostor
        if (navigator.vibrate) navigator.vibrate(200);

        if (gameState.mode === 'spy') {
            // SPY MODE: No hints
            impostorContent = `
                <div class="secret-word-box">???</div>
                <p class="instruction">No sabes la palabra. ¡Miente!</p>
            `;
        }
        else if (gameState.mode === 'classic') {
            // CLASSIC: Generic Hint
            impostorContent = `
                <p class="role-subtitle">Pista:</p>
                <div class="secret-word-box" style="font-size: 1.5rem">${data.hint}</div>
                <p class="instruction">Úsala para guiarte.</p>
            `;
        }
        else if (gameState.mode === 'confusion') {
            // CONFUSION: Decoy Word but knows it's fake
            impostorContent = `
                <p class="role-subtitle">Palabra Señuelo:</p>
                <div class="secret-word-box">${data.decoy}</div>
                <p class="instruction">¡Es falsa! Úsala para confundir.</p>
            `;
        }
    }

    // Prepare Ally Content (fallback if not impostor)
    const allyInstruction = 'Di una palabra relacionada.';
    const allyContent = `
         <p class="role-subtitle">Tema: ${data.category}</p>
         <div class="secret-word-box">${data.word}</div>
         <p class="instruction">${allyInstruction}</p>
    `;

    // Render to Card
    // Using dom.reveal.card
    dom.reveal.card.innerHTML = `
        <i class="fa-solid ${roleIcon} role-icon"></i>
        <h2>${roleTitle}</h2>
        ${isImpostor ? impostorContent : allyContent}
    `;

    switchView('reveal');
}

function nextTurn() {
    gameState.currentTurn++;
    if (gameState.currentTurn < gameState.players) {
        updatePassView();
        switchView('pass');
    } else {
        startMainGame();
    }
}

function startMainGame() {
    switchView('game');

    // Check mode
    if (gameState.expressActive) {
        startExpressPhase();
    } else {
        startDebatePhase();
    }
}

function startExpressPhase() {
    // Initialize Alive Players
    gameState.alivePlayers = [];
    for (let i = 0; i < gameState.players; i++) {
        gameState.alivePlayers.push(i);
    }

    // UI Setup: Show Selection Screen
    dom.game.statusText.style.display = 'none';
    dom.game.expressUI.classList.remove('hidden');
    dom.game.expressSelection.classList.remove('hidden');
    dom.game.expressActiveGame.classList.add('hidden');

    // Populate List
    const list = dom.game.expressStartList;
    list.innerHTML = '';

    gameState.alivePlayers.forEach((playerIdx) => {
        const name = gameState.playerNames[playerIdx];
        const btn = document.createElement('button');
        btn.className = 'btn-secondary';
        btn.style.marginTop = '0';
        btn.textContent = name;
        btn.onclick = () => selectExpressStarter(playerIdx);
        list.appendChild(btn);
    });
}

function selectExpressStarter(realIndex) {
    // Find index in alivePlayers array (should match initially)
    gameState.expressTurnIndex = gameState.alivePlayers.indexOf(realIndex);

    // Switch to Active Game UI
    dom.game.expressSelection.classList.add('hidden');
    dom.game.expressActiveGame.classList.remove('hidden');

    runExpressTurn();
}

function runExpressTurn() {
    // 1. Check Win Condition: Impostor Win (Low count)
    if (gameState.alivePlayers.length <= 2) {
        // Check if impostor is among them.
        const impostorAlive = gameState.alivePlayers.some(idx => gameState.roles[idx] === 'impostor');
        if (impostorAlive) {
            endGame("IMPOSTORES GANAN", "Quedaron solo 2 jugadores.", 'impostors');
            return;
        }
    }

    // Get real player index
    const realPlayerIdx = gameState.alivePlayers[gameState.expressTurnIndex];
    const name = gameState.playerNames[realPlayerIdx];

    dom.game.expressName.textContent = name;

    // Timer 10s
    clearInterval(gameState.timerInterval);
    gameState.timerSeconds = 10;
    updateTimerDisplay();

    // Visual Cue
    dom.game.timer.style.color = 'var(--accent-green)';

    gameState.timerInterval = setInterval(() => {
        gameState.timerSeconds--;
        updateTimerDisplay();

        if (gameState.timerSeconds <= 0) {
            // TIME UP -> ELIMINATION
            clearInterval(gameState.timerInterval);
            eliminateCurrentPlayer();
        }
    }, 1000);
}

function nextExpressTurn() {
    // Stop Timer
    clearInterval(gameState.timerInterval);

    // Advance Cyclic
    gameState.expressTurnIndex++;
    if (gameState.expressTurnIndex >= gameState.alivePlayers.length) {
        gameState.expressTurnIndex = 0;
    }

    runExpressTurn();
}

function eliminateCurrentPlayer() {
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 500]);

    const realIdx = gameState.alivePlayers[gameState.expressTurnIndex];
    const name = gameState.playerNames[realIdx];

    // 1. Remove Player logic
    // Show elimination message first
    dom.game.expressName.innerHTML = `<span style="color:red">¡ELIMINADO!</span><br>${name}`;

    // Remove from active list
    gameState.alivePlayers.splice(gameState.expressTurnIndex, 1);

    // Adjust index for next turn
    if (gameState.expressTurnIndex >= gameState.alivePlayers.length) {
        gameState.expressTurnIndex = 0;
    }

    // 2. Check Win Conditions (AFTER removal)
    const remainingImpostors = gameState.alivePlayers.filter(idx => gameState.roles[idx] === 'impostor').length;

    if (remainingImpostors === 0) {
        // ALLIES WIN (No impostors left)
        endGame("ALIADOS GANAN", "¡Todos los impostores han sido eliminados!", 'allies');
        return;
    }

    if (gameState.alivePlayers.length <= 2) {
        // IMPOSTOR WINS (1 Impostor vs 1 Ally typical case)
        // Since we checked remainingImpostors != 0 above, we know there is at least 1.
        endGame("IMPOSTORES GANAN", "Quedan demasiados pocos jugadores.", 'impostors');
        return;
    }

    // 3. Continue Game
    setTimeout(() => {
        runExpressTurn();
    }, 2000);
}

function endGame(title, message, winner) {
    switchView('game'); // Ensure we are on the game view
    dom.game.expressUI.classList.add('hidden');
    dom.game.statusText.style.display = 'block';
    dom.game.btnVote.style.display = 'none'; // Hide vote button

    dom.game.timer.textContent = "";

    // Color Logic
    const titleColor = winner === 'allies' ? 'var(--accent-blue)' : 'var(--primary)';

    dom.game.statusText.innerHTML = `
        <strong style="font-size:2.5rem; color:${titleColor}; text-transform:uppercase; display:block; margin-bottom:10px;">${title}</strong>
        <p style="font-size:1.1rem; color:var(--text-muted); margin-bottom:30px;">${message}</p>
    `;

    // Reveal all roles - Cleaner Layout
    let revealHtml = '<div style="background:rgba(255,255,255,0.05); border-radius:16px; padding:20px; text-align:left;">';

    gameState.playerNames.forEach((n, i) => {
        const r = gameState.roles[i];
        const isImp = r === 'impostor';

        revealHtml += `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
                <span style="font-weight:600; font-size:1.1rem;">${n}</span>
                <span style="color:${isImp ? 'var(--primary)' : 'var(--accent-blue)'}; font-weight:700; letter-spacing:1px;">
                    ${isImp ? 'IMPOSTOR' : 'ALIADO'}
                </span>
            </div>
        `;
    });
    revealHtml += '</div>';

    dom.game.statusText.innerHTML += revealHtml;
}

function startDebatePhase() {
    clearInterval(gameState.timerInterval);
    dom.game.expressUI.classList.add('hidden');
    dom.game.statusText.style.display = 'block';
    dom.game.statusText.textContent = '¡Votación / Debate Libre!';
    dom.game.btnVote.style.display = ''; // Restore vote button

    dom.game.timer.style.color = ''; // Reset color
    // Start standard timer simply for tracking deliberation
    if (gameState.timerSetting !== 'infinite') {
        gameState.timerSeconds = parseInt(gameState.timerSetting);
        startTimer();
    } else {
        dom.game.timer.textContent = '∞';
    }
}

// VOTING LOGIC
function startVotingPhase() {
    clearInterval(gameState.timerInterval); // Stop game timer
    switchView('voting');
    renderVotingGrid();
}

function renderVotingGrid() {
    const grid = dom.voting.grid;
    grid.innerHTML = '';

    gameState.alivePlayers.forEach(playerIdx => {
        const name = gameState.playerNames[playerIdx];

        const card = document.createElement('div');
        card.className = 'voting-card';
        card.style.background = 'rgba(255,255,255,0.1)';
        card.style.padding = '20px';
        card.style.borderRadius = '16px';
        card.style.textAlign = 'center';
        card.style.cursor = 'pointer';
        card.style.border = '2px solid rgba(255,255,255,0.2)';

        card.innerHTML = `<h3 style="font-size:1.2rem; pointer-events:none;">${name}</h3>`;

        card.onclick = () => handleVote(playerIdx, card);
        grid.appendChild(card);
    });
}

function handleVote(playerIdx, cardElement) {
    if (navigator.vibrate) navigator.vibrate(50);

    // Reveal Role
    const role = gameState.roles[playerIdx];
    const isImpostor = role === 'impostor';

    cardElement.style.transition = 'all 0.5s';
    cardElement.style.transform = 'rotateY(180deg)';
    cardElement.style.background = isImpostor ? 'var(--primary)' : 'var(--accent-green)';
    cardElement.style.borderColor = isImpostor ? 'var(--primary)' : 'var(--accent-green)';

    // Flip content (simplified visual)
    cardElement.innerHTML = `
        <i class="fa-solid ${isImpostor ? 'fa-user-secret' : 'fa-check'}" style="font-size:2rem; color:white; transform:rotateY(180deg);"></i>
        <p style="transform:rotateY(180deg); font-weight:bold; margin-top:5px; color:white;">${isImpostor ? 'IMPOSTOR' : 'ALIADO'}</p>
    `;

    // Wait and Eliminate
    setTimeout(() => {
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'scale(0)';

        setTimeout(() => {
            eliminatePlayerById(playerIdx);
        }, 500);
    }, 1500);
}

function eliminatePlayerById(playerIdx) {
    // Remove from alive list
    const indexInAlive = gameState.alivePlayers.indexOf(playerIdx);
    if (indexInAlive > -1) {
        gameState.alivePlayers.splice(indexInAlive, 1);
    }

    // Check Win Conditions
    const remainingImpostors = gameState.alivePlayers.filter(idx => gameState.roles[idx] === 'impostor').length;

    if (remainingImpostors === 0) {
        endGame("ALIADOS GANAN", "¡Todos los impostores han sido eliminados!", 'allies');
        return;
    }

    if (gameState.alivePlayers.length <= 2) {
        endGame("IMPOSTORES GANAN", "Quedan demasiados pocos jugadores.", 'impostors');
        return;
    }

    // Re-render grid (to remove the empty space / shuffle layout)
    renderVotingGrid();
}

// Timer Logic
function startTimer() {
    clearInterval(gameState.timerInterval);

    if (gameState.timerSetting === 'infinite') {
        dom.game.timer.textContent = '∞';
        // Optional: Pulse animation or static
        return;
    }

    gameState.timerSeconds = parseInt(gameState.timerSetting);
    updateTimerDisplay();

    gameState.timerInterval = setInterval(() => {
        gameState.timerSeconds--;
        updateTimerDisplay();

        if (gameState.timerSeconds <= 0) {
            clearInterval(gameState.timerInterval);
            dom.game.timer.textContent = "00:00";
            // Alarm or visual cue could be added here
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(gameState.timerSeconds / 60).toString().padStart(2, '0');
    const secs = (gameState.timerSeconds % 60).toString().padStart(2, '0');
    dom.game.timer.textContent = `${mins}:${secs}`;
}

// Navegación
function switchView(viewName) {
    Object.values(dom.views).forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });

    const target = dom.views[viewName];
    target.classList.remove('hidden');
    void target.offsetWidth;
    target.classList.add('active');
}
