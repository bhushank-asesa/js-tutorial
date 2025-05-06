# Decorator

> Decorators in JavaScript are a proposed language feature (currently in stage 3 of the TC39 process) that allow you to attach behavior to classes, methods, fields, or accessors in a declarative way.

> They act like annotations or wrappers, often used for meta-programming, similar to decorators in Python or annotations in Java.

## Basic Idea:

### A decorator is a function that is applied to something like:

* a class

* a class method

* a property

* or an accessor

## Syntax Example (with class):

```js
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class MyClass {
    constructor() {}
}
```

* @sealed is a decorator applied to MyClass.

* It makes the class and its prototype immutable.

## Use Cases:

* Logging

* Memoization

* Validation

* Dependency Injection

* Access control

* Defining metadata (e.g., in frameworks like Angular or NestJS)

## Decorator for a Method:

```js
function log(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {

        console.log(`Calling ${propertyKey} with`, args);
        return original.apply(this, args);

    };
    return descriptor;
}

class Calculator {
    @log
    add(a, b) {
        return a + b;

    }
}

const calc = new Calculator();
calc.add(2, 3); // Logs: Calling add with [2, 3]
```

## Important Notes:

> Not part of standard JavaScript yet, but supported in TypeScript and via Babel plugins.

> Cannot be used in regular JS unless transpiled.

> Works only in class-based code.

## Summary

* Decorators are functions prefixed with @, used to modify or enhance class declarations or members.

* They're mainly used for meta-programming.

* Available in TypeScript and some frameworks (like NestJS, Angular).
