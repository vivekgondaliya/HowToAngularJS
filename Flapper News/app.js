var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts){
  $scope.posts = posts.posts;

  $scope.addPost = function(){

  	//prevent user from posting blank title
  	if(!$scope.title || $scope.title === '') {alert("Please enter Post title.");return;}

  	$scope.posts.push({
  		title: $scope.title, 
  		upvotes: 0,
  		link: $scope.link
  	});
  	$scope.title = '';
  	$scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
  	post.upvotes += 1; 
  };

}]);

//lower camelCase for factory naming convention
app.factory('posts', [function(){
	
	//note that we could have simply exported the posts array directly, 
	//however, by exporting an object that contains the posts array,
	//we can add new objects and methods to our services in the future.
	var o ={
		posts :[]
	};

	return o;
}]);