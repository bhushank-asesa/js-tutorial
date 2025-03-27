# Array Loops

## Difference between `slice()`and`splice()`?

## slice

### Key Differences Summarized:

#### Modification:

- slice(): Does not modify the original array.
- splice(): Modifies the original array.

#### Purpose:

- slice(): Extracts a portion of an array.
- splice(): Adds or removes elements from an array.

#### Return Value:

- slice(): Returns a new array with the extracted portion.
- splice(): Returns an array with the deleted elements.

## pop (stack) last element and return it use instead of `delete`(which return undefined delete fruits[0])

## Array.forEach:

- **Purpose**: Iterates over each element in an array and executes a provided callback function for each element.
- **Output**: Does not return a new array. It always returns undefined.
- **Use Cases**: When you need to perform an action on each element without creating a new array. Examples include:
  - Logging each element
  - Modifying the original array elements in-place (use with caution to avoid unintended side effects)
  - Triggering side effects based on element values

## Array.map:

- **Purpose**: Iterates over each element in an array and applies a provided callback function to each element.
- **Output**: Returns a new array containing the transformed elements based on the callback function's return values.
- **Use Cases**: When you need to create a new array with modified or transformed versions of the original elements.
- _Examples include_:
  - Doubling all numbers in an array
  - Converting strings to uppercase
  - Filtering elements based on a condition
  - Choosing the Right Method:

## Here's a simple guideline to help you decide:

- **Use Array.forEach:** If you only need to perform an action on each element without creating a new array.
- **Use Array.map:** If you need to create a new array with transformed elements based on a function applied to each element in the original array.
- Both uses callback function
