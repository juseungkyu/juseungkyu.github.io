import NonInteractionSprites from "../NonInteractionSprites.js";

// 백그라운드 
export default class Background extends NonInteractionSprites {
    constructor(x,y, animationImageList, size){
        super(x,y, animationImageList, size)

        this.type.push('Background')
    }
}