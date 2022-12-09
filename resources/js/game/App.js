import Engine from "./engine/Engine.js";
import UserControlHelper from "./control/UserControlHelper.js"

import DefaultMap from "./map/state1/DefaultMap.js";

import Miku1 from "./sprites/application_object/miku/Miku1.js";
import Wall1 from "./sprites/application_object/wall/Wall1.js";


class App {
    constructor() {
        console.log('app start')
        
        const miku = new Miku1()
        pushUnitList(miku, miku.y)

        // 유저의 입력을 받기 시작함       
        this.user = new UserControlHelper(miku)

        // 게임 엔진 시작 시작
        this.engine = new Engine()
    }
}

window.imageObject = {}

window.addEventListener('load', async ()=>{
    await initGameImage()
	new App()
})

async function initGameImage(){

    // 이미지 로딩
    const imageUrls = [
    '/resources/image/test.png', 
    '/resources/image/test2.png', 

    '/resources/image/miku/mikuStandTemporary1.png',
    '/resources/image/miku/mikuStandTemporary3.png',
    '/resources/image/miku/mikuStandTemporary4.png',
    '/resources/image/miku/mikuStandTemporary5.png',
    '/resources/image/miku/mikuStandTemporary6.png',
    '/resources/image/miku/mikuStandTemporary7.png',

    '/resources/image/miku/move/mikuStandTemporaryBehind1.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind2.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind3.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind4.png',

    '/resources/image/enemy/crab/crab1.png',
    '/resources/image/enemy/crab/crab2.png',
    '/resources/image/enemy/crab/crab3.png',
    '/resources/image/enemy/crab/crab4.png',

    '/resources/image/enemy/turret/turret.png',

    '/resources/image/enemy/seastar/seastar1.png',
    '/resources/image/enemy/seastar/seastar2.png ',
    '/resources/image/enemy/seastar/seastar3.png ',
    '/resources/image/enemy/seastar/seastar4.png ',


    '/resources/image/enemy/bubble/bubble.png ',
    '/resources/image/enemy/bubble/bubbleBaby.png ',

    '/resources/image/terrain/center_wall1.png',
    '/resources/image/terrain/left_wall1.png',
    '/resources/image/terrain/right_wall1.png',
    '/resources/image/terrain/box1.png',
    '/resources/image/terrain/invisibleBox.png',
    

    '/resources/image/background/sprite0002.png',
    
    '/resources/image/background/background1_1.png',
    '/resources/image/background/background2_1.png',
    '/resources/image/background/background2_2.png',
    '/resources/image/background/explainingTile1.png',

    '/resources/image/background/edgeWalls/doorclose.png',
    '/resources/image/background/edgeWalls/edgeWall1_downside.png',
    '/resources/image/background/edgeWalls/edgeWall1_left.png',
    '/resources/image/background/edgeWalls/edgeWall1_right.png',
    '/resources/image/background/edgeWalls/edgeWall1_upside.png',
    '/resources/image/background/edgeWalls/close/doorleft1.png',
    '/resources/image/background/edgeWalls/close/doorleft2.png',
    '/resources/image/background/edgeWalls/close/doorleft3.png',
    '/resources/image/background/edgeWalls/open/doorright1.png',
    '/resources/image/background/edgeWalls/open/doorright2.png',
    '/resources/image/background/edgeWalls/open/doorright3.png',

    '/resources/image/effect/disappearBullet/disappearBullet1.png',
    '/resources/image/effect/disappearBullet/disappearBullet2.png',
    '/resources/image/effect/disappearBullet/disappearBullet3.png',
    '/resources/image/effect/disappearBullet/disappearBullet4.png',
    '/resources/image/effect/disappearBullet/disappearBullet5.png',
    '/resources/image/effect/disappearBullet/disappearBullet6.png',
    '/resources/image/effect/disappearBullet/disappearBullet7.png',

    '/resources/image/enemy/hermitCrab/greenCrab1.png ',
    '/resources/image/enemy/hermitCrab/greenCrab2.png ',
    '/resources/image/enemy/hermitCrab/greenCrab3.png ',
    '/resources/image/enemy/hermitCrab/greenCrab4.png ',
    '/resources/image/enemy/hermitCrab/right.png ',
    '/resources/image/enemy/hermitCrab/left.png ',
    
    ]

    await imageSetting(imageUrls);
}