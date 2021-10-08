export default class Etapa {
    stageID: number
    stageWfId: number
    stageDescription : string
    quantidadeDeItens: number

    constructor(stageID: number, stageWfId: number, stageDescription : string) {
        this.stageID = stageID
        this.stageWfId = stageWfId
        this.stageDescription = stageDescription
        this.quantidadeDeItens = 10
    }
}