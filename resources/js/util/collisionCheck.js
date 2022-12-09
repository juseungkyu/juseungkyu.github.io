// 루트(x^2 + y^2)로 거리 구하기
function getDistance(spA, spB){
    return Math.sqrt(Math.pow(Math.abs(spA.x - spB.x), 2) + Math.pow(Math.abs(spA.y - spB.y), 2))
}

// x축 힘, y축 힘을 계산하여 진짜 힘(속도)를 계산함
function getForce(speedX, speedY){
    return Math.sqrt(Math.pow(Math.abs(speedX), 2) + Math.pow(Math.abs(speedY), 2))
}