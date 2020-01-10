import {twoDimPoint} from './point';
import {Vector} from './vector'

type threePoints = {a:twoDimPoint, b: twoDimPoint, c:twoDimPoint}

export class Angle {
  private _value: number

  constructor(value: number|threePoints) {
    if (typeof value == 'number'){
      this._value = value
    }else{
      this._value = 0;
      this.setFromPoints(value.a, value.b, value.c);
    }
    
  }

  public add(angle:Angle){
    return new Angle(this.value + angle.value);
  }

  get value() {
    return this._value;
  }

  get radian(){
    return (this._value/360) * 2 * Math.PI;
  }

  setFromPoints(p1:twoDimPoint,p2:twoDimPoint,p3:twoDimPoint){

    let v1 = new Vector(p1);
    let v2 = new Vector(p2);
    let v3 = new Vector(p3);
    let p12 = v2.sub(v1).length;
    let p13 = v3.sub(v1).length;
    let p23 = v3.sub(v2).length;

    this._value = (Math.acos(((p12**2) + (p13**2) - (p23**2)) / (2 * (p12) * (p13))))/(2 * Math.PI) * 360
  }

  get slope () {
    return Math.tan((this._value / 360) * 2 * Math.PI);
  }
}