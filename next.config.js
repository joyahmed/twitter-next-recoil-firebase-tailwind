const path = require('path');

module.exports = {
	reactStrictMode: true,
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		return config;
	},
	images: {
		domains: ['rb.gy', 'lh3.googleuserconent.com']
	}
};
