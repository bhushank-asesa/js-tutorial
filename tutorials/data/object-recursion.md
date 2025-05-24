# object-recursion

```js
let userObj = {
  name: "Bhushan",
  address: {
    personal: {
      city: "Kolhapur",
      area: "Market Yard",
    },
    office: {
      city: "Pune",
      area: "Hinjewadi",
    },
  },
};
let finalObj = {};
function magic(object, parent) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      magic(object[key], `${parent}_${key}`);
    } else {
      finalObj[`${parent}_${key}`] = object[key];
    }
  }
}
magic(userObj, "user");
console.log(finalObj);
```

```bash
{
  user_name: 'Bhushan',
  user_address_personal_city: 'Kolhapur',
  user_address_personal_area: 'Market Yard',
  user_address_office_city: 'Pune',
  user_address_office_area: 'Hinjewadi'
}
```

- check for edge case, array as non object
