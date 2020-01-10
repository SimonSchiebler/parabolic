import {Point,twoDimPoint} from './point'

export class Vector{
  private _values: number[]
  
  constructor(point: Point) {
    this._values = point.values;
  }

  public sub (vector:Vector) {
    if (vector._values.length === this._values.length){
      let temparr:number[] = [];
      for (let i = 0; i < vector.values.length; i++){
        temparr.push(this._values[i] - vector._values[i])
      }
      return new Vector(new Point(temparr));
    }
    return new Vector(new Point([]))
  }

  get length(){
    let sum = 0;
    this._values.forEach(value => {
      sum = sum + Math.pow(value , 2);
    });
    return Math.sqrt(sum)

  }

  get values(){
    return this._values;
  }
  set(point:twoDimPoint){

  }
}