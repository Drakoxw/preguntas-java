import { IQuestion, Level } from "@interfaces/index";

// -------------------------------------
// NIVEL FÁCIL (10 preguntas)
// -------------------------------------
export const QUESTIONS_N1: IQuestion[] = [
  {
    id: 'E1',
    text: '¿Qué conector lógico aparece en la oración “María canta y Juan baila”?',
    explanation: 'La palabra "y" indica conjunción, simbolizada como ∧.',
    options: [
      { id: 'E1A', text: 'Disyunción (∨)' },
      { id: 'E1B', text: 'Conjunción (∧)' },
      { id: 'E1C', text: 'Negación (~)' },
      { id: 'E1D', text: 'Condicional (→)' }
    ],
    correctAnswerId: 'E1B'
  },
  {
    id: 'E2',
    text: '¿La oración “¡Cierra la ventana!” es una proposición?',
    explanation: 'Es una orden; no tiene valor de verdad.',
    options: [
      { id: 'E2A', text: 'Sí, es proposición' },
      { id: 'E2B', text: 'No, es una orden' },
      { id: 'E2C', text: 'Sí, porque describe algo' },
      { id: 'E2D', text: 'Depende del contexto' }
    ],
    correctAnswerId: 'E2B'
  },
  {
    id: 'E3',
    text: 'Traduce “No llueve” al lenguaje simbólico (P = "Llueve").',
    explanation: 'La negación de P se escribe ~P.',
    options: [
      { id: 'E3A', text: '~P' },
      { id: 'E3B', text: 'P ∧ Q' },
      { id: 'E3C', text: 'P ∨ Q' },
      { id: 'E3D', text: 'P → Q' }
    ],
    correctAnswerId: 'E3A'
  },
  {
    id: 'E4',
    text: '¿La oración “El sol es una estrella” es proposición?',
    explanation: 'Sí, declara un hecho verdadero o falso.',
    options: [
      { id: 'E4A', text: 'Sí, es proposición' },
      { id: 'E4B', text: 'No, es opinión' },
      { id: 'E4C', text: 'No, es pregunta' },
      { id: 'E4D', text: 'Sí, es una orden' }
    ],
    correctAnswerId: 'E4A'
  },
  {
    id: 'E5',
    text: 'Traduce: "Hoy es viernes y no tengo clase" (P = "Hoy es viernes", Q = "Tengo clase").',
    explanation: 'Conjunción y negación: P ∧ ~Q.',
    options: [
      { id: 'E5A', text: 'P ∨ Q' },
      { id: 'E5B', text: '~P ∧ Q' },
      { id: 'E5C', text: 'P ∧ ~Q' },
      { id: 'E5D', text: '~P ∧ ~Q' }
    ],
    correctAnswerId: 'E5C'
  },
  {
    id: 'E6',
    text: '¿Cuál es el valor de verdad de la proposición “2+2=4”?',
    explanation: 'Es verdadera matemáticamente.',
    options: [
      { id: 'E6A', text: 'Verdadera' },
      { id: 'E6B', text: 'Falsa' },
      { id: 'E6C', text: 'Indeterminada' },
      { id: 'E6D', text: 'Depende del contexto' }
    ],
    correctAnswerId: 'E6A'
  },
  {
    id: 'E7',
    text: '¿Cuál es el conector lógico de “o” en lógica proposicional?',
    explanation: '“O” inclusiva es disyunción (∨).',
    options: [
      { id: 'E7A', text: 'Conjunción (∧)' },
      { id: 'E7B', text: 'Disyunción (∨)' },
      { id: 'E7C', text: 'Negación (~)' },
      { id: 'E7D', text: 'Bicondicional (↔)' }
    ],
    correctAnswerId: 'E7B'
  },
  {
    id: 'E8',
    text: '¿Cuál es el valor de verdad de la proposición “La Luna es un planeta”?',
    explanation: 'Es falsa; la Luna no es planeta.',
    options: [
      { id: 'E8A', text: 'Verdadera' },
      { id: 'E8B', text: 'Falsa' },
      { id: 'E8C', text: 'Indeterminada' },
      { id: 'E8D', text: 'Depende' }
    ],
    correctAnswerId: 'E8B'
  },
  {
    id: 'E9',
    text: '¿Cuál es la negación correcta de "P ∨ Q"?',
    explanation: 'Por De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q.',
    options: [
      { id: 'E9A', text: '~P ∧ ~Q' },
      { id: 'E9B', text: '~P ∨ ~Q' },
      { id: 'E9C', text: 'P ∧ Q' },
      { id: 'E9D', text: '~(P ∧ Q)' }
    ],
    correctAnswerId: 'E9A'
  },
  {
    id: 'E10',
    text: '¿Cuál es la negación de ~P?',
    explanation: 'La doble negación: ~~P ≡ P.',
    options: [
      { id: 'E10A', text: 'P' },
      { id: 'E10B', text: '~P' },
      { id: 'E10C', text: 'P ∧ Q' },
      { id: 'E10D', text: 'P ∨ Q' }
    ],
    correctAnswerId: 'E10A'
  }
];

