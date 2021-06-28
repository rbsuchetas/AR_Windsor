
import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";
import Expo from "expo";
//import * as THREE from "three";
import { THREE } from "expo-three";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
//import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";

function ArModel({ route, navigation }) {
  const { clicked } = route.params;
  const [nameOfFood, setNameOfFood] = useState(clicked);

  return (
    <View style={styles.container}>
      <Text>This is the {route.params.title} page</Text>
    </View>

  );
}

export default class App extends Component {
  render() {
    return (
      <GLView style={{ flex: 1 }} onContextCreate={this._onGLContextCreate} />
    );
  }
  _onGLContextCreate = async (gl) => {
    var model;
    // 1. Scene

    const asset = Asset.fromModule(require("./Models/Food.glb"));
    await asset.downloadAsync();

    var scene = new THREE.Scene();
    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    // 3. Renderer
    const renderer = new Renderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    var light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(0, 1, 3);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      asset.localUri,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
      },
      function (xhr) {},
      function (error) {}
    );
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    camera.position.z = 2;
    camera.position.y = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
       model.rotation.y += 0.004;
      }
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#F5FCFF",
  }
});
