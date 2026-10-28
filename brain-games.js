(() => {
  const COPY = {
    en: {
      sectionLabel: 'Brain games and mini challenges', eyebrow: 'THE MIND ARCADE', title: 'Brain Games',
      subtitle: 'Seven quick challenges, plus a fresh daily brain check. Play at your pace and learn with every answer.',
      quickLink: '🧠 Brain games →', brainStars: 'Brain stars', gamesPlayed: 'rounds played',
      levelSeed: 'Curious Seed', levelSpark: 'Bright Spark', levelOrbit: 'Mind Explorer', levelMaster: 'Brain Champion',
      nextBadge: 'Next badge at {points} stars', topBadge: 'You reached the top badge!',
      progressIntro: 'Your brain garden', progressHint: 'Every finished round helps your little brain buddy grow.',
      arcadeIntro: 'Pick a game. The instructions stay right beside you, and every answer comes with a friendly explanation.',
      playCard: 'Play a round →', bestScore: 'Best: {score} pts', notPlayed: 'Ready for your first round',
      numberTitle: 'Number Ninja', numberSkill: 'NUMBER SENSE', numberDesc: 'Quick sums and clever number tricks.', numberHow: 'Choose an answer. After every choice, we show the answer and a simple way to work it out.',
      patternTitle: 'Pattern Safari', patternSkill: 'PATTERN SPOTTING', patternDesc: 'Find the rule hiding in a number trail.', patternHow: 'Look at how the numbers change. Pick what comes next, then see the pattern explained.',
      memoryTitle: 'Memory Mission', memorySkill: 'MEMORY', memoryDesc: 'Watch a symbol trail, then repeat it.', memoryHow: 'Tap “Show the sequence.” Watch each symbol, then tap the same symbols in the same order. Take your time.',
      focusTitle: 'Focus Finder', focusSkill: 'FOCUS', focusDesc: 'Spot every matching shape in the grid.', focusHow: 'Find every {target} in the grid. Tap each one, then check your picks. A row-by-row scan can help.',
      back: '← Game board', challenge: 'Round {n} of 4', howToPlay: 'How to play', hearIt: '🔊 Hear the tip', hearAgain: '🔊 Hear the explanation',
      question: 'Puzzle {n} of 4', chooseAnswer: 'Choose the answer that fits.', whatNext: 'What comes next?', solveIt: 'What does this make?',
      right: 'Brilliant! That is right. ✨', learn: 'Good thinking! Here is how to solve it.',
      nextPuzzle: 'Next puzzle →', finishRound: 'See my results →',
      memoryWatch: 'Look closely…', showSequence: 'Show the sequence ▶', replaySequence: 'Replay the sequence ↻',
      memoryReady: 'Your turn! Tap the symbols in the order you saw them.', memorySelected: 'Your sequence', memoryEmpty: 'Tap a symbol to begin', clearMemory: 'Start my sequence over',
      focusPick: 'Tap every {target} you see. You can change your picks before checking.', checkFocus: 'Check my picks ✓',
      targetTile: 'target', otherTile: 'other shape', tileNumber: 'Tile {n}, {kind}',
      resultGood: 'Amazing focus! You found every target.', resultClose: 'Nice effort! Check the explanation and try another round.',
      memoryGood: 'Memory master! You repeated the whole sequence.', memoryClose: 'Good try! Memory grows with practice.',
      memoryExplain: 'The sequence was {sequence}. You matched {matched} of {total}. Try quietly naming each symbol as you remember it.',
      focusExplain: 'There were {total} orange diamond shapes. You found {found} and tapped {extra} other shapes. Scan one row at a time to catch them all.',
      roundComplete: 'Round complete!', roundScore: 'You earned {score} points and {stars} brain stars.', roundGrow: 'Your brain buddy is growing. Come back for another tiny challenge!',
      playAgain: 'Play again', pickAnother: 'Choose another game', correctCount: '{correct} of 4 puzzles solved', bestNew: 'New personal best! 🏆',
      scoreChip: '{score} points', correctOption: 'Correct answer',
      listenUnavailable: 'Text to speech is not available in this browser.',
      dailyTitle: 'Daily Brain Check', dailySkill: 'TODAY’S MIX', dailyDesc: 'Four surprises across different skills. See your time and beat your best.', dailyHow: 'Try four different puzzles. The clock is for fun; careful answers count most.',
      dailyBanner: 'Today’s brain check', dailyBannerHint: 'A quick mix of puzzles, a new best to chase, and a little streak to grow.', dailyPlay: 'Start today’s check →', dailyDone: 'Completed today · best {score} pts', dailyReady: 'Ready when you are', streakLabel: '{days}-day streak',
      symbolTitle: 'Missing Symbol', symbolSkill: 'QUICK MATH', symbolDesc: 'Find the sign that makes an equation work.', symbolHow: 'Choose +, −, ×, or ÷ so both sides match.', missingSign: 'Which sign makes this true?',
      switchTitle: 'Rule Flip', switchSkill: 'FLEXIBLE THINKING', switchDesc: 'Switch between biggest and smallest in a flash.', switchHow: 'Read the rule each time. Tap the largest or smallest number as asked.', pickLargest: 'Tap the largest number.', pickSmallest: 'Tap the smallest number.',
      oddTitle: 'Odd One Out', oddSkill: 'LOGIC', oddDesc: 'Spot the number that breaks the group’s rule.', oddHow: 'Three numbers follow one rule. Choose the one that does not.', oddOneOut: 'Which number is different?',
      symbolExplain: '{a} {sign} {b} = {result}. That is the only sign that works.', switchExplain: '{answer} is the {rule} of the four numbers.', oddExplain: '{answer} is the only {kind} number in the group.', evenWord: 'even', oddWord: 'odd', largestWord: 'largest', smallestWord: 'smallest',
      timerLabel: 'Time', dailyResult: 'Brain Spark: {score}/100 · {seconds}s', dailyResultHint: 'A playful game score based on this round, not a measure of intelligence or age.', dailyBonus: 'Daily bonus: +{stars} stars',
      nums: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    },
    pt: {
      sectionLabel: 'Jogos de raciocínio e desafios rápidos', eyebrow: 'ARCADE DA MENTE', title: 'Jogos de raciocínio',
      subtitle: 'Sete desafios rápidos e um teste diário variado. Jogue ao seu ritmo e aprenda com cada resposta.',
      quickLink: '🧠 Jogos de raciocínio →', brainStars: 'Estrelas mentais', gamesPlayed: 'rondas jogadas',
      levelSeed: 'Semente curiosa', levelSpark: 'Faísca brilhante', levelOrbit: 'Explorador da mente', levelMaster: 'Campeão cerebral',
      nextBadge: 'Próxima medalha: {points} estrelas', topBadge: 'Chegou à medalha máxima!',
      progressIntro: 'O jardim da mente', progressHint: 'Cada ronda concluída ajuda o seu companheiro a crescer.',
      arcadeIntro: 'Escolha um jogo. As instruções ficam ao lado e cada resposta traz uma explicação simples.',
      playCard: 'Jogar uma ronda →', bestScore: 'Recorde: {score} pts', notPlayed: 'Pronto para a primeira ronda',
      numberTitle: 'Ninja dos Números', numberSkill: 'SENTIDO NUMÉRICO', numberDesc: 'Contas rápidas e truques com números.', numberHow: 'Escolha uma resposta. Depois de cada escolha, mostramos a solução e uma forma simples de lá chegar.',
      patternTitle: 'Safari de Padrões', patternSkill: 'DESCOBRIR PADRÕES', patternDesc: 'Encontre a regra escondida na sequência.', patternHow: 'Observe como os números mudam. Escolha o próximo e descubra a explicação do padrão.',
      memoryTitle: 'Missão Memória', memorySkill: 'MEMÓRIA', memoryDesc: 'Observe uma sequência de símbolos e repita-a.', memoryHow: 'Toque em “Mostrar sequência”. Observe cada símbolo e depois toque nos mesmos pela mesma ordem. Sem pressa.',
      focusTitle: 'Olho de Lince', focusSkill: 'ATENÇÃO', focusDesc: 'Encontre todas as formas iguais na grelha.', focusHow: 'Encontre todos os símbolos {target}. Toque em cada um e confirme as escolhas. Percorrer linha a linha ajuda.',
      back: '← Jogos', challenge: 'Ronda {n} de 4', howToPlay: 'Como jogar', hearIt: '🔊 Ouvir a dica', hearAgain: '🔊 Ouvir a explicação',
      question: 'Desafio {n} de 4', chooseAnswer: 'Escolha a resposta certa.', whatNext: 'O que vem a seguir?', solveIt: 'Quanto dá?',
      right: 'Excelente! Está certo. ✨', learn: 'Boa tentativa! Veja como resolver.',
      nextPuzzle: 'Próximo desafio →', finishRound: 'Ver resultados →',
      memoryWatch: 'Observe com atenção…', showSequence: 'Mostrar sequência ▶', replaySequence: 'Repetir sequência ↻',
      memoryReady: 'A sua vez! Toque nos símbolos pela ordem em que apareceram.', memorySelected: 'A sua sequência', memoryEmpty: 'Toque num símbolo para começar', clearMemory: 'Recomeçar sequência',
      focusPick: 'Toque em todos os símbolos {target}. Pode alterar as escolhas antes de confirmar.', checkFocus: 'Confirmar escolhas ✓',
      targetTile: 'alvo', otherTile: 'outra forma', tileNumber: 'Símbolo {n}, {kind}',
      resultGood: 'Excelente atenção! Encontrou todos os símbolos.', resultClose: 'Boa tentativa! Veja a explicação e experimente outra ronda.',
      memoryGood: 'Memória de campeão! Repetiu a sequência inteira.', memoryClose: 'Boa tentativa! A memória cresce com a prática.',
      memoryExplain: 'A sequência era {sequence}. Acertou {matched} de {total}. Experimente dizer baixinho cada símbolo enquanto se lembra dele.',
      focusExplain: 'Havia {total} losangos cor de laranja. Encontrou {found} e tocou em {extra} símbolos diferentes. Percorra uma linha de cada vez.',
      roundComplete: 'Ronda concluída!', roundScore: 'Ganhou {score} pontos e {stars} estrelas mentais.', roundGrow: 'O seu companheiro está a crescer. Volte para mais um desafio!',
      playAgain: 'Jogar novamente', pickAnother: 'Escolher outro jogo', correctCount: '{correct} de 4 desafios resolvidos', bestNew: 'Novo recorde pessoal! 🏆',
      scoreChip: '{score} pontos', correctOption: 'Resposta certa',
      listenUnavailable: 'A voz não está disponível neste navegador.',
      dailyTitle: 'Desafio diário', dailySkill: 'MISTURA DO DIA', dailyDesc: 'Quatro surpresas de diferentes habilidades. Melhore o seu tempo e recorde.', dailyHow: 'Resolva quatro desafios diferentes. O relógio é só para brincar; acertar é mais importante.',
      dailyBanner: 'Desafio mental de hoje', dailyBannerHint: 'Uma mistura rápida, um novo recorde e uma sequência para continuar.', dailyPlay: 'Começar o desafio de hoje →', dailyDone: 'Concluído hoje · recorde {score} pts', dailyReady: 'Quando quiser', streakLabel: 'Sequência de {days} dias',
      symbolTitle: 'Sinal em Falta', symbolSkill: 'CÁLCULO RÁPIDO', symbolDesc: 'Encontre o sinal que completa a conta.', symbolHow: 'Escolha +, −, × ou ÷ para igualar os dois lados.', missingSign: 'Qual sinal torna a conta correta?',
      switchTitle: 'Troca de Regra', switchSkill: 'PENSAMENTO FLEXÍVEL', switchDesc: 'Alterne entre o maior e o menor num instante.', switchHow: 'Leia a regra de cada vez. Toque no maior ou menor número pedido.', pickLargest: 'Toque no maior número.', pickSmallest: 'Toque no menor número.',
      oddTitle: 'O Intruso', oddSkill: 'LÓGICA', oddDesc: 'Descubra o número que quebra a regra.', oddHow: 'Três números seguem a mesma regra. Escolha o que não segue.', oddOneOut: 'Qual número é diferente?',
      symbolExplain: '{a} {sign} {b} = {result}. É o único sinal que funciona.', switchExplain: '{answer} é o {rule} dos quatro números.', oddExplain: '{answer} é o único número {kind} do grupo.', evenWord: 'par', oddWord: 'ímpar', largestWord: 'maior', smallestWord: 'menor',
      timerLabel: 'Tempo', dailyResult: 'Faísca mental: {score}/100 · {seconds}s', dailyResultHint: 'Pontuação divertida desta ronda, não mede a inteligência nem a idade.', dailyBonus: 'Bónus diário: +{stars} estrelas',
      nums: ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'],
    },
    fr: {
      sectionLabel: 'Jeux de réflexion et mini-défis', eyebrow: 'L’ARCADE DES NEURONES', title: 'Jeux de réflexion',
      subtitle: 'Sept défis rapides et un test quotidien varié. Jouez à votre rythme et apprenez à chaque réponse.',
      quickLink: '🧠 Jeux de réflexion →', brainStars: 'Étoiles de réflexion', gamesPlayed: 'parties jouées',
      levelSeed: 'Graine curieuse', levelSpark: 'Belle étincelle', levelOrbit: 'Explorateur d’idées', levelMaster: 'Champion des neurones',
      nextBadge: 'Prochain badge à {points} étoiles', topBadge: 'Vous avez le badge maximum !',
      progressIntro: 'Votre jardin d’idées', progressHint: 'Chaque partie terminée fait grandir votre petit compagnon.',
      arcadeIntro: 'Choisissez un jeu. Les consignes restent à côté et chaque réponse reçoit une explication simple.',
      playCard: 'Jouer une partie →', bestScore: 'Record : {score} pts', notPlayed: 'Prêt pour votre première partie',
      numberTitle: 'Ninja des nombres', numberSkill: 'SENS DES NOMBRES', numberDesc: 'Des calculs rapides et des astuces malines.', numberHow: 'Choisissez une réponse. Après chaque choix, découvrez la solution et une méthode simple.',
      patternTitle: 'Safari des suites', patternSkill: 'REPÉRER UN MOTIF', patternDesc: 'Trouvez la règle cachée dans la suite.', patternHow: 'Observez comment les nombres changent. Choisissez le suivant, puis découvrez la règle.',
      memoryTitle: 'Mission mémoire', memorySkill: 'MÉMOIRE', memoryDesc: 'Regardez une suite de symboles, puis répétez-la.', memoryHow: 'Touchez « Voir la suite ». Observez les symboles, puis touchez-les dans le même ordre. Prenez votre temps.',
      focusTitle: 'Œil de lynx', focusSkill: 'ATTENTION', focusDesc: 'Repérez toutes les formes identiques dans la grille.', focusHow: 'Trouvez tous les symboles {target}. Touchez chacun, puis vérifiez vos choix. Parcourir une ligne après l’autre aide.',
      back: '← Les jeux', challenge: 'Manche {n} sur 4', howToPlay: 'Comment jouer', hearIt: '🔊 Écouter le conseil', hearAgain: '🔊 Écouter l’explication',
      question: 'Défi {n} sur 4', chooseAnswer: 'Choisissez la bonne réponse.', whatNext: 'Quel nombre vient ensuite ?', solveIt: 'Combien cela fait-il ?',
      right: 'Bravo ! C’est la bonne réponse. ✨', learn: 'Bien essayé ! Voici comment trouver.',
      nextPuzzle: 'Défi suivant →', finishRound: 'Voir mes résultats →',
      memoryWatch: 'Regardez bien…', showSequence: 'Voir la suite ▶', replaySequence: 'Revoir la suite ↻',
      memoryReady: 'À vous ! Touchez les symboles dans l’ordre où vous les avez vus.', memorySelected: 'Votre suite', memoryEmpty: 'Touchez un symbole pour commencer', clearMemory: 'Recommencer la suite',
      focusPick: 'Touchez chaque symbole {target}. Vous pouvez modifier vos choix avant de vérifier.', checkFocus: 'Vérifier mes choix ✓',
      targetTile: 'cible', otherTile: 'autre forme', tileNumber: 'Case {n}, {kind}',
      resultGood: 'Super attention ! Vous avez trouvé toutes les cibles.', resultClose: 'Bien essayé ! Lisez l’explication et faites une autre manche.',
      memoryGood: 'Mémoire de champion ! Vous avez répété toute la suite.', memoryClose: 'Bien essayé ! La mémoire se travaille.',
      memoryExplain: 'La suite était {sequence}. Vous en avez retrouvé {matched} sur {total}. Essayez de nommer chaque symbole en le mémorisant.',
      focusExplain: 'Il y avait {total} losanges orange. Vous en avez trouvé {found} et touché {extra} autres formes. Parcourez une ligne à la fois.',
      roundComplete: 'Manche terminée !', roundScore: 'Vous gagnez {score} points et {stars} étoiles méninges.', roundGrow: 'Votre compagnon grandit. Revenez pour un autre petit défi !',
      playAgain: 'Rejouer', pickAnother: 'Choisir un autre jeu', correctCount: '{correct} défis réussis sur 4', bestNew: 'Nouveau record personnel ! 🏆',
      scoreChip: '{score} points', correctOption: 'Bonne réponse',
      listenUnavailable: 'La synthèse vocale n’est pas disponible dans ce navigateur.',
      dailyTitle: 'Défi du jour', dailySkill: 'MÉLANGE DU JOUR', dailyDesc: 'Quatre surprises pour varier les idées. Améliorez votre temps et votre record.', dailyHow: 'Essayez quatre énigmes différentes. Le chrono est pour s’amuser ; la précision compte davantage.',
      dailyBanner: 'Défi cérébral du jour', dailyBannerHint: 'Un mélange rapide, un record à battre et une série à prolonger.', dailyPlay: 'Commencer le défi du jour →', dailyDone: 'Terminé aujourd’hui · record {score} pts', dailyReady: 'Quand vous voulez', streakLabel: 'Série de {days} jours',
      symbolTitle: 'Signe manquant', symbolSkill: 'CALCUL RAPIDE', symbolDesc: 'Trouvez le signe qui complète l’égalité.', symbolHow: 'Choisissez +, −, × ou ÷ pour équilibrer les deux côtés.', missingSign: 'Quel signe rend cette égalité vraie ?',
      switchTitle: 'Règle surprise', switchSkill: 'SOUPLESSE D’ESPRIT', switchDesc: 'Passez du plus grand au plus petit en un clin d’œil.', switchHow: 'Lisez la règle à chaque tour. Touchez le plus grand ou le plus petit nombre demandé.', pickLargest: 'Touchez le plus grand nombre.', pickSmallest: 'Touchez le plus petit nombre.',
      oddTitle: 'L’intrus', oddSkill: 'LOGIQUE', oddDesc: 'Repérez le nombre qui ne suit pas la règle.', oddHow: 'Trois nombres suivent la même règle. Choisissez celui qui diffère.', oddOneOut: 'Quel nombre est différent ?',
      symbolExplain: '{a} {sign} {b} = {result}. C’est le seul signe qui convient.', switchExplain: '{answer} est le {rule} des quatre nombres.', oddExplain: '{answer} est le seul nombre {kind} du groupe.', evenWord: 'pair', oddWord: 'impair', largestWord: 'plus grand', smallestWord: 'plus petit',
      timerLabel: 'Temps', dailyResult: 'Étincelle mentale : {score}/100 · {seconds}s', dailyResultHint: 'Un score ludique pour cette partie, pas une mesure de l’intelligence ni de l’âge.', dailyBonus: 'Bonus quotidien : +{stars} étoiles',
      nums: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'],
    },
  };

  const GAMES = [
    { id: 'number', icon: '➕', title: 'numberTitle', skill: 'numberSkill', desc: 'numberDesc', how: 'numberHow', color: 'mint' },
    { id: 'pattern', icon: '🌀', title: 'patternTitle', skill: 'patternSkill', desc: 'patternDesc', how: 'patternHow', color: 'violet' },
    { id: 'memory', icon: '🧩', title: 'memoryTitle', skill: 'memorySkill', desc: 'memoryDesc', how: 'memoryHow', color: 'peach' },
    { id: 'focus', icon: '🔎', title: 'focusTitle', skill: 'focusSkill', desc: 'focusDesc', how: 'focusHow', color: 'blue' },
    { id: 'symbol', icon: '➗', title: 'symbolTitle', skill: 'symbolSkill', desc: 'symbolDesc', how: 'symbolHow', color: 'mint' },
    { id: 'switch', icon: '🔀', title: 'switchTitle', skill: 'switchSkill', desc: 'switchDesc', how: 'switchHow', color: 'violet' },
    { id: 'odd', icon: '🕵️', title: 'oddTitle', skill: 'oddSkill', desc: 'oddDesc', how: 'oddHow', color: 'peach' },
    { id: 'daily', icon: '⚡', title: 'dailyTitle', skill: 'dailySkill', desc: 'dailyDesc', how: 'dailyHow', color: 'blue' },
  ];
  const MEMORY_SYMBOLS = ['🔴', '🟡', '🟢', '🔵', '🟣', '⭐'];
  const MEMORY_NAMES = {
    en: ['red circle', 'yellow circle', 'green circle', 'blue circle', 'purple circle', 'star'],
    pt: ['círculo vermelho', 'círculo amarelo', 'círculo verde', 'círculo azul', 'círculo roxo', 'estrela'],
    fr: ['cercle rouge', 'cercle jaune', 'cercle vert', 'cercle bleu', 'cercle violet', 'étoile'],
  };
  const FOCUS_TARGET = '🔶';
  const FOCUS_DISTRACTORS = ['🔷', '🟠', '⭐', '🟣', '🟩'];
  const NUMBER_EXPLANATIONS = {
    en: [
      '8 + 7 = 15. Make 10 first: 8 + 2 = 10, then add the 5 left over.',
      '23 − 8 = 15. Take away 3 to get 20, then 5 more to get 15.',
      '6 × 7 means six groups of seven: 7 + 7 + 7 + 7 + 7 + 7 = 42.',
      'Add tens and ones: 30 + 20 = 50, and 6 + 7 = 13. Then 50 + 13 = 63.',
      '45 − 19 = 45 − 20 + 1. That is 25 + 1 = 26.',
    ],
    pt: [
      '8 + 7 = 15. Primeiro forme 10: 8 + 2 = 10; sobram 5. Então 10 + 5 = 15.',
      '23 − 8 = 15. Retire 3 para chegar a 20 e depois retire mais 5: fica 15.',
      '6 × 7 são seis grupos de 7: 7 + 7 + 7 + 7 + 7 + 7 = 42.',
      'Some dezenas e unidades: 30 + 20 = 50, e 6 + 7 = 13. Então 50 + 13 = 63.',
      '45 − 19 é o mesmo que 45 − 20 + 1. Isso dá 25 + 1 = 26.',
    ],
    fr: [
      '8 + 7 = 15. Faites 10 d’abord : 8 + 2 = 10, puis ajoutez les 5 restants.',
      '23 − 8 = 15. Enlevez 3 pour arriver à 20, puis encore 5 : il reste 15.',
      '6 × 7, c’est six groupes de 7 : 7 + 7 + 7 + 7 + 7 + 7 = 42.',
      'Additionnez dizaines et unités : 30 + 20 = 50 et 6 + 7 = 13. Donc 50 + 13 = 63.',
      '45 − 19 équivaut à 45 − 20 + 1. Cela fait 25 + 1 = 26.',
    ],
  };
  const PATTERN_EXPLANATIONS = {
    en: [
      'Add 2 each time: 2, 4, 6, 8, then 10.',
      'Each number doubles: 3, 6, 12, 24, then 48.',
      'These are square numbers: 1×1, 2×2, 3×3, 4×4, so next is 5×5 = 25.',
      'Take away 3 each time: 30, 27, 24, 21, then 18.',
      'Add one more each time: +2, +3, +4, so next add +5 to make 15.',
    ],
    pt: [
      'Some 2 de cada vez: 2, 4, 6, 8 e depois 10.',
      'Cada número duplica: 3, 6, 12, 24 e depois 48.',
      'São quadrados perfeitos: 1×1, 2×2, 3×3, 4×4. O próximo é 5×5 = 25.',
      'Subtraia 3 de cada vez: 30, 27, 24, 21 e depois 18.',
      'Some mais 1 a cada passo: +2, +3, +4. Agora some +5 e chega a 15.',
    ],
    fr: [
      'Ajoutez 2 à chaque fois : 2, 4, 6, 8, puis 10.',
      'Chaque nombre double : 3, 6, 12, 24, puis 48.',
      'Ce sont des carrés : 1×1, 2×2, 3×3, 4×4, puis 5×5 = 25.',
      'Retirez 3 à chaque fois : 30, 27, 24, 21, puis 18.',
      'Ajoutez un nombre de plus à chaque étape : +2, +3, +4, puis +5 pour arriver à 15.',
    ],
  };
  const app = document.getElementById('brainGamesApp');
  if (!app) return;

  let lang = document.documentElement.lang || 'en';
  let activeGame = null;
  let run = null;
  let memoryTimer = null;
  let memoryToken = 0;
  let progress = loadProgress();

  function copy(key, vars = {}) {
    const value = (COPY[lang] || COPY.en)[key] ?? COPY.en[key] ?? key;
    if (Array.isArray(value)) return value;
    return Object.entries(vars).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)), value);
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem('brain-games-progress') || '{}');
      return { xp: Number(saved.xp) || 0, played: Number(saved.played) || 0, best: saved.best && typeof saved.best === 'object' ? saved.best : {}, daily: saved.daily && typeof saved.daily === 'object' ? saved.daily : {} };
    } catch { return { xp: 0, played: 0, best: {}, daily: {} }; }
  }

  function saveProgress() {
    try { localStorage.setItem('brain-games-progress', JSON.stringify(progress)); } catch { /* Keep the games playable without storage. */ }
  }

  function currentLevel() {
    if (progress.xp >= 300) return { name: 'levelMaster', icon: '🦉', start: 300, next: 300 };
    if (progress.xp >= 150) return { name: 'levelOrbit', icon: '🚀', start: 150, next: 300 };
    if (progress.xp >= 50) return { name: 'levelSpark', icon: '⚡', start: 50, next: 150 };
    return { name: 'levelSeed', icon: '🌱', start: 0, next: 50 };
  }

  function dayKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  function dailyStreak() {
    let day = new Date();
    if (!progress.daily[dayKey(day)]) day.setDate(day.getDate() - 1);
    let count = 0;
    while (progress.daily[dayKey(day)]) {
      count += 1;
      day.setDate(day.getDate() - 1);
    }
    return count;
  }

  function dailyOrder() {
    const ids = ['number', 'pattern', 'memory', 'focus', 'symbol', 'switch', 'odd'];
    const seed = [...dayKey()].reduce((total, char) => total + char.charCodeAt(0), 0);
    return Array.from({ length: 4 }, (_, index) => ids[(seed + index * 2) % ids.length]);
  }

  function progressMarkup() {
    const level = currentLevel();
    const amount = level.next === level.start ? 100 : Math.max(0, Math.min(100, ((progress.xp - level.start) / (level.next - level.start)) * 100));
    return `<div class="brain-evolution"><div class="brain-buddy" aria-hidden="true"><span>${level.icon}</span><i>✦</i><i>✦</i></div><div class="brain-evolution-copy"><div class="brain-level-line"><strong>${copy('progressIntro')}</strong><span>${copy(level.name)}</span></div><p>${copy('progressHint')}</p><div class="brain-meter" role="progressbar" aria-label="${copy('progressIntro')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(amount)}"><span style="width:${amount}%"></span></div><small>${level.next === level.start ? copy('topBadge') : copy('nextBadge', { points: level.next })}</small></div></div>`;
  }

  function renderLobby() {
    const cards = GAMES.filter((game) => game.id !== 'daily').map((game, index) => {
      const best = progress.best[game.id];
      return `<button type="button" class="brain-game-card ${game.color}" data-brain-action="start" data-game-id="${game.id}"><span class="brain-card-top"><span class="brain-game-icon" aria-hidden="true">${game.icon}</span><span class="brain-card-number">0${index + 1}</span></span><span class="brain-game-skill">${copy(game.skill)}</span><strong>${copy(game.title)}</strong><span class="brain-game-description">${copy(game.desc)}</span><span class="brain-card-footer"><span>${best === undefined ? copy('notPlayed') : copy('bestScore', { score: best })}</span><span class="brain-play-link">${copy('playCard')}</span></span></button>`;
    }).join('');
    app.innerHTML = `
      <div class="brain-heading"><div><p class="section-eyebrow">${copy('eyebrow')}</p><h2 class="section-title">${copy('title')} <span aria-hidden="true" class="brain-heading-star">✦</span></h2><p class="section-description">${copy('subtitle')}</p></div><div class="brain-total"><span aria-hidden="true">🌟</span><div><strong>${progress.xp}</strong><small>${copy('brainStars')}</small></div></div></div>
      <div class="brain-evolution-wrap">${progressMarkup()}<div class="brain-played-stat"><span aria-hidden="true">🎮</span><strong>${progress.played}</strong><small>${copy('gamesPlayed')}</small></div></div>
      <div class="brain-daily-banner"><div class="brain-daily-icon" aria-hidden="true">⚡</div><div><span class="brain-game-skill">${copy('dailySkill')}</span><h3>${copy('dailyBanner')}</h3><p>${copy('dailyBannerHint')}</p><small>${progress.daily[dayKey()] ? copy('dailyDone', { score: progress.daily[dayKey()].score }) : copy('dailyReady')} · ${copy('streakLabel', { days: dailyStreak() })}</small></div><button type="button" class="brain-main-action" data-brain-action="start" data-game-id="daily">${copy('dailyPlay')}</button></div>
      <div class="brain-lobby-note"><span class="brain-note-icon" aria-hidden="true">💡</span><p>${copy('arcadeIntro')}</p></div>
      <div class="brain-game-grid">${cards}</div>`;
    document.getElementById('brainGames')?.setAttribute('aria-label', copy('sectionLabel'));
  }

  function renderStage() {
    const game = GAMES.find((item) => item.id === activeGame);
    if (!game || !run) return renderLobby();
    const isFinished = run.finished;
    const progressPips = Array.from({ length: 4 }, (_, index) => `<span class="${index < (isFinished ? 4 : run.index) ? 'done' : ''}${index === run.index && !isFinished ? ' current' : ''}">${index < run.index || isFinished ? '✓' : index + 1}</span>`).join('');
    const best = run.finished ? run.previousBest : progress.best[game.id] || 0;
    app.innerHTML = `
      <div class="brain-stage-heading"><button type="button" class="brain-back" data-brain-action="back">${copy('back')}</button><div class="brain-stage-title"><span class="brain-stage-icon ${game.color}" aria-hidden="true">${game.icon}</span><div><span class="brain-game-skill">${copy(game.skill)}</span><h2>${copy(game.title)}</h2></div></div><span class="brain-timer">⏱ <span id="brainTimer">${elapsedSeconds()}s</span></span><span class="brain-score-chip">🌟 ${copy('scoreChip', { score: run.score })}</span></div>
      <div class="brain-coach-banner"><span aria-hidden="true">🗣️</span><div><strong>${copy('howToPlay')}</strong><p>${copy(GAMES.find((item) => item.id === (run.current.origin || activeGame)).how, { target: FOCUS_TARGET })}</p></div><button type="button" class="brain-hear-btn" data-brain-action="speak" aria-label="${copy(run.answered ? 'hearAgain' : 'hearIt')}">${copy(run.answered ? 'hearAgain' : 'hearIt')}</button></div>
      <div class="brain-round-progress"><div class="brain-round-pips">${progressPips}</div><span>${isFinished ? copy('roundComplete') : copy('challenge', { n: run.index + 1 })}</span></div>
      <div class="brain-playfield" id="brainPlayfield">${isFinished ? renderResults(game, best) : ''}</div>`;
    if (!isFinished) renderPuzzle(game);
    document.getElementById('brainGames')?.setAttribute('aria-label', copy('sectionLabel'));
  }

  function renderPuzzle(game, focus = null) {
    const puzzle = run.current;
    let html = '';
    if (puzzle.type === 'choice') {
      const isSequence = puzzle.prompt === 'whatNext';
      html = `<div class="brain-question-card"><span class="brain-question-label">${copy('question', { n: run.index + 1 })}${puzzle.origin ? ` · ${copy(GAMES.find((item) => item.id === puzzle.origin).title)}` : ''}</span><h3>${copy(puzzle.prompt)}</h3><div class="brain-number-display${isSequence ? ' sequence' : ' equation'}">${puzzle.display.map((part) => `<span>${part}</span>`).join(isSequence ? '<i aria-hidden="true">→</i>' : '')}</div><div class="brain-answer-grid">${puzzle.options.map((option, index) => `<button type="button" class="brain-answer-option${run.answered ? option.value === puzzle.answer ? ' correct' : option.value === run.answered.value ? ' incorrect' : '' : ''}" data-brain-action="answer" data-answer-index="${index}" ${run.answered ? 'disabled' : ''}>${option.label}</button>`).join('')}</div></div>`;
    } else if (puzzle.type === 'memory') {
      const flashing = run.flashIndex >= 0 ? puzzle.sequence[run.flashIndex] : '';
      const shown = run.selected.length ? run.selected : [];
      const memoryNames = MEMORY_NAMES[lang] || MEMORY_NAMES.en;
      html = `<div class="brain-question-card brain-memory-card"><span class="brain-question-label">${copy('question', { n: run.index + 1 })}</span><h3>${copy('memoryWatch')}</h3><div class="brain-flash-stage ${run.showing ? 'flashing' : ''}" aria-live="polite"><span>${flashing || (run.ready ? '✨' : '👀')}</span>${run.showing ? `<small>${copy('memoryWatch')}</small>` : ''}</div>${!run.ready && !run.showing ? `<button type="button" class="brain-main-action" data-brain-action="show-sequence">${copy(run.hasShown ? 'replaySequence' : 'showSequence')}</button>` : ''}${run.showing ? `<p class="brain-memory-prompt">${copy('memoryWatch')}</p>` : ''}${run.ready && !run.answered ? `<div class="brain-memory-entry"><span>${copy('memorySelected')}</span><div class="brain-memory-slots">${Array.from({ length: puzzle.sequence.length }, (_, index) => `<i>${shown[index] || '·'}</i>`).join('')}</div><p>${shown.length ? shown.join(' ') : copy('memoryReady')}</p><div class="brain-symbol-picker">${MEMORY_SYMBOLS.map((symbol, index) => `<button type="button" data-brain-action="memory-pick" data-symbol-index="${index}" aria-label="${memoryNames[index]}" ${run.selected.length >= puzzle.sequence.length ? 'disabled' : ''}>${symbol}</button>`).join('')}</div><button type="button" class="brain-clear-action" data-brain-action="memory-clear">${copy('clearMemory')}</button></div>` : ''}${run.answered ? `<div class="brain-memory-reveal" aria-label="${copy('memorySelected')}">${puzzle.sequence.map((symbol) => `<span>${symbol}</span>`).join('')}</div>` : ''}</div>`;
    } else {
      html = `<div class="brain-question-card brain-focus-card"><span class="brain-question-label">${copy('question', { n: run.index + 1 })}</span><h3>${copy('focusPick', { target: puzzle.target })}</h3><div class="brain-focus-grid">${puzzle.cells.map((cell, index) => `<button type="button" class="brain-focus-tile${run.selected.includes(index) ? ' picked' : ''}${run.answered ? puzzle.targetIndices.includes(index) ? ' target-answer' : run.selected.includes(index) ? ' false-pick' : '' : ''}" data-brain-action="focus-pick" data-tile-index="${index}" aria-label="${copy('tileNumber', { n: index + 1, kind: cell === puzzle.target ? copy('targetTile') : copy('otherTile') })}" aria-pressed="${run.selected.includes(index)}" ${run.answered ? 'disabled' : ''}>${cell}</button>`).join('')}</div>${!run.answered ? `<button type="button" class="brain-main-action" data-brain-action="focus-check">${copy('checkFocus')}</button>` : ''}</div>`;
    }
    const feedback = run.answered ? `<div class="brain-feedback ${run.answered.isCorrect ? 'success' : 'coach'}" role="status" aria-live="polite"><span class="brain-feedback-icon" aria-hidden="true">${run.answered.isCorrect ? '🎉' : '💛'}</span><div><strong>${run.answered.isCorrect ? copy('right') : copy('learn')}</strong><p>${run.answered.explanation}</p></div><button type="button" class="brain-hear-explanation" data-brain-action="speak-explanation">${copy('hearAgain')}</button><button type="button" class="brain-next-action" data-brain-action="next">${run.index === 3 ? copy('finishRound') : copy('nextPuzzle')}</button></div>` : '';
    const field = document.getElementById('brainPlayfield');
    const hearButton = document.querySelector('.brain-hear-btn');
    if (hearButton) {
      hearButton.textContent = copy(run.answered ? 'hearAgain' : 'hearIt');
      hearButton.setAttribute('aria-label', copy(run.answered ? 'hearAgain' : 'hearIt'));
    }
    if (field) {
      field.innerHTML = html + feedback;
      if (focus !== null) field.querySelector(`[data-brain-action="${focus.action}"][${focus.attribute}="${focus.value}"]`)?.focus({ preventScroll: true });
      return '';
    }
    return html + feedback;
  }

  function renderResults(game, previousBest) {
    const stars = run.awardedStars;
    const personalBest = run.score > previousBest;
    const meter = run.maxPossible ? Math.round((run.score / run.maxPossible) * 100) : 0;
    return `<div class="brain-results"><div class="brain-result-spark" aria-hidden="true">🏆</div><p class="section-eyebrow">${copy('roundComplete')}</p><h3>${copy(game.title)}</h3><strong class="brain-result-score">${copy('roundScore', { score: run.score, stars })}</strong><p>${copy('correctCount', { correct: run.correct })}</p>${game.id === 'daily' ? `<div class="brain-mind-meter"><strong>${copy('dailyResult', { score: meter, seconds: run.elapsed })}</strong><small>${copy('dailyResultHint')}</small>${run.dailyBonus ? `<span>${copy('dailyBonus', { stars: run.dailyBonus })}</span>` : ''}</div>` : `<p>⏱ ${copy('timerLabel')}: ${run.elapsed}s</p>`}${personalBest ? `<span class="brain-new-best">${copy('bestNew')}</span>` : ''}<div class="brain-result-growth"><span aria-hidden="true">${currentLevel().icon}</span><p>${copy('roundGrow')}</p></div><div class="brain-result-actions"><button type="button" class="brain-main-action" data-brain-action="again" data-game-id="${game.id}">${copy('playAgain')}</button><button type="button" class="brain-secondary-action" data-brain-action="back">${copy('pickAnother')}</button></div></div>`;
  }

  function elapsedSeconds() {
    return run ? Math.round(((run.finished ? run.finishedAt : performance.now()) - run.startedAt) / 1000) : 0;
  }

  function startGame(id) {
    const chosen = GAMES.find((game) => game.id === id);
    if (!chosen) return;
    stopTimers();
    activeGame = id;
    run = { index: 0, score: 0, maxPossible: 0, correct: 0, current: makePuzzle(id, 0), answered: null, selected: [], showing: false, ready: false, hasShown: false, flashIndex: -1, finished: false, startedAt: performance.now(), puzzleStartedAt: performance.now(), timer: null };
    run.timer = window.setInterval(() => {
      const label = document.getElementById('brainTimer');
      if (label) label.textContent = `${elapsedSeconds()}s`;
    }, 250);
    render();
    document.getElementById('brainGames')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function makePuzzle(id, index) {
    const turn = progress.played * 2 + index;
    if (id === 'daily') {
      const origin = dailyOrder()[index];
      return { ...makePuzzle(origin, index), origin };
    }
    if (id === 'number') {
      const items = [
        { display: ['8', '+', '7'], answer: 15 }, { display: ['23', '−', '8'], answer: 15 },
        { display: ['6', '×', '7'], answer: 42 }, { display: ['36', '+', '27'], answer: 63 },
        { display: ['45', '−', '19'], answer: 26 },
      ];
      const item = items[turn % items.length];
      const explanations = Object.fromEntries(Object.entries(NUMBER_EXPLANATIONS).map(([locale, lines]) => [locale, lines[turn % items.length]]));
      return { type: 'choice', prompt: 'solveIt', display: item.display, options: makeOptions(item.answer), answer: item.answer, explanations, explanation: explanations[lang] || explanations.en };
    }
    if (id === 'pattern') {
      const patterns = [
        { display: ['2', '4', '6', '8', '?'], answer: 10 }, { display: ['3', '6', '12', '24', '?'], answer: 48 },
        { display: ['1', '4', '9', '16', '?'], answer: 25 }, { display: ['30', '27', '24', '21', '?'], answer: 18 },
        { display: ['1', '3', '6', '10', '?'], answer: 15 },
      ];
      const item = patterns[turn % patterns.length];
      const explanations = Object.fromEntries(Object.entries(PATTERN_EXPLANATIONS).map(([locale, lines]) => [locale, lines[turn % patterns.length]]));
      return { type: 'choice', prompt: 'whatNext', display: item.display, answer: item.answer, options: makeOptions(item.answer), explanations, explanation: explanations[lang] || explanations.en };
    }
    if (id === 'memory') {
      const length = Math.min(7, 3 + index + Math.floor(progress.played / 3));
      const sequence = Array.from({ length }, () => MEMORY_SYMBOLS[Math.floor(Math.random() * MEMORY_SYMBOLS.length)]);
      return { type: 'memory', sequence };
    }
    if (id === 'symbol') {
      const operations = [
        { sign: '+', result: (a, b) => a + b },
        { sign: '−', result: (a, b) => a - b },
        { sign: '×', result: (a, b) => a * b },
        { sign: '÷', result: (a, b) => a / b },
      ];
      const chosen = operations[turn % operations.length];
      let a = 6 + (turn * 3) % 17;
      let b = 2 + (turn * 5) % 7;
      if (chosen.sign === '÷') a = b * (2 + turn % 5);
      let result = chosen.result(a, b);
      while (operations.filter((operation) => operation.result(a, b) === result).length !== 1) {
        a += b;
        result = chosen.result(a, b);
      }
      const explanations = Object.fromEntries(['en', 'pt', 'fr'].map((locale) => [locale, COPY[locale].symbolExplain.replaceAll('{a}', a).replaceAll('{b}', b).replaceAll('{sign}', chosen.sign).replaceAll('{result}', result)]));
      return { type: 'choice', prompt: 'missingSign', display: [a, '?', b, '=', result], answer: chosen.sign, options: operations.map((operation) => ({ value: operation.sign, label: operation.sign })), explanations, explanation: explanations[lang] };
    }
    if (id === 'switch') {
      const values = Array.from({ length: 4 }, (_, position) => 4 + ((turn * 13 + position * 17 + position * position * 3) % 48));
      const largest = turn % 2 === 0;
      const answer = largest ? Math.max(...values) : Math.min(...values);
      const explanations = Object.fromEntries(['en', 'pt', 'fr'].map((locale) => [locale, COPY[locale].switchExplain.replaceAll('{answer}', answer).replaceAll('{rule}', COPY[locale][largest ? 'largestWord' : 'smallestWord'])]));
      return { type: 'choice', prompt: largest ? 'pickLargest' : 'pickSmallest', display: [largest ? '↑' : '↓'], answer, options: values.map((value) => ({ value, label: String(value) })), explanations, explanation: explanations[lang] };
    }
    if (id === 'odd') {
      const oddAnswer = turn % 2 === 0;
      const base = 2 + (turn % 8) * 2;
      const values = [base + (oddAnswer ? 0 : 1), base + 4 + (oddAnswer ? 0 : 1), base + 8 + (oddAnswer ? 0 : 1)];
      const answer = base + 13 + (oddAnswer ? 0 : 1);
      values.splice(turn % 4, 0, answer);
      const explanations = Object.fromEntries(['en', 'pt', 'fr'].map((locale) => [locale, COPY[locale].oddExplain.replaceAll('{answer}', answer).replaceAll('{kind}', COPY[locale][oddAnswer ? 'oddWord' : 'evenWord'])]));
      return { type: 'choice', prompt: 'oddOneOut', display: ['🔍'], answer, options: values.map((value) => ({ value, label: String(value) })), explanations, explanation: explanations[lang] };
    }
    const targetCount = 4 + index;
    const cells = Array.from({ length: 20 }, (_, i) => i < targetCount ? FOCUS_TARGET : FOCUS_DISTRACTORS[(i + turn) % FOCUS_DISTRACTORS.length]);
    for (let i = cells.length - 1; i > 0; i -= 1) {
      const swap = (i * 7 + turn * 3) % (i + 1);
      [cells[i], cells[swap]] = [cells[swap], cells[i]];
    }
    return { type: 'focus', target: FOCUS_TARGET, cells, targetIndices: cells.map((cell, i) => cell === FOCUS_TARGET ? i : -1).filter((i) => i >= 0) };
  }

  function makeOptions(answer) {
    const offsets = [answer + 2, answer - 3, answer + 5];
    const options = [answer, ...offsets].map((value) => ({ value, label: String(value) }));
    for (let i = options.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  function answerChoice(index) {
    if (!run || run.answered) return;
    const option = run.current.options[index];
    if (!option) return;
    const isCorrect = option.value === run.current.answer;
    run.answered = { isCorrect, value: option.value };
    run.answered.explanation = explanationForRun();
    const speedBonus = isCorrect && performance.now() - run.puzzleStartedAt < 8000 ? 2 : 0;
    run.score += isCorrect ? 10 + speedBonus : 2;
    run.maxPossible += 12;
    if (isCorrect) run.correct += 1;
    renderPuzzle(activeGame);
    document.querySelector('.brain-next-action')?.focus({ preventScroll: true });
  }

  function showMemorySequence() {
    if (!run || run.answered || run.showing) return;
    const token = ++memoryToken;
    run.showing = true;
    run.ready = false;
    run.hasShown = true;
    run.flashIndex = -1;
    run.selected = [];
    renderPuzzle(activeGame);
    const flash = (index) => {
      if (token !== memoryToken || !run || run.current.type !== 'memory') return;
      if (index >= run.current.sequence.length) {
        run.showing = false;
        run.ready = true;
        run.flashIndex = -1;
        renderPuzzle(activeGame);
        return;
      }
      run.flashIndex = index;
      renderPuzzle(activeGame);
      memoryTimer = window.setTimeout(() => {
        if (token !== memoryToken || !run) return;
        run.flashIndex = -1;
        renderPuzzle(activeGame);
        memoryTimer = window.setTimeout(() => flash(index + 1), 170);
      }, 570);
    };
    flash(0);
  }

  function pickMemorySymbol(index) {
    if (!run?.ready || run.answered || run.selected.length >= run.current.sequence.length) return;
    const symbol = MEMORY_SYMBOLS[index];
    if (!symbol) return;
    run.selected.push(symbol);
    if (run.selected.length === run.current.sequence.length) {
      const matched = run.selected.filter((value, i) => value === run.current.sequence[i]).length;
      const isCorrect = matched === run.current.sequence.length;
      run.answered = { isCorrect, matched };
      run.answered.explanation = explanationForRun();
      run.score += isCorrect ? 10 : Math.max(2, Math.round((matched / run.current.sequence.length) * 8));
      run.maxPossible += 10;
      if (isCorrect) run.correct += 1;
    }
    renderPuzzle(activeGame, { action: 'memory-pick', attribute: 'data-symbol-index', value: index });
    if (run.answered) document.querySelector('.brain-next-action')?.focus({ preventScroll: true });
  }

  function clearMemoryEntry() {
    if (!run || run.answered) return;
    run.selected = [];
    renderPuzzle(activeGame);
  }

  function toggleFocusTile(index) {
    if (!run || run.answered) return;
    const existing = run.selected.indexOf(index);
    if (existing >= 0) run.selected.splice(existing, 1);
    else run.selected.push(index);
    renderPuzzle(activeGame, { action: 'focus-pick', attribute: 'data-tile-index', value: index });
  }

  function checkFocus() {
    if (!run || run.answered) return;
    const targets = run.current.targetIndices;
    const found = run.selected.filter((index) => targets.includes(index)).length;
    const extra = run.selected.length - found;
    const isCorrect = found === targets.length && extra === 0;
    const points = Math.max(1, Math.round((found / targets.length) * 10 - extra * 2));
    run.answered = { isCorrect, found, extra };
    run.answered.explanation = explanationForRun();
    run.score += isCorrect ? 10 : points;
    run.maxPossible += 10;
    if (isCorrect) run.correct += 1;
    renderPuzzle(activeGame);
    document.querySelector('.brain-next-action')?.focus({ preventScroll: true });
  }

  function nextPuzzle() {
    if (!run?.answered) return;
    if (run.index >= 3) {
      finishRound();
      return;
    }
    run.index += 1;
    run.current = makePuzzle(activeGame, run.index);
    run.puzzleStartedAt = performance.now();
    run.answered = null;
    run.selected = [];
    run.showing = false;
    run.ready = false;
    run.hasShown = false;
    run.flashIndex = -1;
    render();
  }

  function finishRound() {
    if (!run || run.finished) return;
    run.finished = true;
    run.finishedAt = performance.now();
    run.elapsed = elapsedSeconds();
    window.clearInterval(run.timer);
    const today = dayKey();
    run.dailyBonus = activeGame === 'daily' && !progress.daily[today] ? 20 : 0;
    run.awardedStars = run.score + 5 + run.dailyBonus;
    progress.played += 1;
    progress.xp += run.awardedStars;
    run.previousBest = progress.best[activeGame] || 0;
    progress.best[activeGame] = Math.max(progress.best[activeGame] || 0, run.score);
    if (activeGame === 'daily') {
      const previous = progress.daily[today];
      progress.daily[today] = { score: Math.max(previous?.score || 0, run.score), seconds: Math.min(previous?.seconds || Infinity, run.elapsed) };
      const dates = Object.keys(progress.daily).sort();
      for (const date of dates.slice(0, Math.max(0, dates.length - 366))) delete progress.daily[date];
    }
    saveProgress();
    render();
    document.querySelector('.brain-results')?.classList.add('celebrate');
  }

  function backToLobby() {
    stopTimers();
    activeGame = null;
    run = null;
    render();
  }

  function explanationForRun() {
    if (!run?.answered) return '';
    const puzzle = run.current;
    if (puzzle.type === 'choice') {
      const explanation = puzzle.explanations?.[lang] || puzzle.explanation;
      return run.answered.isCorrect ? explanation : `${explanation} ${copy('correctOption')}: ${puzzle.answer}.`;
    }
    if (puzzle.type === 'memory') {
      const names = MEMORY_NAMES[lang] || MEMORY_NAMES.en;
      const sequence = puzzle.sequence.map((symbol) => names[MEMORY_SYMBOLS.indexOf(symbol)]).join(', ');
      const matched = run.selected.filter((value, index) => value === puzzle.sequence[index]).length;
      return copy('memoryExplain', { sequence, matched, total: puzzle.sequence.length });
    }
    const found = run.selected.filter((index) => puzzle.targetIndices.includes(index)).length;
    const extra = run.selected.length - found;
    return copy('focusExplain', { total: puzzle.targetIndices.length, found, extra });
  }

  function stopTimers() {
    memoryToken += 1;
    window.clearTimeout(memoryTimer);
    if (run?.timer) window.clearInterval(run.timer);
    window.speechSynthesis?.cancel();
  }

  function readCurrent() {
    if (!run || !activeGame) return;
    const game = GAMES.find((item) => item.id === (run.current.origin || activeGame));
    const text = run.answered ? `${run.answered.isCorrect ? copy('right') : copy('learn')} ${run.answered.explanation}` : copy(game.how, { target: FOCUS_TARGET });
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      const note = document.querySelector('.brain-coach-banner p');
      if (note) note.textContent = copy('listenUnavailable');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = ({ en: 'en-US', pt: 'pt-PT', fr: 'fr-FR' })[lang] || 'en-US';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }

  function render() {
    if (activeGame && run) renderStage();
    else renderLobby();
  }

  app.addEventListener('click', (event) => {
    const button = event.target.closest('[data-brain-action]');
    if (!button) return;
    const action = button.dataset.brainAction;
    if (action === 'start' || action === 'again') startGame(button.dataset.gameId);
    else if (action === 'back') backToLobby();
    else if (action === 'answer') answerChoice(Number(button.dataset.answerIndex));
    else if (action === 'next') nextPuzzle();
    else if (action === 'show-sequence') showMemorySequence();
    else if (action === 'memory-pick') pickMemorySymbol(Number(button.dataset.symbolIndex));
    else if (action === 'memory-clear') clearMemoryEntry();
    else if (action === 'focus-pick') toggleFocusTile(Number(button.dataset.tileIndex));
    else if (action === 'focus-check') checkFocus();
    else if (action === 'speak' || action === 'speak-explanation') readCurrent();
  });

  function syncLanguage() {
    const next = COPY[document.documentElement.lang] ? document.documentElement.lang : 'en';
    if (next === lang) return;
    lang = next;
    window.speechSynthesis?.cancel();
    if (run?.answered) run.answered.explanation = explanationForRun();
    render();
  }

  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  document.getElementById('brainGames')?.setAttribute('aria-label', copy('sectionLabel'));
  render();
})();
