export class Player {
    constructor(name){
        this.name = name;
        this.score = 0
    }

    get cardTemplate(){
        return `
        <div class= 'col-4 bg-light rounded elevation-2'>
        ${this.name}
        <div>${this.score}</div>
        <button onclick = 'app.PlayersController.scorePoint('${this.name}') class = "bg-info">${this.score}</button>
        </div>
        `
    }




}
