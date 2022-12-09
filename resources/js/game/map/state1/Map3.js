// 필요한 객체 임포트

import Map from '../Map.js';

import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';

import Box1 from '../../sprites/application_object/wall/Box1.js';
import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import Slime2 from '../../sprites/application_object/enemy/Slime2.js';

export default class Map3 extends Map {
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


        const units = []
        let a = 15
        let b = 13
        sprites.push(new Box1(...this.gridhelper(4, 11)))
        sprites.push(new Box1(...this.gridhelper(4, 12)))
        sprites.push(new Box1(...this.gridhelper(4, 13)))
        sprites.push(new Box1(...this.gridhelper(4, 14)))
        sprites.push(new Box1(...this.gridhelper(4, 15)))

        sprites.push(new Box1(...this.gridhelper(27, 11)))
        sprites.push(new Box1(...this.gridhelper(27, 12)))
        sprites.push(new Box1(...this.gridhelper(27, 13)))
        sprites.push(new Box1(...this.gridhelper(27, 14)))
        sprites.push(new Box1(...this.gridhelper(27, 15)))

        sprites.push(new Box1(...this.gridhelper(13, 4)))
        sprites.push(new Box1(...this.gridhelper(14, 4)))
        sprites.push(new Box1(...this.gridhelper(15, 4)))
        sprites.push(new Box1(...this.gridhelper(16, 4)))
        sprites.push(new Box1(...this.gridhelper(17, 4)))

        sprites.push(new Box1(...this.gridhelper(13, 21)))
        sprites.push(new Box1(...this.gridhelper(14, 21)))
        sprites.push(new Box1(...this.gridhelper(15, 21)))
        sprites.push(new Box1(...this.gridhelper(16, 21)))
        sprites.push(new Box1(...this.gridhelper(17, 21)))



        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprates.push(new Box1(...thas.gradhelper(a, b)))
        // sprbtes.push(new Box1(...thbs.grbdhelper(a, b)))
        // sprctes.push(new Box1(...thcs.grcdhelper(a, b)))
        
        // 유닛 추가

        units.push(new Slime2(...this.gridhelper(a-1,b),true))
        units.push(new Slime2(...this.gridhelper(a+1,b),false))

        this.init(background, sprites, units)
        //background.push(new EdgeWall1(...this.backgroundGridhelper(0, 0, 64)))
    }
}