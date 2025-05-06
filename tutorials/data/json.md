# JSON

> JSON.parse() and JSON.stringify() are essential methods for working with JSON (JavaScript Object Notation), a lightweight data format used for storing and transporting data.

## JSON.stringify()

* **Purpose:** Converts a JavaScript object or value into a JSON string.

* **Syntax**:

```js
JSON.stringify(value[, replacer[, space]])
```

* **Example**:

```js
const user = {
    name: "Alice",
    age: 25
};
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25}'
```

### Optional Parameters:

* **replacer**: A function or array to select/filter properties.

* **space**: Adds indentation for pretty printing (e.g., 2 for 2-space indent).

```js
JSON.stringify(user, null, 2);
```

#### Example 

```js
const user = {
    name: "Alice",
    age: 25,
    password: "secret123",
    email: "alice@example.com"
};

// Replacer: remove the "password" field
const replacer = (key, value) => {
    if (key === "password") return ""; // omit password
    return value;
};
// Replacer as an array: include only "name" and "email"
// const replacer = ["name", "email"];

// Space: 2 spaces for pretty print
const jsonString = JSON.stringify(user, replacer, 7);

console.log(jsonString);
```

* Output

```json
{
       "name": "Alice",
       "age": 25,
       "password": "",
       "email": "alice@example.com"
}
```

## JSON.parse()

* **Purpose**: Converts a JSON string into a JavaScript object.

* Syntax:

```js
JSON.parse(text[, reviver])
```

* Example:

```js
const jsonString = '{"name":"Alice", "age":25}';
const user = JSON.parse(jsonString);
console.log(user.name); // Alice
```

### Optional Parameter:

* **reviver**: A function to transform the resulting object.

```js
const user = JSON.parse(jsonString, (key, value) => {
    return key === "age" ? value + 1 : value;
});
```

#### Example

```js
const jsonString = `{
    "name": "Alice",
    "age": 25,
    "isMember": "true"
  }`;

// Reviver function to:
// - Convert age to a string
// - Convert "isMember" string to a boolean
const parsed = JSON.parse(jsonString, (key, value) => {
    if (key === "age") return value.toString();
    if (key === "isMember") return value === "true";
    return value;
});

console.log(parsed);
/*
Output:
{
  name: 'Alice',
  age: '25',         // string now
  isMember: true     // converted to boolean
}
*/
```

## Notes:

* JSON must use double quotes (") for keys and string values.

* JSON.stringify() skips undefined, functions, and symbols.

* JSON.parse() throws an error if the string is invalid JSON.
