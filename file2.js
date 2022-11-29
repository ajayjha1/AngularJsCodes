ShareApp.controller("testCtr", [
    "$scope",
    "$http",
    "$timeout",
    "SharewebListService",
    "SharewebCommonFactoryService",
    "GlobalConstants",
    function (
        $scope,
        $http,
        $timeout,
        SharewebListService,
        SharewebCommonFactoryService,
        GlobalConstants
    ) {
        let listID = "0d1bfe93-ad2e-4fef-8358-9a246d15c0b9";
        let urlPath = _spPageContextInfo.webAbsoluteUrl;
        let listpath = "/getbyid('" + listID + "')/items?$select=Id,Title,Class";
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