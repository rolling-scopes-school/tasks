# Object-Oriented Programming

## Definition and basic principles

Object-oriented programming (OOP) is one of the most popular programming methodologies. In OOP scope program is considered as the set of objects performing different functions and interacting with each other. Objects are the instances of particular classes and classes in its turn create inheritance hierarchy.

Basic OOP principles:

- **Inheritance**
- **Encapsulation**
- **Polymorphism**

Occasionally **Abstraction** added as the fourth principle.

### Inheritance

As it has been mentioned earlier, classes form the inheritance hierarchy. Inheritance is the mechanism that lets define new class on the basis of already existed class with the addition of new properties and methods. New class is called the **subclass** or **child class** and class that was the basis for new class creation is the **superclass** or **parent class**. For example, there is parent class `Person`:

```ts
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const somePerson = new Person("John", 22);

somePerson.sayHi(); // Hello, my name is John!
```

It has properties (`name`, `age`) and method `sayHi`. Let's assume we want to create class Employee that should have same properties and methods that Person class has and besides that has additional property `salary`. Certainly we can create another class in a similar way:

```ts
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const somePerson = new Person("John", 22);

somePerson.sayHi(); // Hello, my name is John!

class Employee {
  public name: string;
  public age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const someEmployee = new Employee("Kumar", 33, 2500);

somePerson.sayHi(); // Hello, my name is Kumar!
```

However, this approach may lead to the code duplication that contradict the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle. Instead we can create `Employee` class using `Person` class for the **basis** :

```ts
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Contains properties and methods from Person + salary
class Employee extends Person {
  public salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
}

const someEmployee = new Employee("Kumar", 33, 2500);
someEmployee.sayHi(); // Hello, my name is Kumar!
```

In the example above Employee class inherits from Person class. The inheritance hierarchy could be much more complicated if required:

```ts
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Contains properties and methods from Person + salary
class Employee extends Person {
  public salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
}

// Contains properties and methods from Employee + department
class Manager extends Employee {
  public department: string;

  constructor(name: string, age: number, salary: number, department: string) {
    super(name, age, salary);
    this.department = department;
  }
}
```

### Encapsulation

In OOP for successful interaction between objects one group of objects doesn’t need (or it even can be harmful) to know about other objects group’s inner construction/state. The example from every day life is the microwave oven - it has complicated inner structure.
<img src="../images/microvawe-oven-inside.JPG" width="400" height="200" />  
If we want to use this oven without protective cover we can break it or get electrocuted. One doesn’t need to understand microwave’s construction and how it works in order to use microwave. It just provides us convenient and safe way of interaction - user interface.  
<img src="../images/microvawe-oven-interface.JPG" width="400" height="200" />  
Let’s take a look at Timer class as an example:

```ts
class Timer {
  private maxInterval: number;
  private minInterval: number;
  private currentTimer?: number;
  private interval?: number;
  private count: number;

  constructor(interval: number) {
    this.validateTimeout(interval);
    this.interval = interval;
    this.maxInterval = 1000;
    this.minInterval = 100;
    this.count = 1;
  }

  public start() {
    if (this.currentTimer) {
      console.log("Timer already started");
      return;
    }

    this.currentTimer = setInterval(() => {
      console.log(`Tick ${this.count++}`);
    }, this.interval);
  }

  public stop() {
    if (!this.currentTimer) {
      console.log("Timer already stopped");
      return;
    }

    this.clear();
  }

  public reset() {
    this.stop();
    this.start();
  }

  private clear() {
    clearInterval(this.currentTimer);
    this.count = 1;
    this.currentTimer = undefined;
  }

  private validateTimeout(timeout: number) {
    if (timeout < this.minInterval || timeout > this.maxInterval) {
      throw new Error(
        `Invalid interval! The allowed values are in the range from ${this.minInterval} to ${this.maxInterval}`,
      );
    }
  }
}
```

Class communicates with outer world via interface - outside it gets only `interval` value necessary for initialisation and provides public API for interaction - methods `start`, `stop` and `reset` which allow use that API.

```ts
const timer = new Timer(500);

timer.start();

timer.reset();

timer.stop();
```

At the same time it’s inner construction is not important and inner implementation details are not available outside.

### Polymorphism

The polymorphism principle in OOP lets us have a lot of variants of implementation of one and the same interface in child classes depending on the tasks being performed. E.g., we have **abstract** superclass `Transport`.

```ts
abstract class Transport {
  type: string;
  model: string;

  constructor(type: string, model: string) {
    this.type = type;
    this.model = model;
  }

  // Abstract method
  abstract move(): void;
}
```

We call it abstract because it contains abstract method `move` and doesn’t assume the creation of its instances directly.

```ts
const transport = new Transport("Car", "Porsche"); // Error
```

Abstract method `move` is not implemented for the class where it was described but it must be implemented for its not abstract children:

```ts
abstract class Transport {
    type: string;
    model: string;

    constructor(type: string, model: string) {
        this.type = type;
        this.model = model;
    }

    // Abstract method
    abstract move(): void;
}

class Car extends Transport {
    constructor(type: string, model: string) {
        super(type, model)
    }

    public move(): {
        console.log('Moving on the road');
    }
}

class Plane extends Transport {
    constructor(type: string, model: string) {
        super(type, model)
    }

    public move() {
        console.log('Flying in the sky');
    }
}

class Ship extends Transport {
    constructor(type: string, model: string) {
        super(type, model)
    }

    public move() {
        console.log('Moving on the water');
    }
}
```

As you might have noticed different types of transport have `move` method but each type implements it in its own way which is the manifestation of polymorphism.

### Abstraction

Abstraction principle in OOP means that each object is described with minimal number of properties and methods but with sufficient accuracy for the task to be solved. The fewer characteristics an object contains, the better the abstraction. As an example of abstraction we can consider the `Timer` class described above - it contains only the minimum public methods necessary for its functioning in the interface, and the unimportant details of their implementation are hidden inside and irrelevant for its use.
