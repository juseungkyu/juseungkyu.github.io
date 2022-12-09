import AjaxHelper from "./AjaxHelper.js"

// 랭킹 불러오는 클래스
export default class RankingView {
    constructor(){
        this.ajaxHelper = new AjaxHelper()
    }

    // 랭킹 추가
    add = async ()=>{
        console.log(`/addranking?score=${getLevel()}`)
        return await this.ajaxHelper.get(`/addranking?score=${getLevel()}`)
    }

    // 랭킹 불러오기
    view = async ()=>{
        return await this.ajaxHelper.get('/ranking')
    }
}