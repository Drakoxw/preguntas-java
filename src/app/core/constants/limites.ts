import { IQuestion } from "@interfaces/questions";

export const LIMITES: IQuestion[] = [
  {
    "id": "LIM-F1",
    "text": "¿Cuál es el valor del límite cuando x tiende a -2 de f(x) = -3x + -1 ?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-2 es f(-2) = -3·-2 + -1 = 5. Por tanto el límite es 5."
  },
  {
    "id": "LIM-F2",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = 5x^2 + -2x + 3.",
    "options": [
      {
        "id": "A",
        "text": "27"
      },
      {
        "id": "B",
        "text": "28"
      },
      {
        "id": "C",
        "text": "26"
      },
      {
        "id": "D",
        "text": "29"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: 5·-2^2 + -2·-2 + 3 = 27."
  },
  {
    "id": "LIM-F3",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F4",
    "text": "¿Cuál es el valor del límite cuando x tiende a -5 de f(x) = -2x + -2 ?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-5 es f(-5) = -2·-5 + -2 = 8. Por tanto el límite es 8."
  },
  {
    "id": "LIM-F5",
    "text": "Calcule el límite cuando x tiende a 5 de f(x) = 3x^2 + 0x + 4.",
    "options": [
      {
        "id": "A",
        "text": "79"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "78"
      },
      {
        "id": "D",
        "text": "81"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=5: 3·5^2 + 0·5 + 4 = 79."
  },
  {
    "id": "LIM-F6",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F7",
    "text": "¿Cuál es el valor del límite cuando x tiende a -5 de f(x) = -1x + 1 ?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-5 es f(-5) = -1·-5 + 1 = 6. Por tanto el límite es 6."
  },
  {
    "id": "LIM-F8",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 2x^2 + -2x + -2.",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 2·0^2 + -2·0 + -2 = -2."
  },
  {
    "id": "LIM-F9",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F10",
    "text": "¿Cuál es el valor del límite cuando x tiende a -2 de f(x) = 2x + 0 ?",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "-4"
      },
      {
        "id": "C",
        "text": "-5"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-2 es f(-2) = 2·-2 + 0 = -4. Por tanto el límite es -4."
  },
  {
    "id": "LIM-F11",
    "text": "Calcule el límite cuando x tiende a 4 de f(x) = 5x^2 + -2x + 3.",
    "options": [
      {
        "id": "A",
        "text": "75"
      },
      {
        "id": "B",
        "text": "76"
      },
      {
        "id": "C",
        "text": "74"
      },
      {
        "id": "D",
        "text": "77"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=4: 5·4^2 + -2·4 + 3 = 75."
  },
  {
    "id": "LIM-F12",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F13",
    "text": "¿Cuál es el valor del límite cuando x tiende a 4 de f(x) = 2x + 4 ?",
    "options": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=4 es f(4) = 2·4 + 4 = 12. Por tanto el límite es 12."
  },
  {
    "id": "LIM-F14",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 1x^2 + -2x + 0.",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 1·0^2 + -2·0 + 0 = 0."
  },
  {
    "id": "LIM-F15",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F16",
    "text": "¿Cuál es el valor del límite cuando x tiende a 7 de f(x) = 1x + 2 ?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=7 es f(7) = 1·7 + 2 = 9. Por tanto el límite es 9."
  },
  {
    "id": "LIM-F17",
    "text": "Calcule el límite cuando x tiende a 2 de f(x) = 2x^2 + 0x + 1.",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=2: 2·2^2 + 0·2 + 1 = 9."
  },
  {
    "id": "LIM-F18",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F19",
    "text": "¿Cuál es el valor del límite cuando x tiende a 0 de f(x) = 5x + -2 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=0 es f(0) = 5·0 + -2 = -2. Por tanto el límite es -2."
  },
  {
    "id": "LIM-F20",
    "text": "Calcule el límite cuando x tiende a 1 de f(x) = 5x^2 + 0x + 2.",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=1: 5·1^2 + 0·1 + 2 = 7."
  },
  {
    "id": "LIM-F21",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F22",
    "text": "¿Cuál es el valor del límite cuando x tiende a 2 de f(x) = -3x + 0 ?",
    "options": [
      {
        "id": "A",
        "text": "-5"
      },
      {
        "id": "B",
        "text": "-6"
      },
      {
        "id": "C",
        "text": "-4"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=2 es f(2) = -3·2 + 0 = -6. Por tanto el límite es -6."
  },
  {
    "id": "LIM-F23",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 2x^2 + 0x + 4.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 2·0^2 + 0·0 + 4 = 4."
  },
  {
    "id": "LIM-F24",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F25",
    "text": "¿Cuál es el valor del límite cuando x tiende a 9 de f(x) = -1x + -1 ?",
    "options": [
      {
        "id": "A",
        "text": "-11"
      },
      {
        "id": "B",
        "text": "-10"
      },
      {
        "id": "C",
        "text": "-8"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=9 es f(9) = -1·9 + -1 = -10. Por tanto el límite es -10."
  },
  {
    "id": "LIM-F26",
    "text": "Calcule el límite cuando x tiende a 3 de f(x) = 3x^2 + 2x + 0.",
    "options": [
      {
        "id": "A",
        "text": "33"
      },
      {
        "id": "B",
        "text": "34"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "35"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=3: 3·3^2 + 2·3 + 0 = 33."
  },
  {
    "id": "LIM-F27",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F28",
    "text": "¿Cuál es el valor del límite cuando x tiende a 10 de f(x) = -2x + -5 ?",
    "options": [
      {
        "id": "A",
        "text": "-26"
      },
      {
        "id": "B",
        "text": "-25"
      },
      {
        "id": "C",
        "text": "-23"
      },
      {
        "id": "D",
        "text": "-24"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=10 es f(10) = -2·10 + -5 = -25. Por tanto el límite es -25."
  },
  {
    "id": "LIM-F29",
    "text": "Calcule el límite cuando x tiende a 3 de f(x) = -2x^2 + 3x + 3.",
    "options": [
      {
        "id": "A",
        "text": "-6"
      },
      {
        "id": "B",
        "text": "-5"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "-4"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=3: -2·3^2 + 3·3 + 3 = -6."
  },
  {
    "id": "LIM-F30",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F31",
    "text": "¿Cuál es el valor del límite cuando x tiende a 3 de f(x) = 5x + -5 ?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=3 es f(3) = 5·3 + -5 = 10. Por tanto el límite es 10."
  },
  {
    "id": "LIM-F32",
    "text": "Calcule el límite cuando x tiende a 2 de f(x) = -2x^2 + 1x + 3.",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-4"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=2: -2·2^2 + 1·2 + 3 = -3."
  },
  {
    "id": "LIM-F33",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F34",
    "text": "¿Cuál es el valor del límite cuando x tiende a 9 de f(x) = -3x + -1 ?",
    "options": [
      {
        "id": "A",
        "text": "-29"
      },
      {
        "id": "B",
        "text": "-28"
      },
      {
        "id": "C",
        "text": "-27"
      },
      {
        "id": "D",
        "text": "-26"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=9 es f(9) = -3·9 + -1 = -28. Por tanto el límite es -28."
  },
  {
    "id": "LIM-F35",
    "text": "Calcule el límite cuando x tiende a 1 de f(x) = 5x^2 + 0x + -1.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=1: 5·1^2 + 0·1 + -1 = 4."
  },
  {
    "id": "LIM-F36",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F37",
    "text": "¿Cuál es el valor del límite cuando x tiende a 0 de f(x) = 5x + 3 ?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=0 es f(0) = 5·0 + 3 = 3. Por tanto el límite es 3."
  },
  {
    "id": "LIM-F38",
    "text": "Calcule el límite cuando x tiende a -3 de f(x) = -2x^2 + 2x + 1.",
    "options": [
      {
        "id": "A",
        "text": "-23"
      },
      {
        "id": "B",
        "text": "-22"
      },
      {
        "id": "C",
        "text": "-24"
      },
      {
        "id": "D",
        "text": "-21"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-3: -2·-3^2 + 2·-3 + 1 = -23."
  },
  {
    "id": "LIM-F39",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F40",
    "text": "¿Cuál es el valor del límite cuando x tiende a -4 de f(x) = 0x + 4 ?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-4 es f(-4) = 0·-4 + 4 = 4. Por tanto el límite es 4."
  },
  {
    "id": "LIM-F41",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = 5x^2 + -1x + -1.",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "22"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "23"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: 5·-2^2 + -1·-2 + -1 = 21."
  },
  {
    "id": "LIM-F42",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F43",
    "text": "¿Cuál es el valor del límite cuando x tiende a 0 de f(x) = 1x + 3 ?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=0 es f(0) = 1·0 + 3 = 3. Por tanto el límite es 3."
  },
  {
    "id": "LIM-F44",
    "text": "Calcule el límite cuando x tiende a 5 de f(x) = 0x^2 + 1x + 3.",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=5: 0·5^2 + 1·5 + 3 = 8."
  },
  {
    "id": "LIM-F45",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F46",
    "text": "¿Cuál es el valor del límite cuando x tiende a 9 de f(x) = 5x + 2 ?",
    "options": [
      {
        "id": "A",
        "text": "46"
      },
      {
        "id": "B",
        "text": "47"
      },
      {
        "id": "C",
        "text": "49"
      },
      {
        "id": "D",
        "text": "48"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=9 es f(9) = 5·9 + 2 = 47. Por tanto el límite es 47."
  },
  {
    "id": "LIM-F47",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = 2x^2 + -3x + 5.",
    "options": [
      {
        "id": "A",
        "text": "19"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: 2·-2^2 + -3·-2 + 5 = 19."
  },
  {
    "id": "LIM-F48",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F49",
    "text": "¿Cuál es el valor del límite cuando x tiende a 2 de f(x) = -3x + -4 ?",
    "options": [
      {
        "id": "A",
        "text": "-11"
      },
      {
        "id": "B",
        "text": "-10"
      },
      {
        "id": "C",
        "text": "-9"
      },
      {
        "id": "D",
        "text": "-8"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=2 es f(2) = -3·2 + -4 = -10. Por tanto el límite es -10."
  },
  {
    "id": "LIM-F50",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = -3x^2 + 2x + -2.",
    "options": [
      {
        "id": "A",
        "text": "-18"
      },
      {
        "id": "B",
        "text": "-17"
      },
      {
        "id": "C",
        "text": "-19"
      },
      {
        "id": "D",
        "text": "-16"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: -3·-2^2 + 2·-2 + -2 = -18."
  },
  {
    "id": "LIM-F51",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F52",
    "text": "¿Cuál es el valor del límite cuando x tiende a 3 de f(x) = 4x + -2 ?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=3 es f(3) = 4·3 + -2 = 10. Por tanto el límite es 10."
  },
  {
    "id": "LIM-F53",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 4x^2 + 3x + 0.",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "-1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 4·0^2 + 3·0 + 0 = 0."
  },
  {
    "id": "LIM-F54",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F55",
    "text": "¿Cuál es el valor del límite cuando x tiende a -2 de f(x) = 3x + 0 ?",
    "options": [
      {
        "id": "A",
        "text": "-5"
      },
      {
        "id": "B",
        "text": "-6"
      },
      {
        "id": "C",
        "text": "-4"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-2 es f(-2) = 3·-2 + 0 = -6. Por tanto el límite es -6."
  },
  {
    "id": "LIM-F56",
    "text": "Calcule el límite cuando x tiende a -3 de f(x) = -2x^2 + -3x + 3.",
    "options": [
      {
        "id": "A",
        "text": "-6"
      },
      {
        "id": "B",
        "text": "-5"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "-4"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-3: -2·-3^2 + -3·-3 + 3 = -6."
  },
  {
    "id": "LIM-F57",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F58",
    "text": "¿Cuál es el valor del límite cuando x tiende a -2 de f(x) = 0x + -2 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-2 es f(-2) = 0·-2 + -2 = -2. Por tanto el límite es -2."
  },
  {
    "id": "LIM-F59",
    "text": "Calcule el límite cuando x tiende a 3 de f(x) = -1x^2 + 1x + 4.",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=3: -1·3^2 + 1·3 + 4 = -2."
  },
  {
    "id": "LIM-F60",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F61",
    "text": "¿Cuál es el valor del límite cuando x tiende a -3 de f(x) = 4x + 3 ?",
    "options": [
      {
        "id": "A",
        "text": "-10"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "-7"
      },
      {
        "id": "D",
        "text": "-8"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-3 es f(-3) = 4·-3 + 3 = -9. Por tanto el límite es -9."
  },
  {
    "id": "LIM-F62",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = 0x^2 + -1x + 3.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: 0·-2^2 + -1·-2 + 3 = 5."
  },
  {
    "id": "LIM-F63",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F64",
    "text": "¿Cuál es el valor del límite cuando x tiende a 10 de f(x) = 0x + 1 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=10 es f(10) = 0·10 + 1 = 1. Por tanto el límite es 1."
  },
  {
    "id": "LIM-F65",
    "text": "Calcule el límite cuando x tiende a -3 de f(x) = 3x^2 + 1x + 4.",
    "options": [
      {
        "id": "A",
        "text": "28"
      },
      {
        "id": "B",
        "text": "29"
      },
      {
        "id": "C",
        "text": "27"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-3: 3·-3^2 + 1·-3 + 4 = 28."
  },
  {
    "id": "LIM-F66",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F67",
    "text": "¿Cuál es el valor del límite cuando x tiende a 8 de f(x) = 5x + 5 ?",
    "options": [
      {
        "id": "A",
        "text": "46"
      },
      {
        "id": "B",
        "text": "45"
      },
      {
        "id": "C",
        "text": "44"
      },
      {
        "id": "D",
        "text": "47"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=8 es f(8) = 5·8 + 5 = 45. Por tanto el límite es 45."
  },
  {
    "id": "LIM-F68",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 1x^2 + 0x + -3.",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-4"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 1·0^2 + 0·0 + -3 = -3."
  },
  {
    "id": "LIM-F69",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F70",
    "text": "¿Cuál es el valor del límite cuando x tiende a 5 de f(x) = -3x + -5 ?",
    "options": [
      {
        "id": "A",
        "text": "-19"
      },
      {
        "id": "B",
        "text": "-20"
      },
      {
        "id": "C",
        "text": "-21"
      },
      {
        "id": "D",
        "text": "-18"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=5 es f(5) = -3·5 + -5 = -20. Por tanto el límite es -20."
  },
  {
    "id": "LIM-F71",
    "text": "Calcule el límite cuando x tiende a -3 de f(x) = 5x^2 + -2x + -1.",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "51"
      },
      {
        "id": "C",
        "text": "49"
      },
      {
        "id": "D",
        "text": "52"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-3: 5·-3^2 + -2·-3 + -1 = 50."
  },
  {
    "id": "LIM-F72",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F73",
    "text": "¿Cuál es el valor del límite cuando x tiende a -3 de f(x) = 0x + 1 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-3 es f(-3) = 0·-3 + 1 = 1. Por tanto el límite es 1."
  },
  {
    "id": "LIM-F74",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = 3x^2 + 5x + 2.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: 3·-2^2 + 5·-2 + 2 = 4."
  },
  {
    "id": "LIM-F75",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F76",
    "text": "¿Cuál es el valor del límite cuando x tiende a 1 de f(x) = 2x + -2 ?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=1 es f(1) = 2·1 + -2 = 0. Por tanto el límite es 0."
  },
  {
    "id": "LIM-F77",
    "text": "Calcule el límite cuando x tiende a 1 de f(x) = 4x^2 + 2x + -2.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=1: 4·1^2 + 2·1 + -2 = 4."
  },
  {
    "id": "LIM-F78",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F79",
    "text": "¿Cuál es el valor del límite cuando x tiende a 9 de f(x) = -2x + -4 ?",
    "options": [
      {
        "id": "A",
        "text": "-23"
      },
      {
        "id": "B",
        "text": "-22"
      },
      {
        "id": "C",
        "text": "-21"
      },
      {
        "id": "D",
        "text": "-20"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=9 es f(9) = -2·9 + -4 = -22. Por tanto el límite es -22."
  },
  {
    "id": "LIM-F80",
    "text": "Calcule el límite cuando x tiende a -1 de f(x) = 2x^2 + -2x + 0.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-1: 2·-1^2 + -2·-1 + 0 = 4."
  },
  {
    "id": "LIM-F81",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F82",
    "text": "¿Cuál es el valor del límite cuando x tiende a 4 de f(x) = -1x + 2 ?",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "-2"
      },
      {
        "id": "C",
        "text": "-3"
      },
      {
        "id": "D",
        "text": "0"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=4 es f(4) = -1·4 + 2 = -2. Por tanto el límite es -2."
  },
  {
    "id": "LIM-F83",
    "text": "Calcule el límite cuando x tiende a 5 de f(x) = 1x^2 + -2x + -1.",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=5: 1·5^2 + -2·5 + -1 = 14."
  },
  {
    "id": "LIM-F84",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F85",
    "text": "¿Cuál es el valor del límite cuando x tiende a -2 de f(x) = -2x + 3 ?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=-2 es f(-2) = -2·-2 + 3 = 7. Por tanto el límite es 7."
  },
  {
    "id": "LIM-F86",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = 2x^2 + 0x + 1.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: 2·0^2 + 0·0 + 1 = 1."
  },
  {
    "id": "LIM-F87",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F88",
    "text": "¿Cuál es el valor del límite cuando x tiende a 3 de f(x) = -3x + -4 ?",
    "options": [
      {
        "id": "A",
        "text": "-12"
      },
      {
        "id": "B",
        "text": "-13"
      },
      {
        "id": "C",
        "text": "-14"
      },
      {
        "id": "D",
        "text": "-11"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=3 es f(3) = -3·3 + -4 = -13. Por tanto el límite es -13."
  },
  {
    "id": "LIM-F89",
    "text": "Calcule el límite cuando x tiende a -3 de f(x) = -3x^2 + 2x + -1.",
    "options": [
      {
        "id": "A",
        "text": "-34"
      },
      {
        "id": "B",
        "text": "-33"
      },
      {
        "id": "C",
        "text": "-35"
      },
      {
        "id": "D",
        "text": "-32"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-3: -3·-3^2 + 2·-3 + -1 = -34."
  },
  {
    "id": "LIM-F90",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F91",
    "text": "¿Cuál es el valor del límite cuando x tiende a 0 de f(x) = 4x + 3 ?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=0 es f(0) = 4·0 + 3 = 3. Por tanto el límite es 3."
  },
  {
    "id": "LIM-F92",
    "text": "Calcule el límite cuando x tiende a -2 de f(x) = -2x^2 + -1x + 5.",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "-2"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=-2: -2·-2^2 + -1·-2 + 5 = -1."
  },
  {
    "id": "LIM-F93",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F94",
    "text": "¿Cuál es el valor del límite cuando x tiende a 6 de f(x) = 5x + -3 ?",
    "options": [
      {
        "id": "A",
        "text": "29"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "28"
      },
      {
        "id": "D",
        "text": "26"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=6 es f(6) = 5·6 + -3 = 27. Por tanto el límite es 27."
  },
  {
    "id": "LIM-F95",
    "text": "Calcule el límite cuando x tiende a 1 de f(x) = 2x^2 + -3x + 2.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=1: 2·1^2 + -3·1 + 2 = 1."
  },
  {
    "id": "LIM-F96",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F97",
    "text": "¿Cuál es el valor del límite cuando x tiende a 2 de f(x) = -2x + 0 ?",
    "options": [
      {
        "id": "A",
        "text": "-3"
      },
      {
        "id": "B",
        "text": "-4"
      },
      {
        "id": "C",
        "text": "-5"
      },
      {
        "id": "D",
        "text": "-2"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=2 es f(2) = -2·2 + 0 = -4. Por tanto el límite es -4."
  },
  {
    "id": "LIM-F98",
    "text": "Calcule el límite cuando x tiende a 0 de f(x) = -1x^2 + -1x + 3.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Los polinomios son continuos; el límite se obtiene sustituyendo x=0: -1·0^2 + -1·0 + 3 = 3."
  },
  {
    "id": "LIM-F99",
    "text": "¿Cuál es el límite cuando x tiende a 0 de (sin x)/x?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "Infinito"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Es un límite trigonométrico conocido: lim (sin x)/x = 1 cuando x → 0."
  },
  {
    "id": "LIM-F100",
    "text": "¿Cuál es el valor del límite cuando x tiende a 0 de f(x) = 2x + 1 ?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Para funciones lineales la continuidad implica que el límite al sustituir x=0 es f(0) = 2·0 + 1 = 1. Por tanto el límite es 1."
  },
  {
    "id": "LIM-I1",
    "text": "Calcule lim x→-1 de (x^2 - -1^2)/(x - -1).",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -1^2 = (x--1)(x+-1); al cancelar queda x+-1, y al sustituir x=-1 resulta -2."
  },
  {
    "id": "LIM-I2",
    "text": "Encuentra lim x→∞ de (3x^2 + 1x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I3",
    "text": "Calcule lim x→0 de (sin(1x))/x.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I4",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I5",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I6",
    "text": "Encuentra lim x→∞ de (3x^2 + 0x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I7",
    "text": "Calcule lim x→0 de (sin(4x))/x.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I8",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I9",
    "text": "Calcule lim x→-2 de (x^2 - -2^2)/(x - -2).",
    "options": [
      {
        "id": "A",
        "text": "-4"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -2^2 = (x--2)(x+-2); al cancelar queda x+-2, y al sustituir x=-2 resulta -4."
  },
  {
    "id": "LIM-I10",
    "text": "Encuentra lim x→∞ de (3x^2 + 1x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I11",
    "text": "Calcule lim x→0 de (sin(4x))/x.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I12",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I13",
    "text": "Calcule lim x→0 de (x^2 - 0^2)/(x - 0).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 0^2 = (x-0)(x+0); al cancelar queda x+0, y al sustituir x=0 resulta 0."
  },
  {
    "id": "LIM-I14",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I15",
    "text": "Calcule lim x→0 de (sin(2x))/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I16",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I17",
    "text": "Calcule lim x→-2 de (x^2 - -2^2)/(x - -2).",
    "options": [
      {
        "id": "A",
        "text": "-4"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -2^2 = (x--2)(x+-2); al cancelar queda x+-2, y al sustituir x=-2 resulta -4."
  },
  {
    "id": "LIM-I18",
    "text": "Encuentra lim x→∞ de (3x^2 + 0x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I19",
    "text": "Calcule lim x→0 de (sin(2x))/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I20",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I21",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I22",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I23",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I24",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I25",
    "text": "Calcule lim x→-4 de (x^2 - -4^2)/(x - -4).",
    "options": [
      {
        "id": "A",
        "text": "-8"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -4^2 = (x--4)(x+-4); al cancelar queda x+-4, y al sustituir x=-4 resulta -8."
  },
  {
    "id": "LIM-I26",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I27",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I28",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I29",
    "text": "Calcule lim x→5 de (x^2 - 5^2)/(x - 5).",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 5^2 = (x-5)(x+5); al cancelar queda x+5, y al sustituir x=5 resulta 10."
  },
  {
    "id": "LIM-I30",
    "text": "Encuentra lim x→∞ de (3x^2 + 4x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I31",
    "text": "Calcule lim x→0 de (sin(4x))/x.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I32",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I33",
    "text": "Calcule lim x→5 de (x^2 - 5^2)/(x - 5).",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 5^2 = (x-5)(x+5); al cancelar queda x+5, y al sustituir x=5 resulta 10."
  },
  {
    "id": "LIM-I34",
    "text": "Encuentra lim x→∞ de (3x^2 + 4x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I35",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I36",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I37",
    "text": "Calcule lim x→-5 de (x^2 - -5^2)/(x - -5).",
    "options": [
      {
        "id": "A",
        "text": "-10"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -5^2 = (x--5)(x+-5); al cancelar queda x+-5, y al sustituir x=-5 resulta -10."
  },
  {
    "id": "LIM-I38",
    "text": "Encuentra lim x→∞ de (3x^2 + 0x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I39",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I40",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I41",
    "text": "Calcule lim x→-3 de (x^2 - -3^2)/(x - -3).",
    "options": [
      {
        "id": "A",
        "text": "-6"
      },
      {
        "id": "B",
        "text": "-5"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -3^2 = (x--3)(x+-3); al cancelar queda x+-3, y al sustituir x=-3 resulta -6."
  },
  {
    "id": "LIM-I42",
    "text": "Encuentra lim x→∞ de (3x^2 + 4x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I43",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I44",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I45",
    "text": "Calcule lim x→-5 de (x^2 - -5^2)/(x - -5).",
    "options": [
      {
        "id": "A",
        "text": "-10"
      },
      {
        "id": "B",
        "text": "-9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -5^2 = (x--5)(x+-5); al cancelar queda x+-5, y al sustituir x=-5 resulta -10."
  },
  {
    "id": "LIM-I46",
    "text": "Encuentra lim x→∞ de (3x^2 + 0x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I47",
    "text": "Calcule lim x→0 de (sin(5x))/x.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I48",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I49",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I50",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I51",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I52",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I53",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I54",
    "text": "Encuentra lim x→∞ de (3x^2 + 4x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I55",
    "text": "Calcule lim x→0 de (sin(5x))/x.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I56",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I57",
    "text": "Calcule lim x→-4 de (x^2 - -4^2)/(x - -4).",
    "options": [
      {
        "id": "A",
        "text": "-8"
      },
      {
        "id": "B",
        "text": "-7"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -4^2 = (x--4)(x+-4); al cancelar queda x+-4, y al sustituir x=-4 resulta -8."
  },
  {
    "id": "LIM-I58",
    "text": "Encuentra lim x→∞ de (3x^2 + 3x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I59",
    "text": "Calcule lim x→0 de (sin(5x))/x.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I60",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I61",
    "text": "Calcule lim x→-2 de (x^2 - -2^2)/(x - -2).",
    "options": [
      {
        "id": "A",
        "text": "-4"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -2^2 = (x--2)(x+-2); al cancelar queda x+-2, y al sustituir x=-2 resulta -4."
  },
  {
    "id": "LIM-I62",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I63",
    "text": "Calcule lim x→0 de (sin(1x))/x.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I64",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I65",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I66",
    "text": "Encuentra lim x→∞ de (3x^2 + 0x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I67",
    "text": "Calcule lim x→0 de (sin(5x))/x.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I68",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I69",
    "text": "Calcule lim x→3 de (x^2 - 3^2)/(x - 3).",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 3^2 = (x-3)(x+3); al cancelar queda x+3, y al sustituir x=3 resulta 6."
  },
  {
    "id": "LIM-I70",
    "text": "Encuentra lim x→∞ de (3x^2 + 5x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I71",
    "text": "Calcule lim x→0 de (sin(2x))/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I72",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I73",
    "text": "Calcule lim x→0 de (x^2 - 0^2)/(x - 0).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 0^2 = (x-0)(x+0); al cancelar queda x+0, y al sustituir x=0 resulta 0."
  },
  {
    "id": "LIM-I74",
    "text": "Encuentra lim x→∞ de (3x^2 + 3x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I75",
    "text": "Calcule lim x→0 de (sin(1x))/x.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I76",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I77",
    "text": "Calcule lim x→5 de (x^2 - 5^2)/(x - 5).",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 5^2 = (x-5)(x+5); al cancelar queda x+5, y al sustituir x=5 resulta 10."
  },
  {
    "id": "LIM-I78",
    "text": "Encuentra lim x→∞ de (3x^2 + 2x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I79",
    "text": "Calcule lim x→0 de (sin(5x))/x.",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I80",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I81",
    "text": "Calcule lim x→0 de (x^2 - 0^2)/(x - 0).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 0^2 = (x-0)(x+0); al cancelar queda x+0, y al sustituir x=0 resulta 0."
  },
  {
    "id": "LIM-I82",
    "text": "Encuentra lim x→∞ de (3x^2 + 5x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I83",
    "text": "Calcule lim x→0 de (sin(1x))/x.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I84",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I85",
    "text": "Calcule lim x→-1 de (x^2 - -1^2)/(x - -1).",
    "options": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "-1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-3"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - -1^2 = (x--1)(x+-1); al cancelar queda x+-1, y al sustituir x=-1 resulta -2."
  },
  {
    "id": "LIM-I86",
    "text": "Encuentra lim x→∞ de (3x^2 + 4x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I87",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I88",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I89",
    "text": "Calcule lim x→5 de (x^2 - 5^2)/(x - 5).",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 5^2 = (x-5)(x+5); al cancelar queda x+5, y al sustituir x=5 resulta 10."
  },
  {
    "id": "LIM-I90",
    "text": "Encuentra lim x→∞ de (3x^2 + 3x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I91",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I92",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I93",
    "text": "Calcule lim x→1 de (x^2 - 1^2)/(x - 1).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 1^2 = (x-1)(x+1); al cancelar queda x+1, y al sustituir x=1 resulta 2."
  },
  {
    "id": "LIM-I94",
    "text": "Encuentra lim x→∞ de (3x^2 + 5x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I95",
    "text": "Calcule lim x→0 de (sin(3x))/x.",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I96",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-I97",
    "text": "Calcule lim x→3 de (x^2 - 3^2)/(x - 3).",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Factorizamos: x^2 - 3^2 = (x-3)(x+3); al cancelar queda x+3, y al sustituir x=3 resulta 6."
  },
  {
    "id": "LIM-I98",
    "text": "Encuentra lim x→∞ de (3x^2 + 1x + 1)/(x^2 + 2).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Al comparar grados iguales, el límite es el cociente de los coeficientes principales: 3/1 = 3."
  },
  {
    "id": "LIM-I99",
    "text": "Calcule lim x→0 de (sin(2x))/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando el límite trigonométrico: (sin(kx))/(kx) → 1 cuando x→0, por tanto (sin(kx))/x → k."
  },
  {
    "id": "LIM-I100",
    "text": "Calcule lim x→4 de (sqrt(x) - 2)/(x - 4).",
    "options": [
      {
        "id": "A",
        "text": "1/2"
      },
      {
        "id": "B",
        "text": "1/4"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "No existe"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Se racionaliza o se usa derivada: el límite es 1/(2·sqrt(4)) = 1/4."
  },
  {
    "id": "LIM-D1",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D2",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D3",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D4",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D5",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D6",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D7",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/3)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D8",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D9",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D10",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D11",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/1)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D12",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D13",
    "text": "Calcule lim x→0 de (1 - cos(3x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "4.5000"
      },
      {
        "id": "B",
        "text": "5.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(3x) ≈ (3^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 4.5000."
  },
  {
    "id": "LIM-D14",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D15",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/3)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D16",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D17",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D18",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D19",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D20",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D21",
    "text": "Calcule lim x→0 de (1 - cos(5x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "12.5000"
      },
      {
        "id": "B",
        "text": "13.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(5x) ≈ (5^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 12.5000."
  },
  {
    "id": "LIM-D22",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D23",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/3)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D24",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D25",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D26",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D27",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D28",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D29",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D30",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D31",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D32",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D33",
    "text": "Calcule lim x→0 de (1 - cos(5x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "12.5000"
      },
      {
        "id": "B",
        "text": "13.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(5x) ≈ (5^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 12.5000."
  },
  {
    "id": "LIM-D34",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D35",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D36",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D37",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D38",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D39",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/1)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D40",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D41",
    "text": "Calcule lim x→0 de (1 - cos(3x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "4.5000"
      },
      {
        "id": "B",
        "text": "5.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(3x) ≈ (3^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 4.5000."
  },
  {
    "id": "LIM-D42",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D43",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/3)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D44",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D45",
    "text": "Calcule lim x→0 de (1 - cos(1x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "0.5000"
      },
      {
        "id": "B",
        "text": "1.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(1x) ≈ (1^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 0.5000."
  },
  {
    "id": "LIM-D46",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D47",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D48",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D49",
    "text": "Calcule lim x→0 de (1 - cos(3x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "4.5000"
      },
      {
        "id": "B",
        "text": "5.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(3x) ≈ (3^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 4.5000."
  },
  {
    "id": "LIM-D50",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D51",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D52",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D53",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D54",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D55",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D56",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D57",
    "text": "Calcule lim x→0 de (1 - cos(1x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "0.5000"
      },
      {
        "id": "B",
        "text": "1.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(1x) ≈ (1^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 0.5000."
  },
  {
    "id": "LIM-D58",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D59",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/1)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D60",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D61",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D62",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D63",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D64",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D65",
    "text": "Calcule lim x→0 de (1 - cos(5x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "12.5000"
      },
      {
        "id": "B",
        "text": "13.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(5x) ≈ (5^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 12.5000."
  },
  {
    "id": "LIM-D66",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D67",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/1)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D68",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D69",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D70",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D71",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D72",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D73",
    "text": "Calcule lim x→0 de (1 - cos(5x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "12.5000"
      },
      {
        "id": "B",
        "text": "13.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(5x) ≈ (5^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 12.5000."
  },
  {
    "id": "LIM-D74",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D75",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D76",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D77",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D78",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D79",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D80",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D81",
    "text": "Calcule lim x→0 de (1 - cos(4x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(4x) ≈ (4^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 8."
  },
  {
    "id": "LIM-D82",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D83",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D84",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D85",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D86",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D87",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/1)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D88",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D89",
    "text": "Calcule lim x→0 de (1 - cos(1x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "0.5000"
      },
      {
        "id": "B",
        "text": "1.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(1x) ≈ (1^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 0.5000."
  },
  {
    "id": "LIM-D90",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D91",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D92",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D93",
    "text": "Calcule lim x→0 de (1 - cos(2x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(2x) ≈ (2^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 2."
  },
  {
    "id": "LIM-D94",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D95",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/2)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D96",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  },
  {
    "id": "LIM-D97",
    "text": "Calcule lim x→0 de (1 - cos(5x))/(x^2).",
    "options": [
      {
        "id": "A",
        "text": "12.5000"
      },
      {
        "id": "B",
        "text": "13.5000"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Usando la expansión en series: 1-cos(5x) ≈ (5^2 x^2)/2 para x pequeño; al dividir por x^2 el límite es 12.5000."
  },
  {
    "id": "LIM-D98",
    "text": "Calcule lim x→0 de (e^(2x) - 1)/x.",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "La derivada de e^(2x) en 0 es 2, y (e^{2x}-1)/x tiende a 2 cuando x→0."
  },
  {
    "id": "LIM-D99",
    "text": "Calcule lim x→∞ de (x^2)/(e^(x/4)).",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "∞"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "El crecimiento exponencial (e^{x/n}) domina al polinómico x^2; por tanto el cociente tiende a 0."
  },
  {
    "id": "LIM-D100",
    "text": "¿Existe lim x→0 de sin(1/x) ?",
    "options": [
      {
        "id": "A",
        "text": "Sí, es 0"
      },
      {
        "id": "B",
        "text": "Sí, es 1"
      },
      {
        "id": "C",
        "text": "No existe"
      },
      {
        "id": "D",
        "text": "∞"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "sin(1/x) oscila entre −1 y 1 de forma indefinida cuando x→0; no hay valor límite único."
  }
]
