// ============================================================
// Mathematics Mastery — Multilingual Math Learning Platform
// Languages: English (en), Portuguese (pt), French (fr)
// ============================================================

const UIStrings = {
  en: {
    appTitle: 'Mathematics Mastery',
    heroKicker: 'Learn at your own pace',
    heroTitle: 'Master mathematics, step by step',
    heroSubtitle: 'Clear worked examples in English, Portuguese and French — from arithmetic to calculus.',
    topics: 'Browse topics',
    playLesson: '▶ Play lesson',
    takeQuiz: '🎯 Take the quiz',
    watchVideo: '🎬 Watch the video lesson',
    quiz: 'Quiz',
    score: 'Score: {score}/{total}',
    correct: 'Correct!',
    incorrect: 'Not quite',
    restartQuiz: 'Restart quiz',
    noQuiz: 'No quiz available for this topic yet.',
    completed: 'Completed',
    noContent: 'Select a topic to see step-by-step examples.',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced (University)',
    all: 'All Levels',
    back: '← Back',
    steps: 'Step-by-Step Examples',
    start: 'Start',
    next: 'Next',
    prev: 'Previous',
    done: 'Done',
    topicTitle: 'Topic Title',
    description: 'Description',
    difficulty: 'Difficulty',
    lang: 'Language',
    example: 'Example',
    step: 'Step {n}',
    learnMore: 'Learn more',
    languages: 'Languages',
  },
  pt: {
    appTitle: 'Domine a Matemática',
    heroKicker: 'Aprenda no seu ritmo',
    heroTitle: 'Domine a matemática, passo a passo',
    heroSubtitle: 'Exemplos resolvidos claros em inglês, português e francês — da aritmética ao cálculo.',
    topics: 'Explorar tópicos',
    playLesson: '▶ Assistir aula',
    takeQuiz: '🎯 Fazer o quiz',
    watchVideo: '🎬 Assistir à videoaula',
    quiz: 'Quiz',
    score: 'Pontuação: {score}/{total}',
    correct: 'Correto!',
    incorrect: 'Quase!',
    restartQuiz: 'Refazer o quiz',
    noQuiz: 'Ainda não há quiz para este tópico.',
    completed: 'Concluído',
    noContent: 'Selecione um tópico para ver exemplos passo a passo.',
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado (Universitário)',
    all: 'Todos os Níveis',
    back: '← Voltar',
    steps: 'Exemplos Passo a Passo',
    start: 'Começar',
    next: 'Próximo',
    prev: 'Anterior',
    done: 'Concluído',
    topicTitle: 'Título do Tópico',
    description: 'Descrição',
    difficulty: 'Dificuldade',
    lang: 'Idioma',
    example: 'Exemplo',
    step: 'Passo {n}',
    learnMore: 'Saiba mais',
    languages: 'Idiomas',
  },
  fr: {
    appTitle: 'Maîtrise des Mathématiques',
    heroKicker: 'Apprenez à votre rythme',
    heroTitle: 'Maîtrisez les mathématiques, étape par étape',
    heroSubtitle: 'Des exemples résolus clairs en anglais, portugais et français — de l’arithmétique au calcul.',
    topics: 'Parcourir les sujets',
    playLesson: '▶ Suivre la leçon',
    takeQuiz: '🎯 Faire le quiz',
    watchVideo: '🎬 Regarder la leçon vidéo',
    quiz: 'Quiz',
    score: 'Score : {score}/{total}',
    correct: 'Correct !',
    incorrect: 'Pas tout à fait',
    restartQuiz: 'Recommencer le quiz',
    noQuiz: 'Pas encore de quiz pour ce sujet.',
    completed: 'Terminé',
    noContent: 'Sélectionnez un sujet pour voir des exemples étape par étape.',
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé (Universitaire)',
    all: 'Tous les Niveaux',
    back: '← Retour',
    steps: 'Exemples Étape par Étape',
    start: 'Commencer',
    next: 'Suivant',
    prev: 'Précédent',
    done: 'Terminé',
    topicTitle: 'Titre du Sujet',
    description: 'Description',
    difficulty: 'Niveau',
    lang: 'Langue',
    example: 'Exemple',
    step: 'Étape {n}',
    learnMore: 'En savoir plus',
    languages: 'Langues',
  },
};

function t(lang, key, params) {
  const str = UIStrings[lang] && UIStrings[lang][key] ? UIStrings[lang][key] : UIStrings.en[key];
  if (!params) return str;
  return str.replace(/{(\w+)}/g, (m, k) => (params[k] !== undefined ? params[k] : m));
}

function renderMath(element) {
  if (!element || typeof katex === 'undefined') return;
  element.querySelectorAll('.math, [data-math]').forEach((el) => {
    const text = el.textContent.trim();
    if (!text) return;
    try {
      katex.render(text, el, {
        throwOnError: false,
        strict: false,
        displayMode: el.classList.contains('display-math'),
      });
    } catch (e) {
      el.textContent = text;
    }
  });
}

const math = (expression) => ({ __math: true, expression });

