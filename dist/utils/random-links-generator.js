import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('1234567890', 4);
const english_words_list = [
    "ability", "able", "aboard", "about", "above", "accept", "accident", "according",
    "account", "accurate", "acres", "across", "act", "action", "active", "activity",
    "actual", "actually", "add", "addition", "additional", "adjective", "adult", "adventure",
    "advice", "affect", "afraid", "after", "afternoon", "again", "against", "age",
    "ago", "agree", "ahead", "aid", "air", "airplane", "alike", "alive",
    "all", "allow", "almost", "alone", "along", "aloud", "alphabet", "already",
    "also", "although", "am", "among", "boat", "body", "bone", "book", "border", "born",
    "both", "bottle", "bottom", "bound", "bow", "bowl", "box", "boy",
    "brain", "branch", "brass", "brave", "bread", "break", "breakfast", "breath",
    "breathe", "breathing", "breeze", "brick", "bridge", "brief", "bright", "bring",
    "broad", "broke", "broken", "brother", "brought", "brown", "brush", "buffalo",
    "build", "building", "built", "buried", "burn", "burst", "bus", "bush",
    "business", "busy", "but", "butter", "buy", "by", "cabin", "cage",
    "cake", "call", "calm", "came", "club", "coach", "coal", "coast", "coat", "coffee",
    "cold", "collect", "college", "colony", "color", "column", "combination", "combine",
    "come", "comfortable", "coming", "command", "common", "community", "company", "compare",
    "compass", "complete", "completely", "complex", "composed", "composition", "compound", "concerned",
    "condition", "congress", "connected", "consider", "consist", "consonant", "constantly", "construction",
    "contain", "continent", "continued", "contrast", "control", "conversation", "cook", "cookies",
    "cool", "copper", "copy", "corn", "corner", "correct", "correctly", "cost",
    "cotton", "could", "count", "country", "couple", "courage", "course", "court",
    "cover", "cow", "cowboy", "crack", "cream", "create", "creature", "crew",
    "crop", "cross", "crowd", "cry", "cup", "curious", "current", "curve",
    "customs", "cut", "cutting", "daily", "done", "donkey", "door",
    "dot", "double", "doubt", "down", "dozen", "draw", "drawn", "dream",
    "dress", "drew", "dried", "drink", "drive", "driven", "driver", "driving",
    "drop", "dropped", "drove", "dry", "duck", "due", "dug", "dull",
    "during", "dust", "duty", "each", "eager", "ear", "earlier", "early",
    "earn", "earth", "easier", "easily", "east", "easy", "eat", "eaten",
    "edge", "education", "effect", "effort", "egg", "eight", "either", "electric",
    "electricity", "element", "elephant", "eleven", "else", "empty", "end", "enemy",
    "energy", "engine", "engineer", "enjoy", "enough", "enter", "entire", "entirely",
    "environment", "equal", "equally", "equator", "equipment", "escape", "especially", "essential",
    "establish", "even", "evening", "event", "eventually", "ever", "every", "everybody",
    "everyone", "everything", "everywhere", "evidence", "exact", "exactly", "examine", "example",
    "excellent", "except", "exchange", "excited", "excitement", "exciting", "exclaimed", "exercise",
    "exist", "expect", "experience", "experiment", "explain", "explanation", "explore", "express",
    "expression", "extra", "eye", "face", "facing", "fact", "factor", "factory",
    "failed", "fair", "fairly", "fall", "fallen", "familiar", "family", "famous",
    "far", "farm", "farmer", "farther", "fast", "fastened", "faster", "fat",
    "father", "favorite", "fear", "feathers", "feature", "fed", "feed", "feel",
    "feet", "fell", "fellow", "felt", "fence", "few", "fewer", "freedom", "frequently", "fresh", "friend",
    "friendly", "frighten", "frog", "from", "front", "frozen", "fruit", "fuel",
    "full", "fully", "fun", "function", "funny", "fur", "furniture", "further",
    "future", "gain", "game", "garage", "garden", "gas", "gasoline", "gate",
    "gather", "gave", "general", "generally", "gentle", "gently", "get", "getting",
    "giant", "gift", "girl", "give", "given", "giving", "glad", "glass",
    "globe", "go", "goes", "gold", "golden", "gone", "good", "goose",
    "got", "government", "grabbed", "grade", "gradually", "grain", "grandfather", "grandmother",
    "graph", "grass", "gravity", "gray", "great", "greater", "greatest", "greatly",
    "green", "grew", "ground", "group", "grow", "grown", "growth", "guard",
    "guess", "guide", "gulf", "gun", "habit", "had", "hair", "half",
    "halfway", "hall", "hand", "handle", "handsome", "hang", "happen", "happened",
    "happily", "happy", "harbor", "hard", "harder", "hardly", "has", "hat",
    "have", "having", "hay", "he", "headed", "heading", "health", "heard",
    "lift", "light", "like", "likely", "limited",
    "line", "lion", "lips", "liquid", "list", "listen", "little", "live",
    "living", "load", "local", "locate", "location", "log", "lonely", "long",
    "longer", "look", "loose", "lose", "loss", "lost", "lot", "loud",
    "love", "lovely", "low", "lower", "luck", "lucky", "lunch", "lungs",
    "lying", "machine", "machinery", "mad", "made", "magic", "magnet", "mail",
    "main", "mainly", "major", "make", "making", "man", "managed", "manner",
    "manufacturing", "many", "map", "mark", "market", "married", "mass", "massage",
    "master", "material", "mathematics", "matter", "may", "maybe", "me", "meal",
    "mean", "means", "meant", "measure", "meat", "medicine", "meet", "melted",
    "member", "memory", "men", "mental", "merely", "met", "metal", "method",
    "mice", "middle", "might", "mighty", "mile", "military", "milk", "mill",
    "mind", "mine", "minerals", "minute", "mirror", "missing", "mission", "mistake",
    "mix", "mixture", "model", "modern", "molecular", "moment", "money", "monkey",
    "month", "mood", "moon", "more", "morning", "most", "mostly", "mother",
    "motion", "motor", "mountain", "mouse", "mouth", "move", "movement", "movie",
    "moving", "mud", "muscle", "music", "musical", "must", "my", "myself",
    "mysterious", "nails", "name", "nation", "national", "native", "natural", "naturally",
    "nature", "near", "nearby", "nearer", "nearest", "nearly", "necessary", "neck",
    "needed", "needle", "needs", "negative", "neighbor", "neighborhood", "nervous", "nest",
    "never", "new", "news", "newspaper", "next", "nice", "night", "nine",
    "no", "nobody", "nodded", "noise", "none", "noon", "nor", "north", "poem", "poet", "poetry",
    "point", "pole", "police", "policeman", "political", "pond", "pony", "pool",
    "poor", "popular", "population", "porch", "port", "position", "positive", "possible",
    "possibly", "post", "pot", "potatoes", "pound", "pour", "powder", "power",
    "powerful", "practical", "practice", "prepare", "present", "president", "press", "pressure",
    "pretty", "prevent", "previous", "price", "pride", "primitive", "principal", "principle",
    "printed", "private", "prize", "probably", "problem", "process", "produce", "product",
    "production", "program", "progress", "promised", "proper", "properly", "property", "protection",
    "proud", "prove", "provide", "public", "pull", "pupil", "pure", "purple",
    "purpose", "push", "put", "putting", "quarter", "queen", "question", "quick",
    "quickly", "quiet", "quietly", "quite", "rabbit", "race", "radio", "railroad",
    "rain", "raise", "ran", "ranch", "range", "rapidly", "rate", "rather",
    "raw", "rays", "reach", "read", "reader", "ready", "real", "realize",
    "settlers", "seven", "several", "shade", "shadow", "shake",
    "shaking", "shall", "shallow", "shape", "share", "sharp", "she", "sheep",
    "sheet", "shelf", "shells", "shelter", "shine", "shinning", "ship", "shirt",
    "shoe", "shoot", "shop", "shore", "short", "shorter", "shot", "should",
    "shoulder", "shout", "show", "shown", "shut", "sick", "sides", "sight",
    "sign", "signal", "silence", "silent", "silk", "silly", "silver", "similar",
    "simple", "simplest", "simply", "since", "sing", "single", "sink", "sister",
    "sit", "sitting", "situation", "six", "size", "skill", "skin", "sky",
    "slabs", "slave", "sleep", "slept", "slide", "slight", "slightly", "slip",
    "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell",
    "smile", "smoke", "smooth", "snake", "snow", "so", "soap", "social",
    "society", "soft", "softly", "soil", "solar", "sold", "soldier", "solid",
    "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometime",
    "somewhere", "son", "song", "soon", "sort", "sound", "source", "south",
    "southern", "space", "speak", "special", "species", "specific", "speech", "speed",
    "spell", "spend", "spent", "spider", "spin", "spirit", "spite", "split",
    "spoken", "sport", "spread", "spring", "square", "stage", "stairs", "stand",
    "standard", "star", "stared", "start", "state", "statement", "station", "stay",
    "steady", "steam", "steel", "steep", "stems", "step", "stepped", "stick",
    "tonight", "too", "took", "tool", "top", "topic",
    "torn", "total", "touch", "toward", "tower", "town", "toy", "trace",
    "track", "trade", "traffic", "trail", "train", "transportation", "trap", "travel",
    "treated", "tree", "triangle", "tribe", "trick", "tried", "trip", "troops",
    "tropical", "trouble", "truck", "trunk", "truth", "try", "tube", "tune",
    "turn", "twelve", "twenty", "twice", "two", "type", "typical", "uncle",
    "under", "underline", "understanding", "unhappy", "union", "unit", "universe", "unknown",
    "unless", "until", "unusual", "up", "upon", "upper", "upward", "us",
    "use", "useful", "using", "usual", "usually", "valley", "valuable", "value",
    "vapor", "variety", "various", "vast", "vegetable", "verb", "vertical", "very",
    "vessels", "victory", "view", "village", "visit", "visitor", "voice", "volume",
    "vote", "vowel", "voyage", "wagon", "wait", "walk", "wall", "want",
    "war", "warm", "warn", "was", "wash", "waste", "watch", "water",
    "wave", "way", "we", "weak", "wealth", "wear", "weather", "week",
    "weigh", "weight", "welcome", "well", "went", "were", "west", "western",
    "wet", "whale", "what", "whatever", "wheat", "wheel", "when", "whenever",
    "where", "wherever", "whether", "which", "while", "whispered", "whistle", "white",
    "who", "whole", "whom", "whose", "why", "wide", "widely", "wife",
    "wild", "will", "willing", "win", "wind", "window", "wing", "winter",
    "wire", "wise", "wish", "with", "within", "without", "wolf", "women",
    "won", "wonder", "wonderful", "wood", "wooden", "wool", "word", "wore",
    "work", "worker", "world", "worried", "worry", "worse", "worth", "would",
    "wrapped", "write", "writer", "writing", "written", "wrong", "wrote", "yard",
    "year", "yellow", "yes", "yesterday", "yet", "you", "young", "younger",
    "your", "yourself", "youth", "zero", "zebra", "zipper", "zoo", "zulu"
];
const spanish_word_list = ['abajo', 'abandonar', 'abrir', 'absoluta', 'absoluto', 'abuelo',
    'acabar', 'acaso', 'acciones', 'accion', 'aceptar', 'acercar', 'acompanar',
    'acordar', 'actitud', 'actividad', 'acto', 'actual', 'actuar', 'acudir',
    'acuerdo', 'adelante', 'ademas', 'adquirir', 'advertir', 'afectar', 'afirmar',
    'ahora', 'ahi', 'aire', 'al', 'alcanzar', 'alejar', 'alemana', 'aleman',
    'algo', 'alguien', 'alguna', 'alguno', 'algun', 'alla', 'alli', 'alma',
    'alta', 'alto', 'altura', 'amar', 'ambas', 'ambos', 'americana', 'americano',
    'amiga', 'amigo', 'amor', 'amplia', 'amplio', 'andar', 'animal', 'ante',
    'anterior', 'antigua', 'antiguo', 'anunciar', 'analisis', 'aparecer', 'agua',
    'apenas', 'aplicar', 'apoyar', 'aprender', 'aprovechar', 'aquel', 'aquella',
    'aquello', 'aqui', 'arma', 'arriba', 'arte', 'asegurar', 'aspecto', 'asunto',
    'asi', 'atenciones', 'atencion', 'atreverse', 'atras', 'aumentar', 'aun',
    'aunque', 'autor', 'autora', 'autoridad', 'autentica', 'autentico', 'avanzar',
    'ayer', 'ayuda', 'ayudar', 'azul', 'anadir', 'ano', 'aun', 'baja', 'bajar',
    'barrio', 'base', 'bastante', 'bastar', 'beber', 'bien', 'blanca', 'blanco',
    'boca', 'brazo', 'buen', 'buscar', 'caballo', 'caber', 'cabeza', 'cabo', 'cada',
    'cadena', 'caer', 'calle', 'cama', 'cambiar', 'cambio', 'caminar', 'camino',
    'campana', 'campo', 'cantar', 'cantidad', 'capaces', 'capacidad', 'capaz',
    'capital', 'cara', 'caracteres', 'carne', 'carrera', 'carta', 'caracter',
    'casa', 'casar', 'casi', 'caso', 'catalan', 'causa', 'celebrar', 'central',
    'centro', 'cerebro', 'cerrar', 'chica', 'chico', 'cielo', 'ciencia', 'ciento',
    'cientifica', 'cientifico', 'cierta', 'cierto', 'cinco', 'cine', 'circunstancia',
    'ciudad', 'ciudadana', 'ciudadano', 'civil', 'clara', 'claro', 'clase', 'coche',
    'contraponer', 'colocar', 'color', 'comentar', 'comenzar', 'comer', 'como', 'companera',
    'companero', 'compania', 'completo', 'comprar', 'comprender', 'comprobar',
    'comunes', 'comunicaciones', 'comunicacion', 'comun', 'con', 'concepto',
    'conciencia', 'concreto', 'condicion', 'condisiones', 'conducir', 'conjunto',
    'conocer', 'conocimiento', 'consecuencia', 'conseguir', 'conservar',
    'considerar', 'consistir', 'constante', 'constituir', 'construir', 'contacto',
    'contar', 'contemplar', 'contener', 'contestar', 'continuar', 'contra',
    'contrario', 'control', 'controlar', 'convencer', 'conversacion', 'convertir',
    'corazon', 'correr', 'corresponder', 'corriente', 'cortar', 'cosa',
    'costumbre', 'crear', 'crecer', 'creer', 'crisis', 'cruzar', 'cuadro',
    'cual', 'cualquier', 'cuando', 'cuanto', 'cuarta', 'cuarto', 'cuatro',
    'cubrir', 'cuenta', 'cuerpo', 'cuestiones', 'cuestion', 'cultura', 'cultural',
    'cumplir', 'cuya', 'cuyo', 'cual', 'cuanto', 'celula', 'como', 'dar', 'dato',
    'de', 'deber', 'decidir', 'decir', 'decision', 'declarar', 'dedicar', 'dedo',
    'defender', 'defensa', 'definir', 'definitivo', 'dejar', 'del', 'demasiado',
    'democracia', 'demostrar', 'demas', 'depender', 'derecha', 'derecho',
    'desaparecer', 'desarrollar', 'desarrollo', 'desconocer', 'descubrir',
    'desde', 'desear', 'deseo', 'despertar', 'despues', 'destino', 'detener',
    'determinar', 'diaria', 'diario', 'diez', 'diferencia', 'diferente',
    'dificultad', 'dificil', 'dinero', 'dios', 'diosa', 'direccion', 'directo',
    'director', 'directora', 'dirigir', 'disponer', 'distancia', 'distinto',
    'diverso', 'doble', 'doctor', 'doctora', 'dolor', 'don', 'donde', 'dormir',
    'dos', 'duda', 'durante', 'duro', 'dia', 'donde', 'e', 'echar', 'economico',
    'edad', 'efecto', 'ejemplo', 'ejercito', 'el', 'eleccion', 'elegir',
    'elemento', 'elevar', 'ella', 'empezar', 'empresa', 'en', 'encender',
    'encima', 'encontrar', 'encuentro', 'energia', 'enfermedad', 'enfermo',
    'enorme', 'ensenar', 'entender', 'enterar', 'entonces', 'entrada', 'entrar',
    'entre', 'entregar', 'enviar', 'equipo', 'error', 'esa', 'escapar', 'escribir',
    'escritor', 'escritora', 'escuchar', 'ese', 'esfuerzo', 'eso', 'espacio',
    'espalda', 'espana', 'espanol', 'espanola', 'especial', 'especie',
    'esperanza', 'esperar', 'espiritu', 'esta', 'establecer', 'estado',
    'estar', 'este', 'esto', 'estrella', 'estructura', 'estudiar', 'estudio',
    'etapa', 'europa', 'europea', 'europeo', 'evidente', 'evitar', 'exacta',
    'exacto', 'exigir', 'existencia', 'existir', 'experiencia', 'explicar',
    'expresion', 'extender', 'exterior', 'extranjera', 'extranjero', 'extrano',
    'extremo', 'falta', 'faltar', 'familia', 'familiar', 'famoso', 'fenomeno',
    'fiesta', 'figura', 'fijar', 'fin', 'final', 'flor', 'fondo', 'forma',
    'formar', 'francesa', 'francia', 'frances', 'frase', 'frecuencia', 'frente',
    'fria', 'frio', 'fuego', 'fuente', 'fuerte', 'fuerza', 'funcionar', 'funcion',
    'fundamental', 'futuro', 'facil', 'fisico', 'futbol', 'ganar', 'general',
    'gente', 'gesto', 'gobierno', 'golpe', 'gracia', 'gran', 'grande', 'grave',
    'gritar', 'grupo', 'guardar', 'guerra', 'gustar', 'gusto', 'haber',
    'habitacion', 'habitual', 'hablar', 'hacer', 'hacia', 'hallar', 'hasta',
    'hecha', 'hecho', 'hermana', 'hermano', 'hermosa', 'hermoso', 'hija',
    'hijo', 'historia', 'historico', 'hombre', 'hombro', 'hora', 'hoy',
    'humana', 'humano', 'idea', 'iglesia', 'igual', 'imagen', 'imaginar',
    'impedir', 'imponer', 'importancia', 'importante', 'importar', 'imposible',
    'imagenes', 'incluir', 'incluso', 'indicar', 'individuo', 'informaciones',
    'informacion', 'informar', 'inglesa', 'ingles', 'iniciar', 'inmediata',
    'inmediato', 'insistir', 'instante', 'intentar', 'interesar', 'intereses',
    'interior', 'internacional', 'interes', 'introducir', 'ir', 'izquierda',
    'jamas', 'jefa', 'jefe', 'joven', 'juego', 'jugador', 'jugar', 'juicio',
    'junto', 'justo', 'labio', 'lado', 'lanzar', 'largo', 'lector', 'lectora',
    'leer', 'lengua', 'lenguaje', 'lento', 'levantar', 'ley', 'libertad',
    'libre', 'libro', 'limitar', 'literatura', 'llamar', 'llegar', 'llenar',
    'lleno', 'llevar', 'llorar', 'lo', 'loca', 'loco', 'lograr', 'lucha',
    'luego', 'lugar', 'luz', 'linea', 'madre', 'mal', 'mala', 'malo', 'mandar',
    'manera', 'manifestar', 'mano', 'mantener', 'mar', 'marcar', 'marcha',
    'marchar', 'marido', 'mas', 'masa', 'matar', 'materia', 'material', 'mayor',
    'mayoria', 'manana', 'media', 'mediante', 'medida', 'medio', 'mejor', 'memoria',
    'menor', 'menos', 'menudo', 'mercado', 'merecer', 'mes', 'mesa', 'meter',
    'metro', 'mi', 'miedo', 'miembro', 'mientras', 'mil', 'militar', 'millon',
    'ministra', 'ministro', 'minuto', 'mirada', 'mirar', 'mis', 'mismo', 'mitad',
    'modelo', 'moderna', 'moderno', 'modo', 'momento', 'moral', 'morir', 'mostrar',
    'motivo', 'mover', 'movimiento', 'muchacha', 'muchacho', 'mucho', 'muerte', 'mujer',
    'mujeres', 'mundial', 'mundo', 'muy', 'maquina', 'mas', 'maximo', 'medica', 'medico',
    'metodo', 'mi', 'mia', 'minima', 'minimo', 'mio', 'musica', 'nacer', 'nacional', 'nada',
    'nadie', 'natural', 'naturaleza', 'necesaria', 'necesario', 'necesidad', 'necesitar',
    'negar', 'negocio', 'negra', 'negro', 'ni', 'ninguna', 'ninguno', 'ningun', 'nivel',
    'nina', 'nino', 'no', 'noche', 'nombre', 'normal', 'norteamericana', 'norteamericano',
    'notar', 'noticia', 'novela', 'nuestra', 'nuestro', 'nueva', 'nuevo', 'nunca', 'numero',
    'o', 'objetivo', 'objeto', 'obligar', 'obra', 'observar', 'obtener', 'ocasiones', 'ocasion',
    'ocho', 'ocupar', 'ocurrir', 'oficial', 'ofrecer', 'ojo', 'olvidar', 'operacion', 'opinion',
    'origen', 'oro', 'origenes', 'oscura', 'oscuro', 'otra', 'otro', 'oir', 'paciente', 'padre',
    'pagar', 'palabra', 'papel', 'par', 'para', 'parar', 'parecer', 'pared', 'pareja', 'parte',
    'participar', 'particular', 'partido', 'partir', 'pasa', 'pasado', 'pasar', 'paso', 'paz',
    'pais', 'paises', 'pecho', 'pedir', 'peligro', 'pelo', 'pelicula', 'pena', 'pensamiento',
    'pensar', 'peor', 'pequena', 'pequeno', 'perder', 'perfecto', 'periodista', 'periodica',
    'periodico', 'permanecer', 'permitir', 'pero', 'perra', 'perro', 'persona', 'personaje',
    'personal', 'pertenecer', 'pesar', 'peso', 'pie', 'piedra', 'piel', 'pierna', 'piso',
    'suerte', 'sueno', 'suficiente', 'sufrir', 'superar', 'superior', 'suponer', 'surgir',
    'suya', 'suyo', 'si', 'solo', 'tal', 'tambien', 'tampoco', 'tan', 'tanta', 'tanto', 'tarde', 'tarea', 'televisiones', 'television', 'tema', 'temer',
    'tender', 'tener', 'teoria', 'tercer', 'terminar', 'texto', 'tiempo', 'tierra', 'tipa', 'tipo', 'tirar', 'tocar', 'toda', 'todavia', 'todo', 'tomar',
    'tono', 'total', 'trabajar', 'trabajo', 'traer', 'tras', 'tratar', 'tres', 'tu', 'tecnica', 'tecnico', 'termino', 'tia', 'tio', 'titulo', 'un', 'una',
    'unidad', 'unir', 'uno', 'usar', 'uso', 'usted', 'utilizar', 'vacia', 'vacio', 'valer', 'valor', 'varias', 'varios', 'veces', 'vecina', 'vecino',
    'veinte', 'velocidad', 'vender', 'venir', 'ventana', 'ver', 'verano', 'verdad', 'verdadera', 'verdadero', 'verde', 'vestir', 'vez', 'viaje', 'vida',
    'vieja', 'viejo', 'viento', 'violencia', 'vista', 'viva', 'vivir', 'vivo', 'voces', 'voluntad', 'volver', 'voz', 'vuelta', 'y', 'ya', 'yo', 'zona',
    'arbol', 'el', 'epoca', 'esta', 'este', 'exito', 'ultima', 'ultimo', 'unica', 'unico',
];
const length_english_array = english_words_list.length;
const length_spanish_array = spanish_word_list.length;
export function new_random_link(language = 'en') {
    const temp_language = language.substring(0, 2);
    let new_word;
    if (temp_language === 'es') {
        new_word = spanish_word_list[rand(length_spanish_array)];
    }
    else {
        new_word = english_words_list[rand(length_english_array)];
    }
    ;
    return `${new_word}-${nanoid()}`;
}
function rand(len) {
    return Math.floor(Math.random() * len);
}
//# sourceMappingURL=random-links-generator.js.map