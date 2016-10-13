(function(){

angular.module('formValidator', [])
.controller('signupController', signupController);

function signupController($scope){
	$scope.submitted = false; 
	$scope.signupForm = function() { 
		if ($scope.signup_form.$valid) { 
			alert("Form Submission Successfull.");
		} else { 
			$scope.signup_form.submitted = true;
		} 
	}
}

}())