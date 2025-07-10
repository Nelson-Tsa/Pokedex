import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.util';



@Injectable({
  providedIn: 'root'
})
export class MonsterService {

monsters : Monster[] = [];
currentIndex: number = 1;

monster1!: Monster;
Count: number = 0;


      constructor() {
       this.load();
     }

     private save(){
      localStorage.setItem('monsters', JSON.stringify(this.monsters));
     }

     private load() {
      const monstersData = localStorage.getItem('monsters');
      if (monstersData) {
       this.monsters = JSON.parse(monstersData).map((monsterJson: any) => Object.assign(new Monster(), monsterJson)); 
        this.currentIndex = Math.max(...this.monsters.map(m => m.id)) + 1; // Set currentIndex to the next available ID
      } else {
        this.init();
        this.save();
      }
    }
    // private load() {
    //   const monstersData = localStorage.getItem('monsters');
    //   if (monstersData) {
    //     const parsedMonsters = JSON.parse(monstersData);
    //     // Convertir chaque objet simple en instance de Monster
    //     this.monsters = parsedMonsters.map((m: any) => {
    //       const monster = new Monster();
    //       return Object.assign(monster, m);
    //     });
    //     this.currentIndex = Math.max(...this.monsters.map(m => m.id)) + 1; // Set currentIndex to the next available ID
    //   } else {
    //     this.init();
    //     this.save();
    //   }
    // }

  private init() {
    this.monsters = [];
     // Reset the monsters array
        this.monster1 = new Monster();
        this.monster1.id = this.currentIndex++;
        this.monster1.name = 'Dracaufeu';
        this.monster1.hp = 80;
        this.monster1.figureCaption = 'No. 033 Dracaufeu';
        this.monster1.attackName = 'Lance-Flamme';
        this.monster1.attackStrength = 100;
        this.monster1.attackDescription = 'Une attaque de feu dévastatrice qui peut brûler l\'adversaire.';
        this.monster1.logoEnergie = '/energie/EnergieFeu.png';
        this.monster1.imgArt = '/imagesArt/dracaufeuArt.png';
        // this.monster1.cssClass = 'insideFeu'; // CSS class for the inside of the card
        this.monster1.type = MonsterType.FIRE; // CSS class for the inside of the card
        this.monsters.push(this.monster1);

        const monster2 = new Monster();
        monster2.id = this.currentIndex++;
        monster2.name = 'Bulbizarre';
        monster2.hp = 60;
        monster2.figureCaption = 'No. 001 Bulbizarre';
        monster2.attackName = 'Fouet Lianes';
        monster2.attackStrength = 50;
        monster2.attackDescription = 'Une attaque de plantes qui peut entraver les mouvements de l\'adversaire.';
        monster2.logoEnergie = '/energie/EnergiePlante.png';
        monster2.imgArt = '/imagesArt/bulbizarreArt.png';
        // monster2.cssClass = 'insidePlante'; 
        monster2.type = MonsterType.PLANT;// CSS class for the inside of the card
        this.monsters.push(monster2);

        const monster3 = new Monster();
        monster3.id = this.currentIndex++;
        monster3.name  = 'Pikachu';
        monster3.hp = 40;
        monster3.figureCaption = 'No. 025 Pikachu';
        monster3.attackName = 'Eclair';
        monster3.attackStrength = 60;
        monster3.attackDescription = 'Une attaque rapide et puissante qui peut paralyser l\'adversaire.';
        monster3.logoEnergie = '/energie/EnergieElectrik.png';
        monster3.imgArt = '/imagesArt/pikachuArt.png';
        monster3.type = MonsterType.ELECTRIC; // CSS class for the inside of the card
        //  monster3.cssClass = 'insideElectrik'; // CSS class for the inside of the
        this.monsters.push(monster3);
      
      const monster4 = new Monster();
        monster4.id = this.currentIndex++;
        monster4.name  = 'Carapuce';
        monster4.hp = 60;
        monster4.figureCaption = 'No. 044 Pikachu';
        monster4.attackName = 'Pistolet a eau';
        monster4.attackStrength = 30;
        monster4.attackDescription = 'Une attaque d\'eau qui peut ralentir l\'adversaire.';
        monster4.logoEnergie = '/energie/EnergieEau.png';
        monster4.imgArt = '/imagesArt/carapuceArt2.png';
        monster4.type = MonsterType.Water; // CSS class for the inside of the card
        //  monster3.cssClass = 'insideElectrik'; // CSS class for the inside of the
        this.monsters.push(monster4);
      
      const monster5 = new Monster();
        monster5.id = this.currentIndex++;
        monster5.name  = 'Celebi';
        monster5.hp = 190;
        monster5.figureCaption = 'No. 025 Celebi';
        monster5.attackName = 'Foliole Dansante';
        monster5.attackStrength = 60;
        monster5.attackDescription = 'Une valse fantastique qui peut soigner l\'adversaire.';
        monster5.logoEnergie = '/energie/EnergiePlante.png';
        monster5.imgArt = '/imagesArt/celebiArt2.png';
        monster5.type = MonsterType.PLANT; // CSS class for the inside of the card
        //  monster3.cssClass = 'insideElectrik'; // CSS class for the inside of the
        this.monsters.push(monster5);
      
      const monster6 = new Monster();
        monster6.id = this.currentIndex++;
        monster6.name  = 'Arceus';
        monster6.hp = 220;
        monster6.figureCaption = 'No. 166 Arceus';
        monster6.attackName = 'Lame puissante';
        monster6.attackStrength = 130;
        monster6.attackDescription = 'Une attaque divine qui peut infliger des dégâts massifs à l\'adversaire.';
        monster6.logoEnergie = '/energie/EnergieMetal.png';
        monster6.imgArt = '/imagesArt/ArceusArt2.png';
        monster6.type = MonsterType.ACIER; // CSS class for the inside of the card
        //  monster3.cssClass = 'insideElectrik'; // CSS class for the inside of the
        this.monsters.push(monster6);

          const monster7 = new Monster();
        monster7.id = this.currentIndex++;
        monster7.name  = 'Salamèche';
        monster7.hp = 60;
        monster7.figureCaption = 'No. 44 Salamèche';
        monster7.attackName = 'Flamme';
        monster7.attackStrength = 30;
        monster7.attackDescription = 'Une attaque de feu qui peut brûler l\'adversaire.';
        monster7.logoEnergie = '/energie/EnergieFeu.png';
        monster7.imgArt = '/imagesArt/salamecheArt.png';
        monster7.type = MonsterType.FIRE; // CSS class for the inside of the card
        //  monster3.cssClass = 'insideElectrik'; // CSS class for the inside of the
        this.monsters.push(monster7);
  }

