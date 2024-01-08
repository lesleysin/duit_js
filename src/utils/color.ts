export type Color = string | [number, number, number, number] | [number, number, number]

export class ColorUtils {

    /**
 * Creates a new Color object with the specified RGBA values.
 *
 * @param {number} r - The red component of the color (0-255).
 * @param {number} g - The green component of the color (0-255).
 * @param {number} b - The blue component of the color (0-255).
 * @param {number} a - The opacity of the color (0.0-1.0).
 * @returns {Color} - The new Color object.
 */
    static fromRGBO(r: number, g: number, b: number, a: number): Color {
        if (a < 0 || a > 1) {
            throw new Error('Opacity must be a number between 0.0 and 1.0');
        }

        if (a == 0) {
            return [r, g, b];
        }

        return [r, g, b, a];
    };
}