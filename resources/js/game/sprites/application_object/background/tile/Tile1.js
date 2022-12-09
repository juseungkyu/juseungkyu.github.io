import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class Tile1 extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.sprite0002]}, [128, 128])
    }
}