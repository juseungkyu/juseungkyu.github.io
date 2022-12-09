// 전역변수 제어를 도와줌
window.unitList = new SpriteList(800)
window.spriteList = new SpriteList(800)
window.gameState = {
    'clear' : false,
    'level' : 0
}
window.openAnimation = false

// 게임 상황
function setClearState(value) {
    window.gameState.clear = value
}
function isClear() {
    return window.gameState.clear
}
function getLevel() {
    return window.gameState.level
}
function upLevel(){
    window.gameState.level++
}
function checkClear() {
    const list = getUnitList()

    for(let unit of list) {
        if(unit.type.includes('Enemy') || unit.type.includes('Boss')){

            setClearState(false)
            return
        }
    }

    setClearState(true)

    if(window.openAnimation){
        return
    }

    window.rightdoor.setAnimationSpeed(200)
    window.rightdoor.animationTypeChange('opening')
    window.openAnimation = true
    setTimeout(() => {
        window.rightdoor.animationTypeChange('open')
    }, 200*2);
}

// 유닛 리스트
function pushUnitList (sprite, y){
    window.unitList.push(sprite, y)
    pushSpriteList(sprite, y)
}

function swapUnitPoint (sprite, beforeY, newY){
    window.unitList.swap(sprite, beforeY, newY)
    swapSpritePoint(sprite, beforeY, newY)
}

function deleteUnitList (sprite, y){
    window.unitList.delete(sprite, y)
    deleteSpriteList(sprite, y)

    checkClear()
}

function getUnitList(){
    return window.unitList.getList()
}

function clearUnitList(){
    window.unitList.reset()
}

// 스프라이트 리스트
function pushSpriteList (sprite, y){
    window.spriteList.push(sprite, y)
}

function deleteSpriteList (sprite, y){
    window.spriteList.delete(sprite, y)
}

function swapSpritePoint (sprite, beforeY, newY){
    window.spriteList.swap(sprite, beforeY, newY)
}

function getSpriteList(){
    return window.spriteList.getList()
}

function clearSpriteList(){
    window.spriteList.reset()
}