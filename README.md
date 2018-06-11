# mobileprovision-parse

Use JavaScript to parse the Provisioning Profiles used by xcode.

### Install

```
npm i mobileprovision-parse --save
```

### Use

```js
var parse = require('mobileprovision-parse')
parse('xxx.mobileprovision')
	.then(info => {
		console.log(info)
	})
```