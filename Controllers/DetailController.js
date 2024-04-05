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

window.testController = function ($scope, $http, $routeParams, $location) {
    var apiUrl = 'http://localhost:3004/questions';
    var apiUrlSubmit = 'http://localhost:3004/results';
    var id = $routeParams.id;

    $scope.loadQuestions = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.questions = $response.data.questions;
        })
    }
    $scope.loadQuestions();

    $scope.submitQuiz = function () {
        if (!$scope.validateQuiz()) {
            alert('Vui lòng chọn đáp án tất cả các câu hỏi!');
            return;
        }

        var score = $scope.calculateScore();

        $scope.saveResult(score);
    };

    $scope.saveResult = function (score) {
        var resultId = new Date().getTime().toString();
        var resultData = {
            id: resultId,
            userId: "1",
            score: score,
            quizId: id,
            percentageCorrect: (score / ($scope.questions.length)) * 100,
            timestamp: new Date().toISOString()
        };

        $http.post(apiUrlSubmit, resultData)
            .then(function (response) {
                $location.path("/result/" + resultId);
                console.log('Result saved:', response.data);
            })
            .catch(function (error) {
                console.error('Error saving result:', error);
            });
    }

    $scope.validateQuiz = function () {
        for (var i = 0; i < $scope.questions.length; i++) {
            if (!$scope.questions[i].selectedAnswer) {
                return false;
            }
        }
        return true;
    };

    $scope.calculateScore = function () {
        var score = 0;
        for (var i = 0; i < $scope.questions.length; i++) {
            if ($scope.questions[i].selectedAnswer.id === $scope.questions[i].AnswerId) {
                score += 1;
            }
        }
        return score;
    };
}
window.ResultController = function ($scope, $http, $routeParams) {
    var apiUrl = "http://localhost:3004/results";
    var id = $routeParams.id;
    $scope.getDetail_kq = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.result = $response.data;
        })
    }
    $scope.getDetail_kq();
}
