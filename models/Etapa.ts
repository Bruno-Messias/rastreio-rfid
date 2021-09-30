export default class Etapa {
    id: string
    nome: string
    quantidadeDeItens : number

    constructor(id: string, nome: string, quantidadeDeItens : number) {
        this.nome = nome
        this.id = id
        this.quantidadeDeItens = quantidadeDeItens
    }
}