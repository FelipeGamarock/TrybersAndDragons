import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _rangersInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._rangersInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._rangersInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
