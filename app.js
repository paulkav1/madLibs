var myModule = angular.module('madLibs', []);

myModule.controller('MainCtrl', function($scope) {

	$scope.fname;

	$scope.setfname = function(story){
		$scope.fname = $("#fname").val();
	}
});