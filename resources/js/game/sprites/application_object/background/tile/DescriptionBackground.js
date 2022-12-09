import Background from "../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class DescriptionBackground extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.explainingTile1]}, [1024, 800])
    }
}