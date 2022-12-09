// hitbox 속성 관련 상수
// 사용법 : ignoreConflicts & square & directionalCollision & nonpass
//          라고 한다면 사각형이고 충돌 방향을 체크하여 지나가지지 않으며 
//          상호작용 되는 스프라이트의 히트박스이다.
export default class HitBoxType {
    static ignoreConflicts = 0b00000000
    static nonIgnoreConflicts = 0b00000001

    static square = 0b00000000
    static circle = 0b00000010

    static nonDirectionalCollision = 0b00000000
    static directionalCollision = 0b00000100

    static nonpass = 0b00000000
    static pass = 0b00001000
}