var app = angular.module('event-controller',[]);

app.controller('event-controller',
	['$scope', 'GAuth','$state' , 'GApi', function ( $scope, GAuth,$state, GApi ) {
		
	

		GApi.executeAuth('eventendpoint', 'listEvent').then( function(resp) {
        $scope.events = resp.items;
        console.log(resp)
		});
   

	
	$scope.event = {};
	$scope.addEvent = function(){


		GApi.executeAuth('eventendpoint', 'insertEvent', 
				{name: $scope.event.name,
				 place : $scope.event.place ,
				 price : $scope.event.price ,
				 desc : $scope.event.desc ,
				 date : $scope.event.date })
				 .then( function(resp) {
					 
					 console.log(resp);
					 GApi.executeAuth('eventendpoint', 'listEvent').then( function(resp) {
					        $scope.events = resp.items;
					        $scope.event = {}
					        $scope.events.$apply();
							});
					
				 }, 
				 function(err) {
					 console.log(err)
    });
		
	};

	
	
	
/*
	
	
	
	
	$scope.events = [{

	name : 'Gala ANEM',
	price : '25€',
	desc : 'lorem ipsum',
	date : '02/05/2015',
	place : 'nantes'
}
,
{
	name : 'Laser Game ANEM',
	price : '15€',
	description : 'lorem ipsum',
	date : '05/11/2014',
	place : 'nantes'

}
];*/

	}
         
        ]
) 