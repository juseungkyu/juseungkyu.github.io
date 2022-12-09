// 설명서 참고

import Enemy from "../../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../../sprite_rule/Collision.js";

export default class GreenCrab extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-100, y:-130}, {x:100, y:20}])],
            {
                'default' : [window.imageObject.greenCrab1,
                            window.imageObject.greenCrab2,
                            window.imageObject.greenCrab3,
                            window.imageObject.greenCrab4],
                'die' : [window.imageObject.greenCrab1,
                        window.imageObject.greenCrab2,
                        window.imageObject.greenCrab3,
                        window.imageObject.greenCrab4],
            }, 
            70, 40, 100, [240, 160])

        this.isGreenCrab = true
    }

    custemReset() {
        
    }
}