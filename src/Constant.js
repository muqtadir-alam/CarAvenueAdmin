module.exports = {
	getAPI: function () {
		// return 'https://www.postman.com/collections/2c6f8e4378e989310f7a';
		return 'http://dev.infoware.xyz:8080/api';
	},
	getDefaultCurrrency: function () {
		return 'KWD';
	},
	getLanguageList: function () {
		var languages = [
			{
				id: 'en',
				name: 'English',
			},
			{
				id: 'ar',
				name: 'Arabic',
			},
		];
		return languages;
	},
};
