<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<!-- 关闭文本中电话号码自动识别 -->
		<meta name="format-detection" content="telephone=no" />

		<title></title>

		<link href="/app/lib/ionic/css/ionic.css" rel="stylesheet">
		
		<link rel="stylesheet/less" type="text/css" href="/app/css/style.less" />
		<script src="/app/lib/less/less.js" type="text/javascript"></script>

		<!-- ionic/angularjs js -->
		<script src="/app/lib/ionic/js/ionic.bundle.js"></script>
		<script src="/app/components/qrcode.min.js"></script>

		<!-- your app's js -->
		<script src="/app/js/app.js"></script>
		<script src="/app/js/controllers.js"></script>
		<script src="/app/js/routes.js"></script>
		<script src="/app/js/services.js"></script>
		<script src="/app/js/filters.js"></script>
		<script src="/app/js/conf-constant.js"></script>
	</head>

	<body ng-app="HHR" ng-controller="rootCtrl" ng-init="appInit({{ Auth::id() }})">
		<ion-nav-view name="root-view"></ion-nav-view>
	</body>
</html>

@foreach($templates as $view)
<script id="app/templates/{{ $view }}.html" type="text/ng-template">
	@include('app.templates.' . $view)
</script>
@endforeach