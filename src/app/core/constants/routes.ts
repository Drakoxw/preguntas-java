export const PATH = {
  HOME: 'ask',
  SCORE: 'score',
  LEVELS: 'levels',
  ABOUT: 'about',
  AUTH: 'auth',
  LOGOUT: 'logout'
}

export const ROUTES = [
  {
    label: 'Inicio',
    path: `/${PATH.HOME}`,
    private: true
  },
  {
    label: 'Niveles',
    path: `/${PATH.LEVELS}`,
    private: true
  },
  {
    label: 'Puntaje',
    path: `/${PATH.SCORE}`,
    private: false
  }
];

export const PRIVATES_ROUTES = ROUTES.filter((route) => route.private).map((route) => route.path)
export const PUBLIC_ROUTES = ROUTES.filter((route) => !route.private).map((route) => route.path)
