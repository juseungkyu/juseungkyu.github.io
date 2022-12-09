import Enemy from "../../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js"
import Collision from "../../../sprite_rule/Collision.js";

export default class TestBossBody extends Enemy {
    constructor(x,y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.crab1, 
                            window.imageObject.crab2, 
                            window.imageObject.crab3, 
                            window.imageObject.crab4],
                'die' : [window.imageObject.crab1, 
                             window.imageObject.crab2, 
                             window.imageObject.crab3, 
                             window.imageObject.crab4],
            }, 
            20, 0, 0, [50, 50]
        )

        this.type.push('BossChild')
    }

    
}