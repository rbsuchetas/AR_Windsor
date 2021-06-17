import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { Renderer, TextureLoader } from 'expo-three';
import * as React from 'react';
import {
    AmbientLight,
    BoxBufferGeometry,
    Fog,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SpotLight,
} from 'three';

export default function TestAr() {
    let timeout;

    React.useEffect(() => {
        // Clear the animation loop when the component unmounts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <GLView
            style={{ flex: 1 }}
            onContextCreate={async (gl) => {
                const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
                const sceneColor = 0x6ad6f0;

                // Create a WebGLRenderer without a DOM element
                const renderer = new Renderer({ gl });
                renderer.setSize(width, height);
                renderer.setClearColor(sceneColor);

                const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
                camera.position.set(2, 5, 5);

                const scene = new Scene();
                scene.fog = new Fog(sceneColor, 1, 10000);
                scene.add(new GridHelper(10, 10));

                const ambientLight = new AmbientLight(0x101010);
                scene.add(ambientLight);

                const pointLight = new PointLight(0xffffff, 2, 1000, 1);
                pointLight.position.set(0, 200, 200);
                scene.add(pointLight);

                const spotLight = new SpotLight(0xffffff, 0.5);
                spotLight.position.set(0, 500, 100);
                spotLight.lookAt(scene.position);
                scene.add(spotLight);

                const cube = new IconMesh();
                scene.add(cube);

                camera.lookAt(cube.position);

                function update() {
                    cube.rotation.y += 0.05;
                    cube.rotation.x += 0.025;
                }

                // Setup an animation loop
                const render = () => {
                    timeout = requestAnimationFrame(render);
                    update();
                    renderer.render(scene, camera);
                    gl.endFrameEXP();
                };
                render();
            }}
        />
    );
}

class IconMesh extends Mesh {
    constructor() {
        super(
            new BoxBufferGeometry(1.0, 1.0, 1.0),
            new MeshStandardMaterial({
                map: new TextureLoader().load(require('../../assets/icon.png')),
                // color: 0xff0000
            })
        );
    }
}

// import Expo from "expo";
// import React, { Component } from "react";
// import * as THREE from "three";
// import ExpoTHREE from "expo-three"

// export default class TestAr extends Component {

//     _onGLContextCreate = async (gl) => {
//         // Here is where we will define our scene, camera and renderer
//         // 1. Scene
//         var scene = new THREE.Scene();
//         // 2. Camera
//         const camera = new THREE.PerspectiveCamera(
//             75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
//         // 3. Renderer
//         const renderer = ExpoTHREE.createRenderer({ gl });
//         renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//         // Define our shape (Below is a tetrahedron, but can be whatever)
//         const geometry = new THREE.TetrahedronBufferGeometry(0.1, 0)
//         // Define the material, Below is material with hex color #00ff00
//         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//         or
//         // For custom material of any image, simply download any image into your project and use:
//         // Define the full 3-D object
//         const objectToRender = new THREE.Mesh(geometry, material);
//         // Specifying the cameras Z position will allow the object to appear in front of the camera rather that in line (which the camera which is the default)
//         camera.position.z = 2;

//         scene.add(objectToRender);

//         const animate = () => {
//             requestAnimationFrame(render);
//             mesh.rotation.x += 0.01;
//             mesh.rotation.y += 0.01;
//             renderer.render(scene, camera);
//             gl.endFrameEXP();
//         };
//         render();
//     };

//     render() {
//         return (
//             <Expo.GLView
//                 style={{ flex: 1 }}
//                 onContextCreate={this._onGLContextCreate} />
//         )
//     }
// }

