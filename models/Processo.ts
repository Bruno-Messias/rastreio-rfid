export default class Processo {
    processId: number
    processStageId: number
    processName: string

    constructor(processId: number, processStageId: number, processName: string) {
        this.processId = processId
        this.processStageId = processStageId
        this.processName = processName
    }
}