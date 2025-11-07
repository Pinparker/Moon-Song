import { gui } from "../common/gui";
import { scene, THREE } from "../common/main";
import { createAxisStars } from "../components/axis-stars";
import { createCircle } from "../components/circle/createCircle";
import { createRingItem } from "../components/ring-item/createRingItem";
import { createStarRing } from "../components/star-ring";

import RingItemPathSatellite from "@assets/item/satellite.png";
import CirclePathA from "@assets/circle/circle-A.png";
import CirclePathB from "@assets/circle/circle-B.png";
import CirclePathC from "@assets/circle/circle-C.png";
import CirclePathD from "@assets/circle/circle-D.png";
import CirclePathF from "@assets/circle/circle-F.png";
import CirclePathG from "@assets/circle/circle-G.png";

const ringItem1 = createRingItem(RingItemPathSatellite, {
    circleSize: 0.95,
    xPosition: 1.45,
    yPosition: 0,
    rotationSpeed: 0.05,
    opacity: 1.0,
});

const ringItem2 = createRingItem(CirclePathF, {
    circleSize: 1.25,
    xPosition: 1.1,
    yPosition: -1.9,
    rotationSpeed: 0.05,
    opacity: 0.4,
});

const startRing1 = createStarRing("star-ring1",{
    innerRadius: 0.57,
    outerRadius: 0.9,
    opacity: 0.8,
});

const startRing2 = createStarRing("star-ring2",{
    innerRadius: 1.12,
    outerRadius: 1.35,
    opacity: 0.6,
});

const startRing3 = createStarRing("star-ring3",{
    innerRadius: 1.5,
    outerRadius: 2.3,
    starCounts: 5000,
    opacity: 0.5,
});

const startRing4 = createStarRing("star-ring4",{
    innerRadius: 2.2,
    outerRadius: 3.0,
    starCounts: 5000,
    opacity: 0.6,
});

const circle1 = createCircle(CirclePathA, "星环1", {
    circleSize: 2.4,
    rotationSpeed: 0.05,
    opacity: 1.0,
});

const circle2 = createCircle(CirclePathG, "星环2", {
    circleSize: 3.9,
    rotationSpeed: 0.1,
    opacity: 1.0,
});

const circle3 = createCircle(CirclePathC, "星环3", {
    circleSize: 4.5,
    rotationSpeed: -0.08,
    opacity: 1.0,
});

const circle4 = createCircle(CirclePathB, "星环4", {
    circleSize: 4.5,
    rotationSpeed: -0.08,
    opacity: 1.0,
});

const circle5 = createCircle(CirclePathD, "星环5", {
    circleSize: 5.5,
    rotationSpeed: -0.07,
    opacity: 0.8,
});

const axisStar = createAxisStars();

const galaxyGroup = new THREE.Group();

galaxyGroup.add(ringItem1);
galaxyGroup.add(ringItem2);
galaxyGroup.add(startRing1);
galaxyGroup.add(startRing2);
galaxyGroup.add(startRing3);
galaxyGroup.add(startRing4);
galaxyGroup.add(circle1);
galaxyGroup.add(circle2);
galaxyGroup.add(circle3);
galaxyGroup.add(circle4);
galaxyGroup.add(circle5);
galaxyGroup.add(axisStar);  // 轴向星点设置

// 添加到场景
scene.add(galaxyGroup);

// 创建 GUI 控制
const galaxyFolder = gui.addFolder("星系旋转控制");
galaxyGroup.rotation.x = -0.8;
galaxyGroup.rotation.y = -0.21;
galaxyGroup.rotation.z = -0.18;

galaxyFolder.add(galaxyGroup.rotation, "x", -Math.PI, Math.PI).name("X轴旋转");
galaxyFolder.add(galaxyGroup.rotation, "y", -Math.PI, Math.PI).name("Y轴旋转");
galaxyFolder.add(galaxyGroup.rotation, "z", -Math.PI, Math.PI).name("Z轴旋转");
galaxyFolder.close();
