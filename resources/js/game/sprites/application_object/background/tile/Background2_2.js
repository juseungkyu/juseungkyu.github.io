import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class Background2_2 extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.background2_2]}, [64, 64])
    }
}