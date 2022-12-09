// hitBoxType에 nonpass를 무조건 포함시킴 + nonIgnoreConflicts
import InteractionSprites from "../InteractionSprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

// 지형
export default class Terrain extends InteractionSprites {
    constructor(x,y,collisionList, animationImageList, size){
        super(x,y,collisionList, HitBoxType.nonpass, animationImageList, size)
        this.type.push('Terrain')
    }
}