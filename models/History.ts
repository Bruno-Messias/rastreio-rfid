export default class History{
    HistoryID : number
    InstrumentalID : number
    StageDesc : string
    ProcessDesc : string
    HistoryDate : string
    HistoryHour : string

    constructor(historyID : number, instrumentalID : number, stageDesc : string, processDesc : string, historyDate : string, historyHour : string){
        this.HistoryID = historyID
        this.InstrumentalID = instrumentalID
        this.StageDesc = stageDesc
        this.ProcessDesc = processDesc
        this.HistoryDate = historyDate
        this.HistoryHour = historyHour
    }
}