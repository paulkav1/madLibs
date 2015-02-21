angular.module('madApp', [])
.controller('myC', function($scope) {
	$scope.myC = {};
	$scope.myC.jerk = "Gibbles";
	$scope.myC.dirty_task = "dog walking";
	$scope.myC.celebrity = "Oprah";	

	$scope.appState = 1;	
	//the following code is not working
	if (myForm.$invalid) 
		$scope.myC.message = "error!";	
	else
		$scope.myC.message = "OK I guess";
});