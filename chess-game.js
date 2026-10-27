import { Chess } from './vendor/chess.js/chess.js';

const COPY = {
  en: {
    eyebrow: 'A new game to master', title: 'Chess Quest', sectionLabel: 'Chess learning and play', boardFoot: 'Every move helps you grow', subtitle: 'Learn the moves, explore clever openings, and challenge a friendly computer. Every match is a little brain adventure.',
    xp: 'Chess stars', boardTitle: 'Your chessboard', boardHint: 'Tap a piece, then tap where it can go.',
    sideLabel: 'You play as', white: 'White', black: 'Black', levelLabel: 'Computer level', easy: 'Sunny · beginner', medium: 'Clever · growing', hard: 'Cunning · challenge',
    newGame: '♟ New game', thinking: 'The computer is thinking…', yourTurn: 'Your turn · {color} to move', computerTurn: 'Computer’s turn · {color} to move', check: 'Check! {turn} to move.', checkmate: 'Checkmate! {winner} wins!', draw: 'A draw! Good game.', gameReady: 'Ready when you are. White moves first.',
    undo: '↶ Take back', speech: '🔊 Explain the board', speechStop: '■ Stop voice', speechUnavailable: 'Speech is not available in this browser.',
    moves: 'Move trail', noMoves: 'Your adventure begins with the first move.', moveNumber: 'Move {n}', thinkingShort: 'Thinking…',
    rulesTitle: 'The tiny rulebook', rulesIntro: 'Four friendly ideas to get you playing.', goalTitle: '🏁 Find checkmate', goalBody: 'Your goal is to trap the other king. When it is attacked and has nowhere safe to go, that is checkmate and the game is won.',
    piecesTitle: '♟ Every piece has a power', piecesBody: 'The rook slides in straight lines, the bishop travels diagonally, and the queen does both. The knight hops in an L. The king moves one square. Pawns move forward and capture diagonally.',
    openingTitle: '🛡 Get ready safely', openingBody: 'Bring knights and bishops into the game, help your king castle, and keep an eye on the middle squares. Try not to move the same piece again and again at the start.',
    specialsTitle: '✨ Three special moves', specialsBody: 'Castling tucks your king behind a rook. A pawn reaching the far side can become a queen. En passant is a special pawn capture. The computer follows every rule for you.',
    openingSpeak: 'Hear the quick guide', openingsTitle: 'Opening discovery cards', openingsIntro: 'Opening moves help you start with a plan. Pick a card, then step through the moves together.',
    italianName: 'Italian Game', italianTag: 'Quick development', italianAbout: 'Bring a knight and bishop out, then look toward the center and the f7 square.',
    londonName: 'London System', londonTag: 'Calm & steady', londonAbout: 'A dependable setup: develop your bishop, support the center, and castle.',
    sicilianName: 'Sicilian Defense', sicilianTag: 'Bold reply', sicilianAbout: 'Black challenges the center from the side and creates an unbalanced game.',
    queensName: 'Queen’s Gambit', queensTag: 'Center contest', queensAbout: 'White offers a pawn to build a strong presence in the center.',
    explore: 'Explore this opening →', demoLabel: 'Guided opening', demoReady: 'Start from the first move. We’ll explain each step as it appears.', nextMove: 'Show next move →', demoListen: '🔊 Listen to this step', restartLine: 'Start this line again', lineFinished: 'Opening complete! You have a plan for the first few moves.', playLine: 'Play this position vs computer ♟', moveLabel: 'Move {n}: {san}', closeDemo: 'Close guide',
    italianNotes: ['Move a pawn to claim space in the center.', 'Black mirrors you and contests the center.', 'Bring a knight out; it attacks the e5 pawn.', 'Develop a knight to defend e5.', 'The bishop joins the attack and eyes f7.', 'Black develops a bishop too. Both sides are ready to castle.'],
    londonNotes: ['White claims central space.', 'Black also takes a central square.', 'Develop a knight toward the center.', 'Black develops a knight.', 'Develop the bishop outside the pawn chain.', 'Black supports the center.', 'Support the center and prepare to castle.'],
    sicilianNotes: ['White takes central space.', 'Black attacks the center from the side.', 'Develop a knight and support the e-pawn.', 'Black supports the c5 pawn and prepares to develop.', 'Open the center while pieces are ready.', 'Black captures the d-pawn with the c-pawn.', 'Recapture with a knight and develop a piece.'],
    queensNotes: ['White claims the center.', 'Black contests it right away.', 'Offer the c-pawn to build a powerful center.', 'Black supports the d5 pawn.', 'Bring out a knight and add central pressure.', 'Black develops a knight.', 'Support the center and prepare to castle.'],
    wonXp: 'Brilliant finish! +20 chess stars 🌟', openingXp: 'Opening explored! +5 chess stars 🌟',
    whitePieces: { k: 'king', q: 'queen', r: 'rook', b: 'bishop', n: 'knight', p: 'pawn' }, blackPieces: { k: 'king', q: 'queen', r: 'rook', b: 'bishop', n: 'knight', p: 'pawn' },
    square: '{piece} on {square}', emptySquare: 'empty square {square}', promotion: 'Pawn promoted to a queen!',
  },
  pt: {
    eyebrow: 'Um novo jogo para dominar', title: 'Aventura de Xadrez', sectionLabel: 'Aprender e jogar xadrez', boardFoot: 'Cada jogada ajuda a evoluir', subtitle: 'Aprenda os movimentos, descubra aberturas inteligentes e desafie um computador amigável. Cada partida é uma aventura para o cérebro.',
    xp: 'Estrelas de xadrez', boardTitle: 'O seu tabuleiro', boardHint: 'Toque numa peça e depois no destino.',
    sideLabel: 'Jogar como', white: 'Brancas', black: 'Pretas', levelLabel: 'Nível do computador', easy: 'Tranquilo · iniciante', medium: 'Esperto · a evoluir', hard: 'Astuto · desafio',
    newGame: '♟ Novo jogo', thinking: 'O computador está a pensar…', yourTurn: 'A sua vez · jogam {color}', computerTurn: 'Vez do computador · jogam {color}', check: 'Xeque! Jogam {turn}.', checkmate: 'Xeque-mate! {winner} vencem!', draw: 'Empate! Boa partida.', gameReady: 'Tudo pronto. As brancas começam.',
    undo: '↶ Desfazer', speech: '🔊 Explicar o tabuleiro', speechStop: '■ Parar voz', speechUnavailable: 'A voz não está disponível neste navegador.',
    moves: 'Trilho de jogadas', noMoves: 'A aventura começa com a primeira jogada.', moveNumber: 'Jogada {n}', thinkingShort: 'A pensar…',
    rulesTitle: 'As regras em poucas palavras', rulesIntro: 'Quatro ideias simples para começar.', goalTitle: '🏁 Procure o xeque-mate', goalBody: 'O objetivo é encurralar o rei adversário. Quando está atacado e não pode escapar para uma casa segura, é xeque-mate e a partida termina.',
    piecesTitle: '♟ Cada peça tem um poder', piecesBody: 'A torre avança em linhas retas, o bispo na diagonal e a dama faz ambos. O cavalo salta em L. O rei anda uma casa. Os peões avançam e capturam na diagonal.',
    openingTitle: '🛡 Prepare-se com calma', openingBody: 'Desenvolva cavalos e bispos, proteja o rei com o roque e controle o centro. No início, tente não mover a mesma peça muitas vezes.',
    specialsTitle: '✨ Três jogadas especiais', specialsBody: 'O roque protege o rei junto à torre. Um peão que chega ao fim pode virar dama. En passant é uma captura especial de peão. O computador respeita todas as regras.',
    openingSpeak: 'Ouvir o guia rápido', openingsTitle: 'Cartas de aberturas', openingsIntro: 'Uma abertura dá um plano às primeiras jogadas. Escolha uma carta e descubra cada passo.',
    italianName: 'Abertura Italiana', italianTag: 'Desenvolvimento rápido', italianAbout: 'Desenvolva cavalo e bispo, mire o centro e a casa f7.',
    londonName: 'Sistema Londres', londonTag: 'Calmo e seguro', londonAbout: 'Uma montagem fiável: desenvolva o bispo, apoie o centro e faça roque.',
    sicilianName: 'Defesa Siciliana', sicilianTag: 'Resposta ousada', sicilianAbout: 'As pretas desafiam o centro pelo flanco e criam uma partida dinâmica.',
    queensName: 'Gambito da Dama', queensTag: 'Disputa pelo centro', queensAbout: 'As brancas oferecem um peão para conquistar espaço no centro.',
    explore: 'Explorar abertura →', demoLabel: 'Abertura guiada', demoReady: 'Comece pela primeira jogada. Vamos explicar cada passo.', nextMove: 'Mostrar próxima jogada →', demoListen: '🔊 Ouvir esta explicação', restartLine: 'Recomeçar esta linha', lineFinished: 'Abertura concluída! Já tem um plano para as primeiras jogadas.', playLine: 'Jogar esta posição contra o computador ♟', moveLabel: 'Jogada {n}: {san}', closeDemo: 'Fechar guia',
    italianNotes: ['Avance um peão para ocupar o centro.', 'As pretas disputam o centro da mesma forma.', 'Desenvolva um cavalo: ele ataca o peão em e5.', 'Desenvolva um cavalo e defenda o peão e5.', 'O bispo entra no ataque e aponta para f7.', 'As pretas também desenvolvem um bispo. Ambos podem fazer roque.'],
    londonNotes: ['As brancas ocupam o centro.', 'As pretas também disputam o centro.', 'Desenvolva um cavalo na direção do centro.', 'As pretas desenvolvem um cavalo.', 'Coloque o bispo fora da cadeia de peões.', 'As pretas apoiam o centro.', 'Apoie o centro e prepare o roque.'],
    sicilianNotes: ['As brancas ocupam o centro.', 'As pretas atacam o centro pelo flanco.', 'Desenvolva um cavalo e apoie o peão e4.', 'As pretas apoiam o peão c5 e preparam o desenvolvimento.', 'Abra o centro com as peças prontas.', 'As pretas capturam o peão de d4 com o peão de c5.', 'Recapture com o cavalo e desenvolva uma peça.'],
    queensNotes: ['As brancas ocupam o centro.', 'As pretas disputam o centro.', 'Ofereça o peão de c4 para criar um centro forte.', 'As pretas apoiam o peão de d5.', 'Desenvolva um cavalo e pressione o centro.', 'As pretas desenvolvem um cavalo.', 'Apoie o centro e prepare o roque.'],
    wonXp: 'Vitória brilhante! +20 estrelas de xadrez 🌟', openingXp: 'Abertura explorada! +5 estrelas de xadrez 🌟',
    whitePieces: { k: 'rei', q: 'dama', r: 'torre', b: 'bispo', n: 'cavalo', p: 'peão' }, blackPieces: { k: 'rei', q: 'dama', r: 'torre', b: 'bispo', n: 'cavalo', p: 'peão' },
    square: '{piece} em {square}', emptySquare: 'casa vazia {square}', promotion: 'O peão foi promovido a dama!',
  },
  fr: {
    eyebrow: 'Un nouveau jeu à maîtriser', title: 'Aventure aux échecs', sectionLabel: 'Apprendre et jouer aux échecs', boardFoot: 'Chaque coup vous fait progresser', subtitle: 'Apprenez les déplacements, découvrez des ouvertures astucieuses et défiez un ordinateur sympa. Chaque partie est une petite aventure pour l’esprit.',
    xp: 'Étoiles d’échecs', boardTitle: 'Votre échiquier', boardHint: 'Touchez une pièce, puis sa destination.',
    sideLabel: 'Vous jouez les', white: 'Blancs', black: 'Noirs', levelLabel: 'Niveau de l’ordinateur', easy: 'Serein · débutant', medium: 'Malin · en progrès', hard: 'Rusé · défi',
    newGame: '♟ Nouvelle partie', thinking: 'L’ordinateur réfléchit…', yourTurn: 'À vous · aux {color} de jouer', computerTurn: 'À l’ordinateur · aux {color} de jouer', check: 'Échec ! Aux {turn} de jouer.', checkmate: 'Échec et mat ! Les {winner} gagnent !', draw: 'Partie nulle ! Bien joué.', gameReady: 'À vous de jouer quand vous voulez. Les Blancs commencent.',
    undo: '↶ Reprendre un coup', speech: '🔊 Expliquer le jeu', speechStop: '■ Arrêter la voix', speechUnavailable: 'La synthèse vocale n’est pas disponible dans ce navigateur.',
    moves: 'Fil des coups', noMoves: 'L’aventure commence au premier coup.', moveNumber: 'Coup {n}', thinkingShort: 'Réflexion…',
    rulesTitle: 'Les règles en bref', rulesIntro: 'Quatre idées simples pour commencer.', goalTitle: '🏁 Visez le mat', goalBody: 'Le but est de piéger le roi adverse. S’il est attaqué et ne peut aller sur aucune case sûre, c’est échec et mat : la partie est gagnée.',
    piecesTitle: '♟ Chaque pièce a son pouvoir', piecesBody: 'La tour glisse en ligne droite, le fou en diagonale, et la dame fait les deux. Le cavalier saute en L. Le roi avance d’une case. Les pions avancent et prennent en diagonale.',
    openingTitle: '🛡 Développez-vous sereinement', openingBody: 'Sortez les cavaliers et les fous, protégez le roi avec le roque et surveillez le centre. Au début, évitez de déplacer plusieurs fois la même pièce.',
    specialsTitle: '✨ Trois coups spéciaux', specialsBody: 'Le roque met le roi à l’abri près d’une tour. Un pion arrivé au bout peut devenir une dame. La prise en passant est une capture spéciale. L’ordinateur respecte toutes les règles.',
    openingSpeak: 'Écouter le guide rapide', openingsTitle: 'Cartes des ouvertures', openingsIntro: 'Une ouverture donne un plan pour bien démarrer. Choisissez une carte et avançons coup par coup.',
    italianName: 'Partie italienne', italianTag: 'Développement rapide', italianAbout: 'Sortez cavalier et fou, puis visez le centre et la case f7.',
    londonName: 'Système de Londres', londonTag: 'Calme et solide', londonAbout: 'Un plan fiable : développez le fou, soutenez le centre et roquez.',
    sicilianName: 'Défense sicilienne', sicilianTag: 'Réponse audacieuse', sicilianAbout: 'Les Noirs attaquent le centre par le côté et lancent une partie dynamique.',
    queensName: 'Gambit dame', queensTag: 'Bataille au centre', queensAbout: 'Les Blancs offrent un pion pour gagner de l’espace au centre.',
    explore: 'Explorer cette ouverture →', demoLabel: 'Ouverture guidée', demoReady: 'Commençons au premier coup. Chaque étape est expliquée.', nextMove: 'Voir le coup suivant →', demoListen: '🔊 Écouter cette explication', restartLine: 'Recommencer la ligne', lineFinished: 'Ouverture terminée ! Vous avez un plan pour les premiers coups.', playLine: 'Jouer cette position contre l’ordinateur ♟', moveLabel: 'Coup {n} : {san}', closeDemo: 'Fermer le guide',
    italianNotes: ['Avancez un pion pour prendre de la place au centre.', 'Les Noirs contestent le centre à leur tour.', 'Sortez un cavalier : il attaque le pion e5.', 'Développez un cavalier pour défendre le pion e5.', 'Le fou participe à l’attaque et vise f7.', 'Les Noirs développent aussi un fou. Les deux camps peuvent roquer.'],
    londonNotes: ['Les Blancs prennent de la place au centre.', 'Les Noirs contestent aussi le centre.', 'Développez un cavalier vers le centre.', 'Les Noirs développent un cavalier.', 'Sortez le fou devant la chaîne de pions.', 'Les Noirs soutiennent le centre.', 'Soutenez le centre et préparez le roque.'],
    sicilianNotes: ['Les Blancs occupent le centre.', 'Les Noirs attaquent le centre depuis le côté.', 'Développez un cavalier et soutenez le pion e4.', 'Les Noirs soutiennent le pion c5 et préparent leurs pièces.', 'Ouvrez le centre, les pièces sont prêtes.', 'Les Noirs prennent le pion d4 avec celui de c5.', 'Reprenez avec le cavalier et développez une pièce.'],
    queensNotes: ['Les Blancs occupent le centre.', 'Les Noirs le contestent aussitôt.', 'Offrez le pion c4 pour construire un centre puissant.', 'Les Noirs soutiennent le pion d5.', 'Sortez un cavalier et faites pression au centre.', 'Les Noirs développent un cavalier.', 'Soutenez le centre et préparez le roque.'],
    wonXp: 'Belle victoire ! +20 étoiles d’échecs 🌟', openingXp: 'Ouverture explorée ! +5 étoiles d’échecs 🌟',
    whitePieces: { k: 'roi', q: 'dame', r: 'tour', b: 'fou', n: 'cavalier', p: 'pion' }, blackPieces: { k: 'roi', q: 'dame', r: 'tour', b: 'fou', n: 'cavalier', p: 'pion' },
    square: '{piece} en {square}', emptySquare: 'case vide {square}', promotion: 'Le pion est devenu une dame !',
  },
};

