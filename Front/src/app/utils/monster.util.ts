export enum MonsterType {
  ELECTRIC = 'ELECTRIC',
  FIRE = 'FIRE',
  PLANT = 'PLANT',
  Water = 'WATER',
  ACIER = 'ACIER'
}

export interface IMonsterProperties {
imageUrl: string;
color: string;
}

export const MonsterTypeProperties:  { [key :string]: IMonsterProperties}={
  [MonsterType.ELECTRIC]: {
    imageUrl: '/energie/EnergieElectrik.png',
    color: 'rgb(251, 251, 93)'
  },
  [MonsterType.FIRE]: {
    imageUrl: '/energie/EnergieFeu.png',
    color: '#FF5722'
  },
  [MonsterType.PLANT]: {
    imageUrl: '/energie/EnergiePlante.png',
    color: 'rgb(93, 251, 93)'
  },
  [MonsterType.Water]: {
    imageUrl: '/energie/EnergieEau.png',
    color: '#2196F3'
  },
    [MonsterType.ACIER]: {
        imageUrl: '/energie/EnergieMetal.png',
        color: 'rgb(192, 209, 209)'
    }
};