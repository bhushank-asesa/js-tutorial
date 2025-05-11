# Proxy object

> It's a fascinating and powerful feature introduced in ECMAScript 2015 (ES6) that allows you to create interceptors for fundamental operations on an object. Think of it as a wrapper around another object (the target), which lets you customize the behavior of interactions with that object.

> allows you to define custom logic that gets executed when you try to:

- Read a property: (get)
- Write a property: (set)
- Call a function: (apply)
- Construct an object with new: (construct)
- Delete a property: (deleteProperty)
- Check if a property exists: (has)
- Get all own property keys: (ownKeys)
- Get property descriptors: (getOwnPropertyDescriptor)
- Prevent extensions: (preventExtensions)
- Get the prototype: (getPrototypeOf)
- Set the prototype: (setPrototypeOf)

## How it Works:

- You create a Proxy object using the Proxy() constructor, which takes two arguments:

- **target:** The original object you want to proxy. This can be any object, including functions and arrays.
- **handler:** An object that defines the custom behavior for the intercepted operations. This handler object contains traps, which are functions that intercept specific operations on the target object.

```js
const target = {
  message: "Hello",
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`Getting property: ${prop}`);
    if (prop === "message") {
      return target[prop] + " World!";
    }
    return Reflect.get(target, prop, receiver); // Default behavior
  },
  set: function (target, prop, value, receiver) {
    console.log(`Setting property: ${prop} to ${value}`);
    if (prop === "admin") {
      console.log("Admin property cannot be set directly.");
      return false; // Indicate that the set operation failed
    }
    target[prop] = value;
    return true; // Indicate that the set operation succeeded
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); // Output: Getting property: message, Hello World!
proxy.newMessage = "Goodbye";
console.log(target.newMessage); // Output: Goodbye
proxy.admin = true; // Output: Setting property: admin to true, Admin property cannot be set directly.
console.log(target.admin); // Output: undefined (because the set operation returned false)
```

## Key Concepts:

- **Target:** The original object being proxied.
- **Handler:** An object containing traps that define the custom behavior for intercepted operations.
- **Traps:** Functions within the handler object that intercept specific operations (e.g., get, set, apply).
- **Reflect API:** The Reflect object provides static methods that have the same names as the proxy handler methods. These methods provide the default behavior for the corresponding operations and are often used within the traps to delegate to the original object's behavior. Using Reflect ensures proper behavior and error handling.
- **Receiver:** The object that the handler is attached to (usually the proxy itself). It's important for maintaining the correct this binding in methods.

## Use Cases for Proxy:

> The Proxy object opens up a wide range of possibilities for creating more flexible and powerful JavaScript code:

- **Validation:** You can intercept set operations to validate the values being assigned to properties.
- **Data Binding:** Proxies can be used to automatically update the user interface when the underlying data changes.
- **Change Tracking:** You can monitor when properties are accessed or modified, which is useful for logging or implementing undo/redo functionality.
- **Security:** You can restrict access to certain properties or methods.
- **Virtualization:** Proxies can be used to create virtual objects that only load data when it's actually accessed.
- **Debugging and Logging:** You can log property accesses or modifications for debugging purposes.
- **Abstraction:** You can hide the underlying implementation details of an object and provide a controlled interface.
- **Revocable Proxies:** You can create proxies that can be revoked, meaning they will no longer function. This can be useful for security or lifecycle management.

### Example: Basic Validation

```js
const user = {};

const validator = {
  set: function (obj, prop, value) {
    if ((prop === "age" && typeof value !== "number") || value < 0) {
      throw new TypeError("Age must be a non-negative number");
    }
    obj[prop] = value;
    return true;
  },
};

const proxiedUser = new Proxy(user, validator);

proxiedUser.name = "John";
proxiedUser.age = 30; // Works fine
// proxiedUser.age = "thirty"; // Throws a TypeError
// proxiedUser.age = -5; // Throws a TypeError

console.log(proxiedUser.age); // Output: 30
```

## Summary:

> The Proxy object is a powerful meta-programming tool in JavaScript that allows you to intercept and customize fundamental operations on objects. By defining handlers with specific traps, you can control how objects are interacted with, enabling you to implement various advanced patterns and functionalities like validation, data binding, and more. It provides a level of indirection and control over object behavior that wasn't easily achievable before its introduction.
