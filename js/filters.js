var _CONF = {
	'customerStatusCodes': {
		'0': '未处理',
		'1': '已接手',
		'2': '已成交'
	}
};

angular.module('HHR.filters', [])
.filter('selected', function() {
	return function(array) {
		return array.filter(function(item){
			return item.selected == true;
		});
	}
})

.filter('customerStatus', function() {

	return function(statusCode) {
		var label = _CONF.customerStatusCodes[statusCode];
		return label || '未处理';
	}
});