const OPENINGS = [
  { id: 'italian', name: 'italianName', tag: 'italianTag', about: 'italianAbout', notes: 'italianNotes', icon: '🇮🇹', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'] },
  { id: 'london', name: 'londonName', tag: 'londonTag', about: 'londonAbout', notes: 'londonNotes', icon: '🏙️', moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4', 'e6', 'e3'] },
  { id: 'sicilian', name: 'sicilianName', tag: 'sicilianTag', about: 'sicilianAbout', notes: 'sicilianNotes', icon: '🌋', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4'] },
  { id: 'queens', name: 'queensName', tag: 'queensTag', about: 'queensAbout', notes: 'queensNotes', icon: '👑', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'e3'] },
];

const GLYPHS = {
  wk: '♔', wq: '♕', wr: '♖', wb: '♗', wn: '♘', wp: '♙',
  bk: '♚', bq: '♛', br: '♜', bb: '♝', bn: '♞', bp: '♟',
};
const PIECE_VALUES = { p: 100, n: 320, b: 335, r: 500, q: 900, k: 0 };
const FILES = 'abcdefgh';
const app = document.getElementById('chessApp');
if (app) {
  let game = new Chess();
  let lang = document.documentElement.lang || 'en';
  let playerColor = 'w';
  let level = 'easy';
  let selectedSquare = null;
  let possibleMoves = [];
  let focusedSquare = 'e2';
  let demo = null;
  let computerThinking = false;
  let computerTimer = null;
  let awarded = false;
  let lastAnnouncement = '';
  let reward = loadReward();

  function copy(key, vars = {}) {
    const strings = COPY[lang] || COPY.en;
    return Object.entries(vars).reduce((value, [name, replacement]) => value.replaceAll(`{${name}}`, replacement), strings[key] || COPY.en[key] || key);
  }

  function loadReward() {
    try {
      const value = JSON.parse(localStorage.getItem('chess-rewards') || '{}');
      return { xp: Number(value.xp) || 0, openings: Array.isArray(value.openings) ? value.openings : [] };
    } catch { return { xp: 0, openings: [] }; }
  }

  function saveReward() {
    try { localStorage.setItem('chess-rewards', JSON.stringify(reward)); } catch { /* local play remains available */ }
  }

  function awardXp(amount, message) {
    reward.xp += amount;
    saveReward();
    const pill = document.getElementById('chessXp');
    if (pill) {
      pill.textContent = `⭐ ${copy('xp')}: ${reward.xp}`;
      pill.classList.remove('xp-pop');
      requestAnimationFrame(() => pill.classList.add('xp-pop'));
    }
    lastAnnouncement = '';
    const status = document.getElementById('chessStatus');
    if (status) {
      status.textContent = message;
      status.classList.add('is-reward');
      window.setTimeout(() => {
        status.classList.remove('is-reward');
        updateStatus();
      }, 2200);
    }
  }

  function renderShell() {
    app.innerHTML = `
      <div class="section-heading chess-section-heading">
        <div><p class="section-eyebrow">${copy('eyebrow')}</p><h2 class="section-title">${copy('title')} <span class="chess-title-sparkle" aria-hidden="true">♞</span></h2><p class="section-description">${copy('subtitle')}</p></div>
        <span class="section-pill chess-xp" id="chessXp">⭐ ${copy('xp')}: ${reward.xp}</span>
      </div>
      <div class="chess-layout">
        <section class="chess-game-card" aria-labelledby="chessBoardTitle">
          <div class="chess-card-heading"><div class="chess-heading-icon" aria-hidden="true">♜</div><div><h3 id="chessBoardTitle">${copy('boardTitle')}</h3><p>${copy('boardHint')}</p></div><span class="chess-turn-pill" id="chessTurnBadge">♙</span></div>
          <div class="chess-controls">
            <label class="chess-select-label"><span>${copy('sideLabel')}</span><select id="chessSide"><option value="w">${copy('white')}</option><option value="b">${copy('black')}</option></select></label>
            <label class="chess-select-label"><span>${copy('levelLabel')}</span><select id="chessLevel"><option value="easy">${copy('easy')}</option><option value="medium">${copy('medium')}</option><option value="hard">${copy('hard')}</option></select></label>
            <button class="chess-new-game" id="chessNewGame" type="button">${copy('newGame')}</button>
          </div>
          <p class="chess-status" id="chessStatus" role="status" aria-live="polite"></p>
          <div class="chess-board-wrap"><div class="chess-board-ribbon"><span>✦ &nbsp; ${copy('title').toUpperCase()} &nbsp; ✦</span><span aria-hidden="true">♛</span></div><div class="chess-board-frame"><div id="chessBoard" class="chess-board" role="group" aria-label="${copy('boardTitle')}"></div></div><div class="chess-board-ribbon bottom"><span>${playerColor === 'w' ? '♔' : '♚'}</span><span>${copy('boardFoot').toUpperCase()}</span></div></div>
          <div class="chess-game-actions"><button class="chess-action-btn" id="chessUndo" type="button">${copy('undo')}</button><button class="chess-action-btn voice" id="chessVoice" type="button">${copy('speech')}</button></div>
          <div class="chess-move-trail"><div class="chess-move-title"><strong>${copy('moves')}</strong><span>♟</span></div><div class="chess-moves" id="chessMoves"></div></div>
        </section>
        <div class="chess-side-column">
          <section class="chess-coach-card" aria-labelledby="chessRulesTitle"><div class="chess-side-heading"><span class="chess-mini-mascot" aria-hidden="true">🦉</span><div><h3 id="chessRulesTitle">${copy('rulesTitle')}</h3><p>${copy('rulesIntro')}</p></div></div><div class="chess-rule-grid"><article class="chess-rule-card finish"><h4>${copy('goalTitle')}</h4><p>${copy('goalBody')}</p></article><article class="chess-rule-card pieces"><h4>${copy('piecesTitle')}</h4><p>${copy('piecesBody')}</p></article><article class="chess-rule-card plan"><h4>${copy('openingTitle')}</h4><p>${copy('openingBody')}</p></article><article class="chess-rule-card magic"><h4>${copy('specialsTitle')}</h4><p>${copy('specialsBody')}</p></article></div><button class="chess-speech-link" id="chessExplainRules" type="button">${copy('openingSpeak')} &nbsp;▶</button></section>
          <section class="chess-openings-card" aria-labelledby="chessOpeningsTitle"><div class="chess-side-heading"><span class="chess-mini-mascot opening" aria-hidden="true">🗺️</span><div><h3 id="chessOpeningsTitle">${copy('openingsTitle')}</h3><p>${copy('openingsIntro')}</p></div></div><div class="chess-opening-list">${OPENINGS.map((opening) => `<article class="chess-opening-card ${opening.id}"><div class="chess-opening-icon" aria-hidden="true">${opening.icon}</div><div class="chess-opening-copy"><span class="chess-opening-tag">${copy(opening.tag)}</span><h4>${copy(opening.name)}</h4><p>${copy(opening.about)}</p><button class="chess-opening-button" data-open-opening="${opening.id}" type="button">${copy('explore')}</button></div></article>`).join('')}</div><div id="chessDemo" class="chess-demo" aria-live="polite"></div></section>
        </div>
      </div>`;
    attachEvents();
    renderBoard();
    renderMoves();
    renderDemo();
    updateStatus();
    document.getElementById('chessSide').value = playerColor;
    document.getElementById('chessLevel').value = level;
  }

  function attachEvents() {
    document.getElementById('chessSide').addEventListener('change', (event) => {
      playerColor = event.target.value;
      focusedSquare = playerColor === 'w' ? 'e2' : 'e7';
      startNewGame();
    });
    document.getElementById('chessLevel').addEventListener('change', (event) => { level = event.target.value; });
    document.getElementById('chessNewGame').addEventListener('click', startNewGame);
    document.getElementById('chessUndo').addEventListener('click', undoTurn);
    document.getElementById('chessVoice').addEventListener('click', speakBoard);
    document.getElementById('chessExplainRules').addEventListener('click', speakRules);
    const board = document.getElementById('chessBoard');
    board.addEventListener('click', handleSquareClick);
    board.addEventListener('keydown', handleBoardKeydown);
  }

  function handleAppClick(event) {
    const openingButton = event.target.closest('[data-open-opening]');
    const actionButton = event.target.closest('[data-chess-action]');
    if (openingButton) startDemo(openingButton.dataset.openOpening);
    if (actionButton) {
      const action = actionButton.dataset.chessAction;
      if (action === 'next') advanceDemo();
      if (action === 'restart') startDemo(demo?.id);
      if (action === 'play') playDemoPosition();
      if (action === 'close') closeDemo();
      if (action === 'speak') speakDemo();
    }
  }

  function squareToView(square) {
    const file = FILES.indexOf(square[0]);
    const row = 8 - Number(square[1]);
    const orientation = demo ? 'w' : playerColor;
    return orientation === 'w' ? [row, file] : [7 - row, 7 - file];
  }

  function viewToSquare(viewRow, viewCol) {
    const orientation = demo ? 'w' : playerColor;
    const row = orientation === 'w' ? viewRow : 7 - viewRow;
    const col = orientation === 'w' ? viewCol : 7 - viewCol;
    return `${FILES[col]}${8 - row}`;
  }

  function pieceName(piece) {
    if (!piece) return null;
    const set = piece.color === 'w' ? 'whitePieces' : 'blackPieces';
    return `${piece.color === 'w' ? copy('white') : copy('black')} ${copy(set)[piece.type]}`;
  }

  function renderBoard(focusSquare = null) {
    const boardElement = document.getElementById('chessBoard');
    if (!boardElement) return;
    const chessBoard = game.board();
    const last = game.history({ verbose: true }).at(-1);
    const kingInCheck = game.isCheck() ? game.turn() : null;
    let html = '';
    for (let viewRow = 0; viewRow < 8; viewRow += 1) {
      for (let viewCol = 0; viewCol < 8; viewCol += 1) {
        const square = viewToSquare(viewRow, viewCol);
        const row = 8 - Number(square[1]);
        const col = FILES.indexOf(square[0]);
        const piece = chessBoard[row][col];
        const legalTarget = possibleMoves.some((move) => move.to === square);
        const selected = selectedSquare === square;
        const recent = last && (last.from === square || last.to === square);
        const checked = Boolean(piece && piece.type === 'k' && piece.color === kingInCheck);
        const isLight = (FILES.indexOf(square[0]) + Number(square[1])) % 2 === 0;
        const coordinateRank = viewCol === 0 ? `<span class="chess-coord rank">${square[1]}</span>` : '';
        const coordinateFile = viewRow === 7 ? `<span class="chess-coord file">${square[0]}</span>` : '';
        const label = piece ? copy('square', { piece: pieceName(piece), square }) : copy('emptySquare', { square });
        const isFocused = square === (focusSquare || focusedSquare);
        html += `<button class="chess-square ${isLight ? 'light' : 'dark'}${selected ? ' selected' : ''}${legalTarget ? (piece ? ' capture-target' : ' legal-target') : ''}${recent ? ' last-move' : ''}${checked ? ' in-check' : ''}" type="button" aria-label="${label}" aria-pressed="${selected}" data-square="${square}" data-view-row="${viewRow}" data-view-col="${viewCol}" tabindex="${isFocused ? '0' : '-1'}">${coordinateRank}${piece ? `<span class="chess-piece ${piece.color === 'w' ? 'white-piece' : 'black-piece'}" aria-hidden="true">${GLYPHS[piece.color + piece.type]}</span>` : ''}${coordinateFile}</button>`;
      }
    }
    boardElement.innerHTML = html;
    if (focusSquare) boardElement.querySelector(`[data-square="${focusSquare}"]`)?.focus({ preventScroll: true });
  }

  function renderMoves() {
    const element = document.getElementById('chessMoves');
    if (!element) return;
    const history = game.history();
    if (!history.length) {
      element.innerHTML = `<span class="chess-no-moves">${copy('noMoves')}</span>`;
      return;
    }
    let html = '';
    for (let i = 0; i < history.length; i += 2) {
      html += `<span class="chess-move-row"><b>${copy('moveNumber', { n: Math.floor(i / 2) + 1 })}</b><span>${history[i] || '—'}</span><span>${history[i + 1] || '…'}</span></span>`;
    }
    element.innerHTML = html;
    element.scrollTop = element.scrollHeight;
  }

  function renderDemo() {
    const element = document.getElementById('chessDemo');
    if (!element) return;
    if (!demo) {
      element.innerHTML = '';
      return;
    }
    const opening = OPENINGS.find((item) => item.id === demo.id);
    const noteList = copy(opening.notes);
    const nextSan = opening.moves[demo.index];
    const currentNote = demo.index > 0 ? noteList[demo.index - 1] : copy('demoReady');
    const nextPreview = nextSan ? `<p class="chess-demo-next"><strong>${copy('moveLabel', { n: Math.floor(demo.index / 2) + 1, san: nextSan })}</strong> · ${noteList[demo.index]}</p>` : `<p class="chess-demo-next complete">${copy('lineFinished')}</p>`;
    element.innerHTML = `<div class="chess-demo-top"><span>🧭 ${copy('demoLabel')}</span><button type="button" class="chess-demo-close" data-chess-action="close" aria-label="${copy('closeDemo')}">×</button></div><p class="chess-demo-note">${currentNote}</p>${nextPreview}<div class="chess-demo-actions">${nextSan ? `<button type="button" class="chess-demo-next-btn" data-chess-action="next">${copy('nextMove')}</button>` : `<button type="button" class="chess-demo-next-btn" data-chess-action="play">${copy('playLine')}</button>`}<button type="button" class="chess-demo-restart" data-chess-action="speak">${copy('demoListen')}</button><button type="button" class="chess-demo-restart" data-chess-action="restart">↻ ${copy('restartLine')}</button></div>`;
  }

  function updateStatus() {
    const status = document.getElementById('chessStatus');
    const badge = document.getElementById('chessTurnBadge');
    if (!status || !badge) return;
    const announcement = lastAnnouncement;
    lastAnnouncement = '';
    let message = '';
    if (game.isCheckmate()) {
      const winner = game.turn() === 'w' ? 'b' : 'w';
      message = copy('checkmate', { winner: winner === 'w' ? copy('white') : copy('black') });
      if (winner === playerColor && !awarded) {
        awarded = true;
        reward.xp += 20;
        saveReward();
        message += ` ${copy('wonXp')}`;
      }
    } else if (game.isDraw()) message = copy('draw');
    else if (announcement) message = announcement;
    else if (computerThinking) message = copy('thinking');
    else if (game.isCheck()) {
      const turn = game.turn() === playerColor ? (playerColor === 'w' ? copy('white') : copy('black')) : (game.turn() === 'w' ? copy('white') : copy('black'));
      message = copy('check', { turn });
    } else if (!game.history().length && !computerThinking) message = copy('gameReady');
    else {
      const isPlayersTurn = game.turn() === playerColor;
      const color = game.turn() === 'w' ? copy('white') : copy('black');
      message = isPlayersTurn ? copy('yourTurn', { color }) : copy('computerTurn', { color });
    }
    status.textContent = message;
    status.classList.toggle('is-check', game.isCheck());
    status.classList.toggle('is-over', game.isGameOver());
    badge.textContent = game.isGameOver() ? (game.isCheckmate() ? '🏆' : '🤝') : (game.turn() === 'w' ? '♙' : '♟');
    badge.classList.toggle('is-thinking', computerThinking);
  }

  function handleSquareClick(event) {
    const button = event.target.closest('[data-square]');
    if (!button) return;
    const square = button.dataset.square;
    focusedSquare = square;
    if (demo || computerThinking || game.isGameOver() || game.turn() !== playerColor) return;
    if (selectedSquare && possibleMoves.some((move) => move.to === square)) {
      const move = game.move({ from: selectedSquare, to: square, promotion: 'q' });
      selectedSquare = null;
      possibleMoves = [];
      if (move?.promotion) lastAnnouncement = copy('promotion');
      afterMove(square);
      return;
    }
    const piece = game.get(square);
    if (piece && piece.color === playerColor) {
      selectedSquare = square;
      possibleMoves = game.moves({ square, verbose: true });
    } else {
      selectedSquare = null;
      possibleMoves = [];
    }
    renderBoard(square);
  }

  function handleBoardKeydown(event) {
    if (!event.key.startsWith('Arrow')) return;
    const squareButton = event.target.closest('[data-square]');
    if (!squareButton) return;
    event.preventDefault();
    let row = Number(squareButton.dataset.viewRow);
    let col = Number(squareButton.dataset.viewCol);
    if (event.key === 'ArrowUp') row = Math.max(0, row - 1);
    if (event.key === 'ArrowDown') row = Math.min(7, row + 1);
    if (event.key === 'ArrowLeft') col = Math.max(0, col - 1);
    if (event.key === 'ArrowRight') col = Math.min(7, col + 1);
    const square = viewToSquare(row, col);
    focusedSquare = square;
    document.getElementById('chessBoard').querySelector(`[data-square="${square}"]`)?.focus();
  }

  function afterMove(focusSquare = null) {
    renderBoard(focusSquare);
    renderMoves();
    updateStatus();
    if (!game.isGameOver() && game.turn() !== playerColor) startComputerTurn();
  }

  function startNewGame() {
    clearTimeout(computerTimer);
    computerThinking = false;
    game = new Chess();
    demo = null;
    awarded = false;
    selectedSquare = null;
    possibleMoves = [];
    lastAnnouncement = '';
    renderBoard();
    renderMoves();
    renderDemo();
    updateStatus();
    if (game.turn() !== playerColor) startComputerTurn();
  }

  function undoTurn() {
    if (demo) {
      const opening = OPENINGS.find((item) => item.id === demo.id);
      if (!opening || demo.index === 0) return;
      demo.index -= 1;
      game = new Chess();
      for (let index = 0; index < demo.index; index += 1) game.move(opening.moves[index]);
      selectedSquare = null;
      possibleMoves = [];
      focusedSquare = game.history({ verbose: true }).at(-1)?.to || 'e2';
      renderBoard(focusedSquare);
      renderMoves();
      renderDemo();
      updateStatus();
      return;
    }
    clearTimeout(computerTimer);
    computerThinking = false;
    selectedSquare = null;
    possibleMoves = [];
    if (!game.history().length) return;
    game.undo();
    if (game.history().length && game.turn() !== playerColor) game.undo();
    lastAnnouncement = '';
    renderBoard();
    renderMoves();
    updateStatus();
  }

  function startComputerTurn() {
    clearTimeout(computerTimer);
    computerThinking = true;
    updateStatus();
    computerTimer = setTimeout(() => {
      if (game.isGameOver() || game.turn() === playerColor || demo) {
        computerThinking = false;
        updateStatus();
        return;
      }
      const moves = game.moves({ verbose: true });
      if (!moves.length) {
        computerThinking = false;
        updateStatus();
        return;
      }
      const chosen = level === 'easy' ? chooseEasyMove(moves) : chooseSearchMove(moves, level === 'medium' ? 2 : 3);
      if (chosen) game.move({ from: chosen.from, to: chosen.to, promotion: chosen.promotion || 'q' });
      computerThinking = false;
      selectedSquare = null;
      possibleMoves = [];
      afterMove(chosen?.to || null);
    }, 130);
  }

  function chooseEasyMove(moves) {
    const interesting = moves.filter((move) => move.captured || move.san.includes('+') || move.san.includes('#'));
    const pool = interesting.length && Math.random() < 0.55 ? interesting : moves;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function chooseSearchMove(moves, depth) {
    const rootColor = game.turn();
    let bestScore = -Infinity;
    let bestMoves = [];
    for (const move of orderMoves(moves)) {
      game.move({ from: move.from, to: move.to, promotion: move.promotion || 'q' });
      const score = search(depth - 1, -Infinity, Infinity, rootColor);
      game.undo();
      if (score > bestScore) {
        bestScore = score;
        bestMoves = [move];
      } else if (score === bestScore) bestMoves.push(move);
    }
    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
  }

  function search(depth, alpha, beta, rootColor) {
    if (game.isCheckmate()) return game.turn() === rootColor ? -100000 - depth : 100000 + depth;
    if (game.isDraw()) return 0;
    if (depth <= 0) return evaluate(rootColor);
    const moves = orderMoves(game.moves({ verbose: true }));
    const maximizing = game.turn() === rootColor;
    let best = maximizing ? -Infinity : Infinity;
    for (const move of moves) {
      game.move({ from: move.from, to: move.to, promotion: move.promotion || 'q' });
      const score = search(depth - 1, alpha, beta, rootColor);
      game.undo();
      if (maximizing) {
        best = Math.max(best, score);
        alpha = Math.max(alpha, best);
      } else {
        best = Math.min(best, score);
        beta = Math.min(beta, best);
      }
      if (beta <= alpha) break;
    }
    return best;
  }

  function orderMoves(moves) {
    return [...moves].sort((a, b) => moveOrderScore(b) - moveOrderScore(a));
  }

  function moveOrderScore(move) {
    const captured = move.captured ? PIECE_VALUES[move.captured] : 0;
    const attacker = move.piece ? PIECE_VALUES[move.piece] : 0;
    return (move.promotion ? 1000 : 0) + captured * 10 - attacker + (move.san.includes('+') ? 40 : 0) + (move.san.includes('#') ? 5000 : 0);
  }

  function evaluate(perspective) {
    let total = 0;
    const board = game.board();
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        const piece = board[row][col];
        if (!piece) continue;
        const sign = piece.color === perspective ? 1 : -1;
        const centerDistance = Math.abs(3.5 - col) + Math.abs(3.5 - row);
        let positional = Math.round((7 - centerDistance) * 3);
        if (piece.type === 'p') positional += (piece.color === 'w' ? 6 - row : row - 1) * 3;
        if (piece.type === 'k') positional = 0;
        total += sign * (PIECE_VALUES[piece.type] + positional);
      }
    }
    return total;
  }

  function startDemo(id) {
    const opening = OPENINGS.find((item) => item.id === id);
    if (!opening) return;
    clearTimeout(computerTimer);
    computerThinking = false;
    game = new Chess();
    demo = { id, index: 0 };
    selectedSquare = null;
    possibleMoves = [];
    focusedSquare = 'e2';
    renderBoard();
    renderMoves();
    renderDemo();
    updateStatus();
    document.getElementById('chessDemo')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function advanceDemo() {
    if (!demo) return;
    const opening = OPENINGS.find((item) => item.id === demo.id);
    const san = opening?.moves[demo.index];
    if (!san) return;
    const move = game.move(san);
    demo.index += 1;
    focusedSquare = move?.to || focusedSquare;
    renderBoard(focusedSquare);
    renderMoves();
    renderDemo();
    updateStatus();
    if (demo.index === opening.moves.length && !reward.openings.includes(opening.id)) {
      reward.openings.push(opening.id);
      awardXp(5, copy('openingXp'));
    }
  }

  function playDemoPosition() {
    if (!demo) return;
    demo = null;
    selectedSquare = null;
    possibleMoves = [];
    renderDemo();
    renderBoard();
    renderMoves();
    updateStatus();
    if (game.turn() !== playerColor) startComputerTurn();
  }

  function closeDemo() {
    demo = null;
    startNewGame();
  }

  function speak(text, onEnd = null) {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      const button = document.getElementById('chessVoice');
      if (button) button.textContent = copy('speech');
      lastAnnouncement = copy('speechUnavailable');
      updateStatus();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = ({ en: 'en-US', pt: 'pt-PT', fr: 'fr-FR' })[lang] || 'en-US';
    utterance.rate = 0.94;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
  }

  function speakBoard() {
    const button = document.getElementById('chessVoice');
    if (window.speechSynthesis?.speaking) {
      window.speechSynthesis.cancel();
      if (button) button.textContent = copy('speech');
      return;
    }
    if (button) button.textContent = copy('speechStop');
    const color = game.turn() === 'w' ? copy('white') : copy('black');
    speak(`${copy('boardHint')} ${game.isGameOver() ? document.getElementById('chessStatus').textContent : copy('yourTurn', { color })}`, () => { if (button?.isConnected) button.textContent = copy('speech'); });
  }

  function speakRules() {
    const lines = ['goalBody', 'piecesBody', 'openingBody', 'specialsBody'].map((key) => copy(key));
    speak(`${copy('rulesTitle')}. ${lines.join(' ')}`);
  }

  function speakDemo() {
    if (!demo) return;
    const opening = OPENINGS.find((item) => item.id === demo.id);
    const moveIndex = Math.min(Math.max(0, demo.index - 1), opening.moves.length - 1);
    const notes = copy(opening.notes);
    speak(`${copy(opening.name)}. ${copy('moveLabel', { n: Math.floor(moveIndex / 2) + 1, san: opening.moves[moveIndex] })}. ${notes[moveIndex]}`);
  }

  function syncLanguage() {
    const nextLang = COPY[document.documentElement.lang] ? document.documentElement.lang : 'en';
    if (nextLang === lang) return;
    lang = nextLang;
    document.getElementById('chessHub')?.setAttribute('aria-label', copy('sectionLabel'));
    window.speechSynthesis?.cancel();
    renderShell();
  }

  const languageObserver = new MutationObserver(syncLanguage);
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  app.addEventListener('click', handleAppClick);
  renderShell();
  document.getElementById('chessHub')?.setAttribute('aria-label', copy('sectionLabel'));
  if (playerColor === 'b') startComputerTurn();
}
