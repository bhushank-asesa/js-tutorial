# Web API

> Web APIs in JavaScript refer to built-in browser features or external services that JavaScript can interact with to perform various tasks. These are not part of the JavaScript language itself but are provided by the browser environment (like Chrome, Firefox, etc.).

## Common Types of Web APIs

|API|	Purpose|
|---|---|
DOM API|	Interact with HTML and modify page content (document.querySelector, etc.)
Fetch API|	Make HTTP requests to servers (fetch('url'))
Storage API	|Store data locally in the browser (localStorage, sessionStorage)
Geolocation API|	Get user's geographical location
Canvas API|	Draw graphics and animations
WebSockets API|	Open a persistent connection with a server for real-time data
Notification API|	Show system-level notifications
Media Devices API|	Access camera and microphone
Clipboard API|	Copy/paste text from/to clipboard
WebRTC|	Real-time peer-to-peer communication (e.g., video calls)

## Using the Fetch API

```js
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

## Example: Local Storage API

```js
// Set data
localStorage.setItem('username', 'JohnDoe');

// Get data
const name = localStorage.getItem('username');
console.log(name); // JohnDoe

// Remove data
localStorage.removeItem('username');
```

## Example: Geolocation API

```javascript
navigator.geolocation.getCurrentPosition(
    position => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    },
    error => {
        console.error('Error:', error.message);
    }
);
```
