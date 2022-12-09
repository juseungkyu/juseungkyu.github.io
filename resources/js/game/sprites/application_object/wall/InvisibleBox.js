import Terrain from "../../sprite_rule/interaction_sprites/terrain/Terrain.js"
import Collision from "../../sprite_rule/Collision.js"

// 지형 - 투명벽
export default class InvisibleBox extends Terrain {
    constructor(x, y){
        super(x, y, [new Collision([{x:-16, y:-32}, {x:16, y:0}])], 
        {
            'default' : [window.imageObject.InvisibleBox]
        }, [32, 48])
    }
}