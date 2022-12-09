// hitBoxType에 pass를 무조건 포함시킴 + nonIgnoreConflicts
// 이것도 유니티 따라함.

import InteractionSprites from "../InteractionSprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

// 유닛
export default class Unit extends InteractionSprites {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, HitBoxType.pass, animationImageList, size)
        this.hp = hp
        this.speed = speed
        this.maxSpeed = maxSpeed 

        this.xForce = 0
        this.yForce = 0

        this.xDirection = 0
        this.yDriection = 0

        this.type.push('Unit')

        this.isMoving = true
        
        this.moveTimer = setInterval(this.move.bind(), 100)
        this.stopMoving()
    }

    // 힘을 주는 것을 멈춰서 조금 있다가 마찰로 멈추게 만듦
    stopMoving = ()=>{
        clearInterval(this.moveTimer)
        this.isMoving = false
    }

    // 움직이기 시작
    startMoving = ()=>{
        this.isMoving = true
        this.moveTimer = setInterval(this.move.bind(), 10)
    }

    // 힘을 주는 방향을 바꿈
    changeDirection = (x,y)=>{
        if(this.isDie){
            return
        }

        if(!this.isMoving){
            this.startMoving()
        }

        this.xDirection = x
        this.yDirection = y
    }

    // 이동 방향으로 힘 추가 (실제 움직임은 엔진에서)
    move = ()=>{
        this.xForce += this.speed * this.xDirection
        this.yForce += this.speed * this.yDirection
        
        const currentSpeed = getForce(this.xForce, this.yForce)

        if(currentSpeed >= this.maxSpeed) {
            const ratio = this.maxSpeed / currentSpeed 

            this.xForce *= ratio
            this.yForce *= ratio
        }
    }
}