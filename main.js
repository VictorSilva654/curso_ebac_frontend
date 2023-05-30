//Classe pai
function Veiculo(modelo, qtd_rodas, montadora, chassi){
    this.modelo = modelo;
    this.qtd_rodas = qtd_rodas;
    this.montadora = montadora;
    let _chassi = chassi;

    //getters e setters do chassi, por que deve-se dificultar o acesso ao chassi
    this.setChassi = function(chassi){
        _chassi = chassi;
    }

    this.getChassi = function(){
        return _chassi;
    }

    this.fazerBarulho = function(){
        return "Vruuuummmmmmmm";
    }
}

//Classe filha 01
function Carro(motor, carroceria, modelo, qtd_rodas, montadora, chassi){
    this.motor = motor;
    this.carroceria = carroceria;

    Veiculo.call(this, modelo, qtd_rodas, montadora, chassi);
}

//classe filha 02
function Moto(cc, modelo, qtd_rodas, montadora, chassi){
    this.cc = cc;

    Veiculo.call(this, modelo, qtd_rodas, montadora, chassi);

    //exemplo de poliformismo
    this.fazerBarulho = function() {
        return "Randandandandan";
    }
}

//instâncias

console.log("Teste do carro 1:")
const carro1 = new Carro("1.0", "Hatch", "Fox", 4, "VW", 7678665767567);
console.log(carro1.fazerBarulho());

console.log("Teste do carro 2:")
const carro2 = new Carro("2.4", "Sedan", "Sonata", 4, "Hyundai", 4845875217);
console.log(carro2.getChassi());
carro2.setChassi(1154145154754);
console.log(carro2.getChassi());

console.log("Teste da moto:")
const moto1 = new Moto("1200", "Tiger", 2, "Triumph", 48154575152751);
console.log(moto1.fazerBarulho());