// 벽, 문 이미지 임포트
import EdgeWall1Upside from '../sprites/application_object/background/edgeWall1/EdgeWall1Upside.js';
import EdgeWall1Right from '../sprites/application_object/background/edgeWall1/EdgeWall1Right.js';
import EdgeWall1Downside from '../sprites/application_object/background/edgeWall1/EdgeWall1Downside.js';
import EdgeWall1Left from '../sprites/application_object/background/edgeWall1/EdgeWall1Left.js';
import EdgeWall1DoorLeft from '../sprites/application_object/background/edgeWall1/EdgeWall1DoorLeft.js';
import EdgeWall1DoorRight from '../sprites/application_object/background/edgeWall1/EdgeWall1DoorRight.js';

// 맵 인터페이스 임포트
import Map from '../map/Map.js';

// 그래픽을 담당하는 세부 엔진
export default class GraphicControl {
    constructor() {
        this.init()
    }
    
    // 기본 설정
    init() {
        this.bufferCanvas = document.createElement('canvas')
        this.bufferCtx = this.bufferCanvas.getContext('2d')

        this.gameBox = document.querySelector('#gameBox')

        this.backgroundCtx = this.setCanvas(gameBox)
        this.ctx = this.setCanvas(gameBox)
        this.UICtx = this.setCanvas(gameBox)

        const map = new Map()

        window.leftdoor = new EdgeWall1DoorLeft(...map.backgroundGridhelper(0, 6, 64)),
        window.rightdoor = new EdgeWall1DoorRight(...map.backgroundGridhelper(15, 6, 64)),

        console.log(window.leftdoor)

        this.wallList = [
            new EdgeWall1Upside(...map.backgroundGridhelper(0, 0, 64)),
            new EdgeWall1Downside(...map.backgroundGridhelper(0, 12, 64)),
            new EdgeWall1Right(...map.backgroundGridhelper(15, 0, 64)),
            new EdgeWall1Left(...map.backgroundGridhelper(0, 0, 64)),
        ]
    }

    // 캔버스 생성
    setCanvas(gameBox) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        canvas.width = 1024
        canvas.height = 800

        gameBox.appendChild(canvas)

        return ctx
    }

    // 화면을 렌더링
    drawSprites = (time) => {
        const list = getSpriteList()
        
        // 스프라이트 렌더링
        this.ctx.clearRect(0,0, 1024, 800)
        for(let sprite of list){
            this.drawSprite.bind(this)(sprite, time)
            
            if(sprite.type.includes('Boss')){
                for(let enemy of sprite.enemyList){
                    this.drawSprite.bind(this)(enemy.sprite, time)
                }
            }
        }

        // 문 랜더링 (백그라운드에서 움직이는 건 문 밖에 없어서 따로)
        this.backgroundCtx.drawImage(window.rightdoor.image, window.rightdoor.x, window.rightdoor.y, window.rightdoor.size[0], window.rightdoor.size[1])
        this.backgroundCtx.drawImage(window.leftdoor.image, window.leftdoor.x, window.leftdoor.y, window.leftdoor.size[0], window.leftdoor.size[1])
    }

    // 스프라이트를 화면에 그려움
    drawSprite(sprite, time) {
        if(sprite.image){
            let image = sprite.image

            if(sprite.isHit){
                this.imageToHitImage.bind(this)(sprite.image)
                image = this.bufferCanvas
            }
            
            this.drawEffect.bind(this)(sprite, time)
            
            this.ctx.drawImage(image, sprite.x - sprite.size[0]/2, sprite.y - sprite.size[1], sprite.size[0], sprite.size[1])
        }
    }

    // 깜박이는 효과 등 여러가지 효과를 제어
    drawEffect(sprite, time) {
        if(sprite.isNoHitTime){
            sprite.isAlphaTime += parseInt(time)
            
            if(sprite.isAlphaTime > 100) {
                this.ctx.globalAlpha = 0.5;
                
                if(sprite.isAlphaTime > 200){
                    sprite.isAlphaTime = 0
                }
            } else {
                this.ctx.globalAlpha = 0.1;
            }
        } else {
            this.ctx.globalAlpha = 1;
        }
    }

    // 맵이 로딩될때 백그라운드를 그려줌
    drawMap = (map)=>{
        this.backgroundCtx.clearRect(0,0, 1024, 800)

        for(let background of map.background){
            this.backgroundCtx.drawImage(background.image, background.x, background.y, background.size[0], background.size[1])
        }
        for(let wall of this.wallList){
            this.backgroundCtx.drawImage(wall.image, wall.x, wall.y, wall.size[0], wall.size[1])
        }

        window.leftdoor.setAnimationSpeed(200)
        window.leftdoor.animationTypeChange('closing')
        window.rightdoor.animationTypeChange('default')
        window.openAnimation = false

        setTimeout(() => {
            window.leftdoor.animationTypeChange('close')
        }, 200*2);
    }

    // 이미지 붉게 바꾸기 (피격시 효과)
    imageToHitImage (image){
        const w = image.width
        const h = image.height
        const imageData = image.getContext('2d').getImageData(0,0,w,h)

        let color = 0;

        for(let i = 0; i < imageData.data.length; i++){
            if(color == 0){
                imageData.data[i] = imageData.data[i] + 100 > 255 ? 255 : imageData.data[i] + 100 
            } else if(color < 3){
                imageData.data[i] = imageData.data[i] -100 < 0 ? 0 : imageData.data[i] -100 
            }
            
            // imageData.data[i] = 255

            color++

            if(color >= 4){
                color = 0
            }
        }

        this.bufferCanvas.width = w
        this.bufferCanvas.height = h

        this.bufferCtx.putImageData(imageData,0,0)
    }
}