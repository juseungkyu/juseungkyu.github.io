import Friendly from "./Friendly.js";

export default class FriendlyBullet extends Friendly {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size, damage){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)
        this.damage = damage

        this.type.push('FriendlyBullet')
        this.type.push('Bullet')
    }

    // 충돌 시 처리
    onCollisionEnter = (sprite, collision)=>{
        if(this.deleted) {
            return
        }
        if(sprite.type.includes('Friendly')){
            return
        }
        if(sprite.type.includes('Boss')){
            return
        }
        if(sprite.type.includes('Bullet')){
            return
        }
        this.isNoHitTime = true
        this.animationTypeChange('hit')
        this.stopMoving()
        this.xForce = 0
        this.yForce = 0

        this.setEffectSize.bind(this)()

        setTimeout(()=>{
            this.deleted = true
        }, 500)
    }

    setEffectSize (){

    }
}