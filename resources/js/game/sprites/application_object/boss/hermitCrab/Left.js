import Enemy from "../../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js"
import Collision from "../../../sprite_rule/Collision.js";
import EnemyBullet1 from "../../bullet/enemy/EnemyBullet.js";

// 보스의 왼쪽에서 탄막을 형성하는 적
export default class Left extends Enemy {
    constructor(x,y){
        super(x, y, 
            [new Collision([{x:-50, y:-75}, {x:50, y:25}])],
            {
                'default' : [window.imageObject.left],
                'die' : [window.imageObject.left],
            }, 
            13, 0, 0, [50, 50]
        )

        let i = 0;

        const shotControl = setInterval(() => {
            const x = Math.cos(toRadians(i));
            const y = Math.sin(toRadians(i));

            i += 15
            i = i % 360

            pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x, y]), this.y - 15)
        }, 100)

        this.myInterval = [shotControl]
    }
}