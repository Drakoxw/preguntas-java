import { IQuestion, Level } from "@interfaces/questions";

const vectorQuestionsEasy: IQuestion[] = [
  {
    id: "q1",
    text: "¿Qué representa un vector?",
    options: [
      { id: "a", text: "Solo una magnitud" },
      { id: "b", text: "Magnitud y dirección" },
      { id: "c", text: "Una constante" },
      { id: "d", text: "Un número real" },
    ],
    correctAnswerId: "b",
    explanation:
      "Un vector es una cantidad que tiene magnitud (tamaño) y dirección (hacia dónde apunta). Por ejemplo, la velocidad o la fuerza son vectores, porque no basta con saber cuánto valen, sino también en qué dirección actúan. En cambio, una magnitud escalar solo tiene valor numérico, como la temperatura o la masa.",
  },
  {
    id: "q2",
    text: "Si A = (2, -1, 3) y B = (1, 4, 2), ¿cuál es A·B?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "8" },
    ],
    correctAnswerId: "b",
    explanation:
      "El producto escalar se calcula multiplicando las componentes correspondientes y sumando los resultados: A·B = (2×1) + (-1×4) + (3×2) = 2 - 4 + 6 = 4. Este resultado es un número (escalar), no un vector, y sirve para saber el grado de alineación entre A y B. Si el resultado fuera 0, los vectores serían perpendiculares.",
  },
  {
    id: "q3",
    text: "Si A = (1, 2, 3) y B = (4, 5, 6), ¿cuál es A × B?",
    options: [
      { id: "a", text: "(-3, 6, -3)" },
      { id: "b", text: "(3, -6, 3)" },
      { id: "c", text: "(0, 0, 0)" },
      { id: "d", text: "(1, 1, 1)" },
    ],
    correctAnswerId: "a",
    explanation:
      "El producto cruz o vectorial se obtiene usando el determinante: A×B = (2×6 − 3×5, 3×4 − 1×6, 1×5 − 2×4) = (-3, 6, -3). Este vector es perpendicular a A y B, y su magnitud representa el área del paralelogramo formado por ellos.",
  },
];

const vectorQuestionsIntermedio: IQuestion[] = [
  {
    id: "q4",
    text: "¿Qué indica que dos vectores sean perpendiculares?",
    options: [
      { id: "a", text: "A·B = 0" },
      { id: "b", text: "A × B = 0" },
      { id: "c", text: "|A| = |B|" },
      { id: "d", text: "A = B" },
    ],
    correctAnswerId: "a",
    explanation:
      "Dos vectores son perpendiculares cuando su producto escalar es cero, ya que el coseno del ángulo entre ellos es 0 (ángulo de 90°).",
  },
  {
    id: "q5",
    text: "Si A = (3,4), ¿cuál es el vector unitario en su dirección?",
    options: [
      { id: "a", text: "(0.6, 0.8)" },
      { id: "b", text: "(3,4)" },
      { id: "c", text: "(1,1)" },
      { id: "d", text: "(4,3)" },
    ],
    correctAnswerId: "a",
    explanation:
      "La magnitud de A es √(3²+4²)=5. El vector unitario se obtiene dividiendo entre la magnitud: (3/5, 4/5) = (0.6, 0.8).",
  },
  {
    id: "q6",
    text: "Si A = (2, -1, 3) y B = (1, 4, 2), ¿cuál es el ángulo entre ellos?",
    options: [
      { id: "a", text: "60°" },
      { id: "b", text: "45°" },
      { id: "c", text: "90°" },
      { id: "d", text: "30°" },
    ],
    correctAnswerId: "a",
    explanation:
      "Se usa cos(θ) = (A·B)/(|A||B|). A·B = 4, |A|=√14, |B|=√21 ⇒ cos(θ)=4/(√14×√21) ≈ 0.5 ⇒ θ ≈ 60°.",
  },
];

const vectorQuestionsDificil: IQuestion[] = [
  {
    id: "q7",
    text: "Si A = (x, 2, -1) y B = (1, -1, 3) son perpendiculares, ¿cuál es el valor de x?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "2" },
      { id: "c", text: "-1" },
      { id: "d", text: "3" },
    ],
    correctAnswerId: "a",
    explanation:
      "Si son perpendiculares, A·B = 0 → x(1) + 2(-1) + (-1)(3) = 0 → x - 2 - 3 = 0 → x = 5.",
  },
  {
    id: "q8",
    text: "¿Cuál es el área del paralelogramo formado por A=(3,2,1) y B=(1,0,2)?",
    options: [
      { id: "a", text: "√45" },
      { id: "b", text: "5" },
      { id: "c", text: "√23" },
      { id: "d", text: "√29" },
    ],
    correctAnswerId: "a",
    explanation:
      "Área = |A×B| = √[(4)² + (-5)² + (-2)²] = √(16+25+4) = √45.",
  },
  {
    id: "q9",
    text: "Si A×B = 0, ¿qué relación hay entre A y B?",
    options: [
      { id: "a", text: "Son paralelos" },
      { id: "b", text: "Son perpendiculares" },
      { id: "c", text: "Forman 45°" },
      { id: "d", text: "No se relacionan" },
    ],
    correctAnswerId: "a",
    explanation:
      "El producto cruz da cero solo si los vectores son paralelos o uno es múltiplo del otro.",
  },
];

export const VECTOR_QUESTIONS: { [key in Level]: IQuestion[] } = {
  easy: vectorQuestionsEasy,
  medium: vectorQuestionsIntermedio,
  hard: vectorQuestionsDificil,
};
