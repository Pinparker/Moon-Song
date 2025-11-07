import { scene, THREE } from "../common/main";
import { createBackground } from "../components/background";
import { createStarRing } from "../components/star-ring";
import { createMeteorBackground } from "../components/meteor-background";
import imagePathBgMain from '@assets/background/bg2.png'
import imagePath from '@assets/background/bg1.png'

createMeteorBackground(); // 流星设置

const bgMain = createBackground("画布背景",{
    brightness: 1.54,
    opacity: .32,
    positionX: 0.55,
    positionY: 2.08,
    positionZ: -10,
    scale: 20,
    rotationX: -0.45,
    rotationY: 0,
    rotationZ: 0,
    texture: imagePathBgMain
})
const bg2 = createBackground("外星环背景",{
    brightness: 2.,
    opacity: 1.,
    positionX: -0.22,
    positionY: 0.55,
    positionZ: -6.04,
    scale: 9.3,
    rotationX: -0.61,
    rotationY: -0.21,
    rotationZ: 0,
    texture: imagePath
});
const bg3 = createBackground("内星环背景",{
    brightness: 1.8,
    opacity: 0.6,
    positionX: -0.22,
    positionY: 0.55,
    positionZ: -6.04,
    scale: 5.5,
    rotationX: -0.61,
    rotationY: -0.21,
    rotationZ: 0,
    texture: imagePath
});
const starBackground = createStarRing("星星背景",{
    starCounts: 360,
    innerRadius:0.9,
    outerRadius:3.0,
    color: new THREE.Color(0xffffff),
});

scene.add(bgMain)
scene.add(bg2)
scene.add(bg3)
scene.add(starBackground)
