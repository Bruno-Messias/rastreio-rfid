export default class Tracking {
    trackingID: number
    instrumentalID: number
    stageID: number
    processID: number

    constructor(trackingID: number, instrumentalID: number, stageID: number, processID: number) {
        this.trackingID = trackingID
        this.instrumentalID = instrumentalID
        this.stageID = stageID
        this.processID = processID
    }
}