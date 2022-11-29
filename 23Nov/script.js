ShareApp.controller("testCtr", ["$scope", "$http", "$timeout", "SharewebListService", "SharewebCommonFactoryService", "GlobalConstants",

    function ($scope, $http, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {

    let listID = "AAEDF831-3120-45BF-9679-7AB223F3898B";

    let urlPath = _spPageContextInfo.webAbsoluteUrl;

    let listpath = "/getbyid('" + listID + "')/items?$select=Id,Title,FirstName"

    $scope.getItems =function(){    

        SharewebListService.getRequest(urlPath,listpath).then(function(data){

            $scope.items = data.d.results;

        },

        function(data){

            alert(JSON.stringify(data));

        }

        )}

    $scope.getItems();

}]);