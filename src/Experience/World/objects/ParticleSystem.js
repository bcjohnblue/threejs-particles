import * as THREE from 'three';

export class ParticleSystem {
  constructor(experience) {
    this.experience = experience;
    this.scene = experience.scene;
    this.count = 5000;

    this.setGeometry();
    this.setMaterial();
    this.setPoints();
  }

  setGeometry() {
    this.geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);

    for (let i = 0; i < this.count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }

  setMaterial() {
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('/textures/particles/2.png');

    this.material = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      color: new THREE.Color('#ff88cc'),
      transparent: true,
      alphaMap: particleTexture,
      // alphaTest: 0.01,
      // depthTest: false,
      depthWrite: false,
    });
  }

  setPoints() {
    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }
}
