import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromancersInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._necromancersInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._necromancersInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
