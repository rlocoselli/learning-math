(() => {
  const COPY = {
    en: {
      brandName: 'Learning Studio', tagline: 'A curious place to learn and play.', languageLabel: 'Language', toggleTheme: 'Toggle dark mode', learningAreasLabel: 'Learning areas', navMath: 'Math', navChess: 'Chess', navBrain: 'Brain IQ',
      chessKicker: 'THINK AHEAD · LEARN TOGETHER', chessHeroTitle: 'Every move opens a new idea.', chessHeroSubtitle: 'Learn the pieces, discover famous openings, and play a friendly computer that meets you where you are.', chessHighlightOne: 'Learn as you play', chessHighlightTwo: 'Choose your challenge', chessHighlightThree: 'Grow with every game', chessCta: 'Start a friendly match', chessArtNote: 'A smart move starts with a curious mind.',
      brainKicker: 'A PLAYFUL WORKOUT FOR YOUR MIND', brainHeroTitle: 'Small challenges. Bright ideas.', brainHeroSubtitle: 'Warm up your number sense, memory, focus, and pattern-spotting. Every answer teaches you something along the way.', brainHighlightOne: 'Four quick games', brainHighlightTwo: 'Friendly explanations', brainHighlightThree: 'Progress that grows', brainCta: 'Choose your first challenge', brainArtNote: 'Curiosity is your superpower.',
      footer: 'Keep learning. Keep playing. Keep growing.', footerMathLink: 'Back to the learning path →', chessTitle: 'Chess Quest — Learning Studio', brainTitle: 'Brain IQ Games — Learning Studio',
    },
    pt: {
      brandName: 'Estúdio de Aprendizagem', tagline: 'Um lugar curioso para aprender e jogar.', languageLabel: 'Idioma', toggleTheme: 'Alternar tema escuro', learningAreasLabel: 'Áreas de aprendizagem', navMath: 'Matemática', navChess: 'Xadrez', navBrain: 'Jogos de raciocínio',
      chessKicker: 'PENSE ADIANTE · APRENDA JOGANDO', chessHeroTitle: 'Cada jogada revela uma ideia.', chessHeroSubtitle: 'Aprenda as peças, descubra aberturas famosas e enfrente um computador amigável ao seu nível.', chessHighlightOne: 'Aprenda enquanto joga', chessHighlightTwo: 'Escolha o desafio', chessHighlightThree: 'Evolua a cada partida', chessCta: 'Começar uma partida', chessArtNote: 'Uma boa jogada começa com curiosidade.',
      brainKicker: 'UM TREINO DIVERTIDO PARA A MENTE', brainHeroTitle: 'Pequenos desafios. Grandes ideias.', brainHeroSubtitle: 'Treine números, memória, atenção e padrões. Cada resposta traz uma explicação simples para aprender pelo caminho.', brainHighlightOne: 'Quatro jogos rápidos', brainHighlightTwo: 'Explicações acolhedoras', brainHighlightThree: 'Progresso que cresce', brainCta: 'Escolher o primeiro desafio', brainArtNote: 'A curiosidade é o seu superpoder.',
      footer: 'Continue a aprender, a jogar e a evoluir.', footerMathLink: 'Voltar ao caminho de aprendizagem →', chessTitle: 'Aventura de Xadrez — Estúdio de Aprendizagem', brainTitle: 'Jogos de QI — Estúdio de Aprendizagem',
    },
    fr: {
      brandName: 'Studio des apprentissages', tagline: 'Un lieu curieux pour apprendre et jouer.', languageLabel: 'Langue', toggleTheme: 'Activer le thème sombre', learningAreasLabel: 'Domaines d’apprentissage', navMath: 'Maths', navChess: 'Échecs', navBrain: 'Jeux cérébraux',
      chessKicker: 'ANTICIPEZ · APPRENEZ EN JOUANT', chessHeroTitle: 'Chaque coup ouvre une nouvelle idée.', chessHeroSubtitle: 'Apprenez les pièces, découvrez des ouvertures célèbres et jouez contre un ordinateur adapté à votre niveau.', chessHighlightOne: 'Apprenez en jouant', chessHighlightTwo: 'Choisissez votre défi', chessHighlightThree: 'Progressez à chaque partie', chessCta: 'Lancer une partie amicale', chessArtNote: 'Un bon coup commence par la curiosité.',
      brainKicker: 'UN ENTRAÎNEMENT LUDIQUE POUR L’ESPRIT', brainHeroTitle: 'Petits défis. Grandes idées.', brainHeroSubtitle: 'Échauffez votre logique, votre mémoire, votre attention et votre sens des motifs. Chaque réponse vous apprend quelque chose.', brainHighlightOne: 'Quatre jeux rapides', brainHighlightTwo: 'Des explications simples', brainHighlightThree: 'Une progression visible', brainCta: 'Choisir un premier défi', brainArtNote: 'La curiosité est votre super-pouvoir.',
      footer: 'Continuez à apprendre, jouer et progresser.', footerMathLink: 'Retour au parcours d’apprentissage →', chessTitle: 'Aventure aux échecs — Studio des apprentissages', brainTitle: 'Jeux cérébraux — Studio des apprentissages',
    },
  };

  const page = document.body.dataset.page || 'chess';
  let lang = 'en';

  function applyLanguage(next) {
    lang = COPY[next] ? next : 'en';
    try { localStorage.setItem('language', lang); } catch { /* Language still works for this page. */ }
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
    document.querySelectorAll('[data-shell-copy]').forEach((element) => {
      const value = COPY[lang][element.dataset.shellCopy];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-shell-copy-aria]').forEach((element) => {
      const value = COPY[lang][element.dataset.shellCopyAria];
      if (value) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-shell-copy-title]').forEach((element) => {
      const value = COPY[lang][element.dataset.shellCopyTitle];
      if (value) element.title = value;
    });
    document.title = COPY[lang][page === 'brain' ? 'brainTitle' : 'chessTitle'];
  }

  try { lang = localStorage.getItem('language') || 'en'; } catch { lang = 'en'; }
  applyLanguage(lang);

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('theme'); } catch { /* Use the system setting below. */ }
  const darkPreferred = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  if ((savedTheme || (darkPreferred ? 'dark' : 'light')) === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  document.querySelectorAll('.lang-btn').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('theme', next); } catch { /* Theme remains active for this page. */ }
  });
})();
