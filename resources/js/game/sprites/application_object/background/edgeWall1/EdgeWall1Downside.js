import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class EdgeWall1Downside extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.edgeWall1_downside]}, [1024, 32])
    }
} 