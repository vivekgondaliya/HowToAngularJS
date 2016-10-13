var app = angular.module('flapperNews', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })

	.state('posts', {
  		url: '/posts/{id}',
  		templateUrl: '/posts.html',
  		controller: 'PostsCtrl'
	});
    $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', 'postFactory', function($scope, postFactory){
  $scope.posts = postFactory.posts;

  $scope.addPost = function(){

  	//prevent user from posting blank title
  	if(!$scope.title || $scope.title === '') {alert("Please enter Post title.");return;}

  	$scope.posts.push({
  		title: $scope.title, 
  		upvotes: 0,
  		link: $scope.link,
  		comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
  	});
  	$scope.title = '';
  	$scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
  	post.upvotes += 1; 
  };

}]);

app.controller('PostsCtrl', ['$scope','$stateParams','postFactory',function($scope, $stateParams, postFactory){
	$scope.post = postFactory.posts[$stateParams.id];

	$scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};
}]);

//lower camelCase for factory naming convention
app.factory('postFactory', [function(){
	
	//note that we could have simply exported the posts array directly, 
	//however, by exporting an object that contains the posts array,
	//we can add new objects and methods to our services in the future.
	//var posts = []; //Andrie's suggestion
	var o ={
		posts :[]
	};
	
	//below code style helps debugging code by Andrie Ndindabahizi
	o.add = function(stuff){
			posts.push(stuff);
	}
	o.remove = function (index){
		posts.slice(index);
	}

	return o;
}]);