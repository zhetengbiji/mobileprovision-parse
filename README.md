# mobileprovision-parse
### install
```
npm i mobileprovision-parse --save
```
### use
```js
var parse = require('mobileprovision-parse')
parse('xxx.mobileprovision')
	.then(info => {
		console.log(info)
	})
```