  getAll(): Monster[] {
    // S'assurer que chaque monster est bien une instance de Monster avec la méthode copy()
    return this.monsters.map(monster => {
      if (typeof monster.copy === 'function') {
        return monster.copy();
      } else {
        // Si copy() n'existe pas, créer une nouvelle instance à partir de l'objet existant
        const newMonster = new Monster();
        return Object.assign(newMonster, monster);
      }
    });
  }

  get(id: number): Monster | null {
    const monster = this.monsters.find(m => m.id === id);
    return monster ? monster.copy() : null;
  }

add(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy);
    this.currentIndex++
    this.save();
    return monsterCopy;
  }

  update(monster: Monster): Monster | null {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(m => m.id === monster.id);
    if (monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
      
    }
    return monsterCopy;
  }

  delete(id:number){
const monsterIndex = this.monsters.findIndex(m => m.id === id);
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
       this.save();
    }
  }

  hello() {
    console.log('Hello from MonsterService');
  }



//private BASE_URL = 'http://localhost:3000';
//private http = inject(HttpClient);
//
// getAll(): Observable<Monster[] {
//   return this.http.get<IMonster[]>(this.BASE_URL).pipe(
//   map(monsterDictAray => {
//   return monsterDictAray.map<Monster>(
//   monsterDict => Monster.fromJson(monsterDict)
//     )
//   })
//   )
// }

// add(monster: Monster): Observable<Monster> { 
//   return this.http.post<IMonster>(this.BASE_URL, monster).pipe(
//   map(monsterDict => Monster.fromJson(monsterDict))
// )
//   }

// update(monster: Monster): Observable<Monster> {
//     return this.http.put<IMonster>(this.BASE_URL + '/' + monster.id + '/', monster.toJson).pipe(
//   map(monsterDict => Monster.fromJson(monsterDict))
// )
//   }
      
//     }
//     return monsterCopy;
//   }


//delete(id: number): Observable<void> {
//  return this.http.delete<void>(this.BASE_URL + '/' + id + '/');
//}



  
}
//
//
//
//
//





