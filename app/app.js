(function () {
	
	'use strict';
	
	require('angular');

	var app = angular.module('app', []);

	app.controller('MainController', function() {
		var vm = this;
	    vm.message = 'Angular is speaking'
	})

})();
