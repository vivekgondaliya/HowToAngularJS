var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
  	{title:'Post 1', upvotes: 5},
  	{title:'Post 2', upvotes: 9},
  	{title:'Post 3', upvotes: 2},
  	{title:'Post 4', upvotes: 7},
  	{title:'Post 5', upvotes: 3}
  ];

  $scope.addPost = function(){

  	//prevent user from posting blank title
  	if(!$scope.title || $scope.title === '') {alert("Please enter Post title.");return;}

  	$scope.posts.push({title:$scope.title, upvotes:0});
  	$scope.title = '';
  };

  $scope.incrementUpvotes = function(post){
  	post.upvotes += 1; 
  };

}]);