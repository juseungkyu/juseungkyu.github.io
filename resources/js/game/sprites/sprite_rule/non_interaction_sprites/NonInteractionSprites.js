// hitBoxType에 nonIgnoreConflicts를 무조건 포함시킴

import Sprites from "../Sprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

// 충돌 처리가 없는 요소
export default class NonInteractionSprites extends Sprites {
    constructor(x,y, animationImageList, size){
        super(x,y, [], HitBoxType.nonIgnoreConflicts, animationImageList, size)

        this.type.push('NonInteractionSprites')
    }
}