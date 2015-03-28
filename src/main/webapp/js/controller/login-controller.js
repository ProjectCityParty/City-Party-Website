var controller = angular.module('login-controller', []);

controller.controller('login-controller', ['$scope', 'GAuth', 'GApi', '$state',
    function clientList($scope, GAuth, GApi, $state) {
    	if(GApi.isLogin()){
    		$state.go('webapp.home');
    	}

        $scope.doLogin = function() {
            GAuth.login().then(function(){
            	$state.go('webapp.home');
            });
        };
    }
])