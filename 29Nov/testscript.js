ShareApp.controller("testctr",[
    function($scope,SharewebListService){
        let listID = "";
        let urlPath = _spPageContextInfo.webAbsoluteUrl;
        let listPath = "/getbyid('" + listID +"')/items?$select=ID,FirstName,LastName";
        $scope.getItems() = function(){
            SharewebListService.getRequest(urlPath, listPath)
            .then(
                function(data){
                    $scope.items = data.d.results;
                },
                function(data){
                    alert(JSON.stringify(data));
                }
            );
        }

        $scope.getItems();
    },
]);