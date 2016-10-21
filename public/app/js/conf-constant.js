angular.module('HHR.constant', [])
.constant('CONF', {

	'get': function (key, value) {
		return this[key][value];
	},

	'AUTH_ID': null,

	'HTTP_HOST': 'http://127.0.0.1:8085/',

	'ID_AUTHENTICATION_STATE': {
		'0': '未实名认证',
		'1': '等待审核',
		'2': '审核未通过',
		'3': '实名认证用户'
	}
});