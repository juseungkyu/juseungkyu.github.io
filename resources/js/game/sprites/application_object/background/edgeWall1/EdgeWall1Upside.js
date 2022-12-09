import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class EdgeWall1Upside extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.edgeWall1_upside]}, [1024, 64])
    }
} 