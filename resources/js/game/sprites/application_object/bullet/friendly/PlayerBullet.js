// 피아식별 기능 추가

import FriendlyBullet from "../../../sprite_rule/interaction_sprites/unit/friendly/FriendlyBullet.js"
import Collision from "../../../sprite_rule/Collision.js"

export default class PlayerBullet extends FriendlyBullet {
    constructor(x,y, direction){
        super(x,y,
            [new Collision([{x:-5, y:-10}, {x:5, y:0}])],
            {
                'default' : [window.imageObject.test],
                'hit' : [
                    window.imageObject.disappearBullet1,
                    window.imageObject.disappearBullet2,
                    window.imageObject.disappearBullet3,
                    window.imageObject.disappearBullet4,
                    window.imageObject.disappearBullet5,
                    window.imageObject.disappearBullet6,
                    window.imageObject.disappearBullet7,
                ],
            },
            1, 
            10, 
            200, 
            [25, 25], 1
        )
        
        this.changeDirection(direction[0], direction[1]) 
    }

    setEffectSize(){
        this.setAnimationSpeed(50)
        this.size = [50, 50]
    }
}