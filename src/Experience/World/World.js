import { ParticleSystem, Cube } from './objects';

export class World {
  constructor(experience) {
    this.experience = experience;

    this.cube = new Cube(experience);
    this.particleSystem = new ParticleSystem(experience);
  }

  update(...arg) {
  }
}
