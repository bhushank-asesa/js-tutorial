# Operator

## Why is it referred to as a "Ternary operator, " and what does the term "Ternary" signify? 

> the ternary operator is called that because it takes three operands—the word ternary literally means composed of three parts.

* Here's the syntax of the ternary operator:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

* condition → the first operand (a boolean expression)

* expressionIfTrue → the second operand

* expressionIfFalse → the third operand

```js
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"
```

### Why it's called "ternary":

* Most operators in programming are binary (e.g., +, -, *, etc.) because they operate on two operands. The ternary operator is one of the few that works with three, hence the name.
---
---
##  What is the difference between == and === in JavaScript?

* == and === are both comparison operators, but they behave differently:

### == (Equality operator – loose comparison)

* Compares values after converting types if necessary.

* Performs type coercion.

* Can give unexpected results due to automatic conversion.

### === (Strict equality operator – strict comparison)

* Compares both value and type.

* No type coercion.

* More predictable and safer to use.

### Example:

```js
'5' == 5 // true   (string '5' is converted to number 5)

    '5 ' === 5 // false  (different types: string !== number)

0 == false // true   (false is coerced to 0)
0 === false // false  (number !== boolean)

null == undefined // true  (special case in JS)
null === undefined // false
```

### Best Practice:

> Always prefer === (strict equality) unless you have a specific reason to use ==.
