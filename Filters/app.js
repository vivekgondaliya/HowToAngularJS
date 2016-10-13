(function(){

angular.module('filtration', [])
.controller('FilterController', FilterController)
.filter('capitalize', capitalize);

function FilterController($scope){
	$scope.today = new Date();
}

function capitalize(){
	return function(input){
		return input[0].toUpperCase() + input.slice(1);
	};
}

}())