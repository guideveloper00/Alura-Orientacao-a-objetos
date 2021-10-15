import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    cliente;



    _saldo = 150;

    set cliente(info){
        if(info instanceof Cliente){
            this.cliente = info
        }
    }

    get cliente(){
        return this.cliente
    }

    get saldo(){
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    saque(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }
    deposito(valor){
        if(valor > 0){
            this._saldo += valor
        }
    }

    transferir(valor, conta){
        const valorSacado = this.saque(valor)
        conta.deposito(valorSacado)
    }
}