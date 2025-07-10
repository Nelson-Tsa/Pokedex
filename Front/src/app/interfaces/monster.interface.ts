import { Monster } from "../models/monster.model";
import { MonsterType } from "../utils/monster.util";

export class IMonster {


    id?: number;
    name!: string;
    type!: MonsterType;
    hp!: number;
    figureCaption!: string;
    attackName!: string;
    attackStrength!: number;
    attackDescription!: string;
    logoEnergie!: string;
    imgArt!: string;




  static  fromJson(monsterJson: IMonster): Monster{
        return Object.assign(new Monster(), monsterJson);
    }



toJson():IMonster{
    const monsterJson: IMonster = Object.assign({}, this);
    delete monsterJson.id;
    return monsterJson;
}

}