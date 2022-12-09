import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class EdgeWall1DoorLeft extends Background {
    constructor(x, y) {
        super(x, y, {
            'default' : [window.imageObject.doorleft1],
            'closing' : [window.imageObject.doorleft1, 
                window.imageObject.doorleft2,
                window.imageObject.doorleft3],
            'close' : [window.imageObject.doorclose]
        }, [64, 112])
    }
} 