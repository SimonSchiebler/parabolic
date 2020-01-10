import { twoDimPoint, Angle } from "./geoObjectWrapper"

export class Line {
    private _start: number;
    private _slope: Angle;

    constructor(start: twoDimPoint, slope: Angle) {
        this._start = start.y - start.x * slope.slope
        this._slope = slope;
    }

    get slope() {
        return this._slope.slope
    }

    get start() {
        return this._start
    }

    public eval(x: number) {
        return (this._start + x * this.slope)
    }

    public intersect(line: Line): twoDimPoint {

        let x = (line.start - this._start) / (this.slope - line.slope)
        let y = this.eval(x);

        return new twoDimPoint([x, y]);
    }
}