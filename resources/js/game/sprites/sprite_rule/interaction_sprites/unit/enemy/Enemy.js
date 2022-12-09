import Unit from "../Unit.js";
import DefaultValue from "../../../../../../constant/DefaultValue.js";

// 적
export default class Enemy extends Unit {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('Enemy')
    }

    // 충돌시 실행
    onCollisionEnter = (sprite, collision)=>{
        if(sprite.type.includes('FriendlyBullet')){
            this.underAttack(sprite)
        }
        this.customOnCollisionEnter(sprite, collision)
    }

    // 공격 받았을 시 실행 (플레이어 탄환가 접촉)
    underAttack = (sprite)=>{
        this.hp -= sprite.damage
        this.isHit = true

        // 맞은 효과 
        clearTimeout(this.noHitTimer)
        clearTimeout(this.hitTimer)

        this.hitTimer = setTimeout(()=>{
            this.isHit = false
        }, DefaultValue.hitAnimationTime) 

        // hp가 0이면 사망
        if(this.hp <= 0){
            this.die()
        }
    }
    
    // 죽었을때 처리
    die = () => {
        this.animationTypeChange('die')
        this.stopMoving()
        this.xForce = 0
        this.yForce = 0
        this.isNoHitTime = true
        this.isDie = true

        setTimeout(()=>{
            this.deleted = true
        }, 500)

        this.custemReset.bind(this)()

        if(this.myInterval){
            this.intervalClear(this.myInterval)
        }
    }

    // 돌아가고 있는 인터벌 클리어
    intervalClear(list) {
        for(let interval of list){
            clearInterval(interval)
        }
    }

    // 죽었을때 실행 되는 추상 메소드
    custemReset() {
        
    }
}