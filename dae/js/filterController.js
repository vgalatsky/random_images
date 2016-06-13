var app = angular.module('clApp', []);

app.controller('MainCtrl', function ($scope) {

	$scope.choices = [{
		id: 'choice1'
	}];

	$scope.addNewChoice = function () {
		$(".icon-circle-plus").hide();
		var newItemNo = $scope.choices.length + 1;
		$scope.choices.push({
			'id': 'choice' + newItemNo
		});
	};

	$scope.removeChoice = function () {
		var lastItem = $scope.choices.length - 1;
		var last = 'add-'+(lastItem-1);
		$("#"+last).show();
		var lastItem = $scope.choices.length - 1;
		if ($scope.choices.length > 1) {
			$scope.choices.splice(lastItem);
		}
		else{
			alert('At least one filter required!');
		}
	};

});
