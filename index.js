import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
var loader = new GLTFLoader();
loader.load('assets\models\floorplan.glb', function (gtlf){scene.add(gtlf.scene)}, undefined, function(error){console.error(error)});
