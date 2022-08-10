import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _magesInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._magesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._magesInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
