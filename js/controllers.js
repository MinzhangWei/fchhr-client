angular.module('HHR.controllers', [])

.controller('rootCtrl', function ($scope, $state, $ionicHistory, $window) {

	$scope.goBack = function(defaultPage) {
		var viewHistory = $ionicHistory.viewHistory();
		$window.history.back();
		return;
		if (viewHistory.length > 1) {
			$window.history.back();
		} else {
			$state.go(defaultPage);
		}
	};
})

.controller('exploreCtrl', function ($scope, $http, $state) {
	$scope.banners = [
		{
			'img': 'images/banners/banner_1.png'
		}, {
			'img': 'images/banners/banner_2.jpg'
		}, {
			'img': 'images/banners/banner_3.jpg'
		}
	];

	$scope.cards = [
		{
			'title': '五象.香港湾E海城',
			'img': 'images/banners/banner_2.jpg',
		}, {
			'title': '荣恒.食尚海鲜世界',
			'img': 'images/banners/banner_3.jpg',
		}
	];

	$scope.goDetail = function (project) {
		$state.go('project', {
			data: project
		});
	};

	$scope.addCustomer = function (project) {
		$state.go('projectCustomer', {
			project: project
		});
	};
})

.controller('customerCtrl', function ($scope, $http, $state, $stateParams) {
	$scope.project = $stateParams.project;
	$scope.customers = [
		{
			'name': '杨致远',
			'phone': '138123456789',
			'projects': ['五象.香港湾E海城', '荣恒.食尚海鲜世界'],
			'status': '0',
		}, {
			'name': '李开复',
			'phone': '138123426189',
			'projects': ['荣恒.食尚海鲜世界'],
			'status': '1',
		}, {
			'name': '王健林',
			'phone': '138123426189',
			'projects': ['五象.香港湾E海城'],
			'status': '2',
		}
	];
})

.controller('updatesCtrl', function ($scope, $http, $state) {})

.controller('profileCtrl', function ($scope, $http, $state) {})

.controller('recommendCtrl', function ($scope, $http, $state, $ionicModal, $stateParams) {
	$scope.project = $stateParams.project;

	$scope.projects = [
		{
			"name": "五象.香港湾E海城"
		}, {
			"name": "荣恒.食尚海鲜世界"
		}
	];

	$ionicModal.fromTemplateUrl('templates/modal-project.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.addProject = function () {
		$scope.modal.show();
	};

	$scope.removeProject = function(project) {
		project.selected = false;
	};
})

.controller('invitationCtrl', function ($scope, $http, $state) {

})

.controller('rulesCtrl', function ($scope, $http, $state) {

})

.controller('commissionCtrl', function ($scope, $http, $state) {
	
})

.controller('settingCtrl', function ($scope, $http, $state) {
	
})

.controller('authenticationIDCtrl', function ($scope, $http, $state) {
	
})

.controller('inviterCtrl', function ($scope, $http, $state) {
	$scope.inviters = [
		{
			'phone': '13811111111',
			'realname': '张三丰'
		}, {
			'phone': '13811111111',
			'realname': '张三丰'
		}, {
			'phone': '13811111111',
			'realname': '张三丰'
		}, {
			'phone': '13811111111',
			'realname': '张三丰'
		}, {
			'phone': '13811111111',
			'realname': '张三丰'
		}
	];
})

.controller('projectCtrl', function ($scope, $http, $state, $stateParams) {
	$scope.project = {
		'title': '五象.香港湾E海城',
		'img': 'images/banners/banner_2.jpg',
	};

	$scope.goPage = function (router) {
		$state.go(router, {
			project: $scope.project
		});
	};
})
;