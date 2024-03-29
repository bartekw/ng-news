'use strict';

app.controller('PostsCtrl', ['$scope', 'Post',
	function($scope, Post){
		$scope.posts = Post.all
		$scope.post = {url: 'http://', title: ''};

		$scope.submitPost = function() {
			Post.create($scope.post).then( function() {
				$scope.post = {url: 'http://', title: ''};	
			});
			//$scope.posts.push($scope.post);
			
		};

		$scope.deletePost = function(postId) {
			Post.delete(postId);
		};
	}]
);