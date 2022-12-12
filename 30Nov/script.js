ShareApp.controller("testCtr", ["$scope","$http","$timeout","SharewebListService","SharewebCommonFactoryService","GlobalConstants",
    function ($scope,$http,$timeout,SharewebListService,SharewebCommonFactoryService,GlobalConstants) 
    {
        let listID = "854E5770-C0B7-4AAF-9CA2-5D70E0A2D702";
        let urlPath = _spPageContextInfo.webAbsoluteUrl;
        let listpath = "/getbyid('" + listID + "')/items?$select=Id,FirstName,LastName,Salary,Department/Title&$expand=Department";

        //Get Data

        $scope.getItems = function () {
            SharewebListService.getRequest(urlPath, listpath).then(
                function (data) {
                    $scope.items = data.d.results;
                    $scope.dept = data.d.results.Department;
                },
                function (data) {
                    alert(JSON.stringify(data));
                }
            );
        };
        $scope.getItems();

        //Post Data
        $scope.update = function () {
            var postData = {
            __metadata: {'type': "SP.Data.TestEmployeeDataListItem"},
            "FirstName": $scope.FirstName,
            "LastName":$scope.LastName,
            "Salary":$scope.Salary,
            // "DepartmentId": {"results": $scope.value}, // "DepartmentId": 7,
        }
        
        SharewebListService.AddListItemByListId(urlPath, listID, postData)
        .then(function (data) {
            console.log('added succesfully')
            alert('Success')
            $scope.FirstName = ''
            $scope.LastName = ''
            $scope.Salary = ''
            $scope.DepartmentId = ''
            window.location.replace("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Prashant/Ajay/Pages/GetAndPostPage/GetAndPostPage.aspx");
        },
            function(error){
                console.log(error);
                alert('error');
            });

        }

        // Update Existing Data (Patch)
        $scope.UpdateItem = function (item) {
            var postdata = {
                __metadata: { type: 'SP.Data.TestEmployeeDataListItem' },
                FirstName: item.FirstName,
                LastName: item.LastName,
                Salary: item.Salary,                
            }
            SharewebListService.UpdateListItemByListId(urlPath, listID, postdata, item.Id)
                .then(function (data) {
                    console.log(' update successfully')
                    alert('update successfully')
                },
                    function (error) {
                        console.log('error')
                    });
        }
    }]);
