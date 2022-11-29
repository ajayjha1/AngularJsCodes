ShareApp.controller("testCtr", ["$scope","$http","$timeout","SharewebListService","SharewebCommonFactoryService","GlobalConstants",
    function ($scope,$http,$timeout,SharewebListService,SharewebCommonFactoryService,lobalConstants) 
    {
        let listID = "854E5770-C0B7-4AAF-9CA2-5D70E0A2D702";
        let urlPath = _spPageContextInfo.webAbsoluteUrl;
        let listpath = "/getbyid('" + listID + "')/items?$select=Id,FirstName,LastName,Salary";
        $scope.getItems = function () {
            SharewebListService.getRequest(urlPath, listpath).then(
                function (data) {
                    $scope.items = data.d.results;
                },
                function (data) {
                    alert(JSON.stringify(data));
                }
            );
        };
        $scope.getItems();
    },
]);