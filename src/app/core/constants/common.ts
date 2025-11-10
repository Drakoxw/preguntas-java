import { IQuestion, Topic } from "@interfaces/index";
import { CONTINUIDAD } from "./continuidad";
import { DERIVADAS } from "./derivadas";
import { LIMITES } from "./limites";
import { OPTIMIZACION } from "./optimizacion";

export const URL_API_BASE = 'https://backendopa-production.up.railway.app';

export const MATH_TRACKER: { [key in Topic]: IQuestion[] } = {
  continuity: CONTINUIDAD,
  derivatives: DERIVADAS,
  limits: LIMITES,
  optimization: OPTIMIZACION,
};
