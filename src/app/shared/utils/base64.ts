/**
 * Utilidad para codificar y decodificar texto en Base64.
 * Compatible con caracteres especiales y emojis.
 */
export class Base64Util {

  /**
   * Codifica un texto a Base64
   * @param text Texto a codificar
   * @returns Texto codificado en Base64
   */
  static encode(text: string): string {
    try {
      return btoa(unescape(encodeURIComponent(text)));
    } catch (error) {
      console.error('[Base64Util] Error al codificar:', error);
      return '';
    }
  }

  /**
   * Decodifica un texto en Base64 a texto plano
   * @param base64 Texto codificado en Base64
   * @returns Texto decodificado
   */
  static decode(base64: string): string {
    try {
      return decodeURIComponent(escape(atob(base64)));
    } catch (error) {
      console.error('[Base64Util] Error al decodificar:', error);
      return '';
    }
  }
}
