var app = angular.module('cityparty', 
    [  'ui.router',
    'angular-google-gapi',
    'router','home-controller', 'login-controller','event-controller']);

/*

app.config(function ($provide) {
  $provide.decorator('$uiViewScroll', function ($delegate) {
    return function (uiViewElement) {
      window.scrollTo(0, (top - 30));
      // Or some other custom behaviour...
    }; 
  });
});*/

app.run(['GAuth', 'GApi', '$state', '$rootScope',
    function(GAuth, GApi, $state, $rootScope) {

        var CLIENT;
        var BASE;
        if(window.location.hostname == '127.0.0.1') {
          var CLIENT = '578315505212-35r9pguposfimf82usctotv6t6gg6cim.apps.googleusercontent.com';
        //  BASE = '//localhost:8080/_ah/api';
            //          BASE = 'https://project-city-party.appspot.com/_ah/api';

        } else {
           CLIENT = '578315505212-35r9pguposfimf82usctotv6t6gg6cim.apps.googleusercontent.com';
          //  BASE = 'https://project-city-party.appspot.com/_ah/api';
          //   BASE = ' https://primeval-gizmo-87313.appspot.com/_ah/api';

         //  https://primeval-gizmo-87313.appspot.com/_ah/api
        }
        
        BASE = 'https://primeval-gizmo-87313.appspot.com/_ah/api';


      GApi.load('eventendpoint','v1',BASE);

       // GApi.load('myLazyClock','v1',BASE);
      //  GApi.load('calendar','v3');
        GAuth.setClient(CLIENT);
       // GAuth.setScopes('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly');
        GAuth.checkAuth().then(
            function () {
                if($state.includes('login'))
                    $state.go('webapp.home');
            },
            function() {
                $state.go('login');
            }
        );

     
    }
]);