import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman', 'Robocop','Robin']

  public lastHeroDeletedName?:string

  removeLastHero():void{
     this.lastHeroDeletedName = this.heroNames.pop()
  }
}
