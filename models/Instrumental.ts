export default class Instrumental {
    id: string
    imageUrl:string
    nome: string
    codigo: string
    lote: string

    constructor(id: string, nome: string, imageUrl : string, codigo : string, lote : string) {
        this.id = id
        this.imageUrl = imageUrl
        this.nome = nome
        this.codigo = codigo
        this.lote = lote
    }
}