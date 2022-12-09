// 필요한 객체 임포트

import Map from '../Map.js';
import Tile1 from '../../sprites/application_object/background/tile/Tile1.js';
import CenterWall1 from '../../sprites/application_object/wall/wall1/CenterWall1.js';
import LeftWall1 from '../../sprites/application_object/wall/wall1/LeftWall1.js';
import RightWall1 from '../../sprites/application_object/wall/wall1/RightWall1.js';

import Slime from '../../sprites/application_object/enemy/Slime.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';

// 지금은 사용하지 않는 클래스
// 지금은 사용하지 않는 클래스
// 지금은 사용하지 않는 클래스
// 지금은 사용하지 않는 클래스
// 지금은 사용하지 않는 클래스
// 지금은 사용하지 않는 클래스
export default class DefaultMap extends Map {
    constructor() {
        super()

        const background = []

        for(let j = 0; j < 7; j++){
            for(let i = 0; i < 8; i++){
                background.push(new Tile1(i*128, j*128))
            }
        }

        const sprites = []

        for(let i = 0; i < 32; i++){
            sprites.push(new CenterWall1(...this.gridhelper(i, 0)))
            sprites.push(new CenterWall1(...this.gridhelper(i, 24)))
        }

        for(let i = 1; i < 24; i++){
            sprites.push(new RightWall1(...this.gridhelper(0, i)))
            sprites.push(new LeftWall1(...this.gridhelper(31, i)))
        }

        sprites.push(new CenterWall1(...this.gridhelper(10, 15)))
        sprites.push(new CenterWall1(...this.gridhelper(11, 15)))
        sprites.push(new CenterWall1(...this.gridhelper(12, 15)))
        sprites.push(new CenterWall1(...this.gridhelper(12, 16)))

        const units = []
        
        units.push(new Slime(...this.gridhelper(20, 20)))
        units.push(new Crab(...this.gridhelper(10, 10)))
        this.init(background, sprites, units)
    }
}