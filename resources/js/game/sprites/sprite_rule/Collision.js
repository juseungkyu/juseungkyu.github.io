// 분리초평면 뭐시기로 하다가 실패해서 걍 사각형으로 함
// vertexList = [{x:-50, y:-50}, {x:50, y:0}]
// 캔버스는 y좌표가 위쪽이 0임

// 히트박스
export default class Collision {
    constructor(vertexList){
        this.vertexList = vertexList
    }

    setSprite = (sprite)=>{
        this.sprite = sprite
    }

    getSprite = this.sprite
    getVertexList = this.vertexList
}