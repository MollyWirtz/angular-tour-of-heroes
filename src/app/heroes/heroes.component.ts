import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',   // Component's CSS 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']   // Private CSS
})

// Always have export components before you import them 
export class HeroesComponent implements OnInit {

  selectedHero?: Hero; 
  heroes: Hero[] = []; 

  // Inject HeroService into constructor 
  constructor(private heroService: HeroService) { }

  // Lifecycle hook - put initialization logic here 
  ngOnInit() { 
    this.getHeroes(); 
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; 
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
    // Arrow fcn - remember this is the same as function X (heroes) { this.heroes = heroes ; }
  }

}
