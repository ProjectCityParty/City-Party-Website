
'use strict';

var app = angular.module('router', []);

app.config(
		function($stateProvider, $urlRouterProvider) {
			
			// si url n'existe pas
		$urlRouterProvider.otherwise("login");
		/*
			// if error (404,..)
		$rootScope.$on('$stateChangeError', function(event) {
			  $state.go('login');
			});
		*/
		$stateProvider.state(
				'login', 
				{
					url : '/login',
					templateUrl : 'view/login.html',
					controller : 'login-controller',
                }
        );


		$stateProvider.state(
				'home', 
				{
					url : '/home',
					templateUrl : 'view/home.html',
					controller : 'home-controller',
                }
        );


		
});






