export default class Workflow {
    workflowID: number
    wfHospitalId: string
    workflowDescription: string

    constructor(workflowID: number, wfHospitalId: string, workflowDescription: string) {
        this.workflowID = workflowID
        this.wfHospitalId = wfHospitalId
        this.workflowDescription = workflowDescription
    }
}