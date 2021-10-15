import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta.js";



const cliente1 = new Cliente("guilherme", 1111111111111);


const cliente2 = new Cliente("maria", 4564561523123);


const contaCorrente1 = new ContaCorrente(2163546456, cliente1);

const conta2 = new ContaCorrente(15153123, cliente2)


const dinheiro = 200;


contaCorrente1.deposito(500)
contaCorrente1.transferir(dinheiro, conta2)




console.log(ContaCorrente.numeroDeContas)

