import Terrain from "../../../sprite_rule/interaction_sprites/terrain/Terrain.js"
import Collision from "../../../sprite_rule/Collision.js"

// 이제 안씀
export default class RightWall1 extends Terrain {
    constructor(x,y){
        super(x, y, 
        	[new Collision([{x:-16, y:-32}, {x:16, y:0}])], 
        	{
        	    'default' : [window.imageObject.right_wall1],
        	}, 
        	[32, 48]
		)
    }
}