angular.module('HHR.controllers', [])

.controller('rootCtrl', function ($scope, $state, $ionicPopup, CONF) {
	$scope.appInit = function (AUTH_ID) {
		CONF.AUTH_ID = AUTH_ID;
	}

	$scope.authClick = function (state, params) {
		if (CONF.AUTH_ID < 1) {
			HTTP.alert('请登录').then(function () {
				$state.go('login', {state: state, params: params});
			});
		} else {
			$state.go(state, params);
		}
	};
})

.controller('exploreCtrl', function ($scope, $http, $state, HTTP) {
	$scope.banners = [
		{
			'img': 'app/images/banners/banner_1.png'
		}, {
			'img': 'app/images/banners/banner_2.jpg'
		}, {
			'img': 'app/images/banners/banner_3.jpg'
		}
	];
	$scope.cards = [];

	HTTP.GET('api/v1/projects/hot', function (data) {
		$scope.cards = data.projects;
	});

	$scope.addCustomer = function (project) {
		$state.go('projectCustomer', {
			project: project
		});
	};
})

.controller('customerCtrl', function ($scope, $http, $state, $stateParams, HTTP) {
	$scope.project = $stateParams.project;
	$scope.customers = [];

	HTTP.GET('api/v1/my/customers', function (response) {
		$scope.customers = response.customers;
	});
})

.controller('updatesCtrl', function ($scope, $http, $state) {})

.controller('profileCtrl', function ($scope, $http, $state, HTTP, CONF) {
	$scope.user = {};
	$scope.ID_AUTHENTICATION_STATE = CONF.ID_AUTHENTICATION_STATE;

	HTTP.GET('api/v1/user/info', function (response) {
		$scope.user = response;
	});
})

.controller('recommendCtrl', function ($scope, $http, $state, $ionicModal, $stateParams, HTTP) {
	$scope.project = $stateParams.project;
	$scope.form = {};

	$scope.projects = [];
	HTTP.GET('api/v1/projects/all', function (data) {
		$scope.projects = data.projects;
	});

	$ionicModal.fromTemplateUrl('app/templates/modal-project.html', {
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

	$scope.submit = function () {
		var form = $scope.form;
		if (!form.name) {
			HTTP.alert('名字不能为空');
		}else if (!form.phone) {
			HTTP.alert('手机号码不能为空');
		} else if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(form.phone)) {
			HTTP.alert('手机号码格式不正确');
		} else if (!form.name) {
			HTTP.alert('名字不能为空');
		} else if (!form.gender) {
			HTTP.alert('性别不能为空');
		} else {
			form.projects = [];
			var selectedProjects = angular.forEach($scope.projects, function (item) {
				if (item.selected == true) {
					form.projects.push(item.id);
				}
			});

			if (form.projects.length == 0) {
				HTTP.alert('请选择意向项目');
			} else {
				form.projects = form.projects.join(',');
				HTTP.POST('api/v1/new/customer', form, function (response) {
					HTTP.alert('添加成功');
				}).then(function () {
					$state.go('home.explore');
				});
			}
		}
	};
})

.controller('invitationCtrl', function ($scope, $http, $state) {
	$scope.pageInit = function () {
		new QRCode("qrcode", {
			text: "dsjaqiwo12da2dasdansj21niasa",
			width: 180,
			height: 180,
			colorDark : "#333",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
	};
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

.controller('projectCtrl', function ($scope, $http, $state, HTTP) {
	$scope.project = {};
	HTTP.GET('api/v1/project/' + $state.params.projectId, function (response) {
		console.error(response);
		$scope.project = response;
	});

	$scope.goPage = function (router) {
		$state.go(router, {
			project: $scope.project
		});
	};
})
;