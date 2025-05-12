abstract class Animal {
    private specie: Specie;
    private name: String;
    private age: number;
    private isAggressive: boolean;
    
    constructor(specie: Specie) {
        this.specie = specie;
    }

    public getSpecie(): string {
        return this.specie;
    }

    public setSpecie(specie: Specie): void {
        this.specie = specie;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String) {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getIsAggresive(isAggressive: boolean) {
        this.isAggressive = isAggressive;
    }
    
    public abstract calculateHumanAge(age: number): number;
}

type Specie = 'Dog' | 'Cat' | 'Bird';

class Dog extends Animal {
    public calculateHumanAge(age: number): number {
        return age * 7;
    }
}

class Cat extends Animal {
    public calculateHumanAge(age: number): number {
        return age * 8
    }
    
}

class Bird extends Animal {
    public calculateHumanAge(age: number): number {
        return age * 4;
    }

}