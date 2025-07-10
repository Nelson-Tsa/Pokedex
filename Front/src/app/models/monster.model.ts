import { MonsterType } from '../utils/monster.util';

export class Monster {
    // Properties of the Monster class
 id: number = -1;
 name: string = 'Pikachu';
 type : MonsterType = MonsterType.ELECTRIC;
 hp: number = 40;
 figureCaption: string = 'No. 025 Pikachu';
 attackName: string = 'Eclair';
 attackStrength: number = 60;
 attackDescription: string = 'Une attaque rapide et puissante qui peut paralyser l\'adversaire.';
 logoEnergie: string = '/energie/EnergieElectrik.png';
 imgArt: string = '/imagesArt/pikachuArt.png';
 cssClass: string = 'insideElectrik';

 copy(): Monster {
    return Object.assign(new Monster(), this);
  }
}