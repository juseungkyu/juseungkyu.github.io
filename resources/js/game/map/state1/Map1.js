// 필요한 객체 임포트
import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';
import Box1 from '../../sprites/application_object/wall/Box1.js';
import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import Slime from '../../sprites/application_object/enemy/Slime.js';
import Seastaronly from '../../sprites/application_object/enemy/Seastaronly.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';
import Seastar from '../../sprites/application_object/enemy/Seastar.js';

// 타워형 적이 등장하는 맵
export default class Map1 extends Map {
    constructor() {
        super()

        // 백그라운드 설정
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

        let a = 10
        let b = 10
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a, b+2)))
        sprites.push(new Box1(...this.gridhelper(a, b+3)))
        sprites.push(new Box1(...this.gridhelper(a+1, b)))
        sprites.push(new Box1(...this.gridhelper(a+2, b)))
        sprites.push(new Box1(...this.gridhelper(a+3, b)))

        a = 5
        b = 5
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a, b+2)))
        sprites.push(new Box1(...this.gridhelper(a, b+3)))
        sprites.push(new Box1(...this.gridhelper(a+1, b)))
        sprites.push(new Box1(...this.gridhelper(a+2, b)))
        sprites.push(new Box1(...this.gridhelper(a+3, b)))

        a = 10
        b = 20
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b-1)))
        sprites.push(new Box1(...this.gridhelper(a, b-2)))
        sprites.push(new Box1(...this.gridhelper(a, b-3)))
        sprites.push(new Box1(...this.gridhelper(a+1, b)))
        sprites.push(new Box1(...this.gridhelper(a+2, b)))
        sprites.push(new Box1(...this.gridhelper(a+3, b)))

        a = 20
        b = 20
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b-1)))
        sprites.push(new Box1(...this.gridhelper(a, b-2)))
        sprites.push(new Box1(...this.gridhelper(a, b-3)))
        sprites.push(new Box1(...this.gridhelper(a-1, b)))
        sprites.push(new Box1(...this.gridhelper(a-2, b)))
        sprites.push(new Box1(...this.gridhelper(a-3, b)))

        a = 20
        b = 10
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a, b+2)))
        sprites.push(new Box1(...this.gridhelper(a, b+3)))
        sprites.push(new Box1(...this.gridhelper(a-1, b)))
        sprites.push(new Box1(...this.gridhelper(a-2, b)))
        sprites.push(new Box1(...this.gridhelper(a-3, b)))

        a = 25
        b = 5
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a, b+2)))
        sprites.push(new Box1(...this.gridhelper(a, b+3)))
        sprites.push(new Box1(...this.gridhelper(a-1, b)))
        sprites.push(new Box1(...this.gridhelper(a-2, b)))
        sprites.push(new Box1(...this.gridhelper(a-3, b)))

        
        // 유닛 설정

        const units = []
        
        units.push(new Slime(...this.gridhelper(15, 15)))
        units.push(new Seastaronly(...this.gridhelper(7, 7)))
        units.push(new Seastaronly(...this.gridhelper(23, 7)))
        units.push(new Crab(...this.gridhelper(15, 10)))
        units.push(new Seastar(...this.gridhelper(15, 11)))

        this.init(background, sprites, units)
    }
}