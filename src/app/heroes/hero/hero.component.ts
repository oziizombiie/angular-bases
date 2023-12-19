import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  public name: string = 'Batman'
  public age: number = 36

  get capitalizedName():string{
    return 'Hola mundo'
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25
  }
}
