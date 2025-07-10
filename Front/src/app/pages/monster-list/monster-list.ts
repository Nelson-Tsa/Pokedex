import { MonsterService } from '../../services/monster/monster';
import { Component, computed, effect, inject, model, NgModule } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { SearchBar } from '../../components/search-bar/search-bar';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCard, SearchBar, NgIf],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterList {
 monster1!: Monster;
 monsters = signal<Monster[]>([]); // Using signal to make it reactive
Count: number = 0;
search= model('');

private router = inject(Router);
private monsterService = inject(MonsterService);

filteredMonsters = computed(() => {
  return this.monsters().filter(monster => monster.name.toLowerCase().includes(this.search().toLowerCase()));
});

selectedMonsterIndex = signal(0) ;

selectedMonster = computed(() => {
  return this.monsters()[this.selectedMonsterIndex()];
});

 constructor() {

this.monsters.set(this.monsterService.getAll());

effect(() => {
  console.log('Selected monster changed:', this.selectedMonster());
});
     this.monsterService.hello();
  }

  addMonster() {
    this.router.navigate(['/monster']);
  // const genericMonster = new Monster();
  // this.monsterService.add(genericMonster);
  // this.monsters.set(this.monsterService.getAll());
}
  increaseCount() {
      this.Count++;
      console.log('Search button clicked, count increased to:', this.Count);
    }
 
toggleMonster() {

this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters().length);

}

openMonster(monster: Monster) {
this.router.navigate(['/monster', monster.id]);
}


}
