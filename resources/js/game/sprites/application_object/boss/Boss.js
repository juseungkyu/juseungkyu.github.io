// 스프라이트 여러개가 합쳐져서 1개의 보스가 됨
// enemyList = [{
//    'x' : -10,
//    'y' : 30
//    'sprite' : new Enemy()
// }]

import Unit from "../../sprite_rule/interaction_sprites/unit/Unit.js"
import Collision from "../../sprite_rule/Collision.js"

// 보스 인터페이스(추상클래스에 가까움)
export default class Boss extends Unit{
    constructor(x,y, enemyList, speed, maxSpeed){
        super(x,y,
            [new Collision([{x:-20, y:-40}, {x:20, y:0}])],
            {
                'default' : [window.imageObject.test]
            }, 10000, speed, maxSpeed, [1, 1]
        )

        this.type.push('Boss')

        this.x = x
        this.y = y
        this.enemyList = enemyList
        for(let enemy of this.enemyList){
            enemy.sprite.custemReset = () => {
                this.checkBossDie(this)
            }
        }
    }

    // 모든 보스 부위가 죽었는지 확인하고 보스를 제거
    checkBossDie = (dieSprite)=>{

        for(let enemy of this.enemyList){
            if(!enemy.sprite.isDie){
                return
            }
        }
        
        setTimeout(()=>{
            this.deleted = true
        }, 500)

        this.stopMoving()
        this.custemReset.bind(this)()
    }
}