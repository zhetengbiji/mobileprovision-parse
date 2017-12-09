var parse = require('../index')
parse('/Users/guoshengqiang/Documents/项目资源/uileader/iOS/dev.mobileprovision')
	.then(info => {
		console.log('mobileprovision info: ', info)
	})