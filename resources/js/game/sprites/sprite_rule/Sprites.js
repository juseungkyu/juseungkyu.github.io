// x : x좌표
// y : y좌표

// hitBoxType : 히트박스 종류
// type : 자신의 종류 (플레이어라면 InteractionSprites->Unit->Friendly)

// animationImageList = {
//     'default' : [await getImage('url'), getImage('url')],
//     'move' : [await getImage('url'), getImage('url')],
// }
// animationspeed : 애니메이션 스피드 (ms)

import DefaultValue from '../../../constant/DefaultValue.js';

// 스프라이트 클래스 거의 모든 클래스가 상속
export default class Sprites {
    constructor(x,y, collisionList, hitBoxType, animationImageList, size){
        this.x = x
        this.y = y
        this.size = size
        this.collisionList = collisionList
        
        this.isAlphaTime = 0
        
        for(let x of this.collisionList) {
            x.setSprite(this)
        }

        this.hitBoxType = hitBoxType
        this.animationImageList = animationImageList
        this.animationspeed = 200

        this.type = []

        this.image = DefaultValue.DEFAULT_IMAGE

        this.animationInit()
    }

    // 애니메이션 실행 속도 설정
    setAnimationSpeed = (animationspeed)=>{
        this.animationspeed = animationspeed
    }

    // 애니메이션 설정
    animationInit() {
        this.animationTypeChange('default')
    }

    // 지정된 애니메이션의 다음 이미지로 변경
    imageChange() {
        this.animationIndex++

        if(this.animationIndex >= this.currentAnimation.length) {
            this.animationIndex = 0
        }
        
        this.image = this.currentAnimation[this.animationIndex]
        
        this.animationTimer = setTimeout(this.imageChange.bind(this), this.animationspeed);
    }

    // 애니메이션 상태를 변경
    animationTypeChange = (type)=>{
        clearTimeout(this.animationTimer)
        
        this.animationType = type
        
        this.animationIndex = 0
    	this.currentAnimation = this.animationImageList[type]
        
        if(this.currentAnimation.length <= 1) {
        	this.image = this.currentAnimation[this.animationIndex]
        	return
        }
        
        this.imageChange.bind(this)();
    }
}