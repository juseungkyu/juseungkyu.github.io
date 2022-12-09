import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js"
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

// 원래 슬라임 만드려고 했는데 터렛이 됨
export default class Slime2 extends Enemy {
    constructor(x,y, directionChecker){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.turret],
                'die' : [window.imageObject.turret],
            }, 
            20, 0, 0, [50, 50]
        )

        let i = 0;
        const shotControl = setInterval(() => {
            const x = Math.cos(toRadians(i));
            const y = Math.sin(toRadians(i));
            if(directionChecker==true){
                i -= 15
                i = i % 360
            } else {
                i += 15
                i = i % 360
            }
            

            pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x, y]), this.y - 15)
        }, 100)

        this.myInterval = [shotControl]
    }
}