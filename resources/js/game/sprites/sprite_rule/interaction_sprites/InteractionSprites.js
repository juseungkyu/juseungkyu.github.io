// 이 클래스는 유니티 따라함
// hitBoxType에 nonIgnoreConflicts를 무조건 포함시킴
import Sprites from "../Sprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class InteractionSprites extends Sprites {
    constructor(x,y,collisionList, hitBoxType, animationImageList, size ){
        super(x,y,collisionList, hitBoxType|HitBoxType.IgnoreConflicts, animationImageList, size)

        this.type.push('InteractionSprites')
    }

    // 충돌 시 처리
    onCollisionEnter = (sprite, collision)=>{
        this.customOnCollisionEnter(sprite, collision)
    }
    
    customOnCollisionEnter = (obj)=>{

    }
}