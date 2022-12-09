import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";

// 작은 게거품
export default class BubbleBaby extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.bubbleBaby],
                'die' : [window.imageObject.bubbleBaby],
            }, 

            3, 3, 1000, [50, 50])

        // 플레이어 따라옴
        this.setDirectionTimer = setInterval(() => {
            const x = (this.x - window.playerSprite.x) > 0 ? -1 : 1
            const y = (this.y - window.playerSprite.y) > 0 ? -1 : 1
            
            this.changeDirection(x, y)    
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}