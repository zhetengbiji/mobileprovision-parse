var parse = require('../index')
parse('/Users/guoshengqiang/Documents/dev.mobileprovision')
	.then(info => {
		console.log('mobileprovision info: ', info)
	})