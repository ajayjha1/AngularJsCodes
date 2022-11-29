ShareApp.controller("testCtr", ["$scope", "$http", "$timeout", "SharewebListService", "SharewebCommonFactoryService", "GlobalConstants",

    function ($scope, $http, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {
    let listID = "C0628AE9-0D72-4BE8-A3E9-CAAB49F5047F";
    let urlPath = _spPageContextInfo.webAbsoluteUrl;
    let listpath = "/getbyid('" + listID + "')/items?$select=Id,Title,Address,SalaryPA,KindSalary,DateOfJoining,SmartDepartment/Title&$expand=SmartDepartment"
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