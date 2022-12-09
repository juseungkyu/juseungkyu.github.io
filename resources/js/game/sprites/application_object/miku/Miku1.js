import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";
import Collision from "../../sprite_rule/Collision.js";
import PlayerBullet from "../bullet/friendly/PlayerBullet.js";
import DefaultValue from "../../../../constant/DefaultValue.js";
import RankingView from "../../../../util/RankingView.js";

// 플레이어
export default class Miku1 extends Friendly {
    constructor() {
        super(400, 400,
            [new Collision([{ x: -10, y: -30 }, { x: 15, y: -15 }])],
            {
                'default': [window.imageObject.mikuStandTemporary1,
                window.imageObject.mikuStandTemporary3],
                'moveRight': [window.imageObject.mikuStandTemporaryBehind1,
                window.imageObject.mikuStandTemporaryBehind2,
                window.imageObject.mikuStandTemporaryBehind3,
                window.imageObject.mikuStandTemporaryBehind4,],
                'moveLeft': [window.imageObject.mikuStandTemporary4,
                    window.imageObject.mikuStandTemporary5,],
                'moveUp': [window.imageObject.mikuStandTemporary6,
                    window.imageObject.mikuStandTemporary7,],
                'hit': [window.imageObject.mikuStandTemporaryBehind1,
                window.imageObject.mikuStandTemporaryBehind2,
                window.imageObject.mikuStandTemporaryBehind3,
                window.imageObject.mikuStandTemporaryBehind4,],
                'die': [window.imageObject.mikuStandTemporary1,
                    window.imageObject.mikuStandTemporary3],
            },
            3, 8, 120, [50, 50])

        this.weaponCount = '∞'
        this.beforeAttackTime = 0
        this.rankingViewer = new RankingView();
    }

    // 공격 알고리즘
    attack = (x, y) => {
        if(this.isDie){
            return
        }
        
        const currentTime = new Date().getTime()

        if (currentTime - this.beforeAttackTime < DefaultValue.attackDelay) {
            return
        } 

        this.beforeAttackTime = currentTime

        
        pushUnitList(new PlayerBullet(this.x, this.y - 15, [x, y]), this.y - 15)
        
    }

    // 죽었을때 처리
    custemReset() {
        this.isDie = true
        const hitEffect = document.querySelector('.front-ground')

        setTimeout(async () => {
            hitEffect.style.transition = '5s'
            hitEffect.classList.add('active')
            hitEffect.style.opacity = '0.9'
        }, 1000);
        
        if(this.isAjaxRequest){
            return
        }

        this.isAjaxRequest = true


        const rankingupdate = async ()=>{
            // 데모 버젼이라 실행되지 않음
            
            // const table = window.rankingPopup.querySelector('tbody')
            // table.innerHTML = ''
            // if(!window.isBasic){
            //     window.rankingPopup.querySelector('h2').innerHTML = `내 점수 : ${getLevel()} (보스 모드에서는 순위를 매기지 않습니다.)`
            //     window.rankingPopup.style="visibility: visible; opacity: 1"
            //     return
            // }


            // await this.rankingViewer.add()
            // const data = await this.rankingViewer.view()

            // clearUnitList()
            // clearSpriteList()

            // window.rankingPopup.querySelector('h2').innerHTML = `내 점수 : ${getLevel()}`

            // let i = 0
            // for(let x of data.data){
            //     i++

            //     if(i > 10){
            //         break
            //     }

            //     table.innerHTML += `
            //     <tr>
            //         <td>${i}</td>
            //         <td>${x.player_id}</td>
            //         <td>${x.score}</td>
            //         <td>${x.play_at}</td>
            //     </tr>
            //     `
            // }

            window.rankingPopup.style="visibility: visible; opacity: 1"
        }


        setTimeout(async () => {
            rankingupdate()
        }, 5000);
    }
}