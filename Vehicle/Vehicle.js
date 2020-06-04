
class Engine{
    constructor (cc, gasType) {
        this.cc = cc;
        this.gasType = gasType;
    }
    getCc() {
        return this.cc;
    }
    getGasType() {
        return this.gasType;
    }
}

class Vehicle extends Engine{
    constructor (type, numberOfWheels, size, cc, gasType) {
        super(cc, gasType);
        this.type = type;
        this.wheels = numberOfWheels;
        this.size = size;
        this.Engine = Engine;
    }
    getType(){
        return this.type;
    }
    getWheels(){
        return this.wheels;
    }
    getSize(){
        return this.size;
    }
}


class Car extends Vehicle{
    constructor (name, size, cc, gasType) {
        super('car', '4', size, cc, gasType)
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Motorbike extends Vehicle{
    constructor(name, size, cc, gasType) {
        super('motorbike', '2', size, cc, gasType)
        this.name=name;
    }
    getName(){
        return this.name;
    }
}