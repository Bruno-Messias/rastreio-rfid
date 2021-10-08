export default class Etapa {
    stageId: number
    stageWfId: number
    stageDescription : string

    constructor(stageId: number, stageWfId: number, stageDescription : string) {
        this.stageId = stageId
        this.stageWfId = stageWfId
        this.stageDescription = stageDescription
    }
}