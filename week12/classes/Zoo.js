class Animal {
    constructor(name , species ){
        this.name = name
        this.species = species
        this.lastFedTime = null
    }
    feed(){
        this.lastFedTime = new Date()
        console.log(`${this.name} has been fed.`)
    }
}
class Carnivore extends Animal {
    feed(){
        super.feed()
        console.log(`Feeding carnivore ${this.species} - meat served.`)
    }
}
class Herbivore extends Animal {
    feed(){
        super.feed()
        console.log(`Feeding herbivore ${this.species} - veggies served.`)
    }
}
class Zookeeper {
    constructor(){
        this.animals = []
    }
    addAnimal(animal){
        this.animals.push(animal)
    }
    feedAll(){
        this.animals.forEach((animal) => animal.feed() )
    }
    getLastFed(name){
        const animal = this.animals.find(a => a.name === name)
        return animal ? animal.lastFedTime : null
    }
    getBySpecies(species){
        return this.animals.filter(animal => animal.species === species)
    }
}

const zoo = new Zookeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.feedAll();
console.log(zoo.getLastFed("Simba"));
console.log(zoo.getLastFed("Longneck"));
