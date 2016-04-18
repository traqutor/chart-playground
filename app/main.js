require('angular')

(function () {
	'use strict';
	
	var app = angular.module('app', [])

	app.controller('MainController', function($scope) {
		$scope.message = 'Angular works!'
	})
})();

