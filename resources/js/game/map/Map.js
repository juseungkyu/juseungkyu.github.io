// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

// 맵의 인터페이스 (사실 추상클래스에 가까움)
export default class Map {
    // 생성자
    constructor() {
        this.background = []
        this.sprites = []
        this.units = []
    }

    // 맵에서 생성될 객체를 저장
    init = (background, sprites, units)=>{
        this.background = background
        this.sprites = sprites
        this.units = units
    }

    // 백그라운드 그리드 크기 표준을 제공
    backgroundGridhelper = (x,y, size=32)=>{
        return [x*size, y*size]
    }

    // 스프라이트 그리드 크기 표준을 제공
    gridhelper = (x,y, size=32)=>{
        return [x*size+size/2, y*size + size]
    }
}