# Template literals

## What They Are:

> Template literals are string literals enclosed by backticks (`) instead of the usual single quotes (') or double quotes (").

## Advantages:

### String Interpolation:

- You can embed expressions (like variables or function calls) directly within the string using the ${expression} syntax. This makes it much easier to create dynamic strings.

### Multiline Strings:

- You can create strings that span multiple lines in your code without needing special characters like \n. The line breaks in your code will be preserved in the string.

### Tagged Templates

- They allow you to process the template literal with a function. This opens up possibilities for advanced string manipulation and domain-specific languages.

## Example

### String Interpolation:

- Traditional way

```js
const name = "Alice";
const age = 30;
const greeting = "Hello, " + name + "! You are " + age + " years old.";
console.log(greeting); // Output: Hello, Alice! You are 30 years old.
```

- Using template literals:

```js
const name = "Alice";
const age = 30;
const greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // Output: Hello, Alice! You are 30 years old.
```

> Notice how much cleaner and easier to read the template literal is! You just place the variables inside ${} within the backticks. You can even embed more complex expressions:

```js
const price = 25;
const quantity = 3;
const total = `The total cost is $${price * quantity}.`;
console.log(total); // Output: The total cost is $75. 2.
```

### Multiline Strings:

- Traditional way (using \n):

```js
const poem =
  "The roses are red,\n" +
  "The violets are blue,\n" +
  "Sugar is sweet,\n" +
  "And so are you.";
console.log(poem);
/*_*
Output:
The roses are red,
The violets are blue,
Sugar is sweet,
And so are you.
*/
```

- Using template literals:

```js
const poem = `The roses are red,
The violets are blue,
Sugar is sweet,
And so are you.`;
console.log(poem);
/*
Output:
The roses are red,
The violets are blue,
Sugar is sweet,
And so are you.
*/
```

> With template literals, you can simply hit the Enter key to create new lines, and those line breaks will be included in the string. This makes it much easier to define multiline text like HTML snippets or poems directly in your code.

### Tagged Templates:

Tagged templates are a more advanced feature. They allow you to use a function to process the template literal. The function receives an array of the string parts and then the values of the expressions.

```js
function highlight(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += `<span class="highlight">${values[i]}</span>`;
    }
  }
  return result;
}

const name = "Bob";
const profession = "developer";
const message = highlight`Hello, ${name}! You are a ${profession}.`;

document.body.innerHTML = message;
// This would output: Hello, <span class="highlight">Bob</span>! You are a <span class="highlight">developer</span>.
```

---

> Template literals, using backticks (`), offer a more readable, flexible, and powerful way to work with strings in JavaScript compared to traditional single or double quotes. Their key benefits lie in easy string interpolation, straightforward multiline strings, and the advanced capability of tagged templates. They are a fundamental part of modern JavaScript development.
