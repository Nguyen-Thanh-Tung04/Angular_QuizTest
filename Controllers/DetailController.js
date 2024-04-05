window.detailController = function ($scope, $http, $routeParams) {
    var apiUrl = "http://localhost:3004/san-pham";
    var id = $routeParams.id;

    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.product = $response.data;
        })
    }
    $scope.getDetail();

}

window.testController = function ($scope, $http, $routeParams) {
    var apiUrl = "/main/quiz";
    var id = $routeParams.id;

    $scope.getTest = function () {
        $http.get(apiUrl + '/' + id + '.js')
            .then(function ($response) {
                $scope.product = $response.data;
            })
    }
    $scope.getTest();

}