// -------------------------------------
// NIVEL MEDIO (10 preguntas)
// -------------------------------------
export const QUESTIONS_N2: IQuestion[] = [
  {
    id: 'M1',
    text: 'Traduce a símbolos: "Si estudio, entonces apruebo" (P = "Estudio", Q = "Apruebo").',
    explanation: 'Condicional: P → Q.',
    options: [
      { id: 'M1A', text: 'P ∧ Q' },
      { id: 'M1B', text: 'P → Q' },
      { id: 'M1C', text: 'P ↔ Q' },
      { id: 'M1D', text: '~P ∨ Q' }
    ],
    correctAnswerId: 'M1B'
  },
  {
    id: 'M2',
    text: 'Traduce: "No es cierto que Ana y Luis viajan mañana" (A = "Ana viaja", L = "Luis viaja").',
    explanation: 'Negación de una conjunción: ~(A ∧ L).',
    options: [
      { id: 'M2A', text: '~(A ∧ L)' },
      { id: 'M2B', text: '~A ∧ L' },
      { id: 'M2C', text: 'A ∧ ~L' },
      { id: 'M2D', text: '~A ∨ ~L' }
    ],
    correctAnswerId: 'M2A'
  },
  {
    id: 'M3',
    text: '¿Cuándo es verdadera una disyunción P ∨ Q?',
    explanation: 'Es verdadera si al menos una de P o Q es verdadera.',
    options: [
      { id: 'M3A', text: 'Solo si ambas son verdaderas' },
      { id: 'M3B', text: 'Solo si ambas son falsas' },
      { id: 'M3C', text: 'Si al menos una es verdadera' },
      { id: 'M3D', text: 'Nunca' }
    ],
    correctAnswerId: 'M3C'
  },
  {
    id: 'M4',
    text: '¿Cuál es la forma equivalente de P → Q?',
    explanation: 'Implica: ~P ∨ Q.',
    options: [
      { id: 'M4A', text: '~P ∨ Q' },
      { id: 'M4B', text: 'P ∧ ~Q' },
      { id: 'M4C', text: '~(P ∧ Q)' },
      { id: 'M4D', text: 'P ↔ Q' }
    ],
    correctAnswerId: 'M4A'
  },
  {
    id: 'M5',
    text: '¿Qué representa P ↔ Q?',
    explanation: 'Bicondicional: ambos tienen el mismo valor de verdad.',
    options: [
      { id: 'M5A', text: 'P → Q' },
      { id: 'M5B', text: '~P ∨ Q' },
      { id: 'M5C', text: 'P ↔ Q' },
      { id: 'M5D', text: 'P ∧ ~Q' }
    ],
    correctAnswerId: 'M5C'
  },
  {
    id: 'M6',
    text: '¿Cuál es la contrarrecíproca de P → Q?',
    explanation: 'Contrarrecíproca: ~Q → ~P.',
    options: [
      { id: 'M6A', text: '~Q → ~P' },
      { id: 'M6B', text: 'Q → P' },
      { id: 'M6C', text: '~P → ~Q' },
      { id: 'M6D', text: 'P ↔ Q' }
    ],
    correctAnswerId: 'M6A'
  },
  {
    id: 'M7',
    text: '¿Cuál es la negación correcta de P → Q?',
    explanation: 'Negación: P ∧ ~Q.',
    options: [
      { id: 'M7A', text: '~P ∨ Q' },
      { id: 'M7B', text: 'P ∧ ~Q' },
      { id: 'M7C', text: '~(P ∧ Q)' },
      { id: 'M7D', text: 'P ∨ Q' }
    ],
    correctAnswerId: 'M7B'
  },
  {
    id: 'M8',
    text: 'Si P es falso, ¿qué valor tiene ~P?',
    explanation: 'NOT invierte el valor de verdad.',
    options: [
      { id: 'M8A', text: 'Verdadero' },
      { id: 'M8B', text: 'Falso' },
      { id: 'M8C', text: 'Indeterminado' },
      { id: 'M8D', text: 'Depende de Q' }
    ],
    correctAnswerId: 'M8A'
  },
  {
    id: 'M9',
    text: '¿Cuál es el valor de verdad de ~P → P si P es falsa?',
    explanation: '~P es verdadera y P es falsa; verdadero → falso da FALSO.',
    options: [
      { id: 'M9A', text: 'Verdadero' },
      { id: 'M9B', text: 'Falso' },
      { id: 'M9C', text: 'Indeterminado' },
      { id: 'M9D', text: 'Contradictorio' }
    ],
    correctAnswerId: 'M9B'
  },
  {
    id: 'M10',
    text: 'Traduce: "Juan es médico o María es ingeniera, pero no ambos"',
    explanation: 'XOR: (J ∨ M) ∧ ¬(J ∧ M).',
    options: [
      { id: 'M10A', text: '(J ∨ M)' },
      { id: 'M10B', text: 'J ∧ M' },
      { id: 'M10C', text: '(J ∨ M) ∧ ¬(J ∧ M)' },
      { id: 'M10D', text: 'J → M' }
    ],
    correctAnswerId: 'M10C'
  }
];

