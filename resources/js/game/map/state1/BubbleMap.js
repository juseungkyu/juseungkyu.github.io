// 필요한 객체 임포트

import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';

import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import Bubble from '../../sprites/application_object/enemy/Bubble.js';

// 게거품 보스가 나오는 맵
export default class DefaultMap extends Map {
    constructor() {
        super()
        
        // 배경 설정
        const background = []

        for(let j = 0; j < 1024 / 64; j++){
            for(let i = 0; i < 800 / 64; i++){
                if(Math.round(Math.random() * 7) == 0){
                    background.push(new Background2_2(...this.backgroundGridhelper(j, i, 64)))
                } else {
                    background.push(new Background2_1(...this.backgroundGridhelper(j, i, 64)))
                }
            }
        }
        
        // 지형 설정
        const sprites = []
        
        for(let i = 0; i < 32; i++){
            sprites.push(new InvisibleBox(...this.gridhelper(i, 0)))
            sprites.push(new InvisibleBox(...this.gridhelper(i, 1)))
            sprites.push(new InvisibleBox(...this.gridhelper(i, 24)))
        }

        for(let i = 1; i < 24; i++){
            sprites.push(new InvisibleBox(...this.gridhelper(1, i)))
            sprites.push(new InvisibleBox(...this.gridhelper(30, i)))
        }
        
        // 유닛 설정
        const units = []
        units.push(new Bubble(...this.gridhelper(23, 15)))
        

        this.init(background, sprites, units)
    }        
}