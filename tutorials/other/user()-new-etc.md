# Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'

> these three expressions might look similar but they behave quite differently. Here's a breakdown of each:

## function User() { }

### Definition

* This is a function declaration. It defines a function named User. Depending on how it’s written, it can act as:

* A constructor when used with new (like new User()), or

* A regular function when called directly (User()).

> It's just the definition — it doesn't run anything by itself.

## var user = User(); 

> Function Invocation (without new)

* This calls the User() function without the new keyword.

* If User() contains a return statement, the result is assigned to user.

* If User() sets this (like this.name = "John"; ), it won’t behave as expected, because this refers to the global object (or undefined in strict mode), not a new instance.

* Not an instance of User.

```js
function User() {
    this.name = "John";
}
var user = User(); // Calls the function
console.log(user); // undefined (no return)
console.log(name); // "John" — added to global scope (bad)
```

## var user = new User(); 

> Constructor Invocation

### This uses the new keyword, which:

* Creates a new empty object.

* Sets the function’s this to point to that new object.

* Runs the function code.

* Returns the new object (unless a different object is returned explicitly).

### This is the correct way to create an instance of a constructor function.

```js
function User() {
    this.name = "John";
}
var user = new User();
console.log(user.name); // "John"
```

## Summary Table

|Expression|	Type|	Purpose|	this context|
|---|---|---|---|
|function User() {}	|Function declaration|	Defines a function	|n/a|
|var user = User(); |Function call|	Calls User like a regular function|	window or undefined|
|var user = new User(); |	Constructor call|	Creates a new instance of User	|New object (this)|
