interface CoffeTopping {
    charge: number;
}

interface BaseEspresso {
    cost: number;
    getCost: () => number;
}

class Espresso implements BaseEspresso {
    cost: number;
    constructor () {
        this.cost = 500
    }

    getCost() {
        return this.cost;
    }
}

class Sugar extends Espresso implements CoffeTopping {
    charge = 50;

    constructor(espresso: Espresso) {
        super();
        this.cost = espresso.getCost() + this.charge
    }
}

class Syrup extends Espresso implements CoffeTopping {
    charge = 100;
    
    constructor(espresso: Espresso) {
        super();
        this.cost = espresso.getCost() + this.charge
    }
}

const coffe = new Espresso()
const sugarCoffe = new Sugar(coffe)
const syrupCoffe = new Syrup(coffe)
const ssCoffe = new Syrup(new Sugar(coffe))
const doubleSyrupCoffe = new Syrup(syrupCoffe)

console.log(doubleSyrupCoffe.getCost())
console.log(ssCoffe.getCost())
console.log(sugarCoffe.getCost())
console.log(syrupCoffe.getCost())