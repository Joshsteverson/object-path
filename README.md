
# ObjectPath 

### Simple JavaScript object navigation.

ObjectPath is a simple module that allows you to navigate to a given location within a Javascript object. Allows simpler access to deeply nested properties. Allows simple validation of existence of those same deeply nested properties.


# Installation 
```sh
$ npm install object-path
```
# Usage
```javascript
var objectPath = require('object-path');
var obj = {animal: 
    {
        type: 'Feline', 
        dailyNeeds: [
            {timeOfDay: 'morning', need: 'Breakfast'}, 
            {timeOfDay: 'evening', need: 'Dinner'}
        ]
    }
};
var result = objectPath(obj, 'animal/dailyNeeds/1/timeOfDay');
console.log(result); // 'evening'
```
