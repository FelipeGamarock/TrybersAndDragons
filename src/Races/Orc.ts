import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcIntances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addOrc();
  }

  private static addOrc() {
    this._orcIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcIntances;
  }
}