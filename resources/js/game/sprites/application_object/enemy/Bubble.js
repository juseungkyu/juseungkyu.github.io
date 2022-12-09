import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";
import BubbleBaby from "./BubbleBaby.js";

// 거품
export default class Bubble extends Enemy {
    constructor(x, y) {
        super(x, y,
            [new Collision([{ x: -35, y: -100 }, { x: 35, y: 0 }])],
            {
                'default': [window.imageObject.bubble],
                'die': [window.imageObject.bubble],
            },
            35, 20, 100, [100, 100])
        this.beforeShotTime = new Date().getTime() - 10000

        this.changeDirection(1, 0)
    }

    // 충돌 시
    customOnCollisionEnter = (sprite) => {
        if (!sprite.type.includes('Terrain')) {
            return
        }

        const currentTime = new Date().getTime()
        if (currentTime - this.beforeShotTime < 1000) {
            return
        }
        this.beforeShotTime = new Date().getTime()

        this.shot.bind(this)()

        // 방향 전환
        const diretion = this.getRandomDirection(this.x, this.y)

        this.changeDirection(diretion[0], diretion[1])
    }

    // 랜덤 방향
    getRandomDirection(currentX, currentY) {
        let y = Math.random() * 3 - 2
        let x = Math.random() * 3 - 2

        if (currentY - 200 < 0) {
            y = 1
        } else if (currentY + 200 < 800) {
            y = -1
        }

        if (currentX - 200 < 0) {
            x = 1
        } else if (currentX + 200 < 1024) {
            x = -1
        }

        if (y == 0 && x == 0) {
            return this.getRandomDirection(currentX, currentY)
        }

        return [x, y]
    }

    // 탄환 생성 알고리즘
    shot() {
        const x = this.x
        const y = this.y

        this.shotBullet(x, y)
        pushUnitList(new BubbleBaby(x, y), y)

        setTimeout(() => {
            this.shotBullet(x, y)
        }, 100);

        setTimeout(() => {
            this.shotBullet(x, y)
        }, 200);
    }

    // 탄환 생성
    shotBullet(x,y) {
        pushUnitList(new EnemyBullet1(x, y - 15, [5, 0]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [4, 1]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [3, 2]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [2, 3]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [1, 4]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [0, 5]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-1, 4]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-2, 3]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-3, 2]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-4, 1]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-5, 0]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [5, 0]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [4, -1]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [3, -2]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [2, -3]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [1, -4]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [0, -5]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-1, -4]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-2, -3]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-3, -2]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-4, -1]), y - 15)
        pushUnitList(new EnemyBullet1(x, y - 15, [-5, 0]), y - 15)
    }

    
    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}