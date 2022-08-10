import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warriorsInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._warriorsInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._warriorsInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
