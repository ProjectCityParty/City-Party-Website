
'use strict';

var app = angular.module('cityparty', ['angular-google-gapi','ui.router','router','home-controller', 'login-controller']);


app.run(['GAuth', 'GApi', '$state', '$rootScope',
    function(GAuth, GApi, $state, $rootScope) {
/*
        var CLIENT;
        var BASE;
        if(window.location.hostname == 'localhost') {
                CLIENT = '1072024627812-kgv1uou2btdphtvb2l2bbh14n6u2n2mg.apps.googleusercontent.com';
                BASE = '//localhost:8080/_ah/api';
        } else {
            CLIENT = '1072024627812-oh4jdt3mo6rihojkt480tqfsja2706b4.apps.googleusercontent.com';
            BASE = 'https://mylazyclock.appspot.com/_ah/api';
        }

        GApi.load('myLazyClock','v1',BASE);
        GApi.load('calendar','v3');*/
       // GAuth.setClient(CLIENT);
       // GAuth.setScopes('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly');
        GAuth.checkAuth().then(
            function () {
                if($state.includes('login'))
                    $state.go('home');
            },
            function() {
                $state.go('login');
            }
        );

        $rootScope.logout = function() {
            GAuth.logout().then(
            function () {
                $state.go('login');
            });
        };
    }
]);