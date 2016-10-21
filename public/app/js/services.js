angular.module('HHR.services', [])
.service('HTTP', [
	'$rootScope',
	'$http',
	'$state',
	'$ionicPopup',
	'$ionicLoading',
	'CONF',
function($rootScope, $http, $state, $ionicPopup, $ionicLoading, CONF) {
	function alertMsg(msg) {
		return $ionicPopup.alert({
			title: msg || '系统错误',
			template: ''
		});
	}

	function httpRequest(method, url, params, cb, ecb) {
		$rootScope.httpLoading = true;
		var request = $http({
			method: method,
			url: CONF.HTTP_HOST + url,
			headers: {
				'Content-Type': 'application/json;'
			},
			data: params
		}).then(function (response, status, config, headers) {
			$rootScope.httpLoading = false;

			var response = response.data;
			if (response.status == 200) {
				if (angular.isFunction(cb)) {
					cb(response.data);
				}
			} else {
				ecb(response.msg, response.msg_cont);
			}

		}, function (response) {
			$rootScope.httpLoading = false;
			$ionicLoading.hide();
		});

		return request;
	}
	
	return {
		GET: function (url, cb, ecb) {
			return httpRequest('GET', url, null, cb, ecb);
		},
		POST: function (url, params, cb, ecb) {
			return httpRequest('POST', url, params, cb, ecb);
		},
		alert: function (title, content) {
			return $ionicPopup.alert({
				title: title || '提示',
				template: content || ''
			});
		},
		validation: function (inputs, rules) {
			for (var i = 0, l = inputs.length; i < l; i++) {
				
			}
		}
	};
}]);