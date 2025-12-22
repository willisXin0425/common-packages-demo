'use client';

import { useRef, useEffect, use } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function LightStreaks() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 場景與渲染器
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 相機
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 2.2);

    // 分佈參數
    const dummy = new THREE.Object3D();

    // 四向分佈：左 / 右 / 上 / 下
    const leftX = [-6.0, -2.2],
      rightX = [2.2, 6.0];
    const topY = [2.2, 6.0],
      bottomY = [-6.0, -2.2];
    const zRange = [-2000, -50];
    const thick = 10; // 牆面厚度

    // === 側邊光條 ===
    const STREAKS = 3000;
    const streakGeom = new THREE.BoxGeometry(0.08, 0.08, 3.6);
    const streakMat = new THREE.MeshBasicMaterial({
      color: 0x46a9ff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const streaks = new THREE.InstancedMesh(streakGeom, streakMat, STREAKS);
    streaks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(streaks);

    // 光條狀態
    const streakState = Array.from({ length: STREAKS }, () => {
      const p = spawnXY();
      return {
        x: p.x,
        y: p.y,
        z: rnd(...zRange),
        tilt: THREE.MathUtils.degToRad(rnd(-8, 8)),
        sway: rnd(-0.6, 0.6),
        len: rnd(2.4, 5.0),
      };
    });

    // === 光點 ===
    const LIGHTPOINTS = 5000;
    const pointGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(LIGHTPOINTS * 3);
    const texture = new THREE.TextureLoader().load(
      '/glow.png',
      function (texture) {
        console.log('✔ 已成功讀取:', texture.image.src);
      },
      undefined,
      (err) => {
        console.error('❌ 貼圖載入失敗：', err);
      },
    ); // 粒子圖片

    for (let i = 0; i < LIGHTPOINTS; i++) {
      const p = spawnXY();
      const x = p.x;
      const y = p.y;
      const z = rnd(...zRange);
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    pointGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.3, // 點的大小
      sizeAttenuation: true, // 距離衰減
      transparent: true,
      opacity: 1.0,
      map: texture, // 使用圓形/光暈粒子
      blending: THREE.AdditiveBlending, // 加成混合做出發光效果
      depthWrite: false, // 讓光點不互相遮擋
    });

    const points = new THREE.Points(pointGeom, material);
    scene.add(points);

    function placeInstance(i) {
      const s = streakState[i];
      dummy.position.set(s.x, s.y, s.z);
      dummy.rotation.set(0, 0, s.tilt);
      dummy.scale.set(1, 1, s.len);
      dummy.updateMatrix();
      streaks.setMatrixAt(i, dummy.matrix);
    }

    for (let i = 0; i < STREAKS; i++) {
      placeInstance(i);
    }

    // 計時器
    const clock = new THREE.Clock();

    // 速度參數
    let speed = 60; // 當前速度
    const targetSpeed = 140; // 目標速度

    let pointSpeed = 10; // 當前速度
    const targetPointSpeed = 20; // 目標速度

    let rafId;

    function animate() {
      // 時間補償
      const dt = Math.min(clock.getDelta(), 0.033);

      // 調速
      speed += (targetSpeed - speed) * Math.min(1, dt * 5);
      pointSpeed += (targetPointSpeed - pointSpeed) * Math.min(1, dt * 5);

      // 光條推進與回收
      for (let i = 0; i < STREAKS; i++) {
        const s = streakState[i];
        s.z += speed * dt;
        s.x += Math.sin((performance.now() * 0.001 + i) * 1.4) * s.sway * dt;
        if (s.z > 8) {
          s.z -= 1400 + Math.random() * 80;
          const p = spawnXY();
          s.x = p.x;
          s.y = p.y;
          s.tilt = THREE.MathUtils.degToRad(rnd(-8, 8));
          s.sway = rnd(-0.6, 0.6);
          s.len = rnd(2.4, 5.0);
        }
        dummy.position.set(s.x, s.y, s.z);
        dummy.rotation.set(0, 0, s.tilt);
        dummy.scale.set(1, 1, s.len);
        dummy.updateMatrix();
        streaks.setMatrixAt(i, dummy.matrix);
      }

      // 光球推進與回收
      for (let i = 0; i < LIGHTPOINTS; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += pointSpeed * dt;
        if (positions[i3 + 2] > 8) {
          positions[i3 + 2] -= 1400 + Math.random() * 80;
        }
      }

      // 更新
      streaks.instanceMatrix.needsUpdate = true;
      pointGeom.attributes.position.needsUpdate = true;
    }

    function render() {
      animate();
      rafId = requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    render();

    function rnd(a, b) {
      return Math.random() * (b - a) + a;
    }

    function spawnXY() {
      const side = Math.floor(Math.random() * 4); // 0:left 1:right 2:top 3:bottom
      switch (side) {
        case 0:
          return { x: rnd(...leftX), y: rnd(-thick, thick) }; // 左牆，Y 有少量厚度
        case 1:
          return { x: rnd(...rightX), y: rnd(-thick, thick) }; // 右牆
        case 2:
          return { x: rnd(-thick, thick), y: rnd(...topY) }; // 天花板，X 有少量厚度
        case 3:
          return { x: rnd(-thick, thick), y: rnd(...bottomY) }; // 地板
      }
    }

    // resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 2));
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);

      scene.remove(streaks); // 從場景移除
      scene.remove(points); // 從場景移除

      streaks.geometry.dispose(); // 釋放幾何資料
      pointGeom.dispose(); // 釋放幾何資料

      // InstancedMesh 可能共享同一材質到多實例，這裡只有一個，直接 dispose
      if (Array.isArray(streaks.material)) {
        streaks.material.forEach((m) => m.dispose());
      } else {
        streaks.material.dispose();
      } // 釋放材質
      material.dispose(); // 釋放材質

      texture.dispose(); // 釋放貼圖

      renderer.dispose();
      // 移除 canvas
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="h-screen"></div>;
}

export default LightStreaks;
