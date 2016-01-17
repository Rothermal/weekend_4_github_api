console.log('all wired up');

var app = angular.module('myApp',[]);

app.controller('MainController',['$scope','gitService',function($scope,gitService) {
    $scope.title = "My GitHub Api";
    console.log('inside controller',gitService);
    $scope.refresh = function(){
        gitService.makecall();
        console.log('clicked',gitService);
    };

    $scope.git = gitService;

}]);

// outsourcing my factory to another file <-- just because i can.
// attempted to add the service file into  my client folder and add it to grunt but could not get it to work out,
// so left it unminified in the assets folder.
//
//
//app.factory('gitService',['$http',function($http) {
//    var data = {};
//    var makecall = function() {
//        $http.jsonp('https://api.github.com/users/' + 'Rothermal' + '/events?callback=JSON_CALLBACK').then(function (response) {
//            console.log('inside factory response', response.data);
//            data.results = response.data;
//        });
//    };
//        return {
//            makecall: makecall,
//            data: data
//
//        };
//
//}]);


