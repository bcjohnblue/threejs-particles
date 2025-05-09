import * as THREE from 'three';

export class Cube {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.BoxGeometry(3, 3, 3);
    this.material = new THREE.MeshBasicMaterial({ color: 'white' });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.experience.scene.add(this.mesh);
  }
}
