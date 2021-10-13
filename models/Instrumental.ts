export default class Instrumental {
    InstrId: number
    InstrName:string
    InstrCode: string
    InstrSpeciality: string
    InstrBatch: string
    InstrRfidCode: string
    InstrImageUrl: string
    InstrAppUser: string

    constructor(InstrId: number, InstrName : string, InstrCode: string, InstrSpeciality : string, InstrBatch : string, InstrRfidCode: string, InstrImageUrl: string, InstrAppUser: string) {
        this.InstrId = InstrId
        this.InstrName = InstrName
        this.InstrCode = InstrCode
        this.InstrSpeciality = InstrSpeciality
        this.InstrBatch = InstrBatch
        this.InstrRfidCode = InstrRfidCode
        this.InstrImageUrl = InstrImageUrl
        this.InstrAppUser = InstrAppUser
    }
}