// 세부 엔진 임포트
import GraphicControl from './GraphicControl.js';
import Physics from './Physics.js';

// 맵 임포트
import Boss2 from '../map/state1/Boss2.js';
import BubbleMap from '../map/state1/BubbleMap.js';
import Map1 from '../map/state1/Map1.js';
import Map2 from '../map/state1/Map2.js';
import Map3 from '../map/state1/Map3.js';
import StartMap from '../map/state1/StartMap.js';
import TwoBubbleMap from '../map/state1/TwoBubbleMap.js';

export default class Engine {
    // 엔진 시작
    constructor() {
        this.basicPhysics = new Physics()
        this.graph = new GraphicControl()
        this.before = 0
        this.currentWeapon
        this.ui = document.querySelector('#play-state')

        window.rankingPopup = document.querySelector('.ranking-popup')
        window.requestAnimationFrame(this.frame.bind(this));

        this.hitEffect = document.querySelector('.front-ground')
        this.beforeHp = window.playerSprite.hp

        window.uiSettingFunc = this.uiSet
        window.uiSettingFunc()

        this.player1Img = document.querySelector('#player1')
        this.player2Img = document.querySelector('#player2')
        this.player3Img = document.querySelector('#player3')
        this.player4Img = document.querySelector('#player4')
        document.querySelector('#miku').innerHTML = ``
        document.querySelector('#miku').appendChild(this.player1Img)

        this.gameSelect()
        
        this.beforeMap = [0, 1]
    }

    // 게임 모드 선택
    gameSelect() {
        const basicMode = document.querySelector('.basic-mode')
        const bossMode = document.querySelector('.boss-mode')

        this.isStart = false

        basicMode.addEventListener('click', this.setBasicMode.bind(this))
        bossMode.addEventListener('click', this.setBossMode.bind(this))
    }
    
    getRandom = (number=5) => {
    	// 무작위로 맵 설정 걍 랜덤 돌리면 똑같은거 나오길래 복잡하게 함
        const r = Math.floor(Math.random() * number)
        
        // 중복 제거
        if(this.beforeMap.includes(r)){
        	return this.getRandom(number)
        }
        
        return r
    }

    // 다음 스테이지 이동
    nextStage = () => { }

    // 기본 모드 설정
    setBasicMode() {
        if (this.isStart) {
            return
        }

        this.isStart = true

        this.gameStart = () => {
            window.isBasic = true
            this.setMap(new StartMap())
        }

        this.nextStage = () => {
            clearUnitList()
            clearSpriteList()

//          랜덤
            const r = this.getRandom()
            
            this.beforeMap.push(r)
            this.beforeMap.splice(0, 1)
            
            let map = null
            switch (r) {
                case 0:
                    map = new Boss2()
                    break;
                case 1:
                    map = new BubbleMap()
                    break;
                case 2:
                    map = new Map1()
                    break;
                case 3:
                    map = new Map2()
                    break;
                case 4:
                    map = new Map3()
                    break;
                default:
                    map = new TwoBubbleMap()
                    break;
            }
            //map = new Boss2()
            setClearState(false)
            this.setMap(map)
        }

        window.nextStage = this.nextStage
        this.gameStart()

        document.querySelector('.select-game').style.display = 'none'
    }

    // 보스 모드 설정
    setBossMode() {
        if (this.isStart) {
            return
        }

        this.isStart = true

        this.gameStart = () => {
            this.setMap(new StartMap())
        }

        this.beforeMap = [0]

        this.nextStage = () => {
            clearUnitList()
            clearSpriteList()

            const r = this.getRandom(2)
            
            this.beforeMap.push(r)
            this.beforeMap.splice(0, 1)

            let map = null

            switch (r) {
                case 0:
                    map = new BubbleMap()
                    break;
                default:
                    map = new Boss2()
                    break;
            }

            setClearState(false)
            this.setMap(map)
        }

        window.nextStage = this.nextStage
        this.gameStart()

        document.querySelector('.select-game').style.display = 'none'
    }

    // ui 설정
    uiSet = () => {
        if (this.beforeHp !== window.playerSprite.hp && !window.playerSprite.isDie) {
            this.hitEffect.classList.add('active')

            setTimeout(() => {
                this.hitEffect.style.transition = '0.8s'
                this.hitEffect.classList.remove('active')
            }, 0);
            setTimeout(() => {
                this.hitEffect.style.transition = '0s'
            }, 800);


            //미쿠 쳐맞는 모션
            //1안
            document.querySelector('#miku').innerHTML = ``
            document.querySelector('#miku').appendChild(this.player4Img)

            // 2안 맞을 때 클로즈업
            // document.querySelector('#miku').innerHTML = `
            // <img src="./resources/image/player/4-2.png" alt="alt" title="image">
            // `


            if (window.playerSprite.hp == 3) {
                setTimeout(() => {
                    console.log("hp3 img print")
                    document.querySelector('#miku').innerHTML = ``
                    document.querySelector('#miku').appendChild(this.player1Img)
                }, 1000);
            } else if (window.playerSprite.hp == 2) {
                setTimeout(() => {
                    console.log("hp2 img print")
                    document.querySelector('#miku').innerHTML = ``
                    document.querySelector('#miku').appendChild(this.player2Img)
                }, 1000);
            } else if (window.playerSprite.hp == 1) {
                setTimeout(() => {
                    console.log("hp1 img print")
                    document.querySelector('#miku').innerHTML = ``
                    document.querySelector('#miku').appendChild(this.player3Img)
                }, 1000);
            }

        }

        this.beforeHp = window.playerSprite.hp

        let hp = ''

        for (let i = 0; i < window.playerSprite.hp; i++) {
            hp += '<div></div>'
        }

        this.ui.querySelector('.hp').innerHTML = `
            ${hp}
        `

        this.ui.querySelector('.count').innerHTML = `
            <span>${window.playerSprite.weaponCount} 발</span>
        `
    }

    // 한 프레임을 제어
    frame(timeStamp) {
        const time = timeStamp - this.before

        this.basicPhysics.moveControl(time)
        this.graph.drawSprites(time)

        this.before = timeStamp
        window.requestAnimationFrame(this.frame.bind(this));
    }

    // 파라미터로 받은 맵을 설정함
    setMap = (map) => {
        upLevel()
        this.ui.querySelector('.stage').innerHTML = `<span>${getLevel()}</span>`

        for (let sprite of map.sprites) {
            pushSpriteList(sprite, sprite.y)
        }

        for (let unit of map.units) {
            pushUnitList(unit, unit.y)
        }

        this.graph.drawMap(map)

        window.playerSprite.x = 80
        window.playerSprite.y = 420

        pushUnitList(window.playerSprite, window.playerSprite.y)
    }
}


