import Enemy from "./Enemy.js";

export default class EnemyBullet extends Enemy {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size, distance){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('EnemyBullet')
        this.type.push('Bullet')

        // x축 힘과 y축 힘을 합했을때 maxSpeed가 되도록 비율을 구해줌
        const ratio = maxSpeed / getForce(Math.abs(distance[0]), Math.abs(distance[1]))

        // 스피드 조절
        this.xForce = ratio * distance[0]
        this.yForce = ratio * distance[1]  
    }

    // 충돌 시 처리
    onCollisionEnter = (sprite, collision)=>{
        if(this.deleted) {
            return
        }
        if(sprite.type.includes('Enemy')){
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

    // 이펙트와 함께 크기를 바꾸고 싶을 때 실행할 수 있는 추상 메소드
    setEffectSize (){

    }
}