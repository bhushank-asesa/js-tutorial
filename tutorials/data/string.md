# String

> Strings in JavaScript! They are fundamental for working with text. In essence, a string is a sequence of characters enclosed in either single quotes ('...'), double quotes ("..."), or backticks (\...``).

Let's explore some key aspects and how you typically work with them:

## Creating Strings:

```js
let singleQuoted = "Hello";
let doubleQuoted = "World";
let backticks = `Hello, ${singleQuoted}!`; // String interpolation with backticks
```

Notice the backticks allow for something called string interpolation. You can embed expressions (like variables) directly within the string using ${expression}. This makes creating dynamic strings very convenient.

## Basic String Properties and Methods:

> JavaScript provides a rich set of built-in properties and methods to manipulate strings. Here are a few of the most common ones:

### length: This property returns the number of characters in the string.

```js
let greeting = "Hello";
console.log(greeting.length); // Output: 5
```

### Accessing Characters:

- You can access individual characters in a string using bracket notation (like an array), starting from index 0.

```js
let message = "JavaScript";
console.log(message[0]); // Output: "J"
console.log(message[4]); // Output: "S"
```

### concat():

- This method combines two or more strings.

```js
let str1 = "Hello";
let str2 = " ";
let str3 = "World";
let combined = str1.concat(str2, str3);
console.log(combined); // Output: "Hello World"
```

### slice(startIndex, endIndex):

- Extracts a section of a string and returns a new string. The endIndex is exclusive. If omitted, it extracts to the end of the string. Negative indices count from the end.

```js
let text = "Mozilla";
console.log(text.slice(2, 5)); // Output: "zil"
console.log(text.slice(2)); // Output: "zilla"
console.log(text.slice(-3)); // Output: "lla"
```

### substring(startIndex, endIndex):

- Similar to slice(), but it doesn't treat negative indices in the same way (they are treated as 0). It also swaps the arguments if startIndex is greater than endIndex.

```js
let text = "Mozilla";
console.log(text.substring(2, 5)); // Output: "zil"
console.log(text.substring(5, 2)); // Output: "zil" (arguments swapped)
```

### toUpperCase() and toLowerCase():

- These methods return a new string with all characters converted to uppercase or lowercase, respectively.

```js
let lowerCase = "hello";
let upperCase = "WORLD";
console.log(lowerCase.toUpperCase()); // Output: "HELLO"
console.log(upperCase.toLowerCase()); // Output: "world"
```

### indexOf(searchValue, fromIndex):

- Returns the index within the calling String object of the first occurrence of searchValue, 1 starting the search at fromIndex (default is 0). Returns -1 if not found.

```js
let sentence = "This is a test sentence.";
console.log(sentence.indexOf("is")); // Output: 2
console.log(sentence.indexOf("is", 3)); // Output: 5
console.log(sentence.indexOf("not found")); // Output: -1
```

### lastIndexOf(searchValue, fromIndex):

- Returns the index of the last occurrence of searchValue, searching backwards from fromIndex (default is string.length - 1). Returns -1 if not found.

```js
let sentence = "This is a test sentence.";
console.log(sentence.lastIndexOf("is")); // Output: 5
```

### startsWith(searchString, position):

- Returns true if the string begins with searchString, and false otherwise. position specifies where to begin the search (default is 0).

```js
let text = "Hello world";
console.log(text.startsWith("Hello")); // Output: true
console.log(text.startsWith("world", 6)); // Output: true
```

### endsWith(searchString, length):

- Returns true if the string ends with searchString, and false otherwise. length specifies how much of the string to search (default is the string's length).

```js
let text = "Hello world";
console.log(text.endsWith("world")); // Output: true
console.log(text.endsWith("Hello", 5)); // Output: true
```

### includes(searchString, position):

- Returns true if the string contains searchString, and false otherwise. position specifies where to begin the search (default is 0).

```js
let text = "Hello world";
console.log(text.includes("world")); // Output: true
console.log(text.includes("o", 7)); // Output: false
```

### replace(searchValue, newValue):

- Returns a new string with the first (or all if using a regular expression with the g flag) occurrence of searchValue replaced by newValue.

```js
let message = "Hello world";
let newMessage = message.replace("world", "JavaScript");
console.log(newMessage); // Output: "Hello JavaScript"
```

### trim():

- Returns a new string with whitespace removed from both ends of the original string.

```js
let spaced = " Hello ";
console.log(spaced.trim()); // Output: "Hello"
```

### split(separator): Splits the string into an array of substrings based on the specified separator.

```js
let names = "Alice,Bob,Charlie";
let nameArray = names.split(",");
console.log(nameArray); // Output: ["Alice", "Bob", "Charlie"]
```

## Immutability:

> It's crucial to understand that strings in JavaScript are immutable. This means that none of the string methods modify the original string. Instead, they always return a new string with the desired changes.

### Template Literals (Backticks):

- Backticks offer powerful features beyond simple string creation:

- **String Interpolation:** Embedding expressions directly within the string using ${expression}.

- **Multiline Strings:** You can create strings that span multiple lines without needing special characters like \n.

```js
let multiline = `This is a
multiline
string.`;
console.log(multiline);
```

## Working with Strings Effectively:

> Understanding these fundamental concepts and methods will allow you to effectively manipulate and process text data in your JavaScript applications. You'll often use these tools for tasks like:

1. Validating user input.
2. Formatting data for display.
3. Parsing and extracting information from text.
4. Building dynamic content.
