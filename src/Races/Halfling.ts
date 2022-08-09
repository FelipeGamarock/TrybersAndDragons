import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingIntances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addHalfling();
  }

  private static addHalfling() {
    this._halflingIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflingIntances;
  }
}