angular.module('madApp', ['ngAnimate'])
.controller('myC', function($scope) {
	$scope.myC = {};
	$scope.myC.jerk = "Gibbles";
	$scope.myC.dirty_task = "dog walking";
	$scope.myC.celebrity = "Oprah";	
	$scope.appState = 1;

	$scope.submit = function(){
		if (myForm.$invalid) {
			$scope.myC.message = "error!";	
			$scope.appState = 1;	
		}else{
			$scope.myC.message = "OK I guess";
			$scope.appState = 2;
		}	
	}

	$scope.reset = function(){
		$scope.myC = {};
		$scope.appState = 1;			
	}

});
