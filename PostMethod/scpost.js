ShareApp.controller("AddCtrl", ["$scope","$http", "$timeout","SharewebListService", "SharewebCommonFactoryService","GlobalConstants",
    function ($scope, $http, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {
        let listID = "72bf00f8-32ab-4f56-b7c7-f8f8c6e5131b";
        let urlPath = _spPageContextInfo.webAbsoluteUrl;
        $scope.update = function () {
                var postData = {
                __metadata: {'type': "SP.Data.BankListItem" },
                "Id":$scope.Id,
                "Title": $scope.Title,
                "LastName":$scope.LastName,
            }
            SharewebListService.AddListItemByListId(urlPath, listID, postData).then(function (data) {
                console.log('added succesfully');
            }, function (data) {
            alert(JSON.stringify(data));
            })
        }
    }
]);
