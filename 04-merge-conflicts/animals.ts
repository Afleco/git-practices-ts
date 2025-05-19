abstract class Animal {
    private specie: Specie;
    private name: string;
    private age: number;
    private race: Race;

    constructor(specie: Specie, name: string, age: number, race: Race) {
        this.specie = specie;
        this.name = name;
        this.age = age;
        this.race = race;
    }

    public getSpecie(): string {
        return this.specie;
    }

    public setSpecie(specie: Specie): void {
        this.specie = specie;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getIsAggressive() {
        return this.race.isAggressive;
    }

    public setIsAggressive(isAggressive: boolean): void {
        this.race.isAggressive = isAggressive ? 'Yes' : 'No';
    }

    public getRace(): Race {
        return this.race;
    }

    public setRace(race: Race): void {
        this.race = race;
    }
    
    public abstract calculateHumanAge(age: number): number;
}

type Specie = 'Dog' | 'Cat' | 'Bird';

type pop = 'Yes' | 'No';

interface Race {
    name: string;
    isAggressive: pop;
}


class Dog extends Animal {
    constructor(name: string, age: number, race: Race) {
        super('Dog', name, age, race);
        if (race.isAggressive === 'Yes') {
            this.setIsAggressive(true);
        } else {
            this.setIsAggressive(false);
        }
    }

    public calculateHumanAge(age: number): number {
        return age * 7;
    }
    
}

class Cat extends Animal {
    constructor(name: string, age: number, raceName: string) {
        const race: Race = { name: raceName, isAggressive: 'No' };
        super('Cat', name, age, race);
    }

    public calculateHumanAge(age: number): number {
        return age * 8;
    }
}

class Bird extends Animal {
    constructor(name: string, age: number, raceName: string) {
        const race: Race = { name: raceName, isAggressive: 'No' };
        super('Bird', name, age, race);
    }

    public calculateHumanAge(age: number): number {
        return age * 4;
    }
}