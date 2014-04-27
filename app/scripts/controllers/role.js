'use strict';

app.controller('RolesCtrl', ['$scope', 'Role', '$rootScope',
	function($scope, Role, $rootScope){
		$scope.roles = Role.all
		$scope.role = {role: '', createdOn: ''};

		//console.log($rootScope.signedIn);

		//if(!$rootScope.signedIn()) {
		//	$scope.$state.go('login');
		//}
	    $scope
	        .$on('$viewContentLoaded',
	            function(event, viewConfig){ 
	                console.log("View Load: the view is loaded, and DOM rendered!");
	                $scope.mode = $scope.$state.is('roles.add');	
	        });

	    $scope
	        .$on('$stateChangeSuccess',
	            function(event, toState, toParams, fromState, fromParams){ 
	                console.log("State Change: State change success!");
	                $scope.mode = $scope.$state.is('roles.add');	
	        });

		  $scope.count = 0;
		  $scope.$on('MyEvent', function() {
		    $scope.count++;
		    console.log("INVOKED");
		  });	

		

		console.log($scope.$state);
		//console.log($scope.$stateParams);

		$scope.submitRole = function() {
			Role.create($scope.role).then( function() {
				$scope.role = {role: '', createdOn: ''};	
			});
			//$scope.posts.push($scope.post);
			
		};

		$scope.addRole = function() {
			$scope.$state.go('roles.add');	
		}

		$scope.deleteRole = function(roleId) {
			Role.delete(roleId);
		};
	}
]);