export default abstract class Race {
  private static _racesInstances = 0;

  constructor(private _name: string, private _dexterity: number) {
    Race.addRaces();
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): string {
    return this.dexterity;
  }

  private static addRaces() {
    this._racesInstances += 1;
  }

  static get createdRacesInstances():number {
    throw new Error('Not implemented'); 
  }

  abstract get maxLifePoints():number;
}