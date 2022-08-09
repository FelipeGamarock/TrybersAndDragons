import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfIntances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addElf();
  }

  private static addElf() {
    this._elfIntances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._elfIntances;
  }
}