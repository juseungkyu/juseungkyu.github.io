import Boss from "../Boss.js"
import Left from "./Left.js"
import Right from "./Right.js"
import GreenCrab from "./GreenCrab.js"

// 설명서 참고
export default class HermitCrab extends Boss {
    constructor(x, y) {
        super(x, y,
            [
                {
                    x: 0,
                    y: 0,
                    sprite: new GreenCrab(x + 0, y)
                },
                {
                    x: -70,
                    y: -70,
                    sprite: new Left(x - 70, y - 80)
                },
                {
                    x: 70,
                    y: -70,
                    sprite: new Right(x + 70, y - 80)
                },
            ], 3, 1000)

        const greenCrab = this.enemyList.find(x=>x.sprite.isGreenCrab)

        // 플레이어 방향으로 이동
        this.setDirectionTimer = setInterval(() => {
            if(greenCrab.sprite.isDie){
                this.speed = 0
                return
            }
            let playerX = window.playerSprite.x
            let playerY = window.playerSprite.y
            if(playerX>860){
                playerX = 860
            } else if(playerX<140){
                playerX = 140
            }
            
            if(playerY<210){
                playerY=210
            } else if(playerY > 760){
                playerY = 760
            }
            

            const x = (this.x - playerX) > 0 ? -1 : 1
            const y = (this.y - playerY) > 0 ? -1 : 1

            this.changeDirection(x, y)
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }
}