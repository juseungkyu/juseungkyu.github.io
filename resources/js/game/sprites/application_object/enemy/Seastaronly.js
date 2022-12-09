import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

// 멈춰서 탄환만 발사하는 불가사리
export default class Seastaronly extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-20, y:-80}, {x:30, y:-30}])],
            {
                'default' : [window.imageObject.seastar1],
                'die' : [window.imageObject.seastar1],
            }, 
            5, 40, 100, [50, 50])

        // 탄환 발사
        const setDirectionTimer = setInterval(() => {
            for(let j = 0; j < 3; j++){
                setTimeout(() => {
                    const x = window.playerSprite.x - this.x
                    const y = window.playerSprite.y - this.y
                    pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x, y]), this.y - 15)
                }, j*100)
            }
        }, 3000);

        this.myInterval = [setDirectionTimer]
    }

    custemReset() {
        
    }
}