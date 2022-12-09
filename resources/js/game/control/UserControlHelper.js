// 입력 가능 키 리스트
const INPUT_ABLE_KEY = [
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'ArrowLeft',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
]

// 플레이어의 입력을 돕는 클래스
export default class UserControlHelper {

    // 생성자
    constructor(playerSprite) {
        this.sprite = playerSprite
        this.sprite.setAnimationSpeed(300)
        window.playerSprite = playerSprite

        this.init()
    }

    // 기본 설정
    init() {
        this.inputKey = {}
        this.readKeyInput.bind(this)()

        this.pressingKeyEvent = setInterval(this.onInput.bind(this), 50);
    }

    // 키 이벤트 설정
    readKeyInput() {
        // 키 다운 시 입력하고 있는 키에 추가
        window.addEventListener('keydown', (e) => {
            if (!INPUT_ABLE_KEY.includes(e.code)) {
                return
            }

            e.preventDefault()

            this.inputKey[e.code] = true
            this.onInputChange.bind(this)()
        })

        // 키업 시 입력하고 있는 키에서 제거
        window.addEventListener("keyup", (e) => {
            if (e.code == 'Space' && isClear()
                && this.sprite.x > 900
                && this.sprite.y > 370
                && this.sprite.y < 470) {
                window.nextStage()
            }

            delete this.inputKey[e.code]
            this.onInputChange.bind(this)()
        });
    }

    // 일정 시간마다 입력 키를 확인하여 입력 실행
    onInput() {
        const x = this.inputKey['KeyD'] ? 1 : (this.inputKey['KeyA'] ? -1 : 0)
        const y = this.inputKey['KeyW'] ? -1 : (this.inputKey['KeyS'] ? 1 : 0)

        if (x != 0 || y != 0) {
            this.sprite.attack(x, y)
        }
    }

    // 입력하고 있는 키가 변경 될때마다 호출되는 함수
    onInputChange() {
        const x = this.inputKey['ArrowRight'] ? 1 : (this.inputKey['ArrowLeft'] ? -1 : 0)
        const y = this.inputKey['ArrowUp'] ? -1 : (this.inputKey['ArrowDown'] ? 1 : 0)

        if (x === 0 && y === 0) {
            
            this.sprite.animationTypeChange('default')
            this.sprite.stopMoving()
        } else {
            this.setAnimationDirection.bind(this)(x, y)

            this.sprite.changeDirection(x, y)
        }
    }

    // 이동방향에 따른 플레이어 애니메이션 설정
    setAnimationDirection(x, y) {
        let animationType = 'default'

        if (x > 0 && y === 0){
            animationType = 'moveRight'
        } else if(x < 0 && y === 0){
            animationType = 'moveLeft'
        } else if (y < 0) {
            animationType = 'moveUp'
        }

        if(this.sprite.animationType === animationType){
            return
        }

        this.sprite.animationTypeChange(animationType)
    }
}