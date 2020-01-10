export class Range {
  private _values: number[] = [];
  private _stepSize:number; 
  private _from:number; 
  private _to:number; 
  
  constructor(from:number, to:number, stepSize:number) {
    this._stepSize=stepSize;
    this._from = from;
    this._to = to;

    let i = from;

    if (to > from){
      while (i<to) {
        this._values.push(i);
        i = i + stepSize;
      }
    }else{
      while (i>to) {
        this._values.push(i);
        i = i - stepSize;
      }
    }
    
    
  }

  get values(){
    return this._values;
  }

  get stepSize(){
    return this._stepSize;
  }

  get from(){
    return this._from;
  }
  
  get to(){
    return this._to;
  }


  contains (number:number) {
    return (number >= this._from && number <= this._to);
  }

  set(point:Range){

  }
}