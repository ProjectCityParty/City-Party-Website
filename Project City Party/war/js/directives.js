var app = angular.module('directives', []);

app.directive("accueil", function() {


	return {

		restrict : 'E',
		templateUrl : "accueil.html",
		controller : ['$scope', 'GAuth', '$state',  function ($scope, GAuth, $state) {
            $scope.doSingup = function() {
                    GAuth.login().then(function(){
                      //  console.log($rootScope);
                        alert('logged');
                    $state.go('home'); // action after the user have validated that
                                  // your application can access their Google account.
                    }, function() {
                        console.log('login fail');
                     alert('fail');

                        $state.go('login');
                    });
              };
            }
        ],
        controllerAs : 'home'
        
		};
})
