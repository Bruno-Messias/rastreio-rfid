export default class Instrumental {
    instrId: number
    instrName:string
    instrCode: string
    instrSpeciality: string
    instrBatch: string
    instrRfidCode: string
    instrImageUrl: string
    instrAppUser: string

    constructor(instrId: number, instrName : string, instrCode: string, instrSpeciality : string, instrBatch : string, instrRfidCode: string, instrImageUrl: string, instrAppUser: string) {
        this.instrId = instrId
        this.instrName = instrName
        this.instrCode = instrCode
        this.instrSpeciality = instrSpeciality
        this.instrBatch = instrBatch
        this.instrRfidCode = instrRfidCode
        this.instrImageUrl = instrImageUrl
        this.instrAppUser = instrAppUser
    }
}