import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  private static _archetypeIntances = 0;

  constructor(private _name: string) {
    Archetype._archetypeIntances += 1;
  }

  get name(): string {
    return this.name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}
