import { AppState } from "../AppState.js";

export class PlayersController {
    constructor(){
        console.log(AppState.players)
        this.drawPlayers()
    }

    drawPlayers(){
        let content = ''
        AppState.players.forEach(player => {
            content+= player.cardTemplate
        })
        document.getElementById('players').innerHTML = content 
    }

    scorePoint(){
        console.log('clicked')
        
    }

}
