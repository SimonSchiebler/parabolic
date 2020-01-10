export class Point {
  protected _values: number[]

  constructor(values:number[]){
    this._values = values;
  }

  get values() {
    return this._values;
  }
}

export class twoDimPoint extends Point{
  
  constructor(values: number[]) {
    if (values.length != 2) {
      throw Error("incorrect anmount of values provided")
    }
    super(values)
    
  }

  public add(point:twoDimPoint){
    return new twoDimPoint([this._values[0] + point._values[0], this._values[1]+point._values[1]])
  }

  get x() {
    return this._values[0]
  }

  get y() {
    return this._values[1]
  }

  set(point:twoDimPoint){

  }
}