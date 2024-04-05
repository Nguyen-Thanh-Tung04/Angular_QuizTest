spaApp.controller('dsSpCtrl', function ($scope, $http) {
    $url = "http://localhost:3004/san-pham";

    $scope.dsSanPham = [];

    // Call api lấy thông tin danh sách sản phẩm
    $http({
        method: "GET",
        url: $url
    }).then(function (response) {
        $scope.dsSanPham = response.data;
        console.log($scope.dsSanPham);
    })

});