/**
 * Created by JFCS on 1/16/16.
 */
app.factory('gitService',['$http',function($http) {
    var data = {};
    var makecall = function() {
        $http.jsonp('https://api.github.com/users/' + 'Rothermal' + '/events?callback=JSON_CALLBACK').then(function (response) {
            console.log('inside factory response', response.data);
            data.results = response.data;
        });
    };
    return {
        makecall: makecall,
        data: data

    };

}]);