import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

// 불가사리 업고 있는 게
export default class Seastar extends Enemy {
    a = Math.floor(Math.random() * (60 - 1)) + 1
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.seastar1, 
                            window.imageObject.seastar2,
                            window.imageObject.seastar3, 
                            window.imageObject.seastar4],
                'die' : [window.imageObject.seastar1, 
                    window.imageObject.seastar2,
                    window.imageObject.seastar3, 
                    window.imageObject.seastar4],
            }, 
            20, 3, 1000, [50, 50])

        // 플레이어 따라오면서 총알 쏨
        this.setDirectionTimer = setInterval(() => {
            const x = (this.x - window.playerSprite.x) > 0 ? -1 : 1
            const y = (this.y - window.playerSprite.y) > 0 ? -1 : 1
            this.a++
            this.changeDirection(x, y)
            const x2 = window.playerSprite.x - this.x
            const y2 = window.playerSprite.y - this.y
            if(this.a > 200){
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x2, y2]), this.y - 15)
                this.a = 1
            }
            
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}