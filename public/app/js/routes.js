angular.module('HHR.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// define tab
		.state('home', {
			url: '/home',
			abstract: true,
			views: {
				'root-view': {
					templateUrl: 'app/templates/tabs.html'
				}
			}
		})

		// 首页
		.state('home.explore', {
			url: '/explore',
			views: {
				'view-explore': {
					controller: 'exploreCtrl',
					templateUrl: 'app/templates/explore.html',
				}
			}
		})

		.state('home.customer', {
			url: '/customer',
			views: {
				'view-customer': {
					controller: 'customerCtrl',
					templateUrl: 'app/templates/customer.html',
				}
			}
		})

		.state('projectCustomer', {
			url: '/project/customer',
			views: {
				'root-view': {
					controller: 'customerCtrl',
					templateUrl: 'app/templates/customer.html',
				}
			},
			params: {
				project: null
			}
		})

		.state('home.updates', {
			url: '/updates',
			views: {
				'view-updates': {
					controller: 'updatesCtrl',
					templateUrl: 'app/templates/updates.html',
				}
			}
		})

		.state('home.profile', {
			url: '/profile',
			views: {
				'view-profile': {
					controller: 'profileCtrl',
					templateUrl: 'app/templates/profile.html',
				}
			}
		})

		.state('recommend', {
			url: '/recommend',
			views: {
				'root-view': {
					controller: 'recommendCtrl',
					templateUrl: 'app/templates/recommend.html',
				}
			},
			params: {
				project: null
			}
		})

		.state('invitation', {
			url: '/invitation',
			views: {
				'root-view': {
					controller: 'invitationCtrl',
					templateUrl: 'app/templates/invitation.html'
				}
			}
		})

		.state('rules', {
			url: '/rules',
			views: {
				'root-view': {
					controller: 'rulesCtrl',
					templateUrl: 'app/templates/rules.html'
				}
			}
		})

		.state('commission', {
			url: '/commission',
			views: {
				'root-view': {
					controller: 'commissionCtrl',
					templateUrl: 'app/templates/commission.html'
				}
			}
		})

		.state('profileSetting', {
			url: '/profile/setting',
			views: {
				'root-view': {
					controller: 'settingCtrl',
					templateUrl: 'app/templates/setting.html'
				}
			}
		})

		.state('authenticationID', {
			url: '/profile/authenticationID',
			views: {
				'root-view': {
					controller: 'authenticationIDCtrl',
					templateUrl: 'app/templates/authentication-id.html'
				}
			}
		})

		.state('inviter', {
			url: '/inviter',
			views: {
				'root-view': {
					controller: 'inviterCtrl',
					templateUrl: 'app/templates/inviter.html'
				}
			}
		})

		.state('project', {
			url: '/project',
			views: {
				'root-view': {
					controller: 'projectCtrl',
					templateUrl: 'app/templates/project.html',
					params: {
						data: null
					}
				}
			}
		})
		;

	$urlRouterProvider.otherwise('/home/explore');
});