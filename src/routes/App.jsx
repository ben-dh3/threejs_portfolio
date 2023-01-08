import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { gsap } from 'gsap';
import '../App.css';
import Navbar from "./navbar";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {

  useEffect(() => { 
      
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.setZ(75);
    const canvas = document.getElementById('my-canvas');
    const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias:true,  
    });
    //renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color('#21282a'), 1);
    document.body.appendChild(renderer.domElement);
    //bloom
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1,
    0,
    0.85
    );
    bloomPass.bloomThreshold = 1;
    bloomPass.bloomStrength = 2;
    bloomPass.bloomRadius = 3;
    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);
    //controls
    const controls = new OrbitControls(camera, renderer.domElement); 
    const pointer = new THREE.Vector2();
    function onPointerMove( event ) {
    pointer.x =  ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y =  ( event.clientY / window.innerHeight ) * -2 + 1;
    };
    //light
    const ambientLight = new THREE.AmbientLight(0xffffff, 10); //color and intensity
    scene.add(ambientLight);
    //sphere
    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(15, 32, 16),
      new THREE.MeshStandardMaterial({ color: "#FDB813"})
    );
    //particles
    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 100;
    const posArray = new Float32Array(particlesCnt * 3);
    for(let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 150
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xabcdff
    })
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(sphere, particlesMesh);
    //
    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
    //animate
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      sphere.position.y = THREE.MathUtils.lerp(sphere.position.y, (pointer.y * Math.PI) / 0.2, 0.1);
      sphere.position.x = THREE.MathUtils.lerp(sphere.position.x, (pointer.x * Math.PI) / 0.2, 0.1);   
      particlesMesh.position.y = THREE.MathUtils.lerp(particlesMesh.position.y, (pointer.y * Math.PI) / 0.2, 0.1);
      particlesMesh.position.x = THREE.MathUtils.lerp(particlesMesh.position.x, (pointer.x * Math.PI) / 0.2, 0.1);
      particlesMesh.rotation.y = elapsedTime * -0.1;
      particlesMesh.rotation.x = elapsedTime * -0.02;
      //
      controls.update();
      renderer.render(scene, camera);
      bloomComposer.render(sphere);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener( 'pointermove', onPointerMove );
      window.requestAnimationFrame(animate);
      };
  
    animate();

   },[]);

  //gsap clip-path timeline
    
  const tl = gsap.timeline({paused: true, defaults: {delay: .5, duration: 1}})
  const body = document.querySelector('body')
 
  tl.to(body, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})

  tl.play();
  
  
  

 

  return (
    <div>
      <canvas id='my-canvas'></canvas> 
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
    </div>      
  )
}