# Promise API

## Example

|         | P1        | P2       | P3        |
| ------- | --------- | -------- | --------- |
| success | 3 seconds | 1 second | 2 seconds |

## All

- All promises runs in parallel
- wait for all of them to finish them
- in above all success case it will give [val1, val2, val3] after three seconds means all settled with success
- if any one of them fail eg p2 in 1 seconds then it will immediately give error which is given by failed promise; not wait for other promises
- you can't cancel promise in middle
- p1 and p2 may settle but promise.all will give error
- **ALL OR NONE**

### success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.all([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
/*
0:"P1 Success"
1:"P2 Success"
2:"P3 Success"
*/
```

- after 3 seconds

### failed case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 error");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.all([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
  });
/*
P2 error
*/
```

- after one seconds

## All settled

- After 3 second it will give [val1, val2, val3] in success case
- if p2 fail in 1 seconds it will wait for others and it will give [val1, err2, val3] after 3 seconds
- safest way

### example

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 error");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.allSettled([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
  });
/*
0:{status: 'fulfilled', value: 'P1 Success'}
1:{status: 'rejected', reason: 'P2 error'}
2:{status: 'fulfilled', value: 'P3 Success'}
*/
```

- after 3 seconds

## race

- who will first settle irrespective of resolve or reject it will give error or value of that first settled promise
- if p2 success in 1 second it will give val2 in 1 second
- if p2 is fail in 1 second it will give err2 in 1 second
- keep in mind settled lingo or keyword not fulfilled

### First success case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.race([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
  });
/*
P2 Success
*/
```

after 1 seconds

### First failed case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 error");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.race([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
  });
/*
P2 error
*/
```

- after 1 second

## any

- wait for first success promise and give it's value
- if every fail then it will give aggregate error [array of three errors]
- always catch error before browser

### first success

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 error");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
const res = Promise.any([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
  });
/*
P3 Success
*/
```

- after 2 seconds

### Every fail

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 error");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 error");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 error");
  }, 2000);
});
const res = Promise.any([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.error(error);
    console.error(error.errors);
  });
/*
AggregateError: All promises were rejected
(3) ['P1 error', 'P2 error', 'P3 error']
*/
```

- after 3 seconds

## lingo

- settled -> got result
  - resolve or reject
  - success or failure
  - fulfilled or rejected

## aggregate error

- what is aggregate error
  - all promise error
