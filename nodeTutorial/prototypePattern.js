class Car {
  constructor({name = 'myCar'} = {}) {
    this.name = name
  }

  drive() {
    console.log(`${this.name} drive` )
  }

  breakDown() {
    console.log(`${this.name} break`)
  }
}


class AbstractFactory {
  constructor() {
    this.types = {}
  }

  getVehicle(type, options) {
    const Vehicle = this.types[type]
    return Vehicle ? new Vehicle(options) : null
  } 

  registerVehicle(type, Vehicle) {
    const proto = Vehicle.prototype
    if (proto.drive && proto.breakDown) {
      this.types[type] = Vehicle
    }
    return this;
  }
}

const VehicleFactory = new AbstractFactory()
console.log(VehicleFactory.registerVehicle('car', Car))
const car1 = VehicleFactory.getVehicle('car', {name : 'junhjeon`s car'})
const car2 = VehicleFactory.getVehicle('car')

console.log(car1)
console.log(car2)
