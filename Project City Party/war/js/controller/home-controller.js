'use strict' 

var app = angular.module('home-controller',[]);



app.controller('home-controller',
	['$rootScope', '$scope', 'GAuth','$state',  function ($rootScope, $scope, GAuth,$state ) {

		console.log($rootScope);

		if ( ! GAuth.checkAuth() ) {
			$state.go('login');
		}


		$scope.doLoGout = function() {

				GAuth.logout().then( function() 
				{
						$state.go('login');
				}
				);


		}

	}
         
        ]
)