const beginnerTopics = [
  {
    id: 'arithmetic',
    level: 'beginner',
    title: { en: 'Basic Arithmetic Operations', pt: 'Operações Básicas de Aritmética', fr: 'Opérations Arithmétiques de Base' },
    description: {
      en: 'Learn the four fundamental operations: addition, subtraction, multiplication, division, and the order of operations.',
      pt: 'Aprenda as quatro operações fundamentais: adição, subtração, multiplicação, divisão e a ordem das operações.',
      fr: 'Apprenez les quatre opérations fondamentales : addition, soustraction, multiplication, division et l\'ordre des opérations.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Addition and Subtraction',
        body: 'Addition combines quantities; subtraction removes one. They are inverse operations.',
        formulas: [math('a + b = b + a')],
        examples: [
          {
            title: 'Compute 45 + 27',
            steps: [
              'Step 1: Write numbers vertically with aligned place values.',
              'Step 2: Ones column: 5 + 7 = 12. Write 2, carry 1.',
              'Step 3: Tens column: 4 + 2 + 1 = 7.',
              'Final answer: 72.',
            ],
          },
          {
            title: 'Subtract: 83 − 38',
            steps: [
              'Step 1: Write vertically: 83 over 38.',
              'Step 2: Ones: 3 − 8 needs borrowing. Borrow 1 from tens (8→7).',
              'Step 3: 13 − 8 = 5.',
              'Step 4: Tens: 7 − 3 = 4.',
              'Final answer: 45.',
            ],
          },
        ],
      },
      {
        title: 'Multiplication and Division',
        body: 'Multiplication is repeated addition; division is its inverse. Follow PEMDAS for combined expressions.',
        formulas: [
          math('a \\times (b + c) = a \\times b + a \\times c'),
          math('12 \\times 14 = 12 \\times (10 + 4)'),
        ],
        examples: [
          {
            title: 'Compute 12 × 14',
            steps: [
              'Step 1: Rewrite 14 as 10 + 4: 12 × 14 = 12 × (10 + 4).',
              'Step 2: 12 × 10 = 120, 12 × 4 = 48.',
              'Step 3: 120 + 48 = 168.',
              'Final answer: 168.',
            ],
          },
          {
            title: 'Compute 144 ÷ 12',
            steps: [
              'Step 1: 12 fits into 14 once (12 × 1 = 12).',
              'Step 2: Subtract 12 from 14 → 2, bring down 4 to make 24.',
              'Step 3: 12 fits into 24 twice.',
              'Final answer: 12.',
            ],
          },
        ],
      },
      {
        title: 'Order of Operations (PEMDAS)',
        body: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
        formulas: [
          math('3 + 6 \\times (5 + 4) \\div 3 - 7'),
          math('= 3 + 6 \\times 9 \\div 3 - 7'),
        ],
        examples: [
          {
            title: 'Evaluate: 3 + 6 × (5 + 4) ÷ 3 − 7',
            steps: [
              'Step 1: Parentheses: (5 + 4) = 9.',
              'Step 2: Multiplication: 6 × 9 = 54.',
              'Step 3: Division: 54 ÷ 3 = 18.',
              'Step 4: 3 + 18 − 7.',
              'Step 5: 3 + 18 = 21, then 21 − 7 = 14.',
              'Final answer: 14.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'fractions',
    level: 'beginner',
    title: { en: 'Fractions', pt: 'Frações', fr: 'Fractions' },
    description: {
      en: 'Understand fractions as parts of a whole, and learn to add, subtract, multiply, and divide them.',
      pt: 'Entenda as frações como partes de um todo e aprenda a somar, subtrair, multiplicar e dividir.',
      fr: 'Comprenez les fractions comme des parties d\'un tout, et apprenez à les additionner, les soustraire, les multiplier et les diviser.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'What is a Fraction?',
        body: 'A fraction is $\\frac{\\text{part}}{\\text{whole}}$. The numerator is the top number, the denominator is the bottom.',
        formulas: [math('\\frac{3}{4} \\text{ means } 3 \\text{ of } 4 \\text{ equal parts}')],
        examples: [
          {
            title: 'Meaning of 3/4',
            steps: [
              'Step 1: Denominator 4 → the whole is split into 4 equal parts.',
              'Step 2: Numerator 3 → we have 3 of those parts.',
              'Final answer: 3/4 represents 3 of 4 equal slices.',
            ],
          },
        ],
      },
      {
        title: 'Adding and Subtracting Fractions',
        body: 'Fractions must share a common denominator before adding or subtracting.',
        formulas: [math('\\frac{1}{3} + \\frac{2}{5} = \\frac{5}{15} + \\frac{6}{15} = \\frac{11}{15}')],
        examples: [
          {
            title: 'Add: 1/3 + 2/5',
            steps: [
              'Step 1: LCD of 3 and 5 is 15.',
              'Step 2: 1/3 = 5/15, 2/5 = 6/15.',
              'Step 3: 5/15 + 6/15 = 11/15.',
              'Final answer: 11/15.',
            ],
          },
          {
            title: 'Subtract: 3/4 − 1/6',
            steps: [
              'Step 1: LCD of 4 and 6 is 12.',
              'Step 2: 3/4 = 9/12, 1/6 = 2/12.',
              'Step 3: 9/12 − 2/12 = 7/12.',
              'Final answer: 7/12.',
            ],
          },
        ],
      },
      {
        title: 'Multiplying and Dividing Fractions',
        body: 'Multiply straight across; to divide, multiply by the reciprocal.',
        formulas: [math('\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}')],
        examples: [
          {
            title: 'Multiply: 2/3 × 4/5',
            steps: [
              'Step 1: Numerators: 2 × 4 = 8.',
              'Step 2: Denominators: 3 × 5 = 15.',
              'Final answer: 8/15.',
            ],
          },
          {
            title: 'Divide: 3/4 ÷ 1/2',
            steps: [
              'Step 1: Reciprocal of 1/2 is 2/1.',
              'Step 2: 3/4 × 2/1 = 6/4.',
              'Step 3: Simplify: 6/4 = 3/2 = 1 1/2.',
              'Final answer: 3/2 or 1 1/2.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'geometry-basics',
    level: 'beginner',
    title: { en: 'Basic Geometry: Shapes and Perimeter', pt: 'Geometria Básica: Formas e Perímetro', fr: 'Géométrie de Base: Formes et Périmètre' },
    description: {
      en: 'Explore common 2D shapes, their properties, and how to calculate perimeter and area.',
      pt: 'Explore as formas 2D comuns, suas propriedades e como calcular perímetro e área.',
      fr: 'Explorez les formes 2D courantes, leurs propriétés et comment calculer o périmètre et a surface.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Common 2D Shapes',
        body: 'Triangles, rectangles, squares, and circles. Each has specific properties and formulas.',
        formulas: [
          math('\\text{Perimeter of rectangle} = 2(l + w)'),
          math('\\text{Area of square} = s^2'),
        ],
        examples: [
          {
            title: 'Perimeter of a rectangle: length = 8 cm, width = 5 cm',
            steps: [
              'Step 1: P = 2 × (8 + 5).',
              'Step 2: 8 + 5 = 13.',
              'Step 3: 2 × 13 = 26.',
              'Final answer: 26 cm.',
            ],
          },
          {
            title: 'Area of a square: side = 6 cm',
            steps: [
              'Step 1: A = s² = 6².',
              'Step 2: 6 × 6 = 36.',
              'Final answer: 36 cm².',
            ],
          },
        ],
      },
    ],
  },
];

const intermediateTopics = [
  {
    id: 'linear-equations',
    level: 'intermediate',
    title: { en: 'Solving Linear Equations', pt: 'Resolução de Equações Lineares', fr: 'Résolution d\'Équations Linéaires' },
    description: {
      en: 'Master solving equations of the form $ax + b = c$, including those with variables on both sides.',
      pt: 'Domine a resolução de equações da forma $ax + b = c$, incluindo aquelas com variáveis em ambos os lados.',
      fr: 'Maîtrisez la résolution d\'équations de la forme $ax + b = c$, y compris celles com des variables des deux côtés.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'One-Step and Two-Step Equations',
        body: 'A linear equation in one variable has the form $ax + b = c$. Use inverse operations to isolate $x$.',
        formulas: [
          math('3x + 5 = 14'),
          math('3x = 14 - 5 = 9'),
          math('x = 9 / 3 = 3'),
        ],
        examples: [
          {
            title: 'Solve: 3x + 5 = 14',
            steps: [
              'Step 1: Subtract 5 from both sides: 3x + 5 − 5 = 14 − 5.',
              'Step 2: Simplify: 3x = 9.',
              'Step 3: Divide both sides by 3: x = 9 / 3.',
              'Step 4: x = 3.',
              'Final answer: x = 3.',
            ],
          },
          {
            title: 'Solve: 2x − 7 = 3x + 1',
            steps: [
              'Step 1: Subtract 2x from both sides: −7 = x + 1.',
              'Step 2: Subtract 1 from both sides: −8 = x.',
              'Step 3: The solution is x = −8.',
            ],
          },
        ],
      },
      {
        title: 'Equations with Parentheses',
        body: 'Use the distributive property to remove parentheses before solving.',
        formulas: [
          math('2(x + 3) = 10'),
          math('2x + 6 = 10'),
          math('2x = 4'),
          math('x = 2'),
        ],
        examples: [
          {
            title: 'Solve: 2(x + 3) = 10',
            steps: [
              'Step 1: Distribute the 2: 2x + 6 = 10.',
              'Step 2: Subtract 6 from both sides: 2x = 4.',
              'Step 3: Divide by 2: x = 2.',
              'Final answer: x = 2.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'quadratic-equations',
    level: 'intermediate',
    title: { en: 'Quadratic Equations and the Quadratic Formula', pt: 'Equações Quadráticas e a Fórmula de Bhaskara', fr: 'Équations du Second Degré' },
    description: {
      en: 'Solve quadratic equations of the form $ax^2 + bx + c = 0$ using factoring and the quadratic formula.',
      pt: 'Resolva equações quadráticas da forma $ax^2 + bx + c = 0$ usando fatoração e a fórmula quadrática.',
      fr: 'Résolvez des équations quadratiques de la forme $ax^2 + bx + c = 0$ par factorisation et par la formule quadratique.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'The Quadratic Formula',
        body: 'For $ax^2 + bx + c = 0$, the solutions are $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. The discriminant $\\Delta = b^2 - 4ac$ tells us the nature of the roots.',
        formulas: [
          math('x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'),
          math('\\Delta = b^2 - 4ac'),
        ],
        examples: [
          {
            title: 'Solve: x² − 5x + 6 = 0',
            steps: [
              'Step 1: a = 1, b = −5, c = 6.',
              'Step 2: Δ = 25 − 24 = 1.',
              'Step 3: x = (5 ± 1)/2.',
              'Step 4: x = 3 or x = 2.',
              'Final answer: x = 2 or x = 3.',
            ],
          },
          {
            title: 'Solve: 2x² + 3x − 2 = 0',
            steps: [
              'Step 1: a = 2, b = 3, c = −2.',
              'Step 2: Δ = 9 + 16 = 25.',
              'Step 3: x = (−3 ± 5)/4.',
              'Step 4: x = 1/2 or x = −2.',
              'Final answer: x = 1/2 or x = −2.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'functions',
    level: 'intermediate',
    title: { en: 'Introduction to Functions', pt: 'Introdução a Funções', fr: 'Introduction aux Fonctions' },
    description: {
      en: 'Understand functions as rules assigning one output per input, and learn function notation and evaluation.',
      pt: 'Entenda as funções como regras que atribuem a cada entrada exatamente um único resultado, e aprenda a notação e avaliação de funções.',
      fr: 'Comprenez les fonctions comme des règles qui attribuent à chaque entrée exactement une seule sortie, et apprenez la notation et l\'évaluation des fonctions.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'What is a Function?',
        body: 'A function $f$ maps each input $x$ to exactly one output $f(x)$.',
        formulas: [
          math('f(x) = 2x + 3'),
          math('f(4) = 2(4) + 3 = 11'),
        ],
        examples: [
          {
            title: 'Evaluate f(x) = 2x + 3 at x = 4',
            steps: [
              'Step 1: Substitute x = 4: f(4) = 2(4) + 3.',
              'Step 2: 2 × 4 = 8.',
              'Step 3: 8 + 3 = 11.',
              'Final answer: f(4) = 11.',
            ],
          },
          {
            title: 'Find f(−1) for f(x) = x² − 2x',
            steps: [
              'Step 1: f(−1) = (−1)² − 2(−1).',
              'Step 2: 1 + 2 = 3.',
              'Final answer: f(−1) = 3.',
            ],
          },
        ],
      },
      {
        title: 'Domain and Range',
        body: 'The domain is the set of valid inputs; the range is the set of possible outputs.',
        formulas: [
          math('\\text{Domain of } \\sqrt{x}: x \\geq 0'),
          math('\\text{Domain of } \\frac{1}{x}: x \\neq 0'),
        ],
        examples: [
          {
            title: 'Domain of f(x) = √(x − 3)',
            steps: [
              'Step 1: x − 3 ≥ 0.',
              'Step 2: x ≥ 3.',
              'Final answer: [3, ∞).',
            ],
          },
          {
            title: 'Domain of g(x) = 1/(x + 2)',
            steps: [
              'Step 1: x + 2 ≠ 0.',
              'Step 2: x ≠ −2.',
              'Final answer: All reals except x = −2.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'trigonometry',
    level: 'intermediate',
    title: { en: 'Trigonometry Basics: Sine, Cosine, and Tangent', pt: 'Trigonometria Básica: Seno, Cosseno e Tangente', fr: 'Trigonométrie de Base: Sinus, Cosinus et Tangente' },
    description: {
      en: 'Learn the three primary trigonometric ratios for right triangles and how to use them.',
      pt: 'Aprenda as três razões trigonométricas principais para triângulos retângulos e como usá-las.',
      fr: 'Apprenez les trois rapports trigonométriques principaux pour les triangles rectangles et comment les utiliser.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Primary Trigonometric Ratios',
        body: 'For a right triangle with angle $\\theta$: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$ (SOH‑CAH‑TOA).',
        formulas: [
          math('\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}'),
          math('\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}'),
          math('\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}'),
        ],
        examples: [
          {
            title: 'Triangle with opposite=3, adjacent=4, hypotenuse=5. Find sin θ, cos θ, tan θ.',
            steps: [
              'Step 1: sin θ = 3/5.',
              'Step 2: cos θ = 4/5.',
              'Step 3: tan θ = 3/4.',
              'Final answer: sin θ = 3/5, cos θ = 4/5, tan θ = 3/4.',
            ],
          },
          {
            title: 'Find the opposite side when θ = 30°, hypotenuse = 10.',
            steps: [
              'Step 1: sin(30°) = 1/2.',
              'Step 2: 1/2 = x/10.',
              'Step 3: x = 5.',
              'Final answer: 5.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'exponents-logarithms',
    level: 'intermediate',
    title: { en: 'Exponents and Logarithms', pt: 'Exponenciais e Logaritmos', fr: 'Exposants et Logarithmes' },
    description: {
      en: 'Understand the inverse relationship between exponents and logarithms, and solve related equations.',
      pt: 'Entenda a relação inversa entre expoentes e logaritmos e resolva equações relacionadas.',
      fr: 'Comprenez la relation inverse entre les exposants et les logarithmes et résolvez des équations connexes.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Exponents and Logarithms as Inverses',
        body: 'If $b^x = y$, then $\\log_b(y) = x$. Additionally, $\\log_b(b^x) = x$ and $b^{\\log_b(x)} = x$.',
        formulas: [
          math('b^x = y \\iff \\log_b(y) = x'),
          math('\\ln(x) = \\log_e(x)'),
        ],
        examples: [
          {
            title: 'Rewrite 2⁵ = 32 in logarithmic form.',
            steps: [
              'Step 1: Base = 2, exponent = 5, result = 32.',
              'Step 2: log₂(32) = 5.',
              'Final answer: log₂(32) = 5.',
            ],
          },
          {
            title: 'Evaluate log₃(81).',
            steps: [
              'Step 1: 3⁴ = 81.',
              'Final answer: 4.',
            ],
          },
        ],
      },
      {
        title: 'Solving Exponential Equations',
        body: 'Use logarithms to solve equations with the unknown in the exponent.',
        formulas: [
          math('2^x = 16 \\Rightarrow x = \\log_2(16) = 4'),
          math('x = \\frac{\\ln(20)}{\\ln(3)} \\approx 2.727'),
        ],
        examples: [
          {
            title: 'Solve 2ˣ = 16.',
            steps: [
              'Step 1: Take log₂ of both sides.',
              'Step 2: x = log₂(16).',
              'Step 3: 16 = 2⁴, so x = 4.',
              'Final answer: x = 4.',
            ],
          },
          {
            title: 'Solve 3ˣ = 20 (approximate).',
            steps: [
              'Step 1: Take ln of both sides: x ln(3) = ln(20).',
              'Step 2: x = ln(20)/ln(3).',
              'Step 3: ln(20) ≈ 2.9957, ln(3) ≈ 1.0986.',
              'Step 4: x ≈ 2.727.',
              'Final answer: x ≈ 2.727.',
            ],
          },
        ],
      },
    ],
  },
];


const advancedTopics = [
  {
    id: 'limits-continuity',
    level: 'advanced',
    title: { en: 'Limits and Continuity', pt: 'Limites e Continuidade', fr: 'Limites et Continuité' },
    description: {
      en: 'Understand the concept of a limit, evaluate limits algebraically, and determine continuity.',
      pt: 'Entenda o conceito de limite, avalie limites algebraicamente e determine a continuidade de funções.',
      fr: 'Comprenez le concept de limite, évaluez des limites algébriquement et déterminez la continuité des fonctions.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Evaluating Limits Algebraically',
        body: 'A limit describes the value a function approaches as $x$ approaches $a$. For rational functions, factor and simplify when substitution gives $\\frac{0}{0}$.',
        formulas: [
          math('\\lim_{x \\to a} f(x) = L'),
          math('\\frac{x^2 - 4}{x - 2} \\text{ at } x \\to 2'),
        ],
        examples: [
          {
            title: 'Evaluate: lim(x→2) (x² − 4)/(x − 2)',
            steps: [
              'Step 1: Direct substitution gives 0/0 (indeterminate).',
              'Step 2: Factor numerator: x² − 4 = (x − 2)(x + 2).',
              'Step 3: Simplify: (x − 2)(x + 2)/(x − 2) = x + 2 (for x ≠ 2).',
              'Step 4: lim(x→2) (x + 2) = 4.',
              'Final answer: 4.',
            ],
          },
          {
            title: 'Evaluate: lim(x→3) (x² − 9)/(x − 3)',
            steps: [
              'Step 1: Direct substitution gives 0/0.',
              'Step 2: Factor: x² − 9 = (x − 3)(x + 3).',
              'Step 3: Simplify: (x − 3)(x + 3)/(x − 3) = x + 3.',
              'Step 4: lim(x→3) (x + 3) = 6.',
              'Final answer: 6.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'derivatives-chain-rule',
    level: 'advanced',
    title: { en: 'Derivatives: The Chain Rule', pt: 'Derivadas: A Regra da Cadeia', fr: 'Dérivées: La Règle de la Chaîne' },
    description: {
      en: 'Learn the chain rule for differentiating composite functions: $\\frac{d}{dx}[f(g(x))] = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)$.',
      pt: 'Aprenda a regra da cadeia para diferenciar funções compostas: $\\frac{d}{dx}[f(g(x))] = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)$.',
      fr: 'Apprenez la règle de la chaîne pour dériver des fonctions composées : $\\frac{d}{dx}[f(g(x))] = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)$.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Applying the Chain Rule',
        body: 'If $h(x) = f(g(x))$, then $h^{\\prime}(x) = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)$. Work from the outside in.',
        formulas: [
          math('\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)'),
          math('\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)'),
        ],
        examples: [
          {
            title: 'Differentiate: f(x) = (3x² + 1)⁵',
            steps: [
              'Step 1: Outer f(u) = u⁵, inner u = 3x² + 1.',
              'Step 2: f′(u) = 5u⁴ → f′(g(x)) = 5(3x² + 1)⁴.',
              'Step 3: g′(x) = 6x.',
              'Step 4: Chain rule: f′(x) = 5(3x² + 1)⁴ · 6x.',
              'Final answer: f′(x) = 30x(3x² + 1)⁴.',
            ],
          },
          {
            title: 'Differentiate: g(x) = sin(2x + 3)',
            steps: [
              'Step 1: Outer f(u) = sin(u), inner u = 2x + 3.',
              'Step 2: f′(u) = cos(u) → cos(2x + 3).',
              'Step 3: g′(x) = 2.',
              'Step 4: g′(x) = cos(2x + 3) · 2.',
              'Final answer: g′(x) = 2cos(2x + 3).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'integration-definite',
    level: 'advanced',
    title: { en: 'Integration: Definite Integrals', pt: 'Integração: Integrais Definidas', fr: 'Intégration: Intégrales Définies' },
    description: {
      en: 'Understand the definite integral as signed area and apply the Fundamental Theorem of Calculus.',
      pt: 'Entenda o integral definido como área assinada e aplique o Teorema Fundamental do Cálculo.',
      fr: 'Comprenez l\'intégrale définie comme aire signée et appliquez le Théorème Fondamental du Calcul.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Evaluating Definite Integrals',
        body: 'The definite integral $\\int_a^b f(x)\\,dx$ gives the signed area under $f$ from $a$ to $b$. Use antiderivatives: $\\int_a^b f(x)\\,dx = F(b) - F(a)$, where $F^{\\prime} = f$.',
        formulas: [
          math('\\int_{a}^{b} f(x)\\,dx = F(b) - F(a), \\quad F\'(x) = f(x)'),
          math('\\int_{0}^{3} 2x\\,dx'),
        ],
        examples: [
          {
            title: 'Evaluate: ∫₀³ 2x dx',
            steps: [
              'Step 1: Antiderivative of 2x is F(x) = x².',
              'Step 2: F(3) − F(0) = 9 − 0.',
              'Step 3: 9 − 0 = 9.',
              'Final answer: 9.',
            ],
          },
          {
            title: 'Evaluate: ∫₁² x² dx',
            steps: [
              'Step 1: Antiderivative: F(x) = x³/3.',
              'Step 2: F(2) − F(1) = 8/3 − 1/3.',
              'Step 3: 7/3.',
              'Final answer: 7/3.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'linear-algebra-matrices',
    level: 'advanced',
    title: { en: 'Linear Algebra: Matrices and Determinants', pt: 'Álgebra Linear: Matrizes e Determinantes', fr: 'Algèbre Linéaire: Matrices et Déterminants' },
    description: {
      en: 'Learn matrix multiplication and how to compute determinants of 2×2 matrices.',
      pt: 'Aprenda a multiplicação de matrizes e como calcular determinantes de matrizes 2×2.',
      fr: 'Apprenez la multiplication de matrices et comment calculer les déterminants des matrices 2×2.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Matrix Multiplication and Determinants',
        body: 'To multiply matrices, take the dot product of rows of the first with columns of the second. For a $2 \\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det = ad - bc$.',
        formulas: [
          math('|A| = ad - bc \\text{ for } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'),
        ],
        examples: [
          {
            title: 'Multiply: A = [[2,3],[1,4]], B = [[5,1],[2,3]]',
            steps: [
              'Step 1: (1,1): row1·col1 = 2·5 + 3·2 = 10 + 6 = 16.',
              'Step 2: (1,2): row1·col2 = 2·1 + 3·3 = 2 + 9 = 11.',
              'Step 3: (2,1): row2·col1 = 1·5 + 4·2 = 5 + 8 = 13.',
              'Step 4: (2,2): row2·col2 = 1·1 + 4·3 = 1 + 12 = 13.',
              'Final answer: AB = [[16, 11], [13, 13]].',
            ],
          },
          {
            title: 'Find the determinant of [[3,−2],[4,5]].',
            steps: [
              'Step 1: a = 3, b = −2, c = 4, d = 5.',
              'Step 2: ad − bc = (3)(5) − (−2)(4) = 15 + 8 = 23.',
              'Final answer: 23.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'probability-normal',
    level: 'advanced',
    title: { en: 'Probability: The Normal Distribution', pt: 'Probabilidade: A Distribuição Normal', fr: 'Probabilités: La Loi Normale' },
    description: {
      en: 'Understand the normal distribution, the empirical rule, and z-scores.',
      pt: 'Entenda a distribuição normal, a regra empírica e os escores z.',
      fr: 'Comprenez la loi normale, la règle empirique et les scores z.',
    },
    langs: ['English', 'Português', 'Français'],
    steps: [
      {
        title: 'Z-Scores and Probabilities',
        body: 'A z-score standardizes a value: $z = \\frac{x - \\mu}{\\sigma}$. The standard normal distribution has mean $0$ and standard deviation $1$.',
        formulas: [
          math('z = \\frac{x - \\mu}{\\sigma}'),
        ],
        examples: [
          {
            title: 'Normal distribution with μ = 50, σ = 10. Find P(40 < X < 60).',
            steps: [
              'Step 1: z for 40: (40 − 50)/10 = −1.',
              'Step 2: z for 60: (60 − 50)/10 = 1.',
              'Step 3: P(−1 < Z < 1).',
              'Step 4: Empirical rule → about 68%.',
              'Final answer: ≈ 0.68 (68%).',
            ],
          },
          {
            title: 'Find the z-score for x = 75 with μ = 60, σ = 8.',
            steps: [
              'Step 1: z = (75 − 60)/8 = 15/8 = 1.875.',
              'Final answer: z = 1.875.',
            ],
          },
        ],
      },
    ],
  },
];

// ---------- Icons & illustrations ----------
const topicIcons = {
  arithmetic: '➕',
  fractions: '🍕',
  'geometry-basics': '📐',
  'linear-equations': '⚖️',
  'quadratic-equations': '📈',
  functions: '🔣',
  trigonometry: '📐',
  'exponents-logarithms': '📉',
  'limits-continuity': '➡️',
  'derivatives-chain-rule': '🔗',
  'integration-definite': '∫',
  'linear-algebra-matrices': '🧮',
  'probability-normal': '🔔',
};

function figure(svg, caption) {
  return `<figure class="figure"><div class="figure-img">${svg}</div><figcaption>${caption}</figcaption></figure>`;
}

const topicDiagrams = {};

Object.assign(topicDiagrams, {
  arithmetic: figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3 plus 2 equals 5 unit blocks"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">3 + 2 = 5</text><rect class="fill-primary" x="30" y="85" width="46" height="46" rx="9"/><rect class="fill-primary" x="84" y="85" width="46" height="46" rx="9"/><rect class="fill-primary" x="138" y="85" width="46" height="46" rx="9"/><text class="fill-muted" x="210" y="118" text-anchor="middle" style="font-size:26px;font-weight:800">+</text><rect class="fill-accent" x="240" y="85" width="46" height="46" rx="9"/><rect class="fill-accent" x="294" y="85" width="46" height="46" rx="9"/><text class="fill-muted" x="230" y="172" text-anchor="middle" style="font-size:24px;font-weight:800">= 5</text><rect class="fill-success" x="30" y="200" width="46" height="46" rx="9"/><rect class="fill-success" x="84" y="200" width="46" height="46" rx="9"/><rect class="fill-success" x="138" y="200" width="46" height="46" rx="9"/><rect class="fill-success" x="192" y="200" width="46" height="46" rx="9"/><rect class="fill-success" x="246" y="200" width="46" height="46" rx="9"/></svg>`, 'Adding 3 + 2 = 5 with unit blocks'),

  fractions: figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three quarters of a circle shaded"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">3/4 shaded</text><circle cx="160" cy="165" r="90" class="fill-surface stroke-primary" stroke-width="3"/><path class="fill-primary" opacity="0.45" d="M160 165 L160 75 A90 90 0 0 1 250 165 Z"/><path class="fill-primary" opacity="0.45" d="M160 165 L250 165 A90 90 0 0 1 160 255 Z"/><path class="fill-primary" opacity="0.45" d="M160 165 L160 255 A90 90 0 0 1 70 165 Z"/><line x1="70" y1="165" x2="250" y2="165" class="stroke-primary" stroke-width="2"/><line x1="160" y1="75" x2="160" y2="255" class="stroke-primary" stroke-width="2"/><rect x="300" y="130" width="20" height="20" rx="5" class="fill-primary" opacity="0.45"/><text class="fill-muted" x="330" y="146">shaded</text><rect x="300" y="162" width="20" height="20" rx="5" class="fill-surface stroke-primary" stroke-width="2"/><text class="fill-muted" x="330" y="178">unshaded</text></svg>`, 'Three quarters of a circle is shaded'),

  'geometry-basics': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle and circle with labels"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">Rectangle &amp; Circle</text><rect x="40" y="75" width="180" height="110" rx="6" class="fill-soft stroke-primary" stroke-width="3"/><text class="fill-muted" x="130" y="62" text-anchor="middle">length (l)</text><text class="fill-muted" x="238" y="135">w</text><circle cx="340" cy="130" r="60" class="fill-soft stroke-accent" stroke-width="3"/><line x1="340" y1="130" x2="400" y2="130" class="stroke-accent" stroke-width="2"/><text class="fill-muted" x="358" y="118">r</text></svg>`, 'Rectangle and circle with dimensions'),

  'linear-equations': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a linear equation"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">y = ax + b</text><line x1="50" y1="230" x2="430" y2="230" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="40" class="axis" stroke-width="2"/><polygon points="430,230 418,224 418,236" class="axis"/><polygon points="80,40 74,52 86,52" class="axis"/><line x1="80" y1="180" x2="360" y2="70" class="stroke-primary" stroke-width="3"/><circle cx="220" cy="130" r="5" class="fill-accent"/><text class="fill-muted" x="228" y="120">(x, y)</text></svg>`, 'A linear equation is a straight line'),
});

Object.assign(topicDiagrams, {
  'quadratic-equations': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola with roots at x equals 2 and 3"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">x² − 5x + 6 = 0</text><line x1="40" y1="220" x2="430" y2="220" class="axis" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="30" class="axis" stroke-width="2"/><polyline class="stroke-primary" fill="none" stroke-width="3" points="80,40 107.5,107.5 135,160 162.5,197.5 190,220 217.5,227.5 245,220 272.5,197.5 300,160 327.5,107.5 355,40"/><circle cx="190" cy="220" r="6" class="fill-accent"/><circle cx="245" cy="220" r="6" class="fill-accent"/><text class="fill-muted" x="190" y="246" text-anchor="middle">2</text><text class="fill-muted" x="245" y="246" text-anchor="middle">3</text></svg>`, 'Parabola with roots at x = 2 and x = 3'),

  functions: figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of f of x equals 2x plus 3"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">f(x) = 2x + 3</text><line x1="40" y1="220" x2="430" y2="220" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="30" class="axis" stroke-width="2"/><line x1="80" y1="172" x2="330" y2="28" class="stroke-primary" stroke-width="3"/><circle cx="280" cy="44" r="6" class="fill-accent"/><text class="fill-muted" x="292" y="40">(4, 11)</text></svg>`, 'A function maps each input to one output'),

  trigonometry: figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with sides labeled"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">Right triangle</text><polygon points="70,230 70,90 320,230" class="fill-soft stroke-primary" stroke-width="3"/><path d="M70 190 l36 0 0 40" fill="none" class="stroke-primary" stroke-width="2"/><path d="M320 230 a40 40 0 0 0 -20 -34" fill="none" class="stroke-accent" stroke-width="2"/><text class="fill-muted" x="300" y="210" style="font-size:16px">θ</text><text class="fill-muted" x="52" y="165" text-anchor="middle">a</text><text class="fill-muted" x="60" y="252" text-anchor="middle">opposite</text><text class="fill-muted" x="195" y="252" text-anchor="middle">b (adjacent)</text><text class="fill-muted" x="205" y="150" text-anchor="middle">c</text><text class="fill-muted" x="205" y="168" text-anchor="middle">hypotenuse</text></svg>`, 'Right triangle with sides labeled'),
});

Object.assign(topicDiagrams, {
  'exponents-logarithms': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exponential growth curve"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">y = 2ˣ</text><line x1="40" y1="230" x2="430" y2="230" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="30" class="axis" stroke-width="2"/><path d="M60 225 C 120 222 150 210 170 170 C 185 140 200 90 240 55 C 280 25 330 18 400 14" fill="none" class="stroke-primary" stroke-width="3"/><text class="fill-muted" x="120" y="255" text-anchor="middle">0</text></svg>`, 'Exponential growth curve'),

  'limits-continuity': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Limit approaching a point with a hole"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">lim f(x) as x → 2</text><line x1="40" y1="220" x2="430" y2="220" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="30" class="axis" stroke-width="2"/><line x1="80" y1="160" x2="150" y2="125" class="stroke-primary" stroke-width="3"/><line x1="210" y1="95" x2="330" y2="35" class="stroke-primary" stroke-width="3"/><circle cx="180" cy="100" r="7" fill="none" class="stroke-primary" stroke-width="3"/><text class="fill-muted" x="120" y="250" text-anchor="middle">2</text></svg>`, 'A limit approaches a point'),

  'derivatives-chain-rule': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A curve and its tangent line"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">Tangent line</text><line x1="40" y1="220" x2="430" y2="220" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="30" class="axis" stroke-width="2"/><path d="M80 200 C 140 190 160 120 200 110 C 250 95 300 120 360 200" fill="none" class="stroke-primary" stroke-width="3"/><line x1="150" y1="170" x2="290" y2="70" class="stroke-accent" stroke-width="2" stroke-dasharray="6 5"/><circle cx="200" cy="110" r="6" class="fill-accent"/></svg>`, 'A curve and its tangent line'),

  'integration-definite': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Area under the curve of 2x from 0 to 3 equals 9"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">∫₀³ 2x dx = 9</text><line x1="40" y1="220" x2="430" y2="220" class="axis" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="30" class="axis" stroke-width="2"/><polygon points="80,220 245,220 245,40" class="fill-primary" opacity="0.25"/><line x1="80" y1="220" x2="245" y2="40" class="stroke-primary" stroke-width="3"/><line x1="245" y1="40" x2="245" y2="220" class="stroke-accent" stroke-width="2" stroke-dasharray="5 5"/><text class="fill-muted" x="80" y="245" text-anchor="middle">0</text><text class="fill-muted" x="245" y="245" text-anchor="middle">3</text></svg>`, 'Area under the curve from 0 to 3'),

  'linear-algebra-matrices': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 2 by 2 matrix with entries a b c d"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">Matrix [[a, b], [c, d]]</text><line x1="150" y1="85" x2="150" y2="225" class="stroke-primary" stroke-width="4"/><line x1="310" y1="85" x2="310" y2="225" class="stroke-primary" stroke-width="4"/><rect x="150" y="85" width="80" height="70" class="fill-soft stroke-primary" stroke-width="2"/><rect x="230" y="85" width="80" height="70" class="fill-soft stroke-primary" stroke-width="2"/><rect x="150" y="155" width="80" height="70" class="fill-soft stroke-primary" stroke-width="2"/><rect x="230" y="155" width="80" height="70" class="fill-soft stroke-primary" stroke-width="2"/><text class="fill-text" x="190" y="126" text-anchor="middle">a</text><text class="fill-text" x="270" y="126" text-anchor="middle">b</text><text class="fill-text" x="190" y="196" text-anchor="middle">c</text><text class="fill-text" x="270" y="196" text-anchor="middle">d</text></svg>`, 'A 2×2 matrix'),

  'probability-normal': figure(`<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal bell curve with mean and standard deviation"><text class="fill-text" x="230" y="40" text-anchor="middle" style="font-size:18px;font-weight:700">Normal distribution</text><line x1="40" y1="230" x2="430" y2="230" class="axis" stroke-width="2"/><path d="M150 200 C 165 150 195 110 230 100 C 265 110 295 150 310 200 L 310 230 L 150 230 Z" class="fill-primary" opacity="0.18"/><path d="M60 226 C 120 226 150 40 230 40 C 310 40 340 226 400 226" fill="none" class="stroke-primary" stroke-width="3"/><line x1="230" y1="40" x2="230" y2="230" class="stroke-muted" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="150" y1="120" x2="150" y2="230" class="stroke-accent" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="310" y1="120" x2="310" y2="230" class="stroke-accent" stroke-width="1.5" stroke-dasharray="4 4"/><text class="fill-muted" x="230" y="252" text-anchor="middle">μ</text><text class="fill-muted" x="150" y="252" text-anchor="middle">μ − σ</text><text class="fill-muted" x="310" y="252" text-anchor="middle">μ + σ</text></svg>`, 'The normal (bell) distribution'),
});

const quizzes = {};

Object.assign(quizzes, {
  arithmetic: [
    { q: 'What is 45 + 27?', options: ['62', '72', '82', '74'], answer: 1, explain: '45 + 27 = 72: 5 + 7 = 12 (carry the 1), then 4 + 2 + 1 = 7.' },
    { q: 'What is 83 − 38?', options: ['45', '55', '35', '54'], answer: 0, explain: 'Borrow from the tens: 13 − 8 = 5, then 7 − 3 = 4 → 45.' },
    { q: 'What is 12 × 14?', options: ['156', '168', '158', '148'], answer: 1, explain: '12 × 14 = 12 × (10 + 4) = 120 + 48 = 168.' },
  ],
  fractions: [
    { q: 'What is 1/3 + 2/5?', options: ['11/15', '3/8', '3/15', '11/8'], answer: 0, explain: 'Use the LCD 15: 5/15 + 6/15 = 11/15.' },
    { q: 'What is 2/3 × 4/5?', options: ['8/15', '6/8', '8/8', '6/15'], answer: 0, explain: 'Multiply straight across: (2 × 4) / (3 × 5) = 8/15.' },
    { q: 'What is 3/4 ÷ 1/2?', options: ['3/8', '3/2', '3/4', '6/2'], answer: 1, explain: 'Multiply by the reciprocal: 3/4 × 2/1 = 6/4 = 3/2.' },
  ],
  'geometry-basics': [
    { q: 'What is the perimeter of a rectangle with length 6 and width 4?', options: ['24', '10', '20', '12'], answer: 2, explain: 'Perimeter = 2(l + w) = 2(6 + 4) = 20.' },
    { q: 'What is the area of a square with side 5?', options: ['20', '25', '10', '15'], answer: 1, explain: 'Area = s² = 5² = 25.' },
    { q: 'What is the area of a circle with radius 2? (use π ≈ 3.14)', options: ['6.28', '12.56', '3.14', '25.12'], answer: 1, explain: 'Area = πr² ≈ 3.14 × 4 = 12.56.' },
  ],
  'linear-equations': [
    { q: 'Solve 3x + 5 = 14.', options: ['3', '4', '5', '9'], answer: 0, explain: '3x = 9, so x = 3.' },
    { q: 'Solve 2(x + 3) = 10.', options: ['2', '5', '7', '3.5'], answer: 0, explain: '2x + 6 = 10 → 2x = 4 → x = 2.' },
    { q: 'Solve 2x − 7 = 3x + 1.', options: ['−8', '8', '6', '−6'], answer: 0, explain: '−7 − 1 = x → x = −8.' },
  ],
});

Object.assign(quizzes, {
  'quadratic-equations': [
    { q: 'What are the roots of x² − 5x + 6 = 0?', options: ['2 and 3', '−2 and −3', '1 and 6', '−2 and 3'], answer: 0, explain: 'Factoring: (x − 2)(x − 3) = 0 → x = 2 or x = 3.' },
    { q: 'In the quadratic formula, the discriminant is:', options: ['b² + 4ac', 'b² − 4ac', '√(b² − 4ac)', '2a'], answer: 1, explain: 'The discriminant is Δ = b² − 4ac.' },
    { q: 'If the discriminant Δ > 0, the quadratic has:', options: ['no real roots', 'one repeated root', 'two distinct real roots', 'one imaginary root'], answer: 2, explain: 'Δ > 0 means two distinct real roots.' },
  ],
  functions: [
    { q: 'If f(x) = 2x + 3, what is f(4)?', options: ['11', '8', '14', '10'], answer: 0, explain: 'f(4) = 2(4) + 3 = 11.' },
    { q: 'The domain of f(x) = √x is:', options: ['x ≥ 0', 'x > 0', 'all reals', 'x ≠ 0'], answer: 0, explain: 'The square root is defined for x ≥ 0.' },
    { q: 'The domain of g(x) = 1/(x + 2) excludes:', options: ['x = 2', 'x = −2', 'x = 0', 'x = 1'], answer: 1, explain: 'The denominator x + 2 cannot be zero, so x ≠ −2.' },
  ],
  trigonometry: [
    { q: 'In a right triangle, sin(θ) equals:', options: ['opposite / hypotenuse', 'adjacent / hypotenuse', 'opposite / adjacent', 'hypotenuse / adjacent'], answer: 0, explain: 'SOH: sine = opposite / hypotenuse.' },
    { q: 'cos(θ) equals:', options: ['opposite / hypotenuse', 'adjacent / hypotenuse', 'opposite / adjacent', 'hypotenuse / opposite'], answer: 1, explain: 'CAH: cosine = adjacent / hypotenuse.' },
    { q: 'tan(θ) equals:', options: ['opposite / adjacent', 'adjacent / opposite', 'hypotenuse / opposite', 'opposite / hypotenuse'], answer: 0, explain: 'TOA: tangent = opposite / adjacent.' },
  ],
  'exponents-logarithms': [
    { q: 'What is 2³?', options: ['6', '8', '9', '16'], answer: 1, explain: '2³ = 2 × 2 × 2 = 8.' },
    { q: 'What is log₂(16)?', options: ['2', '4', '8', '16'], answer: 1, explain: '2⁴ = 16, so log₂(16) = 4.' },
    { q: 'If 3ˣ = 27, then x = ?', options: ['3', '9', '2', '4'], answer: 0, explain: '27 = 3³, so x = 3.' },
  ],
});

Object.assign(quizzes, {
  'limits-continuity': [
    { q: 'Evaluate lim(x→3) (x² − 9)/(x − 3).', options: ['6', '3', '9', 'undefined'], answer: 0, explain: 'Factor: (x − 3)(x + 3)/(x − 3) = x + 3 → 3 + 3 = 6.' },
    { q: 'Evaluate lim(x→2) (x + 3).', options: ['5', '2', '3', '6'], answer: 0, explain: 'Direct substitution: 2 + 3 = 5.' },
    { q: 'A function is continuous at a point when:', options: ['the limit equals the function value there', 'the limit does not exist', 'the function is increasing', 'the derivative is zero'], answer: 0, explain: 'Continuity requires lim f(x) = f(a).' },
  ],
  'derivatives-chain-rule': [
    { q: 'What is d/dx[sin(x²)]?', options: ['cos(x²)', '2x·cos(x²)', 'cos(2x)', '2x·sin(x²)'], answer: 1, explain: 'Chain rule: cos(x²) · 2x = 2x·cos(x²).' },
    { q: 'For h(x) = f(g(x)), the chain rule gives h′(x) = ?', options: ['f′(x)·g′(x)', 'f′(g(x))·g′(x)', 'f(g′(x))', 'f′(g(x)) + g′(x)'], answer: 1, explain: 'h′(x) = f′(g(x)) · g′(x).' },
    { q: 'If f(x) = (3x² + 1)⁵, then f′(x) = ?', options: ['5(3x²+1)⁴', '30x(3x²+1)⁴', '5(6x)⁴', '(3x²+1)⁴·6x'], answer: 1, explain: '5(3x²+1)⁴ · 6x = 30x(3x²+1)⁴.' },
  ],
  'integration-definite': [
    { q: 'What is ∫₀³ 2x dx?', options: ['9', '6', '18', '3'], answer: 0, explain: 'Antiderivative x²: 3² − 0² = 9.' },
    { q: 'An antiderivative of 2x is:', options: ['x²', '2', 'x³/2', '2x²'], answer: 0, explain: 'd/dx(x²) = 2x.' },
    { q: 'What is ∫₁² x² dx?', options: ['7/3', '3', '8/3', '2'], answer: 0, explain: 'x³/3 from 1 to 2: 8/3 − 1/3 = 7/3.' },
  ],
  'linear-algebra-matrices': [
    { q: 'The determinant of [[a, b], [c, d]] is:', options: ['ad + bc', 'ad − bc', 'ac − bd', 'ab − cd'], answer: 1, explain: 'det = ad − bc.' },
    { q: 'What is det([[3, −2], [4, 5]])?', options: ['23', '7', '15', '−23'], answer: 0, explain: '(3)(5) − (−2)(4) = 15 + 8 = 23.' },
    { q: 'To multiply matrices A·B, which condition is required?', options: ['rows of A = rows of B', 'columns of A = rows of B', 'columns of A = columns of B', 'both are square'], answer: 1, explain: 'Columns of A must equal rows of B.' },
  ],
  'probability-normal': [
    { q: 'A z-score measures:', options: ['probability', 'standard deviations from the mean', 'the sample size', 'the variance'], answer: 1, explain: 'z = (x − μ)/σ counts standard deviations from the mean.' },
    { q: 'If μ = 50 and σ = 10, the z-score of x = 60 is:', options: ['1', '2', '0.1', '10'], answer: 0, explain: 'z = (60 − 50)/10 = 1.' },
    { q: 'About what % of data falls within ±1σ of the mean (empirical rule)?', options: ['50%', '68%', '95%', '99.7%'], answer: 1, explain: 'The empirical rule: about 68% within one standard deviation.' },
  ],
});

// ---------- RENDERING LOGIC ----------
let currentLang = 'en';
let currentLevel = 'all';
let currentTopic = null;

function renderTopicCards() {
  const container = document.getElementById('topicList');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('topicCount');
  const topics = [...beginnerTopics, ...intermediateTopics, ...advancedTopics];
  const visible = topics.filter((t) => currentLevel === 'all' || t.level === currentLevel);

  if (countEl) countEl.textContent = String(visible.length);

  if (visible.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  let html = '';
  for (const topic of visible) {
    const title = topic.title[currentLang] || topic.title.en;
    const desc = topic.description[currentLang] || topic.description.en;
    const icon = topicIcons[topic.id] || '📐';
    const pct = getQuizPercent(topic.id);
    const done = isLessonDone(topic.id);
    let progress = '';
    if (done || pct !== null) {
      progress = '<div class="card-progress">';
      if (done) progress += `<span class="mini-badge done">✓ ${t(currentLang, 'completed')}</span>`;
      if (pct !== null) progress += `<span class="mini-badge score">★ ${pct}%</span>`;
      progress += '</div>';
    }
    html += `
      <article class="topic-card" data-topic-id="${topic.id}" tabindex="0" role="button">
        <div class="card-top">
          <span class="card-icon" aria-hidden="true">${icon}</span>
          <span class="card-level ${topic.level}">${t(currentLang, topic.level)}</span>
        </div>
        <h3>${title}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-footer"><span aria-hidden="true">🌐</span><span>${topic.langs.join(' · ')}</span></div>
        ${progress}
      </article>
    `;
  }
  container.innerHTML = html;

  document.querySelectorAll('.topic-card').forEach((card) => {
    const open = () => showTopicDetail(card.dataset.topicId);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}

function showTopicDetail(topicId) {
  const topic = [...beginnerTopics, ...intermediateTopics, ...advancedTopics].find((t) => t.id === topicId);
  if (!topic) return;

  currentTopic = topic;
  const titleEl = document.getElementById('topicTitle');
  const descEl = document.getElementById('topicDesc');
  const levelEl = document.getElementById('topicLevel');
  const langEl = document.getElementById('topicLang');
  const figureEl = document.getElementById('topicFigure');
  const stepsContainer = document.getElementById('stepsContainer');
  const detailSection = document.getElementById('topicDetail');

  titleEl.textContent = topic.title[currentLang] || topic.title.en;
  descEl.innerHTML = inlineMath(topic.description[currentLang] || topic.description.en);
  levelEl.textContent = t(currentLang, topic.level);
  levelEl.className = 'badge ' + topic.level;
  langEl.textContent = topic.langs.join(' · ');

  const diagram = topicDiagrams[topic.id];
  if (figureEl) {
    figureEl.innerHTML = diagram || '';
    figureEl.classList.toggle('hidden', !diagram);
  }

  const videoSection = document.getElementById('videoSection');
  const videoEl = document.getElementById('topicVideo');
  if (videoSection && videoEl) {
    videoEl.src = 'videos/' + currentLang + '/' + topic.id + '.mp4';
    videoEl.load();
    videoSection.classList.remove('hidden');
  }

  const quizSection = document.getElementById('quizSection');
  if (quizSection) {
    quizSection.classList.add('hidden');
    quizSection.innerHTML = '';
  }
  const playBtn = document.getElementById('playLessonBtn');
  const quizBtn = document.getElementById('startQuizBtn');
  if (playBtn) playBtn.onclick = () => openLesson(topic.id);
  if (quizBtn) quizBtn.onclick = () => renderQuiz(topic.id);

  let stepsHtml = '<h3>' + t(currentLang, 'steps') + '</h3><div class="steps-grid">';
  for (let i = 0; i < topic.steps.length; i++) {
    const step = topic.steps[i];
    stepsHtml += `
      <div class="step-card">
        <div class="step-header">
          <div class="step-num">${i + 1}</div>
          <h4>${step.title}</h4>
        </div>
        <div class="step-body">
          ${step.body ? `<p>${inlineMath(step.body)}</p>` : ''}
          ${step.formulas && step.formulas.length > 0 ? step.formulas.map((f) => `<div class="formula-box">${renderFormula(f)}</div>`).join('') : ''}
          ${step.examples && step.examples.length > 0 ? step.examples.map((ex) => `
            <div class="example-box">
              <div class="example-title">${ex.title}</div>
              <div class="example-body">
                ${ex.steps ? ex.steps.map((s) => `<p class="${/^Final answer/i.test(s.trim()) ? 'final-answer' : ''}">${inlineMath(s)}</p>`).join('') : ''}
              </div>
            </div>
          `).join('') : ''}
        </div>
      </div>
    `;
  }
  stepsHtml += '</div>';
  stepsContainer.innerHTML = stepsHtml;

  document.querySelectorAll('.formula-box').forEach(renderMath);

  detailSection.classList.remove('hidden');
  document.getElementById('topicList').classList.add('hidden');
  document.getElementById('emptyState').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function inlineMath(text) {
  if (typeof katex === 'undefined' || typeof text !== 'string') return text;
  return text.replace(/\$([^$\n]+)\$/g, (match, expr) => {
    try {
      return katex.renderToString(expr.trim(), { throwOnError: false, strict: false });
    } catch (e) {
      return match;
    }
  });
}

function renderFormula(obj) {
  if (obj && obj.__math) {
    const div = document.createElement('div');
    if (typeof katex !== 'undefined') {
      try {
        katex.render(obj.expression, div, { throwOnError: false, strict: false, displayMode: true });
        return div.innerHTML;
      } catch (e) {
        /* fall through to plain-text fallback */
      }
    }
    div.textContent = obj.expression;
    return div.innerHTML;
  }
  return String(obj == null ? '' : obj);
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (UIStrings[currentLang] && UIStrings[currentLang][key]) el.textContent = UIStrings[currentLang][key];
    else if (UIStrings.en[key]) el.textContent = UIStrings.en[key];
  });
}

function applyTheme(theme) {
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
  try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  applyI18n();
  renderTopicCards();
  if (currentTopic) showTopicDetail(currentTopic.id);
}

function setLevel(level) {
  currentLevel = level;
  document.querySelectorAll('.level-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
  renderTopicCards();
}

// ---------- Progress helpers ----------
function getQuizPercent(id) {
  try {
    const v = localStorage.getItem('quizPct_' + id);
    return v === null ? null : parseInt(v, 10);
  } catch (e) { return null; }
}

function isLessonDone(id) {
  try { return localStorage.getItem('lessonDone_' + id) === '1'; } catch (e) { return false; }
}

function markLessonDone(id) {
  try { localStorage.setItem('lessonDone_' + id, '1'); } catch (e) { /* ignore */ }
  renderTopicCards();
}

function saveQuizScore(id, correct, total) {
  if (!total) return;
  const pct = Math.round((correct / total) * 100);
  try {
    const prev = parseInt(localStorage.getItem('quizPct_' + id), 10) || 0;
    if (pct > prev) localStorage.setItem('quizPct_' + id, String(pct));
  } catch (e) { /* ignore */ }
  renderTopicCards();
}

// ---------- Lesson player (video-style walkthrough) ----------
const lesson = { topicId: null, index: 0, playing: false, timer: null };

function lessonTopic() {
  return [...beginnerTopics, ...intermediateTopics, ...advancedTopics].find((t) => t.id === lesson.topicId);
}

function openLesson(topicId) {
  const topic = [...beginnerTopics, ...intermediateTopics, ...advancedTopics].find((t) => t.id === topicId);
  if (!topic || !topic.steps.length) return;
  lesson.topicId = topicId;
  lesson.index = 0;
  document.getElementById('lessonTitle').textContent = topic.title[currentLang] || topic.title.en;
  document.getElementById('lessonPlayer').classList.remove('hidden');
  document.body.classList.add('no-scroll');
  renderLessonSlide();
  playLesson();
}

function closeLesson() {
  pauseLesson();
  document.getElementById('lessonPlayer').classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function renderLessonSlide() {
  const topic = lessonTopic();
  if (!topic) return;
  const step = topic.steps[lesson.index];
  const stage = document.getElementById('lessonStage');
  let html = `<div class="lesson-slide"><div class="lesson-step-num">${lesson.index + 1}</div><h3>${step.title}</h3>`;
  if (step.body) html += `<p class="lesson-body">${inlineMath(step.body)}</p>`;
  if (step.formulas && step.formulas.length) html += step.formulas.map((f) => `<div class="formula-box">${renderFormula(f)}</div>`).join('');
  if (step.examples && step.examples.length) {
    html += step.examples.map((ex) => `
      <div class="example-box">
        <div class="example-title">${ex.title}</div>
        <div class="example-body">${ex.steps ? ex.steps.map((s) => `<p>${inlineMath(s)}</p>`).join('') : ''}</div>
      </div>`).join('');
  }
  html += '</div>';
  stage.innerHTML = html;
  document.querySelectorAll('#lessonStage .formula-box').forEach(renderMath);
  const total = topic.steps.length;
  document.getElementById('lessonCounter').textContent = `${lesson.index + 1} / ${total}`;
  document.getElementById('lessonProgressFill').style.width = `${((lesson.index + 1) / total) * 100}%`;
}

function playLesson() {
  const topic = lessonTopic();
  if (!topic) return;
  lesson.playing = true;
  document.getElementById('lessonPlay').textContent = '⏸';
  clearInterval(lesson.timer);
  lesson.timer = setInterval(() => {
    if (lesson.index < topic.steps.length - 1) {
      lesson.index += 1;
      renderLessonSlide();
    } else {
      pauseLesson();
      markLessonDone(lesson.topicId);
    }
  }, 6500);
}

function pauseLesson() {
  lesson.playing = false;
  document.getElementById('lessonPlay').textContent = '▶';
  clearInterval(lesson.timer);
  lesson.timer = null;
}

function nextSlide() {
  const topic = lessonTopic();
  if (!topic) return;
  if (lesson.index < topic.steps.length - 1) {
    lesson.index += 1;
    renderLessonSlide();
  } else {
    pauseLesson();
    markLessonDone(lesson.topicId);
  }
}

function prevSlide() {
  if (lesson.index > 0) {
    lesson.index -= 1;
    renderLessonSlide();
  }
}

// ---------- Quiz ----------
let quizSession = { correct: 0, total: 0 };

function renderQuiz(topicId) {
  const section = document.getElementById('quizSection');
  const questions = quizzes[topicId] || [];
  if (!questions.length) {
    section.innerHTML = `<p class="quiz-empty">${t(currentLang, 'noQuiz')}</p>`;
    section.classList.remove('hidden');
    return;
  }
  quizSession = { correct: 0, total: questions.length };
  let html = `<h3>${t(currentLang, 'quiz')}</h3>`;
  html += `<div class="quiz-score" id="quizScore">${t(currentLang, 'score', { score: 0, total: questions.length })}</div>`;
  questions.forEach((q, qi) => {
    html += `<div class="quiz-question" data-q="${qi}">
      <p class="quiz-q-text">${qi + 1}. ${inlineMath(q.q)}</p>
      <div class="quiz-options">${q.options.map((opt, oi) => `<button class="quiz-option" data-opt="${oi}">${inlineMath(opt)}</button>`).join('')}</div>
      <p class="quiz-feedback hidden"></p>
    </div>`;
  });
  html += `<button class="primary-btn" id="quizRestart">${t(currentLang, 'restartQuiz')}</button>`;
  section.innerHTML = html;
  section.classList.remove('hidden');
  section.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => answerQuiz(btn, topicId));
  });
  document.getElementById('quizRestart').addEventListener('click', () => renderQuiz(topicId));
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function answerQuiz(btn, topicId) {
  const block = btn.closest('.quiz-question');
  const qIndex = parseInt(block.dataset.q, 10);
  const question = quizzes[topicId][qIndex];
  const options = block.querySelectorAll('.quiz-option');
  options.forEach((o) => (o.disabled = true));
  const feedback = block.querySelector('.quiz-feedback');
  const chosen = parseInt(btn.dataset.opt, 10);
  if (chosen === question.answer) {
    btn.classList.add('correct');
    quizSession.correct += 1;
    feedback.innerHTML = '✓ ' + t(currentLang, 'correct') + (question.explain ? ' ' + inlineMath(question.explain) : '');
    feedback.className = 'quiz-feedback ok';
  } else {
    btn.classList.add('wrong');
    options[question.answer].classList.add('correct');
    feedback.innerHTML = '✗ ' + t(currentLang, 'incorrect') + (question.explain ? ' ' + inlineMath(question.explain) : '');
    feedback.className = 'quiz-feedback bad';
  }
  feedback.classList.remove('hidden');
  document.getElementById('quizScore').textContent = t(currentLang, 'score', { score: quizSession.correct, total: quizSession.total });

  const allAnswered = [...document.querySelectorAll('#quizSection .quiz-question')].every((qb) => {
    const opts = qb.querySelectorAll('.quiz-option');
    return [...opts].every((o) => o.disabled);
  });
  if (allAnswered) saveQuizScore(topicId, quizSession.correct, quizSession.total);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyI18n();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  document.querySelectorAll('.level-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLevel(btn.dataset.level));
  });
  document.getElementById('backBtn').addEventListener('click', () => {
    const v = document.getElementById('topicVideo');
    if (v) v.pause();
    document.getElementById('topicDetail').classList.add('hidden');
    document.getElementById('topicList').classList.remove('hidden');
    document.getElementById('emptyState').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Lesson player controls
  document.getElementById('lessonClose').addEventListener('click', closeLesson);
  document.getElementById('lessonBackdrop').addEventListener('click', closeLesson);
  document.getElementById('lessonPlay').addEventListener('click', () => (lesson.playing ? pauseLesson() : playLesson()));
  document.getElementById('lessonPrev').addEventListener('click', prevSlide);
  document.getElementById('lessonNext').addEventListener('click', nextSlide);
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('lessonPlayer').classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLesson();
    else if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === ' ') { e.preventDefault(); if (lesson.playing) pauseLesson(); else playLesson(); }
  });

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }
  renderTopicCards();
});
