class Animal {
    constructor(name , species ){
        this.name = name
        this.species = species
        this.lastFedTime = ""
    }
    feed(){
        this.lastFedTime = new Date()
        console.log(`${this.name} has been fed.`)
    }
}
class Carnivore extends Animal {
    feed(){
        console.log(`Feeding carnivore ${this.species} - meat served.`)
    }
}
class Herbivore extends Animal {
    feed(){
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
        this.animals.forEach((animal) => animal.lastFedTime = new Date() )
    }
    getLastFed(name){
        const animal = this.animals.find(anima => anima.name === name)
        return animal.lastFedTime
    }
    getBySpecies(species){
        const index = this.animals.findIndex(animal => animal.species === species)
        return this.animals[index]
    }
}

const zoo = new Zookeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.feedAll();
console.log(zoo.getLastFed("Simba"));
console.log(zoo.getLastFed("Longneck"));