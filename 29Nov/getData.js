var App = angular.module("myApp", []);

App.controller('myCtrl',function($scope){
    $HTTP({
        method: GET,
        url: RestAPIURL,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-Type": "application/json;odata=verbose"
        },
        
    }
    ).then(function Success(Data){
        items = data.d.results;
    })
})