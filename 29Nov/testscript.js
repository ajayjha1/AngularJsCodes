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

        $scope.update() = function(){
            var postData = {
                __metadata: {'type': "SP.Data.TestEmployeeDataListItem"},
                "FirstName": $scope.FirstName,
                "LastName": $scope.LastName,
                "Salary": $scope.Salary,
            }

            SharewebListService.AddListItemByListId(urlPath, listID, postData)
            .then(function( Data ){
                console.log('added succesfully')
                alert('Success')
                $scope.FirstName = ''
                $scope.LastName = ''
                $scope.Salary = ''
                window.location.replace("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Prashant/Ajay/Pages/GetAndPostPage/GetAndPostPage.aspx");
            },
            function(error){
                console.log(error);
                alert("error");
            }
            )
        }
    },
]);