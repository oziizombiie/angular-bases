import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}}</h2>
  <div ngClass="row d-flex justify-content-around">
    <button ngClass="col-3 btn btn-success" type="button" (click)="increaseBy(1)">+1</button>
    <button ngClass="col-3 btn btn-warning" type="button" (click)="reset(10)">reset</button>
    <button ngClass="col-3 btn btn-danger" type="button" (click)="decreaseBy(1)">-1</button>
  </div>
  `
})
export class CounterComponent{
  counter= 19;

  increaseBy(value:number):void{
    this.counter += value;
  }
  reset(value:number){
    this.counter = value
  }
  decreaseBy(value:number):void{
    this.counter -= value
  }
}
