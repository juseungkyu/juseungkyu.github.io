import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class EdgeWall1DoorRight extends Background {
    constructor(x, y) {
        super(x, y, {
            'default' : [window.imageObject.doorclose],
            'opening' : [window.imageObject.doorright1, 
                window.imageObject.doorright2,
                window.imageObject.doorright3],
            'open' : [window.imageObject.doorright3]
        }, [64, 112])
    }
} 