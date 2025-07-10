import { Component, InputSignal, OnChanges, SimpleChanges, computed, input } from '@angular/core';
import { Input } from '@angular/core';
import { MonsterTypeProperties } from '../../utils/monster.util';
import { Monster } from '../../models/monster.model';
@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {

  // @Input() monster: Monster = new Monster();
    monster = input ( new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color
  }); // Default background color
  // monster: InputSignal<Monster> = input(new Monster(),{
  //   alias: 'monsterPikachu',
  //   transform: (value: Monster) => {
  //    value.hp = value.hp - 20;
  //     return value;
  //   }
  // });
  
// ngOnChanges(changes: SimpleChanges): void {
//     if (changes['monster']) {
//       if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
//       this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
//       this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
//     }
// }
// }
  }
