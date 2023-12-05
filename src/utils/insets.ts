/**
 * An edge insets
 * 
 * When number is passed, it is treated as all sides
 * 
 * When array with length = 4 is passed, it is treated as [top, right, bottom, left]
 * 
 * When array with length = 2 is passed, it is treated as [vertical, horizontal]
 * 
 * @see https://api.flutter.dev/flutter/painting/EdgeInsets-class.html
 */
export type EdgeInsets = number | [number, number] | [number, number, number, number]