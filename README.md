# find-deep
Array.find for nested values

## USAGE

```js
   
   const findDeep = require('find-deep');

   let object = {a:[{b: {c: 'Hello world!' }}]};

   let result = findDeep(object, (value, key) => 
      key == 'c'
   );
   
   result // 'Hello world!'

```