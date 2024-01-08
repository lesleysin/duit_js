/**
 * @see https://api.flutter.dev/flutter/painting/Offset-class.html
 */
export class Offset {
     dx: number;
     dy: number;

     constructor(dx: number, dy: number) {
         this.dx = dx;
         this.dy = dy;
     }

    static zero() {
        return new Offset(0, 0);
    }
 }