// -------------------------------------
// NIVEL DIFÍCIL (10 preguntas)
// -------------------------------------
export const QUESTIONS_N3: IQuestion[] = [
  {
    id: 'H1',
    text: 'Traduce: "Si Juan no trabaja y María estudia, entonces Pedro descansa".',
    explanation: '(¬J ∧ M) → P.',
    options: [
      { id: 'H1A', text: '(¬J ∨ M) → P' },
      { id: 'H1B', text: '(¬J ∧ M) → P' },
      { id: 'H1C', text: '¬(J ∧ M) → P' },
      { id: 'H1D', text: 'J ∧ (M → P)' }
    ],
    correctAnswerId: 'H1B'
  },
  {
    id: 'H2',
    text: 'Traduce (~P ∨ Q) → (R ∧ ~S) al español.',
    explanation: 'Si no P o Q ocurre, entonces R ocurre y S no ocurre.',
    options: [
      { id: 'H2A', text: 'Si P entonces Q y R' },
      { id: 'H2B', text: 'Si no P o Q, entonces R y no S' },
      { id: 'H2C', text: 'R y S implican P o Q' },
      { id: 'H2D', text: 'No P y no Q entonces R o S' }
    ],
    correctAnswerId: 'H2B'
  },
  {
    id: 'H3',
    text: '¿La expresión (P → Q) ↔ (~Q → ~P) es una tautología?',
    explanation: 'Representa la equivalencia entre un condicional y su contrarrecíproco.',
    options: [
      { id: 'H3A', text: 'Sí, es tautología' },
      { id: 'H3B', text: 'No, es contradicción' },
      { id: 'H3C', text: 'Es contingencia' },
      { id: 'H3D', text: 'Solo si P es verdadera' }
    ],
    correctAnswerId: 'H3A'
  },
  {
    id: 'H4',
    text: 'Identifica el tipo lógico de (P ∨ Q) ∧ ~(P ∧ Q).',
    explanation: 'Es la disyunción exclusiva (XOR).',
    options: [
      { id: 'H4A', text: 'Tautología' },
      { id: 'H4B', text: 'Contradicción' },
      { id: 'H4C', text: 'Disyunción exclusiva (XOR)' },
      { id: 'H4D', text: 'Conjunción simple' }
    ],
    correctAnswerId: 'H4C'
  },
  {
    id: 'H5',
    text: 'Simplifica: ~(P ∧ ~Q).',
    explanation: 'Por De Morgan: ~P ∨ Q.',
    options: [
      { id: 'H5A', text: '~P ∧ Q' },
      { id: 'H5B', text: '~P ∨ Q' },
      { id: 'H5C', text: 'P ∨ ~Q' },
      { id: 'H5D', text: 'P ∧ Q' }
    ],
    correctAnswerId: 'H5B'
  },
  {
    id: 'H6',
    text: 'Evalúa el argumento: "Si estudio, apruebo. No aprobé. Por lo tanto, no estudié."',
    explanation: 'Modus tollens.',
    options: [
      { id: 'H6A', text: 'Válido (Modus tollens)' },
      { id: 'H6B', text: 'Inválido' },
      { id: 'H6C', text: 'Solo válido si P es verdadera' },
      { id: 'H6D', text: 'Es una tautología' }
    ],
    correctAnswerId: 'H6A'
  },
  {
    id: 'H7',
    text: 'Dado P → Q y Q → R, ¿la conclusión P → R es válida?',
    explanation: 'Es silogismo hipotético.',
    options: [
      { id: 'H7A', text: 'Sí, válida' },
      { id: 'H7B', text: 'No, inválida' },
      { id: 'H7C', text: 'Solo si P es verdadera' },
      { id: 'H7D', text: 'Depende de R' }
    ],
    correctAnswerId: 'H7A'
  },
  {
    id: 'H8',
    text: '¿Cuándo es falso un condicional P → Q?',
    explanation: 'Cuando P es verdadero y Q es falso.',
    options: [
      { id: 'H8A', text: 'P falso y Q verdadero' },
      { id: 'H8B', text: 'P verdadero y Q falso' },
      { id: 'H8C', text: 'Siempre verdadero' },
      { id: 'H8D', text: 'Siempre falso' }
    ],
    correctAnswerId: 'H8B'
  },
  {
    id: 'H9',
    text: '¿La fórmula (P ∧ Q) → P es siempre verdadera?',
    explanation: 'Sí, es una tautología.',
    options: [
      { id: 'H9A', text: 'Sí, siempre verdadera' },
      { id: 'H9B', text: 'No, depende de Q' },
      { id: 'H9C', text: 'Es contradicción' },
      { id: 'H9D', text: 'Indeterminado' }
    ],
    correctAnswerId: 'H9A'
  },
  {
    id: 'H10',
    text: 'Traduce: "Pasaré si y solo si estudio" (P = "Paso", E = "Estudio").',
    explanation: 'Bicondicional: P ↔ E.',
    options: [
      { id: 'H10A', text: 'P → E' },
      { id: 'H10B', text: 'P ∨ E' },
      { id: 'H10C', text: 'P ↔ E' },
      { id: 'H10D', text: '~P ∧ E' }
    ],
    correctAnswerId: 'H10C'
  }
];

export const VECTOR_QUESTIONS_LOGIC_MASTER: { [key in Level]: IQuestion[] } = {
  easy: QUESTIONS_N1,
  medium: QUESTIONS_N1,
  hard: QUESTIONS_N3,
};
