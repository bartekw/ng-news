'use strict';

app.factory('Role',['$firebase', 'FIREBASE_URL', 'Auth',
  function ($firebase, FIREBASE_URL, Auth) {
    var ref = new Firebase(FIREBASE_URL + 'roles'); 
    var roles = $firebase(ref);
   
    var Role = {
      all: roles,
      create: function (role) {
        return roles.$add(role);
      },
      find: function (roleId) {
        return roles.$child(roleId);
      },
      delete: function (roleId) {
        return roles.$remove(roleId);
      },
      editMode: function() {
        return $scope.$state.is('roles.add');
      }
    };
   
    return Role;
  }
]);