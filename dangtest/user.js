window.login = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3004/acount";

    $scope.checkLogin = function () {
        var valid = true;
        if (!$scope.inputValue
            || !$scope.username
        ) {
            valid = false;
        }
        //kiểm tra trường pass
        if (!$scope.inputValue
            || !$scope.password //giá bỏ trống
        ) {
            valid = false;
        }
        if (valid) {
            $http.post(
                apiUrl
            ).then(function ($response) {
                if ($response.status == 201) {
                    $http.get('db.json').then(function (response) {
                        $scope.accounts = response.data.acount;
                        // alert(response.data.acount[0].username);

                        for (var i = 0; i < $scope.accounts.length; i++) {
                            var account = $scope.accounts[i];
                            if (account.username === $scope.username && account.password === $scope.password) {
                                alert('Login pass');
                                $location.path('home')
                                return;
                            }
                        }

                        alert('Login failed');
                    });
                }
            }, function (errors) {
                console.log(errors);
            })
        } else {
            
            alert(valid);
            alert('Dữ liệu không hợp lệ');
        }

    };

    $scope.register = function () {
        //khởi tạo biến valid để kiểm tra dữ liệu nhập vào
        //có hợp lệ hay không
        var valid = true;

        //kiểm tra các trường nhập vào
        //kiểm tra trường name
        if (!$scope.inputValue
            || !$scope.inputValue.username
            || $scope.inputValue.username.length < 3
        ) {
            valid = false;
        }

        //kiểm tra trường description
        if (!$scope.inputValue
            || !$scope.inputValue.email
        ) {
            valid = false;
        }
        //kiểm tra trường price
        if (!$scope.inputValue
            || !$scope.inputValue.password //giá bỏ trống
        ) {
            valid = false;
        }
        //nếu valid == true, tức là dữ liệu nhập vào hợp lệ
        if (valid) {
            //lấy dữ liệu từ form
            var newProduct = {
                ...$scope.inputValue
            }

            $http.post(
                apiUrl,
                newProduct
            ).then(function ($response) {
                if ($response.status == 201) {
                    $location.path('login');
                }
            }, function (errors) {
                console.log(errors);
            })
        } else {
            alert('Dữ liệu không hợp lệ');
        }
    }

}
